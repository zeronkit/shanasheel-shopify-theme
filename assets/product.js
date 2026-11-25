/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Product and media behaviour: variant re-render, deferred media, ambient video, recommendations, pickup.
  Loaded on demand by theme.js.
*/

const { announce, parseHTML, strings = {}, routes = {}, afterAdd, readJSON, cartSectionIds } = window.Shanasheel || {};
const defineOnce = (name, constructor) => {
  if (!customElements.get(name)) customElements.define(name, constructor);
};

/* ---------- Product: variant changes re-render from the server ---------- */
class StProduct extends HTMLElement {
  connectedCallback() {
    this.addEventListener('change', (event) => {
      if (event.target.matches('[data-st-option]')) this.onOptionChange(event.target);
    });
    this.setupModels();
    this.addEventListener('click', (event) => {
      const zoom = event.target.closest('[data-st-zoom]');
      if (zoom) {
        this.lightboxOpener = zoom;
        this.openLightbox(zoom.closest('.st-gallery__frame'));
      }
    });
  }

  selectedValueIds() {
    const ids = [];
    this.querySelectorAll('[data-st-picker] fieldset, [data-st-picker] select').forEach((group) => {
      const chosen = group.tagName === 'SELECT' ? group.selectedOptions[0] : group.querySelector('input:checked');
      if (chosen?.dataset.optionValueId) ids.push(chosen.dataset.optionValueId);
    });
    return ids;
  }

  async onOptionChange(target) {
    const chosen = target.tagName === 'SELECT' ? target.selectedOptions[0] : target;
    const productUrl = chosen?.dataset.productUrl;
    const featured = Boolean(this.closest('.st-featured-product'));
    if (productUrl && productUrl !== this.dataset.url && !featured) {
      // Combined listing: the value belongs to a sibling product, so go there.
      window.location.href = `${productUrl}?option_values=${this.selectedValueIds().join(',')}`;
      return;
    }
    const focusedId = document.activeElement?.id;
    this.controller?.abort();
    this.controller = new AbortController();
    this.setAttribute('aria-busy', 'true');
    try {
      const url = `${productUrl || this.dataset.url}?option_values=${this.selectedValueIds().join(',')}&section_id=${this.dataset.sectionId}`;
      const html = await (await fetch(url, { signal: this.controller.signal })).text();
      const doc = parseHTML(html);
      this.querySelectorAll('[data-st-swap]').forEach((region) => {
        const fresh = doc.querySelector(`[data-st-swap="${region.dataset.stSwap}"]`);
        if (fresh) region.replaceWith(fresh);
      });
      const picker = this.querySelector('[data-variant-id]');
      if (picker) {
        if (!featured && picker.dataset.variantId) {
          const params = new URLSearchParams(window.location.search);
          params.delete('option_values');
          params.set('variant', picker.dataset.variantId);
          window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        }
        if (this.querySelector('[data-st-gallery][data-colour-filter="true"]')) this.filterGallery();
        else this.showMedia(picker.dataset.variantMedia);
      }
      if (focusedId) document.getElementById(focusedId)?.focus({ preventScroll: true });
    } catch (error) {
      if (error.name !== 'AbortError') announce(strings.error);
    } finally {
      this.removeAttribute('aria-busy');
    }
  }

  /* Shows only the selected colour's media, using the same rules as snippets/product-gallery.liquid. */
  filterGallery() {
    const checked = this.querySelector('[data-st-colour-option] input:checked');
    const colour = checked ? checked.value.trim().toLowerCase() : '';
    const frames = [...this.querySelectorAll('.st-gallery__frame[data-media-id]')];
    if (!frames.length) return;
    const byAlt = frames.filter((frame) => frame.dataset.altColour === colour);
    const byGroup = frames.filter((frame) => frame.dataset.group === colour);
    // Variant image groups first (language independent), alt text second, everything last.
    const visible = colour && byGroup.length ? byGroup : colour && byAlt.length ? byAlt : frames;
    frames.forEach((frame) => { frame.hidden = !visible.includes(frame); });
    const pad = (n) => String(n).padStart(2, '0');
    visible.forEach((frame, index) => {
      const count = frame.querySelector('[data-st-count]');
      if (count) count.textContent = `${pad(index + 1)} / ${pad(visible.length)}`;
      frame.querySelectorAll('img').forEach((img) => { if (index === 0) img.loading = 'eager'; });
    });
    const sheet = frames[0].parentElement;
    if (sheet.scrollWidth > sheet.clientWidth + 1) sheet.scrollTo({ left: 0, behavior: 'auto' });
  }

