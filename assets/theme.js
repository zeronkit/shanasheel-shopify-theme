/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/* Signature: ZK-SHANASHEEL-EC94D65D2EC8 */
/*
  Small core of web components. No dependencies, no build step.
  Header, product, search, navigator and facets modules load only when needed.
*/

const config = JSON.parse(document.getElementById('st-config')?.textContent || '{}');
const strings = config.strings || {};
const routes = config.routes || {};
const modules = config.modules || {};

const announce = (message) => {
  const live = document.getElementById('st-live');
  if (!live || !message) return;
  live.textContent = '';
  window.setTimeout(() => { live.textContent = message; }, 50);
};

const parseHTML = (html) => new DOMParser().parseFromString(html, 'text/html');

const defineOnce = (name, constructor) => {
  if (!customElements.get(name)) customElements.define(name, constructor);
};

/* ---------- Dialogs: navigator, search, drawers, measuring guide ---------- */
let lastOpener = null;

const openDialog = (dialog, opener) => {
  if (!dialog || dialog.open) return;
  lastOpener = opener || document.activeElement;
  dialog.showModal();
  dialog.dispatchEvent(new CustomEvent('hm:open', { detail: { opener } }));
};

const reducedMotion = () => document.documentElement.dataset.motion === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Plays the closing animation (unless reduced motion is on), then closes the dialog.
const closeDialog = (dialog) => {
  if (!dialog?.open || dialog.classList.contains('is-closing')) return;
  if (reducedMotion()) {
    dialog.close();
    return;
  }
  dialog.classList.add('is-closing');
  const done = () => {
    dialog.classList.remove('is-closing');
    if (dialog.open) dialog.close();
  };
  dialog.addEventListener('animationend', done, { once: true });
  window.setTimeout(done, 450);
};

// Esc fires "cancel": run the same animated close.
document.addEventListener('cancel', (event) => {
  if (event.target instanceof HTMLDialogElement) {
    event.preventDefault();
    closeDialog(event.target);
  }
}, true);

document.addEventListener('click', (event) => {
  const opener = event.target.closest('[data-st-open]');
  if (opener) {
    const dialog = document.getElementById(opener.dataset.stOpen);
    if (dialog) {
      event.preventDefault();
      // The navigator script is imported on first use, then the dialog opens.
      const ready = dialog.querySelector('st-navigator') && modules.navigator ? import(modules.navigator).catch(() => {}) : Promise.resolve();
      ready.then(() => openDialog(dialog, opener));
    }
    return;
  }
  const closer = event.target.closest('[data-st-close]');
  if (closer) {
    closeDialog(closer.closest('dialog'));
    return;
  }
  // A click on the backdrop lands on the dialog element itself, outside its box.
  if (event.target instanceof HTMLDialogElement && event.target.open) {
    const rect = event.target.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) closeDialog(event.target);
  }
});

document.addEventListener('close', (event) => {
  if (event.target instanceof HTMLDialogElement && lastOpener && document.contains(lastOpener)) {
    lastOpener.focus({ preventScroll: true });
  }
}, true);

/* ---------- Quantity stepper ---------- */
class StQuantity extends HTMLElement {
  connectedCallback() {
    this.input = this.querySelector('input');
    this.addEventListener('click', (event) => {
      const button = event.target.closest('[data-step]');
      if (!button) return;
      const min = Number(this.input.min || 0);
      const next = Math.max(min, Number(this.input.value || 0) + Number(button.dataset.step));
      if (next === Number(this.input.value)) return;
      this.input.value = next;
      this.input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
}
defineOnce('st-quantity', StQuantity);

/* ---------- Cart ---------- */
const cartSectionIds = () => {
  const ids = new Set();
  document.querySelectorAll('st-cart[data-section-id]').forEach((el) => ids.add(el.dataset.sectionId));
  if (config.cartType === 'drawer' && document.getElementById('CartDrawer')) ids.add('cart-drawer');
  return [...ids];
};

const renderCartSections = (sections) => {
  if (!sections) return;
  let count = null;
  let label = null;
  document.querySelectorAll('st-cart[data-section-id]').forEach((cart) => {
    const html = sections[cart.dataset.sectionId];
    if (!html) return;
    const fresh = parseHTML(html).querySelector('[data-st-cart-content]');
    const current = cart.querySelector('[data-st-cart-content]');
    if (fresh && current) {
      current.replaceWith(fresh);
      count = fresh.dataset.count;
      label = fresh.dataset.countLabel;
    }
  });
  if (count !== null) {
    document.querySelectorAll('[data-st-cart-count]').forEach((el) => {
      el.textContent = count;
      el.hidden = Number(count) === 0;
    });
    document.querySelectorAll('[data-st-cart-label]').forEach((el) => { el.textContent = label; });
  }
};

const readJSON = async (response) => {
  const data = await response.json();
  if (!response.ok || data.status) throw new Error(data.description || data.message || strings.error);
  return data;
};

const postJSON = async (url, body) => readJSON(await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(body)
}));

const afterAdd = (data) => {
  const drawer = document.getElementById('CartDrawer');
  if (config.cartType !== 'drawer' || !drawer) {
    window.location.href = routes.cart;
    return;
  }
  renderCartSections(data.sections);
  openDialog(drawer);
  announce(strings.added);
};

/* Adds several items in one request (exposed on window.Shanasheel). */
const addItems = async (items) => {
  const data = await postJSON(`${routes.cartAdd}.js`, { items, sections: cartSectionIds().join(',') });
  afterAdd(data);
  return data;
};

class StCart extends HTMLElement {
  connectedCallback() {
    this.addEventListener('change', (event) => {
      const input = event.target.closest('input[data-line]');
      if (input) {
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => this.update(input.dataset.line, Number(input.value)), 300);
      }
      if (event.target.matches('[data-st-note]')) {
        postJSON(`${routes.cart}/update.js`, { note: event.target.value }).catch(() => {});
      }
    });
    this.addEventListener('click', (event) => {
      const remove = event.target.closest('[data-st-remove]');
      if (remove) this.update(remove.dataset.stRemove, 0);
    });
  }

