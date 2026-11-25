/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Filtering, sorting and pagination for collection and search pages without full reloads.
  Every control is a normal link or form field, so the page also works without this file.
*/

const { parseHTML, announce, routes = {} } = window.Shanasheel || {};

class StFacets extends HTMLElement {
  connectedCallback() {
    this.sectionId = this.dataset.sectionId;
    this.addEventListener('change', (event) => {
      if (event.target.matches('[data-st-per-page]')) {
        this.setPerPage(event.target.value);
        return;
      }
      if (!event.target.matches('[data-st-facet-input]')) return;
      window.clearTimeout(this.timer);
      const delay = event.target.type === 'number' ? 600 : 150;
      this.timer = window.setTimeout(() => this.load(this.formUrl()), delay);
    });
    this.addEventListener('submit', (event) => {
      if (!event.target.matches('[data-st-facets-form]')) return;
      event.preventDefault();
      event.target.closest('dialog')?.close();
      this.load(this.formUrl());
    });
    this.addEventListener('click', (event) => {
      const more = event.target.closest('a[data-st-more]');
      if (more && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        this.loadMore(more.href, true);
        return;
      }
      const link = event.target.closest('a[data-st-facet-link]');
      if (!link || event.metaKey || event.ctrlKey) return;
      event.preventDefault();
      const fromPagination = Boolean(link.closest('.st-pagination'));
      this.load(link.href, fromPagination);
    });
    window.addEventListener('popstate', () => this.load(window.location.href, false, false));
    this.watchInfinite();
  }

  formUrl() {
    const form = this.querySelector('[data-st-facets-form]');
    const params = new URLSearchParams();
    if (form) {
      for (const [key, value] of new FormData(form)) {
        if (value !== '') params.append(key, value);
      }
    }
    return `${window.location.pathname}?${params}`;
  }

  async load(href, scrollUp = false, push = true) {
    const url = new URL(href, window.location.origin);
    const fetchUrl = new URL(url);
    fetchUrl.searchParams.set('section_id', this.sectionId);
    this.controller?.abort();
    this.controller = new AbortController();
    this.setAttribute('aria-busy', 'true');
    try {
      const response = await fetch(fetchUrl, { signal: this.controller.signal });
      const doc = parseHTML(await response.text());
      const fresh = doc.querySelector('st-facets');
      if (!fresh) throw new Error('No facets in response');
      this.swap(fresh);
      if (push) window.history.pushState({}, '', `${url.pathname}${url.search}`);
      announce?.(this.querySelector('.st-toolbar__count')?.textContent?.trim());
      if (scrollUp) this.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } catch (error) {
      if (error.name !== 'AbortError') window.location.href = url.href;
    } finally {
      this.removeAttribute('aria-busy');
    }
  }

  /* Appends the next page to the grid. Focus moves to the first new product after a button press. */
  async loadMore(href, moveFocus) {
    if (this.loadingMore) return;
    this.loadingMore = true;
    const block = this.querySelector('[data-st-load-more]');
    const button = block?.querySelector('[data-st-more]');
    button?.setAttribute('aria-busy', 'true');
    try {
      const url = new URL(href, window.location.origin);
      const fetchUrl = new URL(url);
      fetchUrl.searchParams.set('section_id', this.sectionId);
      const doc = parseHTML(await (await fetch(fetchUrl)).text());
      const grid = this.querySelector('[data-st-results] .st-grid');
      const items = [...doc.querySelectorAll('[data-st-results] .st-grid > li')];
      const first = items[0];
      grid?.append(...items);
      const nextBlock = doc.querySelector('[data-st-load-more]');
      if (block && nextBlock) block.replaceWith(nextBlock);
      window.history.replaceState({}, '', `${url.pathname}${url.search}`);
      announce?.(nextBlock?.querySelector('[role="status"]')?.textContent?.trim());
      if (moveFocus) first?.querySelector('a')?.focus({ preventScroll: true });
      this.watchInfinite();
    } catch (error) {
      window.location.href = href;
    } finally {
      this.loadingMore = false;
    }
  }

  watchInfinite() {
    this.infinite?.disconnect();
    const block = this.querySelector('[data-st-load-more][data-mode="infinite"]');
    const more = block?.querySelector('[data-st-more]');
    if (!more) return;
    this.infinite = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) this.loadMore(more.href, false);
    }, { rootMargin: '0px 0px 400px 0px' });
    this.infinite.observe(block);
  }

  /* Saves the "Show" choice in a hidden cart attribute, then reloads the first page. */
  async setPerPage(value) {
    try {
      await fetch(`${routes.cart || '/cart'}/update.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ attributes: { _st_per_page: String(value) } })
      });
    } catch (error) {
      return;
    }
    const url = new URL(window.location.href);
    url.searchParams.delete('page');
    this.load(url.href, false);
  }

  swap(fresh) {
    const focusedId = document.activeElement?.id;
    const openFolds = new Set([...this.querySelectorAll('details[open]')].map((el) => el.id).filter(Boolean));
    const head = this.querySelector('[data-st-facets-head]');
    const results = this.querySelector('[data-st-results]');
    const form = this.querySelector('[data-st-facets-form]');
    head?.replaceWith(fresh.querySelector('[data-st-facets-head]'));
    results?.replaceWith(fresh.querySelector('[data-st-results]'));
    const freshForm = fresh.querySelector('[data-st-facets-form]');
    if (form && freshForm) {
      // Keep the dialog element itself so it stays open while the shopper filters.
      form.replaceChildren(...freshForm.childNodes);
      form.querySelectorAll('details[id]').forEach((el) => { el.open = openFolds.has(el.id) || el.open; });
    }
    if (focusedId) document.getElementById(focusedId)?.focus({ preventScroll: true });
    this.watchInfinite();
  }
}

if (!customElements.get('st-facets')) customElements.define('st-facets', StFacets);
