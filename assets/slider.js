/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Scroll rows with previous and next buttons and a progress line. Touch, trackpad and keyboard
  scrolling keep working because the row is a normal scroll container with scroll snap.
*/

class StSlider extends HTMLElement {
  connectedCallback() {
    this.track = this.querySelector('[data-st-slider-track]');
    this.controls = this.querySelector('[data-st-slider-controls]');
    this.prev = this.querySelector('[data-st-slider-prev]');
    this.next = this.querySelector('[data-st-slider-next]');
    this.progress = this.querySelector('[data-st-slider-progress]');
    if (!this.track) return;
    this.prev?.addEventListener('click', () => this.step(-1));
    this.next?.addEventListener('click', () => this.step(1));
    this.track.addEventListener('scroll', () => this.update(), { passive: true });
    new ResizeObserver(() => this.update()).observe(this.track);
    this.update();
  }

  step(direction) {
    const rtl = getComputedStyle(this.track).direction === 'rtl';
    const amount = this.track.clientWidth * 0.85 * direction * (rtl ? -1 : 1);
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && document.documentElement.dataset.motion !== 'off';
    this.track.scrollBy({ left: amount, behavior: smooth ? 'smooth' : 'auto' });
  }

  update() {
    const max = this.track.scrollWidth - this.track.clientWidth;
    const position = Math.abs(this.track.scrollLeft);
    const overflows = max > 4;
    if (this.controls) this.controls.hidden = !overflows;
    if (this.progress) {
      this.progress.hidden = !overflows;
      const bar = this.progress.firstElementChild;
      if (bar) bar.style.inlineSize = `${Math.min(100, ((position + this.track.clientWidth) / this.track.scrollWidth) * 100)}%`;
    }
    if (this.prev) this.prev.disabled = position <= 2;
    if (this.next) this.next.disabled = position >= max - 2;
  }
}

if (!customElements.get('st-slider')) customElements.define('st-slider', StSlider);
