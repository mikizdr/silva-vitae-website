## GitHub Pages (Vite + React)

This repository uses a React app powered by Vite and is deployed to GitHub Pages via GitHub Actions.

### Local development

1. Install dependencies:

	```bash
	npm install
	```

2. Start dev server:

	```bash
	npm run dev
	```

3. Build for production:

	```bash
	npm run build
	```

4. Preview production build:

	```bash
	npm run preview
	```

### App structure

- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/components/Layout.jsx`
- `src/components/NavBar.jsx`
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
