# Air Asia Tour And Travels static website

This repository now includes a no-build static website at the repository root. Open `index.html` directly in a browser, or publish the root folder to any static host. The original Angular application remains under `src/`; it has not been removed or rewritten.

## Structure

- `index.html`, `packages.html`, `package.html`, `services.html`, `about.html`, `gallery.html`, `contact.html`, `faq.html`, `privacy-policy.html`, `terms-conditions.html`, `404.html`: static pages.
- `css/site.css`: responsive design tokens, components and page styles. Change the CSS variables at the top to re-theme.
- `js/site.js`: shared header/footer, mobile navigation, enquiry behavior, package rendering and filters.
- `js/packages.js`: editable package records. Add or update a record in this array to update package cards and the detail page.
- `images/`: resized copies of photos used by the static version. Originals remain in `public/images/` for the Angular project.
- `sitemap.xml` and `robots.txt`: basic crawler files.

## Edit packages

Edit `js/packages.js`. Each record contains an ID, name, destination, duration in days, trip style/category, image path, alt text, existing listed two-person price, highlights and description. Use a unique lowercase ID. Current amounts are copied from the prior site listing and shown as indicative estimates per person; confirm and update the real current pricing before publishing.

## Replace photos

Put optimized local photos in `images/`, then update the matching `image` path and useful alternative text in `js/packages.js` or the relevant HTML page. Preserve the image aspect ratio when changing explicit `width` and `height` attributes. The hero photo and logo have been resized locally; other source photographs are copied from `public/images/`. No photo is hotlinked from a third-party image host.

Recommended: export large landscape photos as WebP at an appropriate width (roughly 1400–2000px for hero photos, 800–1200px for cards), and keep the logo transparent if its source supports it. There was no WebP encoder installed in the workspace, so these assets remain JPEG/PNG rather than being force-converted.

## Change phone and WhatsApp

The WhatsApp number is set near the top of `js/site.js` in the `phone` constant, in international format. Update it without spaces (for example `+919797000873`). The phone links and business contact details also appear in the shared header/footer HTML template in `js/site.js` and on `contact.html`. Update the email and address there too if they change.

WhatsApp links use a URL-encoded prefilled message, and individual links can set a `data-message` attribute.

## Enquiry form

There is no backend in this static project. The validated contact form opens the visitor's email application with the enquiry addressed to `airasiatourandtravels479@gmail.com`. This requires a configured mail application. To use Formspree or Web3Forms, create an account, add the provider's endpoint and documented client-side integration, and revise the privacy notice. Do not put private API keys in front-end JavaScript.

## Local preview and deployment

- Direct: open `index.html` in a browser. Internal links are relative static `.html` files.
- Netlify: deploy the repository root as the publish directory. Add a redirect from `/` only if desired; `404.html` is included.
- GitHub Pages: publish the repository root (or configure the root as the Pages source). Keep the site at the domain root or update canonical URLs in every page and `sitemap.xml` for a project subpath.
- cPanel: upload the root HTML files and the `css/`, `js/`, and `images/` folders into `public_html`. Ensure `404.html`, `robots.txt` and `sitemap.xml` are in the web root.

The sitemap and canonical URLs currently use `https://airasiatourandtravels.com/`; change them if the final domain differs.

## Content to confirm before launch

- Business name and domain ownership, exact address spelling, phone and email contact details.
- Regions served, service availability, office hours, years in business, registrations/licences and any claims about support or local expertise.
- Package prices, per-person calculation, duration, route, accommodation, transport, inclusions/exclusions, booking/payment/cancellation terms and final itinerary.
- Permission and accuracy of all photos, and real customer reviews/consent before adding testimonials.
- Social account URLs and whether a Google reviews link should be included.
- Legal review of privacy and terms pages. The pages are practical drafts, not legal advice.
- The current source photo set includes Kashmir, cars and accommodation; provide current team/vehicle photos, licensed property images, verified customer photos, and a transparent high-resolution logo if available.
