/* Shanasheel theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Colour swatches on product cards: a tap shows that colour's first image (and its second image on hover)
  and points the card link at that colour. Loaded only when such swatches are on the page.
*/

document.addEventListener('click', (event) => {
  const swatch = event.target.closest('[data-st-card-swatch]');
  if (!swatch) return;
  const card = swatch.closest('[data-st-card]');
  if (!card) return;
  const media = card.querySelector('.st-card__media');
  const main = card.querySelector('.st-card__img:not(.st-card__img--alt)');
  const second = card.querySelector('.st-card__img--alt');
  if (main && swatch.dataset.srcset) {
    main.srcset = swatch.dataset.srcset;
    main.src = swatch.dataset.srcset.split(' ')[0];
  }
  if (second) {
    if (swatch.dataset.altSrcset) {
      second.sizes = main ? main.sizes : '50vw';
      second.srcset = swatch.dataset.altSrcset;
      second.src = swatch.dataset.altSrcset.split(' ')[0];
      second.hidden = false;
      media?.classList.add('st-card__media--swap');
    } else {
      second.hidden = true;
      media?.classList.remove('st-card__media--swap');
    }
  }
  const link = card.querySelector('.st-card__link');
  if (link && swatch.dataset.url) link.href = swatch.dataset.url;
  card.querySelectorAll('[data-st-card-swatch]').forEach((button) => button.setAttribute('aria-pressed', String(button === swatch)));
});
