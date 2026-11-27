# Shanasheel changelog

All notable changes to the Shanasheel Shopify theme by ZeronKit. The Arabic version follows the English one.

## 1.1.2 (26 November 2026)

A one-fix release after the owner's second review of the demo store on 26 November 2026. Nothing was added or removed and no setting was renamed.

### Changed

- **Bigger unit switch on phones.** In the `Dimensions and materials` section on the home page, the `cm` and `in` buttons are now 44 px tall on phones (they were 36 px). They keep the same width, pill shape and colours. Tablets and desktops are unchanged.

  Why: 36 px was too small to tap with a finger. 44 x 44 px is the usual minimum for touch (accessibility).

  What to do: nothing.

### Updating from 1.1.1

1. In `Online Store`, `Themes`, open the `...` menu of your current Shanasheel and click `Duplicate`. The copy is your backup.
2. Download Shanasheel 1.1.2 and upload the zip with `Add theme`, `Upload zip file`. It arrives as a new, unpublished theme.
3. Copy your settings: in the old theme open `Edit code`, copy the content of `config/settings_data.json`, `sections/header-group.json`, `sections/footer-group.json` and each file in `templates` that you changed, and paste it into the same files in the new theme. No setting was renamed or removed, so these files fit.
4. Check the home page on a phone, then publish the new theme. Keep the old copy for a while.

If you come from 1.1.0 or 1.0.0, follow the 1.1.1 and 1.1.0 steps below as well.

## 1.1.1 (26 November 2026)

A small release after the owner's review of the demo store on 26 November 2026. Nothing was removed and no setting was renamed.

### Added

- **Phone home screen icon.** The `Favicon` setting in `Theme settings`, `Brand assets` now also gives the icon for phone home screens (apple-touch-icon, 180 x 180 px) beside the 32 x 32 px browser tab icon.

  Why: without it, a phone showed a screenshot of the page when a shopper saved the store to the home screen (brand).

  What to do: upload a square image of at least 180 x 180 px in `Favicon`.
- **Default share image.** A new setting, `Theme settings`, `Brand assets`, `Default share image`. Products, collections and articles share their own image. Other pages (home, About, Contact, FAQ, policies, the journal, search, cart) share this image, or the `Brand logo for sharing and gift cards` when it is empty. Every page now also has `twitter:image`.

  Why: most pages had no share picture, so a link posted on social media or in a chat showed no image (sharing).

  What to do: upload a 1200 x 630 px picture of your store in `Default share image`.
- **More structured data for search engines.** Collection pages get CollectionPage with a list of the products shown on that page. The journal page gets Blog with its posts. Articles now use BlogPosting with the author, the dates, the image, the publisher and the tags. Product, BreadcrumbList, Organization and WebSite data stay as before.

  Why: search engines understand list pages and posts better with this data (search engines).

  What to do: nothing.

### Changed

- **One h1 on the home page.** The hero heading (for example "Rooms that ask you to stay a while") is now the h1 of the home page when the `Room scene hero` section is the first section. The logo in the header is no longer an h1. When the hero heading is empty, the store name is the h1, hidden from view.

  Why: with an image logo the h1 had no text, and the visible heading was an h2 (accessibility, search engines).

  What to do: keep the hero as the first section of the home page, or give your first section a heading.
- **No dot above the buy panel.** The small gold dot at the top centre of the dark buy panel on the product page is gone, and the panel has a little less space at the top.

  Why: it looked like a stray mark rather than a part of the design (polish).

  What to do: nothing.

### Demo store only

The demo store got a favicon and a share picture made from its own logo and home hero, and its footer no longer shows Contact twice: the Shop column uses a new `Footer shop` menu without Contact, and Contact stays under Help. These are store content, not theme files.

### Updating from 1.1.0

1. In `Online Store`, `Themes`, open the `...` menu of your current Shanasheel and click `Duplicate`. The copy is your backup.
2. Download Shanasheel 1.1.1 and upload the zip with `Add theme`, `Upload zip file`. It arrives as a new, unpublished theme.
3. Copy your settings: in the old theme open `Edit code`, copy the content of `config/settings_data.json`, `sections/header-group.json`, `sections/footer-group.json` and each file in `templates` that you changed, and paste it into the same files in the new theme. No setting was renamed or removed, so these files fit.
4. In the new theme, upload your icon in `Theme settings`, `Brand assets`, `Favicon` and your share picture in `Default share image`.
5. Check the home page, a product page, a collection and the journal, then publish the new theme. Keep the old copy for a while.

If you come from 1.0.0, follow the 1.1.0 steps below as well.

## 1.1.0 (25 November 2026)

This release comes from a full review of the theme on desktop, tablet and phone, in English and Arabic. Nothing was removed and no setting was renamed, so your content and your choices in the editor keep working.

### Added

- **Free delivery threshold.** A new setting, `Theme settings`, `Cart`, `Free delivery threshold` (default 70, in your store currency). Any announcement message can contain `[threshold]`, which shows that amount with its currency, for example "Free US delivery from $70 USD". If you leave a message with the truck icon empty, the theme writes a translated delivery message for you.

  Why: the 1.0.0 message said "Free standard delivery over 100" with no currency, so shoppers could not tell what it meant (readability, consistency).

  What to do: set the threshold to the amount of your own free shipping rate in `Settings`, `Shipping and delivery`, or to 0 if you do not offer free delivery. Put `[threshold]` in your delivery message.
- **Free delivery progress bar in the cart.** The cart drawer and the cart page show how much is left until free delivery, for example "$31.00 away from free US delivery", and "You have free US delivery" once the order reaches the amount. It uses the same `Free delivery threshold`.

  Why: shoppers see right away how close they are to free delivery (buying flow).

  What to do: nothing beyond setting the threshold. Set it to 0 to hide the bar. The built-in texts say "US delivery". If your free delivery covers another country, change them in `Themes`, `...`, `Edit default theme content` (search for "free US delivery" and "free delivery").
- **Add to cart bar on phones.** On a phone product page, a bar with the product name, the price and an `Add to cart` button appears at the bottom of the screen once the main button has scrolled away. It adds the variant the shopper picked and shows "Sold out" when that variant is not available.

  Why: on long product pages the buy button disappeared after the first screen (phone use, buying flow).

  What to do: nothing. It works on every product page.
- **Sale badge on the product page.** When a variant has a compare at price, a "Save 13%" badge (Arabic "وفّر 13٪") shows beside the price. The phone bar shows the sale price with the regular price crossed out.

  Why: a sale was easy to miss on the product page (buying flow).

  What to do: nothing. Fill in `Compare-at price` on the product as usual.
- **Article sign-off and "Shop the pieces".** Every journal post ends with "Written by" the author and the date, then a row of products. The products come from the article metafield `shanasheel.products` when it is set, otherwise from products whose tags match the post's tags, otherwise from products tagged "bestseller". If none match, the row stays hidden. The `Blog post` section has `Show "Shop the pieces"`, `Heading` and `Products to show`.

  Why: a reader who likes a story can buy the pieces in it without searching (buying flow).

  What to do: optional. Tag a few products "bestseller" or give your posts tags that match your product tags. To pick the products yourself, create a metafield definition for blog posts in `Settings`, `Custom data`, with namespace and key `shanasheel.products` and the type list of products, then fill it on each post. Turn the block off with `Show "Shop the pieces"` if you do not want it.