  /* Lightbox over the frames that are currently shown, with swipe, arrows and keys. */
  openLightbox(fromFrame) {
    const dialog = this.querySelector('.st-lightbox') || document.getElementById(`Lightbox-${this.dataset.sectionId}`);
    const track = dialog?.querySelector('[data-st-lightbox-track]');
    if (!dialog || !track) return;
    const frames = [...this.querySelectorAll('.st-gallery__frame[data-media-id]:not([hidden])')].filter((frame) => frame.querySelector('[data-st-zoom] img'));
    track.replaceChildren(...frames.map((frame) => {
      const slide = document.createElement('figure');
      slide.className = 'st-lightbox__slide';
      const img = frame.querySelector('[data-st-zoom] img').cloneNode();
      img.sizes = '100vw';
      img.loading = 'eager';
      img.removeAttribute('style');
      slide.append(img);
      return slide;
    }));
    const count = dialog.querySelector('[data-st-lightbox-count]');
    const current = () => Math.round(Math.abs(track.scrollLeft) / Math.max(track.clientWidth, 1));
    const update = () => { if (count) count.textContent = `${current() + 1} / ${frames.length}`; };
    const go = (index) => {
      const target = track.children[Math.max(0, Math.min(index, frames.length - 1))];
      target?.scrollIntoView({ inline: 'start', block: 'nearest', behavior: 'auto' });
      update();
    };
    if (!dialog.dataset.ready) {
      dialog.dataset.ready = 'true';
      track.addEventListener('scroll', () => { window.clearTimeout(this.lightboxTimer); this.lightboxTimer = window.setTimeout(update, 80); }, { passive: true });
      dialog.addEventListener('click', (event) => {
        const step = event.target.closest('[data-st-lightbox-step]');
        if (step) go(current() + Number(step.dataset.stLightboxStep));
      });
      dialog.addEventListener('close', () => this.lightboxOpener?.focus({ preventScroll: true }));
      dialog.addEventListener('keydown', (event) => {
        const rtl = document.dir === 'rtl';
        if (event.key === 'ArrowRight') go(current() + (rtl ? -1 : 1));
        if (event.key === 'ArrowLeft') go(current() + (rtl ? 1 : -1));
      });
    }
    dialog.showModal();
    go(Math.max(0, frames.indexOf(fromFrame)));
    track.focus({ preventScroll: true });
  }

