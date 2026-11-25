/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Header behaviour (sticky on scroll up, transparent overlay state, height variable)
  and the announcement bar (fade rotation, marquee pause, dismiss). Loaded on demand by theme.js.
*/

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

class StHeader extends HTMLElement {
  connectedCallback() {
    this.section = this.closest('.shopify-section') || this;
    this.mode = this.dataset.sticky;
    this.lastY = window.scrollY;
    this.section.classList.add(`st-sticky-${this.mode}`);
    const setHeight = () => {
      document.documentElement.style.setProperty('--st-header-height', `${this.offsetHeight}px`);
    };
    setHeight();
    new ResizeObserver(setHeight).observe(this);
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.onScroll();
  }

  onScroll() {
    const y = window.scrollY;
    this.classList.toggle('is-scrolled', y > 8);
    if (this.mode === 'up') {
      const goingDown = y > this.lastY && y > this.offsetHeight * 2;
      // Keep the header visible while a menu or search dialog is open.
      const dialogOpen = Boolean(document.querySelector('dialog[open]'));
      this.section.classList.toggle('is-hidden', goingDown && !dialogOpen && !this.contains(document.activeElement));
    }
    this.lastY = y;
  }
}
if (!customElements.get('st-header')) customElements.define('st-header', StHeader);

class StAnnounce extends HTMLElement {
  connectedCallback() {
    const key = `st-announce-${this.dataset.id}`;
    try {
      if (window.sessionStorage.getItem(key) === 'closed') {
        this.hidden = true;
        return;
      }
    } catch (error) {
      // Storage can be blocked, the bar then simply shows.
    }
    this.items = [...this.querySelectorAll('.st-announce__list > .st-announce__item')];
    this.index = 0;
    this.paused = reduced();
    this.pauseButton = this.querySelector('[data-st-announce-pause]');
    this.querySelector('[data-st-announce-close]')?.addEventListener('click', () => {
      this.hidden = true;
      try { window.sessionStorage.setItem(key, 'closed'); } catch (error) { /* ignore */ }
    });
    this.pauseButton?.addEventListener('click', () => this.setPaused(!this.paused, true));
    if (this.hasAttribute('data-hover-pause')) {
      this.addEventListener('pointerenter', () => this.classList.add('is-hovered'));
      this.addEventListener('pointerleave', () => this.classList.remove('is-hovered'));
    }
    this.addEventListener('focusin', () => this.classList.add('is-hovered'));
    this.addEventListener('focusout', () => this.classList.remove('is-hovered'));
    if (this.dataset.mode === 'fade' && this.items.length > 1) {
      this.items.forEach((item, i) => { item.classList.toggle('is-active', i === 0); });
      this.classList.add('is-ready');
      this.timer = window.setInterval(() => this.next(), Number(this.dataset.speed || 5) * 1000);
    }
    this.setPaused(this.paused, false);
  }

  disconnectedCallback() { window.clearInterval(this.timer); }

  setPaused(paused, byUser) {
    this.paused = paused;
    this.classList.toggle('is-paused', paused);
    this.pauseButton?.setAttribute('aria-pressed', String(paused));
    if (byUser) this.userPaused = paused;
  }

  next() {
    if (this.paused || this.classList.contains('is-hovered')) return;
    this.items[this.index].classList.remove('is-active');
    this.index = (this.index + 1) % this.items.length;
    this.items[this.index].classList.add('is-active');
  }
}
if (!customElements.get('st-announce')) customElements.define('st-announce', StAnnounce);