- **Store contact email.** A new setting, `Theme settings`, `Brand assets`, `Store contact email`, empty by default. When you fill it in, the address shows in the footer contact window under "Write to us" and on the contact page. When it is empty, no email line shows and the contact form stays.

  Why: the 1.0.0 demo content showed the theme maker's address as if it were the store's (trust).

  What to do: write your own shop address in the setting. If your footer contact text or your pages still mention another address, change them.
- **Meta descriptions everywhere.** Every page now has a meta description: your own SEO text first, then the page's own text (product, collection, article or page), then the shop description, then a short theme line for the home page, the collections list, the journal, search, cart, policies and the 404 page. Product pages also get BreadcrumbList data for search engines.

  Why: the home page, the collections list, the journal, search, cart, policies and the 404 page had no description (search engines).

  What to do: optional. Write a description in `Online Store`, `Preferences` and in the SEO part of your products and collections. The theme fills the gaps.
- **Journal tags in other languages.** Common journal tags (Guides, Care, Wood, Lighting, Textiles, Ideas, Living room and a few more) now show in Arabic on Arabic pages. Other tags show as written.

  Why: Shopify cannot translate tags, so English tags showed on Arabic pages (Arabic).

  What to do: to rename a tag, use `Themes`, `...`, `Edit default theme content` and search for the tag name.

- **About and FAQ page templates.** Two new page templates with their own sections. `page.about` (section `About: the house`) opens with a wide arched photo and the page title on a walnut sill, sets your page text in two magazine columns on desktop, turns the first list after a heading into a row of small arched value cards, and ends with links to Contact and the Journal. `page.faq` (section `Questions: workshop`) has a walnut title strip with an "Ask the workshop" link, the questions as folds grouped by topic, and a sticky arched "Still unsure?" card with your showroom hours and a Contact button.

  Why: the About and FAQ pages used the same plain page layout, and a FAQ read as one long text (readability).

  What to do: in `Online Store`, `Pages`, open your About page and choose the template `about`, then open your FAQ page and choose `faq`. Add your questions as blocks in the FAQ section (topic, question, answer) and write your hours in the card text. Without question blocks the FAQ shows your page text as it is.

### Changed

- **Product gallery.** Every image now has the same frame, and the image number and caption sit together in one label ("01 / 03 | Cream cover in daylight") in the same corner of every image.

  Why: in 1.0.0 the first image had a different frame from the others and the number and caption were two separate labels (consistency).

  What to do: nothing.
- **Product page columns.** The buy panel now starts level with the first image. On desktop the shorter column (the gallery or the panel) moves with the page and then stays in view beside the longer one, so there is never an empty column.

  Why: the panel started lower than the gallery and long pages left a large empty gap (readability, buying flow).

  What to do: nothing. This now happens on every product page, whatever `Keep product details in view while scrolling` is set to.
- **Fabrics and finishes.** When the variant buttons already show the finishes as swatches, the `Fabrics and finishes` block shows only its heading and the note of the selected finish, and the note follows the shopper's choice.

  Why: the same choices were shown twice, one above the other (consistency, readability).

  What to do: nothing.
- **Phone and tablet gallery.** The gallery now sits inside the page margin and the next image peeks in from the side.

  Why: the first image touched the screen edge, and shoppers did not see that there were more images (phone use).

  What to do: nothing.
- **Home page hero.** The heading is smaller and the text panel wider, so the heading fits on fewer lines and both buttons are visible in the first screen on a laptop. On tablets the photo is shorter so the heading and buttons fit in the first screen.

  Why: the buttons were below the first screen on common laptop and tablet sizes (readability, buying flow).

  What to do: nothing. If you wrote a long heading, check it in the editor.
- **Spacing.** The gap between the hero and the next section and the space above the footer now use the same spacing as every other section. Arched cards no longer have empty space at the bottom.

  Why: some gaps were twice as large as others (consistency).

  What to do: nothing.
- **Footer.** Menu columns now spread across the full width on desktop (four columns). Phones keep one column.

  Why: the links sat in two crowded columns with empty space beside them (readability).

  What to do: nothing.
- **Room tiles.** A wide photo inside a tall room tile now zooms toward its subject instead of showing mostly wall.

  Why: landscape photos looked empty in the arched tiles (readability).

  What to do: if a tile does not show the right part of the photo, set the focal point on that image in Shopify (open the image in `Content`, `Files` or on the collection and choose the focal point).
- **Product card buttons.** Every card button now has the same height, text size and distance from the card edges, on every page.

  Why: buttons had different sizes and one touched the card edge (consistency, phone use).

  What to do: nothing.
- **Search results.** With results, the page opens with a short band that has the title and the search field on one row, so the first results appear in the first screen. The empty search page did not change.

  Why: the first result was below the first screen on laptops and phones (buying flow).

  What to do: nothing.
- **Popular search buttons.** They are now 44 pixels high on phones with slightly smaller text.

  Why: they were hard to tap (phone use).

  What to do: nothing.
- **Normal page title.** The page title now sits in a light sand arch instead of a dark walnut one. It is shorter, the title starts near the top, and it stays in view on desktop while the page scrolls.

  Why: the dark arch was tall and left an empty band above the title (readability).

  What to do: nothing.
- **Text sizes and tap targets.** On phones, every visible text is at least 12 pixels and every button or link is at least 44 pixels tall or wide. On desktop, small labels (header links, eyebrows, counts, field labels, table headings, breadcrumbs) are at least 13 pixels and the footer text is 14 pixels.

  Why: some labels were too small to read and some links too small to tap (readability, phone use).

  What to do: nothing.
- **Announcement bar on phones.** The text now fits on one line, the icons are hidden on phones, and the pause and close buttons are larger.

  Why: the delivery message wrapped onto two lines and pushed the page down (phone use).

  What to do: keep each message short.
- **Cart lines.** The line price now shows once, on the side. Under the product name you only see the price of one item ("$39.00 each") when the quantity is more than 1.

  Why: the same price appeared twice on every line (readability).

  What to do: nothing.
- **Images for screen readers.** Decorative copies of images (card hover images, thumbnails, collage frames) now have empty alt text, and real photos keep their description. A card's second image now loads as soon as the pointer, a tap or the keyboard reaches the card.

  Why: screen readers read every photo twice, and some hover images were still blank on the first hover (consistency).

  What to do: keep writing alt text for your product photos.

- **Buy it now.** It is now an outline button on the product panel. Only Add to cart is filled.

  Why: two filled buttons competed for attention (buying flow).

  What to do: nothing.
- **One delivery message on the product page.** The line under the price now says "Free US delivery from $70 USD" from the same `Free delivery threshold` as the announcement and the cart bar, with a link to your delivery and returns policy. The "Shipping calculated at checkout" line is gone, and the `Delivery and returns` fold no longer repeats the delivery box. In the cart, the line under the bar now speaks only about taxes. Gift card products show no delivery line, no delivery box and no Buy it now.

  Why: the page said "Shipping calculated at checkout" right beside a free delivery offer, and the same delivery facts appeared three times (consistency, trust).

  What to do: keep the threshold equal to your real free shipping rate. Set it to 0 if you do not offer free delivery, then the old line comes back.
- **Badges.** A product card shows one badge: Sold out, then Sale, then New. New shows for products tagged "new", or created within the days set in `Theme settings`, `Product cards` (default now 30, 0 uses the tag only). The "Save" badge on the product page now has the same notched tag shape as the card badge.

  Why: cards could show Sale and New at the same time (consistency).

  What to do: tag products "new" if you want the badge on older pieces.