  async update(line, quantity) {
    const row = this.querySelector(`.st-line[data-line="${line}"]`);
    row?.setAttribute('aria-busy', 'true');
    try {
      const data = await postJSON(`${routes.cartChange}.js`, { line: Number(line), quantity, sections: cartSectionIds().join(',') });
      renderCartSections(data.sections);
      const target = this.querySelector(`input[data-line="${line}"]`) || this.querySelector('input[data-line]') || this.querySelector('[data-st-cart-content] a');
      target?.focus({ preventScroll: true });
    } catch (error) {
      row?.removeAttribute('aria-busy');
      const message = row?.querySelector('[data-st-line-error]');
      if (message) {
        message.textContent = error.message;
        message.hidden = false;
      }
    }
  }
}
defineOnce('st-cart', StCart);

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-st-cart-toggle]');
  const drawer = document.getElementById('CartDrawer');
  if (toggle && drawer && config.cartType === 'drawer') {
    event.preventDefault();
    openDialog(drawer, toggle);
  }
});



/* ---------- Search dialog ---------- */
document.getElementById('SearchDialog')?.addEventListener('hm:open', (event) => {
  if (modules.search) import(modules.search);
  event.currentTarget.querySelector('input[type="search"]')?.focus();
});

/* ---------- Lazy modules (import on need) ---------- */
/* Card hover images are lazy. A card that is about to be hovered or focused loads its second image now,
   so it is ready when it fades in (cards in side-scrolling shelves are never "near the screen" before). */
const warmCard = (event) => {
  const card = event.target.closest?.('[data-st-card]');
  const second = card?.querySelector('.st-card__img--alt[loading="lazy"]');
  if (second) second.loading = 'eager';
};
document.addEventListener('pointerover', warmCard, { passive: true });
document.addEventListener('focusin', warmCard);
document.addEventListener('touchstart', warmCard, { passive: true });

window.Shanasheel = { addItems, announce, parseHTML, strings, routes, afterAdd, readJSON, cartSectionIds, closeDialog };

const loadModules = () => {
  if (modules.product && document.querySelector('st-product, st-product-form, st-recommendations, st-pickup, st-deferred-media, st-model, st-ambient-video')) import(modules.product);
  if (modules.header && document.querySelector('st-header, st-announce')) import(modules.header);
  if (modules.motion && !reducedMotion()) import(modules.motion);
  if (modules.cards && document.querySelector('[data-st-card-swatch]')) import(modules.cards);
  if (modules.slider && document.querySelector('st-slider')) import(modules.slider);
  if (modules.search && document.querySelector('main [data-st-recent], [data-st-search-collections]')) import(modules.search);
  if (modules.facets && document.querySelector('st-facets')) import(modules.facets);
  if (modules.search && document.activeElement?.closest?.('st-predictive-search')) import(modules.search);
};
loadModules();
document.addEventListener('shopify:section:load', loadModules);
document.addEventListener('pointerover', (event) => {
  if (modules.navigator && event.target.closest?.('[data-st-open="Navigator"]')) import(modules.navigator);
}, { passive: true });
document.addEventListener('focusin', (event) => {
  if (modules.navigator && event.target.closest?.('[data-st-open="Navigator"]')) import(modules.navigator);
  if (modules.search && event.target.closest?.('st-predictive-search')) import(modules.search);
});
