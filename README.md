# ⚡ TRON‑Inspired Site [Angular Coming Soon..]

> Neon grids, light trails, and a synthwave vibe — this project is a work‑in‑progress front‑end inspired by **TRON** aesthetics.

![Project status badge](https://img.shields.io/badge/status-WIP-orange)
![Built with](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-blue)

---

## 🔭 Preview (Site still under construction)

**Home / Landing**

![image](https://github.com/user-attachments/assets/e88950c0-d3e1-428a-b8b1-c4b3b22912ac)
![image](https://github.com/user-attachments/assets/9e64c899-4bb2-44df-806a-b2114b5793cd)

**Catalog**

![image](https://github.com/user-attachments/assets/f4f6f6ee-3b06-42f6-a006-c72104c29afa)


**Cart**

![image](https://github.com/user-attachments/assets/00e8ec72-de71-4c2a-a159-1267737899a1)


**Mobile Layout**

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
- [ ] Adding Images
- [ ] Theme toggles (Blue/Teal, Magenta, Amber variants)
- [ ] Host build in Vercel

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

## 🧪 Accessibility & Perf

- Sufficient color contrast (≥ 4.5:1 for body text)
- Respect `prefers-reduced-motion`
- Lazy‑load heavy visuals
- Use GPU‑friendly transforms; avoid layout thrash

---

## 🅰️ Angular Notes & Tips

- **Image paths**: README uses repo‑relative paths; Angular templates should use `src/assets/...` (served from `/assets/...` at runtime).
- **Base href for GitHub Pages**: set `<base href="/<repo>/">` in `index.html` or use `ng build --base-href=/<repo>/`.
- **Reduced motion**: apply `@media (prefers-reduced-motion: reduce)` in global styles and gate animations.
- **Performance**: use `transform` + `opacity` animations; prefer `requestAnimationFrame` for custom cursors; avoid heavy box‑shadows.

---

## 🧭 Roadmap

- [ ] Implement light‑trail cursor with requestAnimationFrame
- [ ] Add keyboard focus rings with neon outline
- [ ] Build component library (Panels, Cards, HUD meters)
- [ ] Deploy (Firebase Hosting / Vercel / Netlify / GitHub Pages)

---

## 🙏 Inspiration

- TRON (1982), TRON: Legacy (2010), synthwave UI references

---


> **NOTE:** This README is structured so that images will show **in the README itself** while site is still under construction.
