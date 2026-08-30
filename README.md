# Raman Malhotra — Portfolio

A hand-crafted, editorial portfolio for a frontend-focused MERN stack developer. Built with React 18, Vite, Framer Motion, React Router, and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create an optimized production build with:

```bash
npm run build
npm run preview
```

## Editing content

Most editable portfolio content lives in `src/data/portfolio.js`, including project links, certificate links, and the résumé URL. The longer About and Contact copy lives in the corresponding files under `src/sections`.

The site supports light and dark modes and remembers the visitor's choice. Core colors and typography are CSS variables at the top of `src/styles.css`.

## Add project screenshots

The site currently uses custom CSS art so it looks complete without stock imagery. To swap in real work:

1. Export screenshots as WebP or AVIF at roughly 1600 px wide.
2. Put them in `public/projects/`, for example `public/projects/commbitz.webp`.
3. In `src/sections/Projects.jsx`, replace `<ProjectVisual project={project} />` with an image. Add an `image` and `alt` field to each item in `src/data/portfolio.js` and use:

```jsx
<img src={project.image} alt={project.alt} loading="lazy" width="1600" height="1100" />
```

Keep the explicit width and height to prevent layout shift, and describe the actual screen in the alt text.

## Résumé

The résumé button opens the Google Drive link defined as `resumeUrl` in `src/data/portfolio.js`.

## Deploy to GitHub Pages

First create a GitHub repository and push this project. Then deploy it as either a user site or project site.

### User site (`username.github.io`)

The default `/` base path is already correct:

```bash
npm run deploy
```

### Project site (`username.github.io/portfolio`)

Pass the repository name as the Vite base path:

```bash
VITE_BASE_PATH=/portfolio/ npm run deploy
```

On GitHub, open **Settings → Pages** and set the source to the `gh-pages` branch if it was not selected automatically.

If your repository has a different name, replace `portfolio` in the command. `HashRouter` is used so client-side routing remains compatible with GitHub Pages.

## Structure

```text
public/             Static assets and social card
src/components/     Shared UI components
src/data/           Editable portfolio content
src/sections/       Page sections
src/styles.css      Full visual system and responsive styles
```