- **Small lists.** Collections and search results with fewer than 12 products no longer show the Filter button or the per page choice. A filter group with only one choice is left out.

  Why: filters on a list of five products only added clicks (readability).

  What to do: nothing.
- **Cart photos.** Product photos in the cart page and the cart drawer are now 120 pixels wide on every screen.

  Why: at 78 pixels on phones the pieces were hard to recognise (buying flow).

  What to do: nothing.
- **Phones.** Card names, footer credit links, links under the product price and in the delivery fold, the cart Remove link and the contact page fields are now 44 pixels tall. The search field placeholder is shorter ("Search pieces or colours") so it fits on phones in English and Arabic.

  Why: reviewers counted many tap targets under 44 pixels and a cut placeholder (phone use).

  What to do: nothing.
- **Photo descriptions.** A real photo without its own alt text now uses the product, collection or article title (or the hero heading). Decorative copies keep an empty alt text.

  Why: screen readers heard nothing for these photos (accessibility).

  What to do: alt text you write yourself always wins.

- **Shop menu: doorways.** The menu now hangs from the header across the page width. The top items with sub menus are tabs, and their collections stand in one row of tall arched doorways with the photo, the name and the number of products, plus a "View all" door. Under a brass line, one row holds your pages (New arrivals, Journal, About, FAQ, Contact) and the language and currency pickers. On phones it is a full screen sheet with the tabs on top and the doors in two columns. Arrow keys move between the tabs. `Header`, `Menu panel` switches back to the list with image tiles.

  Why: every page starts here, and the menu should look like this shop (consistency).

  What to do: nothing. Collections show as doors when the menu link points to a collection with products.
- **Search: a side room.** Search opens as a tall drawer from the side of the screen. The field sits at the top, live results show suggestions, the products as a two column grid of small arched photos with name and price, collections and pages as links, and a full width "See all results" bar. Recent and popular searches wait at the bottom before the shopper types.

  Why: the search panel covered the whole top of the page and products showed as small rows (readability).

  What to do: nothing.
- **Cart drawer: a room card.** The cart now rises from the bottom of the screen as a wide sheet. The pieces stand side by side as arched cards (photo, name, options, quantity, price, Remove) in a row that scrolls sideways with arrows or the keyboard, and a walnut block at the end holds the free delivery bar, the subtotal, Checkout and "View cart". On phones it fills the screen, the pieces are a list and the subtotal and Checkout stay in a bar at the bottom.

  Why: a side drawer hid most of the page and showed one piece at a time on short screens (buying flow).

  What to do: nothing.
