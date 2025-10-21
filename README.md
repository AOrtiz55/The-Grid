# ⚡ TRON‑Inspired Site

> Neon grids, light trails, and a synthwave vibe — this project is a work‑in‑progress front‑end inspired by **TRON** aesthetics.

![Project status badge](https://img.shields.io/badge/status-WIP-orange)
![Built with](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🔭 Preview (Images that show in the README)

Drop your images into `assets/preview/` and they will render here in the README. Replace the placeholders below with your own files.

> **Tip:** Keep file names short and lowercase. Prefer `.webp` for stills and `.gif` or short `.mp4` for motion.

**Hero / Landing**

![image](https://github.com/user-attachments/assets/e88950c0-d3e1-428a-b8b1-c4b3b22912ac)

**Neon Grid Animation**

![TRON grid animation](assets/preview/grid.gif)

**Mobile Layout**

<img src="assets/preview/mobile.png" alt="TRON site on mobile" width="360" />

> If your repo doesn’t show images on GitHub, make sure the paths are **relative** to the README location (this file lives at the root). For example: `assets/preview/hero.webp`.

---

## 🎯 Goals

- Deliver a crisp, neon‑on‑black visual language
- Smooth light‑trail interactions (hover + pointer parallax)
- Accessible contrast and keyboard navigation
- Responsive layouts for mobile/desktop

---

## ✨ Features (Planned & Implemented)

- [x] Base layout & routing shell
- [x] Neon grid background with subtle scanlines
- [ ] Light‑trail cursor & glow halos
- [ ] Panels with glassmorphism and scanline masks
- [ ] Theme toggles (Blue/Teal, Magenta, Amber variants)
- [ ] Motion‑safe mode (reduced motion)

---

## 🧰 Tech Stack

- **Angular** (v17+ recommended)
- **Angular CLI**
- **TypeScript**, **HTML5**, **CSS3** (or **Tailwind** with Angular preset)
- Optional: **ESLint**/**Prettier**, **NgRx** (state), **Husky**/**lint-staged**

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Angular CLI installed globally

```bash
# Install Angular CLI if needed
npm i -g @angular/cli

# 1) Install deps
npm install

# 2) Start dev server (http://localhost:4200)
ng serve

# 3) Build for production (output: dist/<project-name>)
ng build --configuration production

# 4) Run unit tests
ng test
```

If you prefer an npm script workflow, add these to `package.json`:

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build --configuration production",
    "test": "ng test",
    "lint": "ng lint",
    "preview": "npx http-server dist/<project-name> -p 5050"
  }
}
```

---

## 🗂️ Project Structure

```
.
├── assets/
│   └── images/           # images used IN THIS README (render on GitHub)
├── src/
│   ├── assets/            # in‑app images referenced by Angular templates
│   ├── app/
│   │   ├── pages/
│   │   └── app.config.ts  # or app.module.ts depending on setup
│   ├── index.html
│   └── styles.css         # or styles.scss / Tailwind entry
├── angular.json
├── package.json
└── README.md
```

> **README images** live in `assets/preview/` at the **repo root** and are referenced like `assets/preview/hero.webp`.
> **App images** live in `src/assets/` and are referenced inside templates like `src/assets/...` (Angular serves from `/assets/...`).

---

## 🎨 Design System (Starter)

**Colors** (WCAG‑aware on #0b0f1a background)

- Background: `#0b0f1a`
- Primary Neon (Blue): `#00e5ff`
- Accent (Teal): `#00ffc6`
- Accent (Magenta): `#ff00e5`
- Highlight (Amber): `#ffc107`
- Grid Lines: `#0d2233`

**Typography**

- Display: _Orbitron_ / _Rajdhani_ / _Audiowide_
- Body: _Inter_ / _Roboto_

**Effects**

- Outer glow: `filter: drop-shadow(0 0 8px currentColor)`
- Scanlines: repeating‑linear‑gradient(transparent 0 2px, rgba(255,255,255,.04) 2px 3px)

---

## 🖼️ Image Guidelines

- **Naming:** `feature‑name_variant.ext` (e.g., `dashboard_dark.webp`)
- **Dimensions:** 1600×900 for hero; 1200px width for inline
- **Format:** `.webp` for stills, `.gif` for short loops, `.mp4` for longer clips (embed via HTML `<video>` in README if needed)
- **Optimization:** Use `cwebp`/`imagemin` to keep below ~400 KB per still
- **Alt text:** describe the key UI for accessibility

**Example video embed:**

```html
<video src="assets/preview/interaction.mp4" controls width="720"></video>
```

---

## 🧪 Accessibility & Perf

- Sufficient color contrast (≥ 4.5:1 for body text)
- Respect `prefers-reduced-motion`
- Lazy‑load heavy visuals
- Use GPU‑friendly transforms; avoid layout thrash

---

## 🅰️ Angular Notes & Tips

- **Image paths**: README uses repo‑relative paths; Angular templates should use `src/assets/...` (served from `/assets/...` at runtime).
- **Base href for GitHub Pages**: set `<base href="/<repo>/">` in `index.html` or use `ng build --base-href=/<repo>/`.
- **Tailwind**: add via `ng add @ngneat/tailwind` (or manual setup), then put neon utilities in `styles.(s)css`.
- **Reduced motion**: apply `@media (prefers-reduced-motion: reduce)` in global styles and gate animations.
- **Performance**: use `transform` + `opacity` animations; prefer `requestAnimationFrame` for custom cursors; avoid heavy box‑shadows.

---

## 🧭 Roadmap

- [ ] Implement light‑trail cursor with requestAnimationFrame
- [ ] Add keyboard focus rings with neon outline
- [ ] Build component library (Panels, Cards, HUD meters)
- [ ] Write Cypress smoke tests
- [ ] Deploy (Firebase Hosting / Vercel / Netlify / GitHub Pages)

---

## 🤝 Contributing

PRs welcome! Please run `npm run lint` before submitting.

---

## 📄 License

MIT — see `LICENSE`.

---

## 🙏 Inspiration

- TRON (1982), TRON: Legacy (2010), synthwave UI references

---

## 🆘 Troubleshooting

- **Images not showing in README?**

  - Ensure paths are relative (e.g., `assets/preview/hero.webp`).
  - Check case sensitivity: `Hero.webp` ≠ `hero.webp`.
  - GitHub sometimes caches; commit a small change to README to bust cache.

- **Neon looks dull?**

  - Verify your monitor’s color profile; consider sRGB exports.
  - Increase glow with `filter: drop-shadow()` rather than heavy box‑shadows.

---

> **NOTE:** This README is structured so that images will show **in the README itself** while your site is still under construction. Add your screenshots to `assets/preview/` and rename the placeholders above.
