# ViLYNC Medtech – IOL Catalogue Implementation

This is an overlay/update package for the existing static website. It adds the IOL catalogue and six product-detail URLs while preserving the existing homepage layout, brand styling, logo reference, and unrelated sections.

## Apply to the existing GitHub repository

1. Make a backup or branch before applying the update.
2. Extract this package into the existing website repository root, allowing the included `index.html`, `styles.css`, and `script.js` to replace the corresponding current website files.
3. Keep the existing `assets/vilync-logo.png` file and any other existing brand assets. This package intentionally does not include or replace the company logo.
4. Commit and push to the existing production branch (`main`) to trigger the connected Cloudflare Pages deployment.
5. Test the homepage, IOL catalogue, all six product pages, mailto and WhatsApp enquiry links on desktop and mobile.

## New routes

- `/products/ophthalmology/iols/`
- `/products/ophthalmology/iols/monofocal/spirant-cla/`
- `/products/ophthalmology/iols/monofocal/strident-scolorito/`
- `/products/ophthalmology/iols/edof/spirant-edof/`
- `/products/ophthalmology/iols/edof/strident-edof/`
- `/products/ophthalmology/iols/autofocus-pro/spirant-autofocus-pro/`
- `/products/ophthalmology/iols/autofocus-pro/strident-autofocus-pro/`

## Original product photo mapping

| Product | Included asset |
|---|---|
| Spirant CLA | `assets/iol/spirant-cla.png` (original `image(20261120-103507).png`) |
| Strident Scolorito | `assets/iol/strident-scolorito.png` (original `image(20261120-101834).png`) |
| Spirant EDOF | `assets/iol/spirant-edof.png` (original `PVB105CLS.png`) |
| Strident EDOF | No image; neutral pending placeholder only |
| Spirant Autofocus Pro | `assets/iol/spirant-autofocus-pro.png` (original `image(20261120-103801).png`) |
| Strident Autofocus Pro | `assets/iol/strident-autofocus-pro.png` (original `VVB10ASCA.png`) |

The image files are copied byte-for-byte from the supplied originals; they are not AI-generated or replaced with internet images.

## Enquiry behaviour

Each product detail page has one primary `REQUEST INFORMATION` button. It opens a choice panel with:

- Email Enquiry: `sales@vilyncmedtech.com`, with product and model prefilled.
- WhatsApp Enquiry: `+91 8188886788`, with an editable prefilled message.

## Data integrity

- Unknown model numbers remain marked as awaiting confirmation.
- Missing technical values remain pending; no dimensions, powers, A-constants or haptic specifications have been invented.
- Supplied portfolio material classifications are retained. Packaging terminology that differs is explicitly identified as packaging wording and flagged for verification rather than silently reconciled.
- Brochures, technical datasheets and clinical documents are marked as pending until verified documents are supplied.

## Existing homepage notes

The IOL card now links to the new catalogue. Existing homepage contact email presentation has been updated to show `info@vilyncmedtech.com` and `sales@vilyncmedtech.com`; the general enquiry form opens an email to `info@vilyncmedtech.com`. Existing logo file reference is unchanged.

## Final approved catalogue heading

The catalogue hero heading is styled as the continuous two-tone wordmark `IntraocularLenses`: “Intraocular” in dark navy immediately followed by “Lenses” in teal, with no visible gap. This follows the approved visual reference dated 20 November 2026.

## Upload checklist

- Upload/extract the ZIP contents into the root of the existing `Website` repository (merge folders; do not delete unrelated repository assets).
- Confirm `assets/vilync-logo.png` remains present in the repository; it is intentionally not bundled or overwritten here.
- Review the changed homepage and catalogue files in GitHub before committing.
- After Cloudflare Pages deployment, test `/products/ophthalmology/iols/` and each product URL listed above.
