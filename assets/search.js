/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Predictive search combobox, recent searches and matching collections.
  Loaded on demand by theme.js.
*/

const { announce, parseHTML, strings = {}, routes = {} } = window.Shanasheel || {};
const defineOnce = (name, constructor) => {
  if (!customElements.get(name)) customElements.define(name, constructor);
};

/* ---------- Predictive search (combobox) ---------- */
class StPredictiveSearch extends HTMLElement {
  connectedCallback() {
    this.input = this.querySelector('input[type="search"]');
    this.results = this.querySelector('[data-st-results]');
    this.cache = new Map();
    this.active = -1;
    this.input.addEventListener('input', () => {
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => this.search(this.input.value.trim()), 220);
    });
    this.input.addEventListener('keydown', (event) => this.onKey(event));
    this.addEventListener('focusout', (event) => {
      if (!this.contains(event.relatedTarget)) this.close();
    });
  }

  async search(term) {
    if (!term) {
      this.close();
      return;
    }
    if (!this.cache.has(term)) {
      this.setAttribute('aria-busy', 'true');
      try {
        const params = new URLSearchParams({ q: term, 'resources[type]': 'product,collection,page,article,query', 'resources[limit]': '6', section_id: 'predictive-search' });
        const response = await fetch(`${this.dataset.url}?${params}`);
        this.cache.set(term, response.ok ? await response.text() : this.fallback(term));
      } catch (error) {
        return;
      } finally {
        this.removeAttribute('aria-busy');
      }
    }
    if (term !== this.input.value.trim()) return;
    const content = parseHTML(this.cache.get(term)).querySelector('[data-st-predictive-content]');
    this.results.replaceChildren(...(content ? [content] : []));
    this.results.hidden = false;
    this.input.setAttribute('aria-expanded', 'true');
    this.active = -1;
    announce(this.results.querySelector('[data-st-predictive-status]')?.textContent);
  }

  // Live suggestions failed: offer the full search page for the typed words instead of an empty panel.
  fallback(term) {
    const template = this.querySelector('template[data-st-predictive-fallback]');
    if (!template) return '';
    const box = document.createElement('div');
    box.append(template.content.cloneNode(true));
    const link = box.querySelector('[data-st-fallback-link]');
    if (link) link.href += encodeURIComponent(term);
    const text = box.querySelector('[data-st-fallback-text]');
    if (text) text.textContent = text.textContent.replace('[terms]', term);
    return box.innerHTML;
  }

  options() { return [...this.results.querySelectorAll('[role="option"]')]; }

  onKey(event) {
    if (event.key === 'Escape' && !this.results.hidden) {
      event.preventDefault();
      event.stopPropagation();
      this.close();
      return;
    }
    const options = this.options();
    if (!options.length || this.results.hidden || !['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) return;
    if (event.key === 'Enter') {
      if (this.active >= 0) {
        event.preventDefault();
        options[this.active].querySelector('a')?.click();
      }
      return;
    }
    event.preventDefault();
    this.active = event.key === 'ArrowDown' ? (this.active + 1) % options.length : (this.active - 1 + options.length) % options.length;
    options.forEach((option, index) => option.setAttribute('aria-selected', String(index === this.active)));
    this.input.setAttribute('aria-activedescendant', options[this.active].id);
    options[this.active].scrollIntoView({ block: 'nearest' });
  }

  close() {
    this.results.hidden = true;
    this.input.setAttribute('aria-expanded', 'false');
    this.input.removeAttribute('aria-activedescendant');
    this.active = -1;
  }
}
defineOnce('st-predictive-search', StPredictiveSearch);

/* ---------- Recent searches (stored only in this browser) ---------- */
const RECENT_KEY = 'st-recent-searches';
const readRecent = () => {
  try {
    const list = JSON.parse(window.localStorage.getItem(RECENT_KEY) || '[]');
    return Array.isArray(list) ? list.filter((item) => typeof item === 'string').slice(0, 6) : [];
  } catch (error) {
    return [];
  }
};
const writeRecent = (list) => {
  try { window.localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 6))); } catch (error) { /* storage blocked */ }
};
const searchUrl = (term) => `${routes.searchPage || '/search'}?q=${encodeURIComponent(term)}&options%5Bprefix%5D=last`;

const renderRecent = () => {
  const recent = readRecent();
  document.querySelectorAll('[data-st-recent]').forEach((block) => {
    const list = block.querySelector('[data-st-recent-list]');
    if (!list) return;
    list.replaceChildren(...recent.map((term) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'st-pill';
      link.href = searchUrl(term);
      link.textContent = term;
      item.append(link);
      return item;
    }));
    block.hidden = recent.length === 0;
  });
};

document.addEventListener('submit', (event) => {
  const input = event.target.querySelector?.('input[name="q"]');
  const term = input?.value.trim();
  if (!term) return;
  writeRecent([term, ...readRecent().filter((item) => item.toLowerCase() !== term.toLowerCase())]);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('[data-st-recent-clear]')) return;
  writeRecent([]);
  renderRecent();
});

renderRecent();

/* ---------- Matching collections on the search page ---------- */
const collectionsBlock = document.querySelector('[data-st-search-collections]');
if (collectionsBlock && collectionsBlock.dataset.terms && routes.search) {
  const params = new URLSearchParams({ q: collectionsBlock.dataset.terms, 'resources[type]': 'collection', 'resources[limit]': '8' });
  fetch(`${routes.search}.json?${params}`)
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      const found = data?.resources?.results?.collections || [];
      if (!found.length) return;
      const list = collectionsBlock.querySelector('[data-st-search-collections-list]');
      list.replaceChildren(...found.map((collection) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'st-pill';
        link.href = collection.url;
        link.textContent = collection.title;
        item.append(link);
        return item;
      }));
      collectionsBlock.hidden = false;
    })
    .catch(() => {});
}
