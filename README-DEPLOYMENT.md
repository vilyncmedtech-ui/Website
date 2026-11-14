# Vilync Medtech website

This is a static HTML/CSS/JavaScript website prepared for `vilyncmedtech.com`.

## Included
- Responsive corporate homepage
- Product catalogue with category filters
- About, customer segments, brand/distribution approach and contact sections
- Call and WhatsApp links using +91 8188886788
- Quote, demonstration, catalogue and general enquiry form
- Existing supplied company logo

## Important form behaviour
The enquiry form currently opens the visitor's default email application with a pre-filled message addressed to `vilyncmedtech@gmail.com`. It does not store or transmit form submissions by itself. Before launch, test it on desktop and mobile. If you want enquiries to arrive without requiring the visitor's email app, connect a form service (for example, a suitable Cloudflare Worker or third-party form provider) and update the form handler.

## Deploy to Cloudflare Pages (free static hosting)
1. Extract this ZIP.
2. Create a GitHub repository, for example `vilync-medtech-website`.
3. Upload all files and folders in this package to the repository root. `index.html` must be at the root.
4. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
5. Select the repository.
6. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (or `.` if the interface requests a relative directory).
7. Deploy. Cloudflare will provide a temporary `*.pages.dev` address.
8. In the Pages project, add the custom domain `vilyncmedtech.com`. Follow the exact DNS instructions shown by Cloudflare.
9. Repeat for `www.vilyncmedtech.com` if you want the www version. Set one as the preferred canonical address and redirect the other.
10. Test the site, all buttons, mobile layout and SSL after DNS has propagated.

## BigRock DNS caution
Keep the domain registered at BigRock. You do not need to transfer it. Follow Cloudflare's current custom-domain instructions exactly. Do not delete existing DNS records if you use them for email or other services. Your Gmail address is not hosted on this domain, so do not add MX records unless you later configure domain email.

## Before public launch
- Confirm the public business address spelling and whether you want the full address displayed.
- Add actual product models, manufacturers, approved product photographs and brochures.
- Confirm claims, specifications, regulatory status and brand authorizations before publishing them.
- Add a privacy notice and terms appropriate for your enquiry forms.
- Test the `mailto:` enquiry flow. Consider a server-side form integration for reliable lead capture.
- The catalogue currently uses illustrative CSS artwork, not actual product photographs. Replace these with approved product images.

## Editing products manually
Open `index.html` and locate `<div class="product-grid">`. Duplicate or edit a `<article class="product-card">` block. Keep the `data-category` value consistent with the filters (`iol`, `surgical`, `diagnostic`, `medical`). Edit the title, description and enquiry link's `data-product` value. Upload any new images into `assets/` and reference them with a relative path.
