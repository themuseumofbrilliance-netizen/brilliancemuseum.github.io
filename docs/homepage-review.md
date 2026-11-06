# Homepage first version — review only

Branch: development/museum-redesign. No merge or production deployment authorized.

Homepage uses the approved two-window house composition with live HTML title,
italic OF, full-window Artworks/Exhibitions links, ordinary navigation, and a
mobile menu that falls back to visible navigation without JavaScript.
Typography study: Cormorant Garamond / DM Sans, already used by the original site.
Final font selection remains open.

The two new house backgrounds are AI adaptations of the user's approved mockup
(7-Photo-7.jpg), with UI and typography removed and mobile composition adapted.
They are decorative architecture, not Keo artwork or photographs of an actual
exhibition. Original house photographs were not supplied. The featured exhibition
uses the existing images/home-tile-on-view.jpg, not the invented paintings in the
mockups. No new exhibition or journal entries are asserted.

Only index.html changes among existing files. Shared css/style.css, all artwork,
exhibition documentation, Spring files, README, CNAME and hosting configuration
are retained. New homepage CSS and JS are isolated.

Artworks currently links to selected-works.html (the existing unfinished catalogue).
Exhibitions links to work.html (the existing work overview). About and Contact
link to the existing pages. Journal links to an honest forthcoming section on
the homepage until its full page is implemented. These destinations will be
redesigned in later stages; this version changes only the homepage.

Open index.html from a complete checkout, or serve it using a local static server.
The standalone review HTML embeds the new scene assets and styling, and uses the
real exhibition image from the pinned public GitHub source. Internet is needed for
Google Fonts, that exhibition image, and the existing destination-page links.
It does not contain Spring files or launch analytics.

Browser screenshot QA was unavailable in this execution environment. Static
checks cover HTML links/assets, JS syntax, preservation of existing files, and
branch/main commit identity. Desktop/mobile layout, font loading, actual touch
and keyboard behavior still need visual browser review before approval.