  showMedia(mediaId) {
    if (!mediaId) return;
    const frame = this.querySelector(`[data-media-id="${mediaId}"]`);
    const sheet = frame?.parentElement;
    if (!frame || !sheet) return;
    this.querySelectorAll('.st-gallery__frame.is-current').forEach((el) => el.classList.remove('is-current'));
    frame.classList.add('is-current');
    const scrolls = sheet.scrollWidth > sheet.clientWidth + 1;
    if (scrolls) {
      const start = sheet.getBoundingClientRect();
      const box = frame.getBoundingClientRect();
      const delta = document.dir === 'rtl' ? box.right - start.right : box.left - start.left;
      sheet.scrollBy({ left: delta, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } else {
      sheet.prepend(frame);
    }
  }

  setupModels() {
    const json = this.querySelector('[data-st-models]');
    if (!json || !window.Shopify?.loadFeatures) return;
    window.Shopify.loadFeatures([{
      name: 'shopify-xr',
      version: '1.0',
      onLoad: (error) => {
        if (error || !window.ShopifyXR) return;
        window.ShopifyXR.addModels(JSON.parse(json.textContent));
        window.ShopifyXR.setupXRElements();
      }
    }]);
  }
}
defineOnce('st-product', StProduct);

/* ---------- Deferred media: video and 3D load on request ---------- */
class StDeferredMedia extends HTMLElement {
  connectedCallback() {
    this.querySelector('[data-st-load]')?.addEventListener('click', () => this.load(), { once: true });
  }

  load() {
    const template = this.querySelector('template');
    const poster = this.querySelector('[data-st-load]');
    if (!template || !poster) return null;
    const content = template.content.firstElementChild.cloneNode(true);
    poster.replaceWith(content);
    const media = content.matches('video, iframe, model-viewer') ? content : content.querySelector('video, iframe, model-viewer');
    if (media?.tagName === 'VIDEO') media.play().catch(() => {});
    media?.focus?.();
    return content;
  }
}
defineOnce('st-deferred-media', StDeferredMedia);

class StModel extends StDeferredMedia {
  load() {
    const content = super.load();
    if (!content || !window.Shopify?.loadFeatures) return content;
    window.Shopify.loadFeatures([{
      name: 'model-viewer-ui',
      version: '1.0',
      onLoad: (error) => {
        if (error || !window.Shopify.ModelViewerUI) return;
        const viewer = content.matches('model-viewer') ? content : content.querySelector('model-viewer');
        if (viewer) new window.Shopify.ModelViewerUI(viewer);
      }
    }]);
    return content;
  }
}
defineOnce('st-model', StModel);

/* ---------- Recommendations (related and complementary) ---------- */
class StRecommendations extends HTMLElement {
  connectedCallback() {
    if (!this.dataset.url || this.dataset.loaded) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      this.load();
    }, { rootMargin: '0px 0px 600px 0px' });
    observer.observe(this);
  }

  async load() {
    this.dataset.loaded = 'true';
    try {
      const doc = parseHTML(await (await fetch(this.dataset.url)).text());
      const selector = this.dataset.block ? `st-recommendations[data-block="${this.dataset.block}"]` : 'st-recommendations';
      const fresh = doc.querySelector(selector);
      if (fresh && fresh.innerHTML.trim()) this.innerHTML = fresh.innerHTML;
    } catch (error) {
      // Recommendations are optional, so a failed request leaves the page unchanged.
    }
  }
}
defineOnce('st-recommendations', StRecommendations);

/* ---------- Pickup availability ---------- */
class StPickup extends HTMLElement {
  async connectedCallback() {
    if (!this.dataset.url) return;
    try {
      const response = await fetch(this.dataset.url);
      if (!response.ok) return;
      const section = parseHTML(await response.text()).querySelector('.shopify-section');
      this.innerHTML = section ? section.innerHTML.trim() : '';
    } catch (error) {
      this.innerHTML = '';
    }
  }
}
defineOnce('st-pickup', StPickup);

/* ---------- Ambient hero video with pause control ---------- */
class StAmbientVideo extends HTMLElement {
  connectedCallback() {
    this.video = this.querySelector('video');
    this.button = this.querySelector('[data-st-pause]');
    if (!this.video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.video.removeAttribute('autoplay');
      this.video.pause();
    }
    this.sync();
    this.button?.addEventListener('click', () => {
      if (this.video.paused) this.video.play().catch(() => {}); else this.video.pause();
      this.sync();
    });
  }

  sync() { this.button?.setAttribute('aria-pressed', String(this.video.paused)); }
}
defineOnce('st-ambient-video', StAmbientVideo);

/* ---------- Product form ---------- */
class StProductForm extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('form');
    this.form?.addEventListener('submit', (event) => this.submit(event));
  }

  async submit(event) {
    event.preventDefault();
    const button = this.form.querySelector('[type="submit"]');
    const error = this.form.querySelector('[data-st-error]');
    if (!button || button.getAttribute('aria-busy') === 'true') return;
    button.setAttribute('aria-busy', 'true');
    error.hidden = true;
    const body = new FormData(this.form);
    body.append('sections', cartSectionIds().join(','));
    body.append('sections_url', window.location.pathname);
    try {
      const response = await fetch(`${routes.cartAdd}.js`, { method: 'POST', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body });
      afterAdd(await readJSON(response));
    } catch (err) {
      error.textContent = err.message;
      error.hidden = false;
    } finally {
      button.removeAttribute('aria-busy');
    }
  }
}
defineOnce('st-product-form', StProductForm);
