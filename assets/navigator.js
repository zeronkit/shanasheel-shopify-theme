/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  The navigator menu. Imported on first interaction with a menu trigger.
*/

/* ---------- Navigator: columns that open level by level ---------- */
class StNavigator extends HTMLElement {
  connectedCallback() {
    this.dialog = this.closest('dialog');
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
