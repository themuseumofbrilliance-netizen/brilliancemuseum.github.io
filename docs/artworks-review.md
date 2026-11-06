# Artworks page — review version

Replaces the unfinished selected-works.html page, preserving its existing URL so
the approved homepage's Artworks portals and navigation work without changing
homepage source. The homepage HTML, CSS, JavaScript, and restored scene assets
are unchanged.

Nine original artwork JPEGs are used without cropping, editing, or replacement.
Titles, dates, materials, and descriptions are transcribed from the existing
exhibition document into data/artworks.json. Artwork dimensions are absent and
display as “Not recorded.” In particular Cloud To Soil is dated 2023; Hero’s
Journey and Love & Vulnerability are 2022. No dates are inferred from exhibition
dates. The screenplay has no recorded year and is explicitly a written work,
not a completed animation. Its existing text remains in the exhibition document.

All and Paintings show the existing paintings. Multimedia shows the existing
screenplay as a written part of the multimedia practice. Series has an explicit
empty state; no undocumented series or exhibitions are invented. Artwork records
can exist without an exhibition association, allowing future standalone works.

The page inherits the approved Bodoni Moda / Cormorant Garamond / DM Sans system
and the existing navigation styles. Only the new page styles extend it. The
existing stylized house asset is reused as a subdued architectural header and
botanical footer; mockup paintings and the rejected house photographs are not
used as artworks or background assets.

Filters and title/year/material search progressively enhance static HTML. Work
details appear in a native dialog with Escape, previous/next, keyboard focus
return, and full-size original-image links. Without JavaScript or native dialog
support, catalogue entries remain available below the gallery. No pagination is
shown because all ten existing works are present.

The isolated Sites preview hosts only homepage/gallery assets and original art
JPEGs. Home and Artworks links stay within that preview. Other destination pages
still lead to the current public website until those pages are developed.
No Spring or nanny portfolio files are included in the preview or modified.

Check Artworks appearance and interactions in Safari on desktop and mobile.
Browser/device screenshot QA is unavailable in the current environment.

## Botanical mosaic revision

The wall now continues behind the entire Artworks page, with a dedicated decorative
sage siding / dappled-shadow / lower-edge flower asset. It is generated scenery
adapted from the approved stylized homepage, contains no artworks, and does not
use the rejected original-house-photo experiment or any mockup paintings.

Ten existing work cards are regrouped into an opening large/stacked/tall mosaic,
a row of portrait-format works, and a closing landscape/screenplay pairing. Images
retain their proportions and use contain, not cover; source JPEGs are unchanged.
Individual beige mats and wide gaps are removed. Desktop captions appear on hover
or keyboard focus; touch captions are visible, and mobile captions sit below images.
Filter/search mode switches to compact natural-ratio columns to avoid empty mosaic
slots. The filtering/search logic and catalogue records are otherwise unchanged.

artworks-review.html provides real 1440px and 390px iframe widths, scaling desktop
to fit an iPad. Direct-page links remain available for normal responsive review.
The source homepage and all shared typography/navigation files remain unchanged.
