# The Museum of Brilliance

Static website for The Museum of Brilliance — an independent art house and studio practice.

Built in plain HTML and CSS. No build step, no dependencies. Designed to be hosted on GitHub Pages.

---

## File Structure

```
/
├── index.html                           Home
├── work.html                            Work (exhibitions + selected works)
├── biography.html                       Biography
├── spring.html                          Spring branch
├── inquiries.html                       Inquiries (contact form)
├── exhibitions/
│   └── shots-fired-on-valentine-st.html Template for exhibition pages
├── spring/
│   └── portfolio.html                   Private nanny portfolio (password-gated)
├── css/
│   └── style.css                        Complete stylesheet
├── js/
│   └── password-gate.js                 Client-side password gate
└── README.md                            This file
```

---

## How to Deploy to GitHub Pages

### First-time setup

1. Go to [github.com](https://github.com) and sign in (or create an account — free).
2. Click the **+** icon (top right) → **New repository**.
3. Name the repository exactly this: `brilliancemuseum.github.io` — replace `brilliancemuseum` with your actual GitHub username. The `.github.io` ending is what makes it a free hosted site.
4. Make it **Public**. Do not add a README (you already have one). Click **Create repository**.
5. On the next screen, look for **"uploading an existing file"** — click that link.
6. Drag every file and folder from the TMOB folder into the upload area. Make sure you drag the *contents* (index.html, work.html, folders, etc.), not the parent folder.
7. Scroll down, click **Commit changes**.

Your site is now live at `https://YOUR-USERNAME.github.io` — usually within a minute or two.

### Connecting brilliancemuseum.com

Once the site is live on the GitHub URL, you can point your custom domain to it.

1. In your GitHub repository, go to **Settings → Pages**.
2. Under **Custom domain**, type `brilliancemuseum.com` and save.
3. In your domain registrar (wherever you bought brilliancemuseum.com), add these DNS records:
   - Four `A` records pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`
4. Back in GitHub Pages settings, tick **Enforce HTTPS** once it's available (usually within 24 hours).

Full instructions with screenshots: [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## How to Edit the Site

All pages are HTML files you can open in any code editor (VS Code is free and recommended). Look for text in brackets like `[this]` — those are placeholders meant to be replaced.

### Changing text

Open the HTML file in your editor. Find the placeholder, replace it with your real text. Save. Upload the updated file to GitHub (drag and drop replaces the old version).

### Adding images

1. Create a folder called `images/` at the top level of your site.
2. Add your image files there (use `.jpg` or `.webp` for photos, `.png` for logos).
3. In the HTML, find the `<div class="exhibition-card__placeholder">Image forthcoming</div>` and replace it with:
   ```html
   <img src="images/your-image-name.jpg" alt="Description of the image">
   ```
4. Keep file names lowercase with hyphens: `shots-fired-01.jpg`, not `IMG 1234.JPG`.

### Adding a new exhibition or series page

1. Copy `exhibitions/shots-fired-on-valentine-st.html` and rename it (e.g., `exhibitions/your-new-series.html`).
2. Open the new file and update the title, statement, and works.
3. On `work.html`, copy an existing `<a class="exhibition-card">...</a>` block and update the link, title, year, and image.

---

## Private Portfolio Page

The Spring private portfolio (`spring/portfolio.html`) uses a client-side password gate.

### Changing the password

Open `js/password-gate.js` and change this line:

```javascript
const TMOB_GATE_PASSWORD = 'brilliance2026';
```

Replace `brilliance2026` with whatever password you want to share. Save and re-upload.

### Important note on security

This is **soft** protection, not real security. Anyone who views the page source can see the password. It is fine for:

- Lightly hiding a page from casual visitors
- Keeping content off a public nav but accessible by link + password to people you trust

It is **not appropriate** for:

- Highly sensitive information (confidential family details, SSNs, contracts)
- Material where exposure would cause real harm

For truly confidential materials, send PDFs directly via email or use a service with real authentication (Dropbox shared folder with password, Notion page with access control, etc.).

---

## Brand System

Colors used throughout:

- `#0F2347` — Sapphire Night (primary TMOB color)
- `#0B2A1A` — Deep Emerald (Spring branch background)
- `#FAFAF8` — Gallery White (main background)
- `#D4E600` — Chartreuse (accent)
- `#B8922A` — Brass (secondary accent, hairlines)

Typography:

- **Cormorant Garamond** — all display and serif body (headlines, italics, emphasis)
- **DM Sans** — labels, navigation, form fields, supporting text

Both loaded from Google Fonts. No additional font licenses needed.

---

## Support

This was built as a standalone static site. There is no backend, no database, no CMS. To change content, edit the HTML directly and re-upload.

If you want a content management system later (so you can edit from a dashboard instead of HTML), consider migrating to:

- **Cargo** — artist-focused, drag-and-drop, beautiful defaults (~$13/month)
- **Eleventy + Netlify CMS** — still static, but with an editing interface (free, requires setup)

For now, this gives you complete control over the design without any platform lock-in.
