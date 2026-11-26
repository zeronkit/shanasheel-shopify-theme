/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  The navigator menu. Imported on first interaction with a menu trigger.
  Two styles: "doorways" (tabs over a row of arched collection doors) and "list" (index list beside tiles).
*/

/* ---------- Doorways: one tab per top level item, the chosen tab fills the panel ---------- */
const initDoorways = (nav) => {
  const tabs = () => [...nav.querySelectorAll('[role="tab"]')];

  const select = (id, focusTab) => {
    tabs().forEach((tab) => {
      const active = tab.getAttribute('aria-controls') === id;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
      if (active && focusTab) tab.focus();
    });
  };

  // The panel hangs from the bottom edge of the header, wherever the header is at that moment.
  const place = () => {
    const header = document.querySelector('st-header');
    const bottom = header ? Math.max(0, Math.round(header.getBoundingClientRect().bottom)) : 0;
    nav.dialog.style.setProperty('--sh-doors-top', `${bottom}px`);
  };

  nav.addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) select(tab.getAttribute('aria-controls'), false);
  });

  nav.addEventListener('keydown', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (!tab) return;
    const list = tabs();
    const index = list.indexOf(tab);
    const rtl = getComputedStyle(nav).direction === 'rtl';
    let next = null;
    if (event.key === 'ArrowRight') next = index + (rtl ? -1 : 1);
    if (event.key === 'ArrowLeft') next = index + (rtl ? 1 : -1);
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = list.length - 1;
    if (next === null) return;
    event.preventDefault();
    const target = list[(next + list.length) % list.length];
    select(target.getAttribute('aria-controls'), true);
  });

  nav.dialog?.addEventListener('hm:open', (event) => {
    place();
    const wanted = event.detail?.opener?.dataset.stPanel;
    const first = tabs()[0];
    const id = wanted && document.getElementById(wanted) ? wanted : first?.getAttribute('aria-controls');
    if (id) select(id, false);
    // Opened from a header link: focus goes to the first door. Opened from the menu button: to the tab.
    const panel = id && document.getElementById(id);
    if (wanted && panel) panel.querySelector('a')?.focus({ preventScroll: true });
    else (nav.querySelector('[role="tab"][aria-selected="true"]') || nav.querySelector('a, button'))?.focus({ preventScroll: true });
  });
  window.addEventListener('resize', () => { if (nav.dialog?.open) place(); }, { passive: true });
};

/* ---------- List: columns that open level by level ---------- */
class StNavigator extends HTMLElement {
  connectedCallback() {
    this.dialog = this.closest('dialog');
    if (this.dataset.style === 'doorways') {
      initDoorways(this);
      return;
    }
    this.addEventListener('click', (event) => {
      const trigger = event.target.closest('.st-nav__root [aria-controls]');
      if (trigger) this.show(trigger.getAttribute('aria-controls'), true);
      if (event.target.closest('[data-st-back]')) this.back();
    });
    this.dialog?.addEventListener('hm:open', (event) => {
      const panel = event.detail?.opener?.dataset.stPanel;
      const wide = window.matchMedia('(min-width: 750px)').matches;
      const first = this.querySelector('.st-nav__root [aria-controls]');
      if (panel) this.show(panel, true);
      else if (wide && first) this.show(first.getAttribute('aria-controls'), false);
      else this.back(false);
    });
  }

  show(id, moveFocus) {
    this.querySelectorAll('.st-nav__root [aria-controls]').forEach((button) => {
      const active = button.getAttribute('aria-controls') === id;
      button.setAttribute('aria-expanded', String(active));
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
    const panel = document.getElementById(id);
    if (moveFocus && panel) {
      const narrow = window.matchMedia('(max-width: 749px)').matches;
      (narrow ? panel.querySelector('[data-st-back]') : panel.querySelector('a'))?.focus({ preventScroll: true });
    }
  }

  back(moveFocus = true) {
    const open = this.querySelector('.st-nav__root [aria-expanded="true"]');
    this.querySelectorAll('.st-nav__panel').forEach((panel) => { panel.hidden = true; });
    this.querySelectorAll('.st-nav__root [aria-controls]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
    if (moveFocus) open?.focus();
  }
}
if (!customElements.get('st-navigator')) customElements.define('st-navigator', StNavigator);
