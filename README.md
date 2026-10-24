# archdoesthings.github.io

My portfolio. React + Vite, deployed to GitHub Pages with a GitHub Action.

## Run it locally

```
npm install
npm run dev
```

## Editing

Nearly all the content lives in `src/data.js`: projects, experience, about text, links, photos, songs and films.
Photos go in `public/photos/` (e.g. `public/photos/01.jpg` → `src: '/photos/01.jpg'`).
Songs take a normal Spotify share link and play on the page.
CVs live in `public/cv/`. Save a new version over the old file with the same name.
Project screenshots can replace the generated art in `src/components/Art.jsx`.

## Deploying

1. Make the repo `archdoesthings.github.io` public (Pages on a private repo needs GitHub Pro)
2. Push this folder to `main`
3. Repo Settings → Pages → Source: **GitHub Actions**
4. Every push to `main` rebuilds and deploys automatically
