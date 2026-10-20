# dhurrbaabaa – single-page React site

    npm install
    npm run dev       # local preview
    npm run build     # production build in /dist

1. Put images in `public/images/` (filenames are listed at the top of `src/App.tsx`, object `IMG`).
   Export cut-outs from Canva as **PNG with transparent background**; photos as JPG/WebP.
2. Edit `BUY_URL` and `DEVELOPER` at the top of `src/App.tsx`.
3. Fonts: loaded in `index.html`. Replace with the exact Canva fonts (Canva > text > font name), then update
   `--script`, `--hand`, `--sans`, `--type` in `src/styles.css`. Self-hosted fonts: drop .woff2 in `public/fonts` and use @font-face.
