## GitHub Pages (Vite + React)

[![CodeQL](https://github.com/mikizdr/silva-vitae-website/actions/workflows/codeql.yml/badge.svg)](https://github.com/mikizdr/silva-vitae-website/actions/workflows/codeql.yml)
[![Deploy Vite site to GitHub Pages](https://github.com/mikizdr/silva-vitae-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/mikizdr/silva-vitae-website/actions/workflows/deploy.yml)

This repository uses a React app powered by Vite and is deployed to GitHub Pages via GitHub Actions.

### Local development

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start dev server:

   ```bash
   pnpm run dev
   ```

3. Build for production:

   ```bash
   pnpm run build
   ```

4. Preview production build:

   ```bash
   pnpm run preview
   ```

### App structure

- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/components/Layout.tsx`
- `src/components/NavBar.tsx`
- `src/pages/*`
- `.github/workflows/deploy.yml`

### Routes

- `/#/` (Home)
- `/#/about`
- `/#/contact`
- `/#/docs`
- `/#/docs/getting-started`
- `/#/docs/page2`
- `/#/docs/lepljenje-plocica`

### GitHub Pages deployment

1. Push changes to `main`.
2. Open **GitHub → Settings → Pages**.
3. Under **Build and deployment** set **Source** to **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` will build and deploy automatically.

### Important Pages note

- In `vite.config.ts`, `base` is set to `"./"`.
- This is required for GitHub Pages project/repository deployments so built assets resolve as relative paths (`./assets/...`) instead of root paths (`/assets/...`).
- If this is changed back to `/`, the site may open as a blank page with 404 errors for JS/CSS files.