- **Cart page: delivery to your room.** Each piece is a full width card with a large arched photo, its options and a delivery line (the product's lead time, or "In stock, ready to send"), and the quantity and price at the end. The summary is a walnut band under the pieces that stays at the bottom of the window while you scroll: free delivery bar, subtotal, Checkout and the three delivery promises. On phones the band is a slim bar and "Details" opens the order note and the promises. An empty cart shows the room tiles from the home page.

  Why: the summary box beside the lines was easy to lose on long carts (buying flow).

  What to do: the delivery line reads the product metafield `shanasheel.lead_time` (the same one the product page uses).
- **404 page: the empty room.** One wide drawing of a room (an arched lattice window, a crooked frame with 404, a sideboard and a lamp) with the title, the text and the search field standing on the walnut floor. Under it your collections show as small arched doorways. The product row was removed.

  Why: a lost shopper needs the search and the rooms first (buying flow).

  What to do: nothing. `Rooms menu` still chooses the collections.
- **Password page: the workshop door.** A split screen: a tall arched photo on one side, and the shop name plaque, your message, the password fold and the newsletter field on the other. The page now uses the theme's Arabic font. On phones the photo is a band at the top.

  Why: the narrow centred column looked like a plain form (readability).

  What to do: optional. Choose a photo in the `Password` section; without one a collection photo is used.
- **Home: piece in focus.** One wide room photo of the piece across the page with a raised buy card over its lower corner (name, price, options, quantity, Add to cart, View full details). The short facts run on a brass ruled line under the photo. On phones the card overlaps the bottom of the photo and the facts follow as a list. New settings: `Room photo` and `Buy card corner`.

  Why: the photo and buy box side by side looked like every other product block (consistency).

  What to do: optional. Choose a wide room photo in the section; without one the first product photo is used. The old `Photos to show` setting was removed.
- **Home: workshop to home.** The delivery steps now run down the page as a route joined by a dotted brass line, each number in a small arch, beside a tall arched photo with your delivery note and link under it. On phones the photo comes first. New setting: `Image`.

  Why: four equal columns made the steps hard to follow on tablets (readability).

  What to do: optional. Choose a photo, for example a room being set up; without one a collection photo is used.

### Fixed

- The breadcrumb on collection pages on phones: the slash now lines up with the links.
- Product grids on tablets: size chips are hidden below 990 pixels wide (as on phones) and the title and price are stacked, so product names are no longer cut to a few letters.
- The empty cart page in Arabic showed "Your cart is empty" in English. Both texts now come from the theme language files.

  What to do: if you copy your settings from 1.0.0 and the `Cart` section on the cart page still holds the old English heading and text, clear the two fields so the translated texts show.
- On product pages, the buy panel was pushed about 90 pixels down by a leftover offset. It now starts level with the gallery.

- In Arabic, live search suggestions are not offered by Shopify, and the search panel stayed empty. It now shows a "See all results" link for the words typed, which opens the full search page.

### Updating from 1.0.0

A theme uploaded from a zip file does not update by itself. Your 1.0.0 store keeps working. Update when you are ready:

1. In `Online Store`, `Themes`, open the `...` menu of your current Shanasheel and click `Duplicate`. The copy is your backup.
2. Download Shanasheel 1.1.0 and upload the zip with `Add theme`, `Upload zip file`. It arrives as a new, unpublished theme.
3. Copy your settings. You can set the new theme up in the editor the same way as the old one, or copy the files: in the old theme open `Edit code`, copy the content of `config/settings_data.json`, `sections/header-group.json`, `sections/footer-group.json` and each file in `templates` that you changed, and paste it into the same files in the new theme. Version 1.1.0 renamed no setting, so these files fit. Two settings were removed: `Photos to show` in the home `Piece in focus` section and `Show products` in the 404 section. If you paste an old `templates/index.json` or `templates/404.json`, delete the lines `"media_limit"` and `"show_products"` if the editor complains.
4. In the new theme, set `Theme settings`, `Cart`, `Free delivery threshold`, and change your delivery message in the `Announcement bar` to use `[threshold]`. Write your shop address in `Theme settings`, `Brand assets`, `Store contact email`, and remove any other address from the footer contact text.
5. In `Online Store`, `Pages`, give your About page the template `about` and your FAQ page the template `faq`, and add your questions to the FAQ section.
6. Check the pages: the home page, the menu, the search panel, a collection, a product (also on a phone), the cart drawer and the cart page with items in them, a search, a journal post, About, FAQ and the 404 page, in every language you sell in.
7. Publish the new theme only when every page looks right. Keep the old copy for a while.

Note: the theme info in the 1.0.0 download said 1.1.0 by mistake. To tell the two apart, use the theme names in your library, or look for the `Free delivery threshold` setting, which only 1.1.0 has.

## 1.0.0 (25 November 2026)

First release.

---

# سجل تغييرات شناشيل

## 1.1.2 (26 نوفمبر 2026)

إصدار بإصلاح واحد بعد المراجعة الثانية لصاحب المتجر للمتجر التجريبي في 26 نوفمبر 2026. لم يُضَف شيء ولم يُحذف شيء ولم يتغيّر اسم أي إعداد.

### تغيّر

- **مبدّل الوحدات أكبر على الهاتف.** في قسم `Dimensions and materials` في الصفحة الرئيسية، صار ارتفاع زرّي `سم` و`إنش` على الهاتف 44 بكسل (كان 36 بكسل). العرض والشكل والألوان كما هي. الأجهزة اللوحية وأجهزة الكمبيوتر لم تتغيّر.

  السبب: 36 بكسل صغير جدًا للمس بالإصبع، و44 × 44 بكسل هو الحد الأدنى المعتاد للمس (سهولة الاستخدام).

  ما عليك فعله: لا شيء.

### التحديث من 1.1.1

1. من `Online Store` ثم `Themes` افتح قائمة `...` لنسختك الحالية من شناشيل واضغط `Duplicate`. هذه النسخة هي احتياطك.
2. نزّل شناشيل 1.1.2 وارفع الملف المضغوط عبر `Add theme` ثم `Upload zip file`. يصل كقالب جديد غير منشور.
3. انسخ إعداداتك: في القالب القديم افتح `Edit code` وانسخ محتوى `config/settings_data.json` و`sections/header-group.json` و`sections/footer-group.json` وكل ملف غيّرته في `templates`، والصقه في الملفات نفسها في القالب الجديد. لم يتغيّر اسم أي إعداد ولم يُحذف شيء، فهذه الملفات تناسبه.
4. افحص الصفحة الرئيسية على الهاتف، ثم انشر القالب الجديد. احتفظ بالنسخة القديمة لفترة.

إن كنت تحدّث من 1.1.0 أو 1.0.0 فاتبع خطوات 1.1.1 و1.1.0 أدناه أيضًا.

## 1.1.1 (26 نوفمبر 2026)

إصدار صغير بعد مراجعة صاحب المتجر للمتجر التجريبي في 26 نوفمبر 2026. لم يُحذف شيء ولم يتغيّر اسم أي إعداد.

### أُضيف

- **أيقونة الشاشة الرئيسية للهاتف.** إعداد `Favicon` في `Theme settings` ثم `Brand assets` يعطي الآن أيضًا أيقونة الشاشة الرئيسية للهاتف (apple-touch-icon بمقاس 180 × 180 بكسل) إلى جانب أيقونة تبويب المتصفح بمقاس 32 × 32 بكسل.

  السبب: بدونها كان الهاتف يعرض صورة مصغّرة للصفحة عندما يحفظ المتسوق المتجر على الشاشة الرئيسية (الهوية).

  ما عليك فعله: ارفع صورة مربعة لا يقل مقاسها عن 180 × 180 بكسل في `Favicon`.
- **صورة المشاركة الافتراضية.** إعداد جديد في `Theme settings` ثم `Brand assets` باسم `Default share image`. المنتجات والمجموعات والمقالات تُشارَك بصورتها الخاصة. باقي الصفحات (الرئيسية، من نحن، تواصل معنا، الأسئلة، السياسات، المجلة، البحث، السلة) تُشارَك بهذه الصورة، أو بشعار العلامة للمشاركة إن كانت فارغة. وكل صفحة فيها الآن `twitter:image`.

  السبب: معظم الصفحات لم تكن لها صورة مشاركة، فكان الرابط في مواقع التواصل أو المحادثات يظهر بلا صورة (المشاركة).

  ما عليك فعله: ارفع صورة لمتجرك بمقاس 1200 × 630 بكسل في `Default share image`.
- **بيانات منظّمة أكثر لمحركات البحث.** صفحات المجموعات فيها CollectionPage مع قائمة المنتجات المعروضة في الصفحة. صفحة المجلة فيها Blog مع مقالاتها. المقالات تستخدم الآن BlogPosting مع الكاتب والتواريخ والصورة والناشر والوسوم. بيانات Product وBreadcrumbList وOrganization وWebSite باقية كما هي.

  السبب: محركات البحث تفهم صفحات القوائم والمقالات أفضل بهذه البيانات (محركات البحث).

  ما عليك فعله: لا شيء.

### تغيّر

- **عنوان h1 واحد في الصفحة الرئيسية.** عنوان الواجهة (مثل "غرف تدعوك إلى البقاء لفترة") صار عنوان h1 للصفحة الرئيسية عندما يكون قسم `Room scene hero` هو القسم الأول. الشعار في الرأس لم يعد h1. إن كان عنوان الواجهة فارغًا فاسم المتجر هو h1، مخفيًا عن العين.

  السبب: مع شعار من صورة كان h1 بلا نص، والعنوان الظاهر كان h2 (سهولة الوصول، محركات البحث).

  ما عليك فعله: أبقِ الواجهة أول قسم في الصفحة الرئيسية، أو ضع عنوانًا لقسمك الأول.
- **لا نقطة فوق لوحة الشراء.** النقطة الذهبية الصغيرة في أعلى منتصف لوحة الشراء الداكنة في صفحة المنتج أُزيلت، وصارت المسافة في أعلى اللوحة أقل قليلًا.

  السبب: كانت تبدو علامة شاردة لا جزءًا من التصميم (اللمسات الأخيرة).

  ما عليك فعله: لا شيء.

### في المتجر التجريبي فقط

حصل المتجر التجريبي على أيقونة وصورة مشاركة مصنوعتين من شعاره وواجهته الرئيسية، ولم يعد التذييل يعرض "تواصل معنا" مرتين: عمود التسوق يستخدم قائمة جديدة باسم `Footer shop` بدون تواصل معنا، ويبقى تواصل معنا تحت المساعدة. هذه محتويات المتجر وليست ملفات القالب.

### التحديث من 1.1.0

1. من `Online Store` ثم `Themes` افتح قائمة `...` لنسختك الحالية من شناشيل واضغط `Duplicate`. هذه النسخة هي احتياطك.
2. نزّل شناشيل 1.1.1 وارفع الملف المضغوط عبر `Add theme` ثم `Upload zip file`. يصل كقالب جديد غير منشور.
3. انسخ إعداداتك: في القالب القديم افتح `Edit code` وانسخ محتوى `config/settings_data.json` و`sections/header-group.json` و`sections/footer-group.json` وكل ملف غيّرته في `templates`، والصقه في الملفات نفسها في القالب الجديد. لم يتغيّر اسم أي إعداد ولم يُحذف شيء، فهذه الملفات تناسبه.
4. في القالب الجديد ارفع أيقونتك في `Theme settings` ثم `Brand assets` ثم `Favicon`، وصورة المشاركة في `Default share image`.
5. افحص الصفحة الرئيسية وصفحة منتج ومجموعة والمجلة، ثم انشر القالب الجديد. احتفظ بالنسخة القديمة لفترة.

إن كنت تحدّث من 1.0.0 فاتبع خطوات 1.1.0 أدناه أيضًا.

## 1.1.0 (25 نوفمبر 2026)

جاء هذا الإصدار بعد مراجعة كاملة للقالب على الحاسوب والجهاز اللوحي والهاتف، بالعربية والإنجليزية. لم يُحذف شيء ولم يتغيّر اسم أي إعداد، فيبقى محتواك واختياراتك في المحرر كما هي.

### أُضيف

- **حدّ التوصيل المجاني.** إعداد جديد في `Theme settings` ثم `Cart` ثم `Free delivery threshold` (القيمة الافتراضية 70 بعملة متجرك). يمكن أن تحتوي أي رسالة في شريط الإعلانات على `[threshold]`، فيظهر مكانها هذا المبلغ مع عملته، مثل "توصيل مجاني داخل أمريكا من $70 USD". وإذا تركت رسالة أيقونة الشاحنة فارغة يكتب القالب رسالة توصيل مترجمة.

  السبب: رسالة 1.0.0 كانت "Free standard delivery over 100" بلا عملة، فلم يفهم الزبون المقصود (الوضوح والاتساق).

  ما عليك فعله: اجعل الحد مساويًا لمبلغ الشحن المجاني في `Settings` ثم `Shipping and delivery`، أو 0 إذا لم يكن لديك توصيل مجاني، وضع `[threshold]` في رسالة التوصيل.
- **شريط التقدم نحو التوصيل المجاني في السلة.** يعرض درج السلة وصفحة السلة المبلغ الباقي للتوصيل المجاني، مثل "باقٍ $31.00 على التوصيل المجاني داخل أمريكا"، ثم "حصلت على التوصيل المجاني داخل أمريكا" عندما يبلغ الطلب الحد. ويستخدم الإعداد نفسه `Free delivery threshold`.

  السبب: يرى الزبون مباشرة كم بقي له ليحصل على التوصيل المجاني (مسار الشراء).

  ما عليك فعله: يكفي ضبط الحد، واجعله 0 لإخفاء الشريط. النصوص المدمجة تذكر أمريكا، فإذا كان توصيلك المجاني لبلد آخر فغيّرها من `Themes` ثم `...` ثم `Edit default theme content` (ابحث عن "free US delivery" و"free delivery").
- **شريط الإضافة إلى السلة على الهاتف.** في صفحة المنتج على الهاتف يظهر أسفل الشاشة شريط فيه اسم المنتج وسعره وزر `Add to cart` بعد أن يختفي الزر الرئيسي من الشاشة. يضيف الخيار الذي اختاره الزبون، ويكتب "نفدت الكمية" إذا لم يكن الخيار متوفرًا.

  السبب: في صفحات المنتجات الطويلة كان زر الشراء يختفي بعد الشاشة الأولى (الاستخدام على الهاتف ومسار الشراء).

  ما عليك فعله: لا شيء، فهو يعمل في كل صفحات المنتجات.
- **شارة التخفيض في صفحة المنتج.** عندما يكون للخيار سعر قبل التخفيض تظهر بجانب السعر شارة مثل "وفّر 13٪"، ويعرض شريط الهاتف سعر التخفيض مع السعر الأصلي مشطوبًا.

  السبب: كان التخفيض لا يلفت النظر في صفحة المنتج (مسار الشراء).

  ما عليك فعله: لا شيء، املأ `Compare-at price` في المنتج كالمعتاد.
- **توقيع المقال وقسم "تسوّق القطع".** ينتهي كل مقال في المدوّنة بعبارة "كتبه" مع اسم الكاتب والتاريخ، ثم صف من المنتجات. تأتي المنتجات من حقل المقال `shanasheel.products` إن وُجد، وإلا فمن المنتجات التي تطابق وسومها وسوم المقال، وإلا فمن المنتجات التي تحمل الوسم "bestseller". وإذا لم يطابق أي منتج يبقى الصف مخفيًا. وفي قسم `Blog post` الإعدادات `Show "Shop the pieces"` و`Heading` و`Products to show`.

  السبب: القارئ الذي أعجبته القصة يشتري قطعها دون أن يبحث عنها (مسار الشراء).

  ما عليك فعله: هذا اختياري. ضع الوسم "bestseller" على بعض المنتجات، أو أعطِ مقالاتك وسومًا تطابق وسوم منتجاتك. ولتختار المنتجات بنفسك أنشئ تعريف حقل للمقالات من `Settings` ثم `Custom data`، بمساحة الاسم والمفتاح `shanasheel.products` ونوع قائمة منتجات، ثم املأه في كل مقال. وأطفئ `Show "Shop the pieces"` إذا لم ترده.

- **بريد التواصل مع المتجر.** إعداد جديد في `Theme settings` ثم `Brand assets` ثم `Store contact email`، فارغ في البداية. عندما تكتب فيه عنوانك يظهر في نافذة التواصل في التذييل تحت "راسلنا" وفي صفحة التواصل. وإذا بقي فارغًا لا يظهر أي بريد ويبقى نموذج التواصل.

  السبب: كان المحتوى التجريبي في 1.0.0 يعرض عنوان صانع القالب كأنه عنوان المتجر (الثقة).

  ما عليك فعله: اكتب عنوان بريد متجرك في الإعداد. وإذا كان نص التواصل في التذييل أو صفحاتك تذكر عنوانًا آخر فغيّره.
- **وصف لكل صفحة في محركات البحث.** صار لكل صفحة وصف: نص SEO الذي كتبته أولًا، ثم نص الصفحة نفسها (المنتج أو المجموعة أو المقال أو الصفحة)، ثم وصف المتجر، ثم سطر قصير من القالب للرئيسية وقائمة المجموعات والمجلة والبحث والسلة والسياسات وصفحة 404. وتحصل صفحات المنتجات أيضًا على بيانات BreadcrumbList لمحركات البحث.

  السبب: لم يكن للرئيسية وقائمة المجموعات والمجلة والبحث والسلة والسياسات وصفحة 404 أي وصف (محركات البحث).

  ما عليك فعله: اختياري. اكتب وصفًا في `Online Store` ثم `Preferences` وفي قسم SEO لمنتجاتك ومجموعاتك، والقالب يملأ ما ينقص.
- **وسوم المجلة بلغات أخرى.** الوسوم الشائعة في المجلة (أدلة، العناية، الخشب، الإضاءة، المنسوجات، أفكار، غرفة المعيشة وغيرها) تظهر الآن بالعربية في الصفحات العربية، وغيرها يظهر كما كُتب.

  السبب: لا يستطيع Shopify ترجمة الوسوم، فكانت الوسوم الإنجليزية تظهر في الصفحات العربية (العربية).

  ما عليك فعله: لتغيير اسم وسم استخدم `Themes` ثم `...` ثم `Edit default theme content` وابحث عن اسمه.

- **قالبا صفحتي "من نحن" والأسئلة.** قالبان جديدان للصفحات لكل منهما قسمه. يبدأ `page.about` (القسم `About: the house`) بصورة عريضة داخل قوس وعنوان الصفحة على عتبة من خشب الجوز، ويعرض نص الصفحة في عمودين كالمجلات على الحاسوب، ويحوّل أول قائمة بعد عنوان إلى صف من بطاقات قيم مقوّسة صغيرة، وينتهي برابطين إلى التواصل والمجلة. أما `page.faq` (القسم `Questions: workshop`) ففيه شريط عنوان من الجوز مع رابط "اسأل المشغل"، والأسئلة طيّات مجمّعة حسب الموضوع، وبطاقة مقوّسة ثابتة "ما زلت مترددًا؟" فيها مواعيد صالة العرض وزر للتواصل.

  السبب: كانت صفحتا "من نحن" والأسئلة بالتصميم العادي نفسه، وكانت الأسئلة تُقرأ نصًا طويلًا واحدًا (سهولة القراءة).

  ما عليك فعله: من `Online Store` ثم `Pages` افتح صفحة "من نحن" واختر القالب `about`، ثم افتح صفحة الأسئلة واختر `faq`. أضف أسئلتك كتلًا في قسم الأسئلة (الموضوع والسؤال والجواب) واكتب مواعيدك في نص البطاقة. بدون كتل الأسئلة تعرض الصفحة نصها كما هو.

### تغيّر

- **معرض صور المنتج.** لكل الصور الآن الإطار نفسه، ورقم الصورة ووصفها معًا في ملصق واحد ("01 / 03 | Cream cover in daylight") في الزاوية نفسها من كل صورة.

  السبب: في 1.0.0 كان إطار الصورة الأولى مختلفًا عن البقية، وكان الرقم والوصف ملصقين منفصلين (الاتساق).

  ما عليك فعله: لا شيء.
- **أعمدة صفحة المنتج.** تبدأ لوحة الشراء الآن على مستوى الصورة الأولى. وعلى الحاسوب يتحرك العمود الأقصر (المعرض أو اللوحة) مع الصفحة ثم يبقى ظاهرًا بجانب العمود الأطول، فلا يظهر عمود فارغ أبدًا.

  السبب: كانت اللوحة تبدأ أدنى من المعرض، وكانت الصفحات الطويلة تترك فراغًا كبيرًا (الوضوح ومسار الشراء).

  ما عليك فعله: لا شيء. يحدث هذا الآن في كل صفحات المنتجات مهما كانت قيمة `Keep product details in view while scrolling`.
- **الأقمشة والتشطيبات.** عندما تعرض أزرار الخيارات التشطيبات كعيّنات، يعرض عنصر `Fabrics and finishes` عنوانه وملاحظة التشطيب المختار فقط، وتتغيّر الملاحظة مع اختيار الزبون.

  السبب: كانت الخيارات نفسها تظهر مرتين، واحدة فوق الأخرى (الاتساق والوضوح).

  ما عليك فعله: لا شيء.
- **المعرض على الهاتف والجهاز اللوحي.** صار المعرض داخل هامش الصفحة، وتظهر الصورة التالية جزئيًا من الجانب.

  السبب: كانت الصورة الأولى تلامس حافة الشاشة، ولم يكن الزبون يعرف أن هناك صورًا أخرى (الاستخدام على الهاتف).

  ما عليك فعله: لا شيء.
- **واجهة الصفحة الرئيسية.** صار العنوان أصغر ولوحة النص أعرض، فيأخذ العنوان أسطرًا أقل ويظهر الزران في الشاشة الأولى على الحاسوب المحمول. وعلى الجهاز اللوحي صارت الصورة أقصر ليظهر العنوان والزران في الشاشة الأولى.

  السبب: كان الزران تحت الشاشة الأولى في المقاسات الشائعة للحواسيب المحمولة والأجهزة اللوحية (الوضوح ومسار الشراء).

  ما عليك فعله: لا شيء، وإذا كتبت عنوانًا طويلًا فراجعه في المحرر.
- **المسافات.** صارت المسافة بين الواجهة والقسم الذي يليها، والمسافة فوق التذييل، مثل المسافة بين أي قسمين آخرين. ولم يعد في أسفل البطاقات المقوّسة فراغ زائد.

  السبب: كانت بعض المسافات ضعف غيرها (الاتساق).

  ما عليك فعله: لا شيء.
- **التذييل.** صارت أعمدة القوائم تمتد على العرض كله في الحاسوب (أربعة أعمدة)، ويبقى عمود واحد على الهاتف.

  السبب: كانت الروابط مزدحمة في عمودين بجانبهما فراغ (الوضوح).

  ما عليك فعله: لا شيء.
- **مربعات الغرف.** الصورة العريضة داخل مربع غرفة طويل تقترب الآن من موضوعها بدل أن يظهر الجدار غالبًا.

  السبب: كانت الصور الأفقية تبدو فارغة داخل المربعات المقوّسة (الوضوح).

  ما عليك فعله: إذا لم يُظهر المربع الجزء الصحيح من الصورة فحدّد نقطة التركيز في الصورة نفسها داخل Shopify (افتح الصورة من `Content` ثم `Files` أو من المجموعة واختر نقطة التركيز).
- **أزرار بطاقات المنتجات.** صار لكل أزرار البطاقات الارتفاع نفسه وحجم النص نفسه والمسافة نفسها عن حواف البطاقة في كل الصفحات.

  السبب: كانت الأزرار بأحجام مختلفة، وأحدها يلامس حافة البطاقة (الاتساق والاستخدام على الهاتف).

  ما عليك فعله: لا شيء.
- **نتائج البحث.** عندما توجد نتائج تبدأ الصفحة بشريط قصير فيه العنوان وحقل البحث في سطر واحد، فتظهر النتائج الأولى في الشاشة الأولى. أما صفحة البحث الفارغة فلم تتغيّر.

  السبب: كانت النتيجة الأولى تحت الشاشة الأولى على الحاسوب والهاتف (مسار الشراء).

  ما عليك فعله: لا شيء.
- **أزرار البحوث الشائعة.** صار ارتفاعها 44 بكسل على الهاتف ونصها أصغر قليلًا.

  السبب: كان الضغط عليها صعبًا (الاستخدام على الهاتف).

  ما عليك فعله: لا شيء.
- **عنوان الصفحات العادية.** صار عنوان الصفحة داخل قوس فاتح بلون الرمل بدل القوس الداكن بلون الجوز. وهو أقصر، ويبدأ العنوان قرب أعلاه، ويبقى ظاهرًا على الحاسوب أثناء التمرير.

  السبب: كان القوس الداكن طويلًا ويترك فراغًا فوق العنوان (الوضوح).

  ما عليك فعله: لا شيء.
- **أحجام النصوص ومساحات اللمس.** على الهاتف صار كل نص ظاهر 12 بكسل على الأقل، وكل زر أو رابط 44 بكسل على الأقل طولًا أو عرضًا. وعلى الحاسوب صارت التسميات الصغيرة (روابط الترويسة، والعناوين الصغيرة فوق الأقسام، والأعداد، وتسميات الحقول، ورؤوس الجداول، ومسار التنقل) 13 بكسل على الأقل، ونص التذييل 14 بكسل.

  السبب: كانت بعض التسميات صغيرة يصعب قراءتها، وبعض الروابط صغيرة يصعب الضغط عليها (الوضوح والاستخدام على الهاتف).

  ما عليك فعله: لا شيء.
- **شريط الإعلانات على الهاتف.** صار النص في سطر واحد، واختفت الأيقونات على الهاتف، وكبر زرّا الإيقاف والإغلاق.

  السبب: كانت رسالة التوصيل تنقسم على سطرين وتدفع الصفحة إلى الأسفل (الاستخدام على الهاتف).

  ما عليك فعله: اجعل كل رسالة قصيرة.
- **أسطر السلة.** صار سعر السطر يظهر مرة واحدة في الجانب. وتحت اسم المنتج يظهر سعر القطعة الواحدة ("$39.00 للقطعة") فقط عندما تكون الكمية أكثر من 1.

  السبب: كان السعر نفسه يظهر مرتين في كل سطر (الوضوح).

  ما عليك فعله: لا شيء.
- **الصور وقارئات الشاشة.** النسخ الزخرفية من الصور (صور المرور على البطاقات، والصور المصغّرة، وإطارات مجموعة الصور) صار نصها البديل فارغًا، والصور الحقيقية تحتفظ بوصفها. وتُحمَّل الصورة الثانية للبطاقة بمجرد أن يصل إليها المؤشر أو اللمس أو لوحة المفاتيح.

  السبب: كانت قارئات الشاشة تقرأ كل صورة مرتين، وكانت بعض صور المرور فارغة في أول مرور (الاتساق).

  ما عليك فعله: استمر في كتابة نص بديل لصور منتجاتك.

- **زر الشراء الفوري.** صار زر `Buy it now` زرًا بإطار فقط في لوحة المنتج، والزر الممتلئ الوحيد هو الإضافة إلى السلة.

  السبب: كان زرّان ممتلئان يتنافسان على الانتباه (مسار الشراء).

  ما عليك فعله: لا شيء.
- **رسالة توصيل واحدة في صفحة المنتج.** السطر تحت السعر يقول الآن "توصيل مجاني داخل أمريكا من $70 USD" من إعداد `Free delivery threshold` نفسه الذي يستخدمه شريط الإعلانات وشريط السلة، مع رابط إلى سياسة التوصيل والإرجاع. اختفى سطر "تُحسب تكلفة الشحن عند الدفع"، ولم يعد قسم `Delivery and returns` يكرر صندوق التوصيل. وفي السلة صار السطر تحت الشريط يتحدث عن الضرائب فقط. ولا يظهر في بطاقات الهدايا سطر توصيل ولا صندوق توصيل ولا زر الشراء الفوري.

  السبب: كانت الصفحة تقول "تُحسب تكلفة الشحن عند الدفع" بجانب عرض التوصيل المجاني، وكانت معلومات التوصيل نفسها تظهر ثلاث مرات (الاتساق، الثقة).

  ما عليك فعله: اجعل الحد مساويًا لسعر الشحن المجاني الحقيقي عندك، أو اجعله 0 إذا لم تقدّم توصيلًا مجانيًا فيعود السطر القديم.
- **الشارات.** تعرض بطاقة المنتج شارة واحدة: نفدت الكمية، ثم التخفيض، ثم جديد. تظهر شارة جديد للمنتجات التي تحمل الوسم "new"، أو التي أُنشئت خلال عدد الأيام المحدد في `Theme settings` ثم `Product cards` (صار الافتراضي 30، والصفر يعني الوسم فقط). وصارت شارة "وفّر" في صفحة المنتج بشكل شارة البطاقة نفسه.

  السبب: كانت البطاقة تعرض شارتي التخفيض وجديد معًا (الاتساق).

  ما عليك فعله: أضف الوسم "new" إذا أردت الشارة على قطع أقدم.
- **القوائم الصغيرة.** المجموعات ونتائج البحث التي فيها أقل من 12 منتجًا لم تعد تعرض زر التصفية ولا اختيار عدد المنتجات في الصفحة، وتُخفى مجموعة التصفية التي فيها خيار واحد فقط.

  السبب: كانت التصفية في قائمة من خمسة منتجات تضيف نقرات بلا فائدة (سهولة القراءة).

  ما عليك فعله: لا شيء.
- **صور السلة.** صارت صور المنتجات في صفحة السلة ودرج السلة بعرض 120 بكسل على كل الشاشات.

  السبب: كان التعرّف على القطع صعبًا بعرض 78 بكسل على الهاتف (مسار الشراء).

  ما عليك فعله: لا شيء.
- **الهاتف.** صارت أسماء البطاقات وروابط الحقوق في التذييل والروابط تحت السعر وفي قسم التوصيل ورابط الحذف في السلة وحقول صفحة التواصل بارتفاع 44 بكسل. وصار النص داخل حقل البحث أقصر ("ابحث عن قطعة أو لون") ليتسع على الهاتف بالعربية والإنجليزية.

  السبب: أحصى المراجعون عناصر لمس كثيرة أصغر من 44 بكسل ونصًا مقطوعًا في حقل البحث (استخدام الهاتف).

  ما عليك فعله: لا شيء.
- **وصف الصور.** الصورة الحقيقية التي ليس لها نص بديل تستخدم الآن اسم المنتج أو المجموعة أو المقال (أو عنوان الواجهة)، وتبقى النسخ الزخرفية بنص بديل فارغ.

  السبب: لم تكن قارئات الشاشة تقول شيئًا عن هذه الصور (سهولة الوصول).

  ما عليك فعله: النص البديل الذي تكتبه بنفسك له الأولوية دائمًا.

- **قائمة التسوق: المداخل.** صارت القائمة تتدلى من الترويسة بعرض الصفحة. العناصر العليا التي لها قوائم فرعية صارت ألسنة، ومجموعاتها تقف في صف واحد من مداخل مقوّسة طويلة فيها الصورة والاسم وعدد المنتجات، مع باب "عرض الكل". وتحت خط نحاسي صف واحد لصفحاتك (وصل حديثًا، المجلة، من نحن، الأسئلة، التواصل) ولاختيار اللغة والعملة. على الهاتف تملأ الشاشة، والألسنة في الأعلى والأبواب في عمودين. مفاتيح الأسهم تنقل بين الألسنة. ويعيدها `Header` ثم `Menu panel` إلى القائمة مع الصور المصغّرة.

  السبب: كل صفحة تبدأ من هنا، ويجب أن تشبه القائمة هذا المتجر (الاتساق).

  ما عليك فعله: لا شيء. تظهر المجموعة بابًا عندما يشير رابط القائمة إلى مجموعة فيها منتجات.
- **البحث: غرفة جانبية.** يفتح البحث درجًا طويلًا من جانب الشاشة. الحقل في الأعلى، والنتائج المباشرة تعرض الاقتراحات، والمنتجات في شبكة من عمودين بصور مقوّسة صغيرة مع الاسم والسعر، والمجموعات والصفحات روابط، وشريطًا بعرض كامل "عرض كل النتائج". وتنتظر عمليات البحث الأخيرة والشائعة في الأسفل قبل أن يكتب المتسوق.

  السبب: كانت لوحة البحث تغطي أعلى الصفحة كله والمنتجات صفوفًا صغيرة (سهولة القراءة).

  ما عليك فعله: لا شيء.
- **درج السلة: بطاقة الغرفة.** صارت السلة ترتفع من أسفل الشاشة لوحًا عريضًا. تقف القطع جنبًا إلى جنب بطاقاتٍ مقوّسة (الصورة والاسم والخيارات والكمية والسعر والإزالة) في صف يمرّر جانبيًا بالأسهم أو بلوحة المفاتيح، وفي آخره كتلة من الجوز فيها شريط التوصيل المجاني والمجموع الفرعي وزر الدفع و"عرض السلة". على الهاتف تملأ الشاشة، والقطع قائمة، والمجموع وزر الدفع في شريط ثابت في الأسفل.

  السبب: كان الدرج الجانبي يخفي معظم الصفحة ويعرض قطعة واحدة في الشاشات القصيرة (مسار الشراء).

  ما عليك فعله: لا شيء.
- **صفحة السلة: التوصيل إلى غرفتك.** كل قطعة بطاقة بعرض كامل فيها صورة مقوّسة كبيرة وخياراتها وسطر التوصيل (مدة التجهيز من المنتج، أو "متوفرة وجاهزة للإرسال")، والكمية والسعر في آخرها. والملخص شريط من الجوز تحت القطع يبقى أسفل النافذة أثناء التمرير: شريط التوصيل المجاني والمجموع الفرعي وزر الدفع ووعود التوصيل الثلاثة. على الهاتف يصير شريطًا نحيفًا، و"التفاصيل" تفتح ملاحظة الطلب والوعود. والسلة الفارغة تعرض مربعات الغرف من الصفحة الرئيسية.

  السبب: كان من السهل أن يضيع صندوق الملخص بجانب القطع في السلال الطويلة (مسار الشراء).

  ما عليك فعله: سطر التوصيل يقرأ حقل المنتج `shanasheel.lead_time` (الحقل نفسه الذي تستخدمه صفحة المنتج).
- **صفحة 404: الغرفة الفارغة.** رسم واحد عريض لغرفة (نافذة مقوّسة بمشربية، وإطار مائل عليه 404، وخزانة ومصباح)، والعنوان والنص وحقل البحث واقفة على أرضية الجوز. وتحته مجموعاتك مداخلَ مقوّسة صغيرة. وأُزيل صف المنتجات.

  السبب: المتسوق التائه يحتاج البحث والغرف أولًا (مسار الشراء).

  ما عليك فعله: لا شيء. ما زال `Rooms menu` يحدد المجموعات.
- **صفحة كلمة المرور: باب المشغل.** شاشة مقسومة: صورة طويلة داخل قوس في جهة، ولوحة اسم المتجر ورسالتك وطيّة كلمة المرور وحقل النشرة في الجهة الأخرى. وصارت الصفحة تستخدم الخط العربي للقالب. على الهاتف تصير الصورة شريطًا في الأعلى.

  السبب: كان العمود الضيق في الوسط يبدو نموذجًا عاديًا (سهولة القراءة).

  ما عليك فعله: اختياري. اختر صورة في قسم `Password`، وبدونها تُستخدم صورة إحدى المجموعات.
- **الرئيسية: قطعة محددة التركيز.** صورة غرفة واحدة عريضة للقطعة بعرض الصفحة، وفوق زاويتها السفلى بطاقة شراء بارزة (الاسم والسعر والخيارات والكمية وأضف إلى السلة وعرض التفاصيل كاملة). والمعلومات القصيرة على سطر بين خطين نحاسيين تحت الصورة. على الهاتف تتداخل البطاقة مع أسفل الصورة وتليها المعلومات قائمة. إعدادات جديدة: `Room photo` و`Buy card corner`.

  السبب: كانت الصورة وصندوق الشراء جنبًا إلى جنب يشبهان كل كتلة منتج أخرى (الاتساق).

  ما عليك فعله: اختياري. اختر صورة غرفة عريضة في القسم، وبدونها تُستخدم أول صورة للمنتج. وأُزيل الإعداد القديم `Photos to show`.
- **الرئيسية: من المشغل إلى البيت.** صارت خطوات التوصيل تنزل في الصفحة طريقًا يربطها خط نحاسي منقّط، وكل رقم داخل قوس صغير، بجانب صورة طويلة مقوّسة تحتها ملاحظة التوصيل والرابط. على الهاتف تأتي الصورة أولًا. إعداد جديد: `Image`.

  السبب: كانت الأعمدة الأربعة المتساوية تجعل الخطوات صعبة المتابعة على الجهاز اللوحي (سهولة القراءة).

  ما عليك فعله: اختياري. اختر صورة، مثل غرفة يجري تجهيزها، وبدونها تُستخدم صورة إحدى المجموعات.

### أُصلح

- مسار التنقل في صفحات المجموعات على الهاتف: صارت الشرطة المائلة على مستوى الروابط.
- شبكة المنتجات على الجهاز اللوحي: أُخفيت أزرار المقاسات تحت عرض 990 بكسل (كما على الهاتف)، وصار الاسم فوق السعر، فلم تعد أسماء المنتجات مقطوعة إلى بضعة أحرف.
- صفحة السلة الفارغة بالعربية كانت تعرض "Your cart is empty" بالإنجليزية. صار النصان يأتيان من ملفات لغة القالب.

  ما عليك فعله: إذا نقلت إعداداتك من 1.0.0 وبقي في قسم `Cart` بصفحة السلة العنوان والنص الإنجليزيان القديمان، فامسح الحقلين لتظهر النصوص المترجمة.
- في صفحات المنتجات كانت لوحة الشراء منزاحة نحو 90 بكسل إلى الأسفل بسبب إزاحة متبقية، وصارت تبدأ على مستوى المعرض.

- بالعربية لا يقدّم Shopify اقتراحات البحث المباشرة، فكانت لوحة البحث تبقى فارغة. صارت تعرض رابط "عرض كل النتائج" للكلمات المكتوبة، فيفتح صفحة البحث الكاملة.

### التحديث من 1.0.0

القالب المرفوع من ملف مضغوط لا يتحدّث وحده، ومتجرك على 1.0.0 يبقى يعمل. حدّثه عندما تكون مستعدًا:

1. من `Online Store` ثم `Themes` افتح قائمة `...` لنسختك الحالية من شناشيل واضغط `Duplicate`. هذه النسخة هي احتياطك.
2. حمّل شناشيل 1.1.0 وارفع الملف المضغوط من `Add theme` ثم `Upload zip file`، فيظهر قالبًا جديدًا غير منشور.
3. انقل إعداداتك. يمكنك ضبط القالب الجديد في المحرر كما ضبطت القديم، أو نقل الملفات: في القالب القديم افتح `Edit code` وانسخ محتوى `config/settings_data.json` و`sections/header-group.json` و`sections/footer-group.json` وكل ملف غيّرته داخل `templates`، والصقه في الملفات نفسها في القالب الجديد. لم يتغيّر اسم أي إعداد في 1.1.0، فهذه الملفات تناسبه. وأُزيل إعدادان: `Photos to show` في قسم `Piece in focus` بالرئيسية و`Show products` في قسم 404. إذا لصقت ملف `templates/index.json` أو `templates/404.json` قديمًا واعترض المحرر، فاحذف سطري `"media_limit"` و`"show_products"`.
4. في القالب الجديد اضبط `Theme settings` ثم `Cart` ثم `Free delivery threshold`، وعدّل رسالة التوصيل في `Announcement bar` لتستخدم `[threshold]`. واكتب بريد متجرك في `Theme settings` ثم `Brand assets` ثم `Store contact email`، واحذف أي عنوان آخر من نص التواصل في التذييل.
5. من `Online Store` ثم `Pages` أعطِ صفحة "من نحن" القالب `about` وصفحة الأسئلة القالب `faq`، وأضف أسئلتك إلى قسم الأسئلة.
6. راجع الصفحات: الرئيسية، والقائمة، ولوحة البحث، ومجموعة، ومنتجًا (على الهاتف أيضًا)، ودرج السلة وصفحة السلة وفيهما منتجات، وبحثًا، ومقالًا، و"من نحن" والأسئلة وصفحة 404، بكل اللغات التي تبيع بها.
7. انشر القالب الجديد فقط عندما تصبح كل الصفحات صحيحة، واحتفظ بالنسخة القديمة فترة.

ملاحظة: معلومات القالب في ملف 1.0.0 كانت تذكر الرقم 1.1.0 خطأً. لتميّز بين النسختين استخدم اسمي القالبين في مكتبتك، أو ابحث عن إعداد `Free delivery threshold` الموجود في 1.1.0 فقط.

## 1.0.0 (25 نوفمبر 2026)

الإصدار الأول.
