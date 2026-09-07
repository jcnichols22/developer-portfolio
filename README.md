# Developer Portfolio

Source for my personal portfolio site: **[jcnichols22.github.io/developer-portfolio](https://jcnichols22.github.io/developer-portfolio/)**

A static, single-page resume site — about, services, project gallery, contact, and a downloadable PDF resume. No build step, no framework, no backend. Just HTML, CSS, and a small amount of vanilla JavaScript.

---

## Live site

**https://jcnichols22.github.io/developer-portfolio/**

---

## Stack

- **HTML5** — single `index.html` with semantic sections (`#home`, `#about`, `#services`, `#portfolio`, `#contact`)
- **CSS3** — hand-written layout and typography, plus a **theme switcher** with five color skins (`css/skins/color-1.css` … `color-5.css`) the user can toggle at runtime
- **JavaScript (vanilla)** — `js/script.js` for typing animation, navigation toggling, and section reveal; `js/style-switcher.js` for the theme picker (persisted in `localStorage`)
- **Font Awesome 6** — loaded from a CDN for icons
- **GitHub Pages** — hosts the site directly from `main`, no CI/CD or build pipeline

There is **no** framework, no bundler, no package manager, and no `node_modules`. Editing content means editing `index.html` directly.

---

## Repo layout

```
developer-portfolio/
├── index.html              # the entire site — markup + inline copy
├── css/
│   ├── style.css           # base layout, typography, responsiveness
│   ├── style-switcher.css  # theme picker UI
│   └── skins/              # color-1.css … color-5.css (user-selectable)
├── js/
│   ├── script.js           # typing animation, nav toggler, section reveal
│   └── style-switcher.js   # theme switching + localStorage persistence
├── images/
│   ├── josh.jpg            # headshot used in the home section
│   └── portfolio/          # thumbnails for the project gallery section
└── docs/
    └── Joshua Nichols Resume.pdf   # served at /docs/Joshua Nichols Resume.pdf
```

---

## Content sections

The site is one HTML page with five anchor-scrolled sections:

| Section | Purpose |
|---------|---------|
| `#home` | Headshot, name, animated typing of role/title, intro paragraph, "Hire Me" CTA |
| `#about` | Bio paragraph, contact info, skills list, education timeline, "Download Resume" button (links to `docs/Joshua Nichols Resume.pdf`) |
| `#services` | Card grid of service areas (IT support, networking, etc.) |
| `#portfolio` | Image gallery of project thumbnails |
| `#contact` | Contact form + social links |

---

## Editing the site

Everything is in `index.html`. Common edits:

- **Update bio or skills** — edit the `#about` section in `index.html`
- **Add a portfolio image** — drop a file into `images/portfolio/`, then add a `.portfolio-item` block to the `#portfolio` section
- **Swap the resume PDF** — replace `docs/Joshua Nichols Resume.pdf` (keep the filename)
- **Change contact info** — edit the contact info block in `#about` and the form `action` in `#contact`
- **Tweak theme colors** — edit one of `css/skins/color-1.css` … `color-5.css`; the user can switch between them via the floating ⚙ button

After editing, commit to `main` and push — GitHub Pages redeploys automatically within ~30 seconds.

---

## Theme switcher (the interesting bit)

The site ships with five color skins. The switcher:

1. Toggles an `alternate-style` `<link>` in `<head>` (the active skin has no `disabled` attribute)
2. Saves the user's choice to `localStorage` so it persists across reloads
3. Restores the saved skin on page load

If you want to add a sixth color, drop a new `color-6.css` in `css/skins/`, add a `<link>` to `index.html` with `class="alternate-style" title="color-6" disabled`, and add the corresponding button in the style-switcher markup.

---

## Deployment

This repo is configured to serve from GitHub Pages with no custom domain. The default URL is `https://jcnichols22.github.io/developer-portfolio/`. The site is deployed directly from the `main` branch — there is no build process, so a `git push` is the entire deploy.

---

## License

Code is mine; design is based on a public portfolio template (the "Atlas" style — original attribution in commit history). Feel free to fork and adapt for your own portfolio; please don't reuse the headshot, the bio copy, or the resume PDF without swapping them out.