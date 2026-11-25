# Shanasheel

A free Shopify theme for home and furniture stores: furniture, lighting, decor and textiles. Made by [ZeronKit](https://zeronkit.com).

Shanasheel is built on Online Store 2.0: JSON templates, sections everywhere, header and footer section groups, theme blocks (nested), app blocks and Custom Liquid. It ships with English and Arabic (full right-to-left support) and has no app dependencies, no build step, no frameworks, no tracking and sends no data anywhere.

## Free, as is, no warranty

- Shanasheel is free to use and change on your own store or stores. It is distributed only by ZeronKit, not from the Shopify Theme Store.
- It is **not for resale or redistribution**: do not sell it, share it, upload it to theme marketplaces or present it as your own work.
- It is provided **as is, without any warranty**, to the extent permitted by law. See `LICENSE`.
- **Support is best-effort, on request only**, through https://zeronkit.com. Support is not guaranteed.
- **Updates are released when needed and when time allows.** There is no schedule and no guarantee of future updates.

## Installing

1. Download the theme zip (`shanasheel-1.0.0.zip`).
2. In Shopify admin go to **Online Store > Themes > Add theme > Upload zip file** and choose the zip.
3. Click **Customize**, pick a style preset in **Theme settings**, add your menus, logo and collections.
4. Publish when you are ready.

## Updating

Themes uploaded as a zip **do not update automatically** in Shopify. To update:

1. **Duplicate your current theme first** (Themes > ... > Duplicate). This keeps a backup of your settings and content.
2. Upload the new zip as a new theme.
3. Copy your settings across, or re-apply your customizations, and check every page before you publish.

## Style presets

| Preset | Mood | Heading / body font | Corners | Buttons | Cards |
| --- | --- | --- | --- | --- | --- |
| Oak (default) | Warm oak and linen | Lora / Work Sans | Round | Pill | Plinth |
| Gallery | White gallery, stone blue | Jost / Karla | Sharp | Solid | Framed |
| Terrace | Terracotta and olive | Playfair Display / Nunito Sans | Soft | Solid | Minimal |
| Walnut | Dark walnut | Libre Baskerville / Karla | Soft | Outline | Plinth |

**Theme settings > Style** also offers ready-made palettes (linen, walnut, clay, moss, stone, chalk, ochre, slate), font pairings, corner, button, card and spacing styles.

## Features for home and furniture stores

### Home page sections
- **Room scene hero.** A room photo with numbered product pins that open a small product card (no JavaScript), beside a soft copy panel with two buttons.
- **Shop by room.** Room tiles as a mosaic with one large tile, or as a row. Empty tiles fill from your store's collections.
- **Product shelf.** A featured collection row with arrows (no scrollbar) and an intro column.
- **Dimensions and materials.** A measured drawing with width and height lines, a dimensions table with a cm / in switch and a materials table.
- **Piece in focus.** One featured product with the full buy form and fact rows for lead time, assembly and care.
- **Material library.** Arched swatches for woods, fabrics, cane and stone, each with a short note.
- **Delivery steps.** Numbered steps from the workshop to the room.
- **Newsletter card** with a photo window.

### Product page
- **Mosaic gallery** (one wide frame, then two square frames), or a stack or sheet layout. Colour-filtered images, lightbox, video and 3D loaded on request.
- **Raised buy panel** that can sit on either side of the gallery, with a choice of text above the title (product type, vendor or none).
- **Details band** under the gallery for blocks set to "In the details band".
- **Fabrics and finishes.** Large tiles for the Fabric, Finish, Material, Upholstery, Wood or Leather option, with images and notes from a metaobject list. A tile selects that value. Optional link to order free swatches.
- **Delivery and lead time.** In stock, Made to order or Unavailable, with an estimated delivery range that updates with the variant.
- **Dimensions and materials.** Large W / D / H figures and a full table, with an optional measuring guide drawer.
- **Care and assembly** with an assembly level badge and a guide link.
- **Shop the room.** A room photo with up to four numbered hotspots and a product list.
- **Complete the room.** Related products as a carousel or grid, with a fallback collection so it is never empty.

### Other pages
- **Collection:** room banner (soft panel with arched image, full image or plain), breadcrumb, round room links, filters, sorting, products per page, load more or infinite scroll.
- **Search:** pill search field, room links before a search, segmented result tabs, predictive search with product tiles.
- **Cart page and drawer:** sticky order summary, three editable delivery notes (delivery, assembly, 30 days at home), room suggestions and new products when the cart is empty.
- **Contact:** form on a soft panel with a showroom card and furniture topics.
- **404:** a drawn crooked picture frame, lamp and sideboard, a search field, rooms and products.
- **Journal:** the newest story large on a soft panel, cards with reading time and topics, articles with a drop cap option and previous and next links.

### Everywhere
- Six header layouts (inline, centred, split, minimal, editorial, side bar), logo position, floating or bar header, sticky modes and a transparent header on the home page.
- Footer slab with an optional large store name, newsletter, menus and social links.
- Every section falls back to real store products and collections when nothing is chosen.

## Theme Store feature checklist

| Feature | Where |
| --- | --- |
| Discounts per item, per order, in cart | `snippets/cart-lines.liquid`, `snippets/cart-summary.liquid` |
| Accelerated checkout on product and cart | `snippets/buy-form.liquid` (`payment_button`), `snippets/cart-summary.liquid` |
| Faceted filtering on collection and search | `snippets/facets.liquid`, `assets/facets.js` |
| Gift card page | `templates/gift_card.liquid` |
| Image focal points | `snippets/image.liquid` |
| `page_image` for social sharing | `snippets/meta-tags.liquid` |
| Country/currency and language selectors | `snippets/localization.liquid` |
| Nested menus (3 levels) | `sections/header.liquid` |
| Newsletter | footer block, `sections/home-newsletter.liquid`, password page |
| Pickup availability | `sections/pickup-availability.liquid` |
| Related and complementary products | `sections/product-recommendations.liquid`, complementary block |
| Rich media (video, external video, 3D, AR) | `snippets/media.liquid` |
| Search template and predictive search | `sections/main-search.liquid`, `sections/predictive-search.liquid` |
| Selling plans on product and in cart | `snippets/buy-form.liquid`, `snippets/cart-lines.liquid` |
| Shop Pay Installments banner | `payment_terms` in `snippets/buy-form.liquid` |
| Unit pricing | `snippets/price.liquid`, `snippets/cart-lines.liquid` |
| Variant images and swatches | `snippets/variant-picker.liquid`, `snippets/swatch.liquid` |
| SEO, canonical, Open Graph, structured data | `layout/theme.liquid`, `snippets/meta-tags.liquid` |
| App blocks and Custom Liquid | product, footer, canvas, apps section, Custom Liquid section and block |

## Metafields used (all optional, namespace `shanasheel`)

| Key | Owner | Type | Purpose |
| --- | --- | --- | --- |
| `width`, `depth`, `height`, `seat_height`, `diameter`, `length` | Product | Dimension (or text) | Dimension figures and table |
| `weight` | Product | Weight (or text) | Dimensions table |
| `dimensions` | Product | Multi-line text | Extra table lines, one per line (`Seat depth: 55 cm`) |
| `materials`, `finish` | Product | Text | Materials rows and materials tab |
| `finishes` | Product | List of metaobjects (name, image, color, note) | Fabrics and finishes tiles |
| `care`, `assembly` | Product | Rich or multi-line text | Care and assembly block |
| `assembly_level` | Product | Single line text: `ready`, `easy` or `required` | Assembly badge |
| `assembly_guide` | Product | File or URL | Assembly guide link |
| `lead_time` | Variant or product | Single line text | Replaces the estimated delivery text |
| `room_image` | Product | File (image) | Shop the room photo |
| `room_products` | Product | List of products | Shop the room products |
| `image_notes` | Product | Multi-line text | One caption per gallery image, in order |

## Accessibility and performance

Keyboard support everywhere, visible focus, labelled controls, 44 px touch targets for main controls, `prefers-reduced-motion` respected, logical CSS properties for right-to-left. One base CSS file plus page CSS files, one small ES module, section scripts loaded only when their section is on the page, responsive images with focal points.

## Theme credit

The footer shows a small "Theme by ZeronKit" link. You can switch it off in **Theme settings > Theme credit**.

## Licence

Copyright (c) 2026 ZeronKit. Shanasheel is released under the ZeronKit Free Theme Licence (see `LICENSE`). In short:

- You may use and modify it, free of charge, on stores you own or run.
- You may not redistribute, resell, sublicense or upload it to theme marketplaces, or present it as your own work.
- Copyright, author and signature notices must stay in the files.
- It is provided as is, with no warranty.

## Credits

- Design and code: ZeronKit.
- Fonts are served by Shopify's font library under their own licences.
- Placeholder illustrations, payment icons, the Apple Wallet badge and the QR code script are provided by Shopify at runtime and are not part of this package.

## Authenticity

Every copy made by ZeronKit carries the signature `ZK-SHANASHEEL-EC94D65D2EC8`: in the `--zk-sig` property in `assets/theme.css`, a comment in `assets/theme.js`, and a comment, a generator meta tag and the `data-zk` attribute in `layout/theme.liquid` and `layout/password.liquid`. It is plain static text: it sends nothing, tracks nothing and does not change how the store works.

---

## Developer notes (design tokens)

### Naming

- CSS class prefix: `st-` with BEM style: `.st-block`, `.st-block__part`, `.st-block--variant`.
- Custom elements: `<st-...>` (for example `st-slider`, `st-cart`). JS classes: `St...` (for example `StSlider`).
- Data attributes: `data-st-...`. Shared JS helpers live on `window.Shanasheel` (`addItems`, `announce`, `parseHTML`, `strings`, `routes`, `afterAdd`, `readJSON`, `cartSectionIds`, `closeDialog`).
- Settings and section ids: snake_case. Home sections: `sections/home-*.liquid`.
- CSS files: `theme.css` (base, header, footer, cards), `pages.css` (collection, search, cart, contact, 404, page, blog, article, loaded globally), `home.css` (loaded by each home section), `product.css` (product page).

### Colour

Every colour comes from a colour scheme. Put `color-{{ section.settings.color_scheme }}` on the section wrapper and use only these variables (set in `snippets/scheme-vars.liquid`):

| Variable | Use |
| --- | --- |
| `--st-bg` | Section background |
| `--st-bg-gradient` | Background with optional gradient |
| `--st-text` | Text and icons |
| `--st-accent` | Sale price, small highlights, eyebrow dot, cart count |
| `--st-button`, `--st-button-label` | Primary button fill and label |
| `--st-line` | Hairlines and input borders (text at 22%) |
| `--st-muted` | Secondary text |
| `--st-tint` | Hover fill, placeholder fill (text at 6%, transparent) |
| `--st-soft` | Solid soft surface: plinths, inputs, two-tone bands |

Never hard-code hex colours in sections. Use `color-mix(in srgb, var(--st-text) N%, transparent)` for extra tones.

Default schemes (preset Oak):

| Scheme | Role | Background | Text | Accent |
| --- | --- | --- | --- | --- |
| scheme-1 | Main, oat linen | #F4EFE7 | #2A2520 | #8C5A36 |
| scheme-2 | Dark, walnut (footer, announcement) | #2A2520 | #F1EAE0 | #D9A877 |
| scheme-3 | Soft band, sand | #E9E1D4 | #2A2520 | #7A4C2C |
| scheme-4 | Moss green feature | #DCE1D2 | #1F271E | #4E6B43 |
| scheme-5 | Clay blush | #F2E3D6 | #33211A | #9C4A2A |
| scheme-6 | White | #FFFFFF | #1A1A1A | #8C5A36 |

### Type

| Variable / class | Use |
| --- | --- |
| `--st-font-heading`, `--st-font-heading-weight`, `--st-font-heading-style` | Headings |
| `--st-font-body`, `--st-font-body-weight`, `--st-font-body-weight-bold` | Body |
| `--st-heading-scale`, `--st-body-scale` | Multipliers from settings |
| `.st-display`, `.st-h1` to `.st-h4` | Heading sizes (fluid, already scaled) |
| `.st-eyebrow` | Small label above a heading, with an accent dot |
| `.st-text--large`, `.st-small`, `.st-muted`, `.st-strong` | Text helpers |
| `.st-rte` | Rich text output |

Headings are calm: line height 1.12, tracking -0.01em. Buttons and badges are sentence case. Only eyebrows and footer headings use small caps tracking (0.08em).

### Shape and depth

| Variable | Value | Use |
| --- | --- | --- |
| `--st-radius` | 0 / 6 / 16px or custom | Inputs, small tiles, buttons (non pill) |
| `--st-radius-lg` | radius x 2 + 4, max 32px | Media, cards, panels, drawers, floating header, footer slab |
| `--st-button-radius` | 999px for pill, else radius | Buttons |
| `--st-shadow` | Soft two-layer shadow | Floating header, raised cards on hover, badges |
| `--st-card-ratio` | 1, 0.8, 0.75 or 0.6667 | Product card media aspect ratio |

Borders are used sparingly: one solid hairline `1px solid var(--st-line)`.

### Spacing and layout

| Variable / class | Use |
| --- | --- |
| `--st-gutter` | Side padding (fluid, changes with the Spacing setting) |
| `--st-space-section` | Vertical section padding (tight / regular / airy) |
| `--st-page-width` | Max content width |
| `.st-wrap`, `.st-wrap--narrow` | Page container |
| `.st-section` | Section vertical padding |
| `.st-section__head`, `--stack` | Heading row with a link at the end |
| `.st-grid .st-grid--2..5 .st-grid--m1/m2` | Responsive grid (phone first) |
| `.st-grid--rail` + `snippets/slider-controls` | Horizontal carousel with arrows, no visible scrollbar |

### Components

- Buttons: `.st-button .st-button--primary`, `.st-button--ghost`, `.st-button--text`, `.st-button--full`, `.st-link-button`, `.st-icon-button`.
- Forms: `.st-field`, `.st-field__label`, `.st-input`, `.st-select`, `.st-form`, `.st-notice`.
- Badges and pills: `.st-badge`, `.st-badge--accent`, `.st-badge--muted`, `.st-pill`, `.st-count`.
- Cards: `snippets/product-card` (`.st-card`), `snippets/collection-card` (`.st-ccard`), `snippets/article-card`. Card style is global: body class `st-cards-{plinth|minimal|framed|overlay}`.
- Images: `snippets/image` (responsive srcset, lazy). Placeholders: `.st-placeholder` with `placeholder_svg_tag`.
- Icons: `snippets/icon` (`{% render 'icon', name: 'arrow' %}`), `.st-icon--flip` for RTL arrows.
- Reveal motion: `.st-reveal` (and `style="--st-i: N"` for stagger). Respects reduced motion and the Animations setting.

Body classes set in `layout/theme.liquid`: `st-bg-{solid|soft_gradient|two_tone|dark}`, `st-cards-{...}`, `st-buttons-{solid|outline|underline|pill}`, `st-space-{tight|regular|airy}`, `st-type-{compact|balanced|bold}`.

### Header and footer

- Six layouts (inline, center_below, split, minimal, editorial, side), logo position, sticky modes and transparent home. `header_style`: `bar` or `floating` (default). Floating makes an inset rounded panel with `--st-shadow` on desktop (`.st-header--shell-floating`).
- Footer is a rounded slab (top corners `--st-radius-lg`), default scheme-2, with an optional large store name (`show_signature`, `.st-footer__signature`).

### RTL, accessibility, motion, translations

- Logical properties only (`margin-inline-start`, `inset-inline-end`, `padding-block`...). `--st-dir` is 1 or -1 for transforms.
- Every interactive element: visible focus, 44px target for main controls, labels on inputs, alt text from the image or the product title.
- Motion only inside `@media (prefers-reduced-motion: no-preference)`.
- English everywhere except `locales/ar.json` and `locales/ar.schema.json`. Schema labels use `t:` keys in `locales/*.schema.json`. No em dashes.
