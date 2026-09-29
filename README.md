# cflynn19.github.io

My personal site — a single page covering what I'm working on now, where I've worked,
and the projects worth looking at.

**Live:** [cflynn19.github.io](https://cflynn19.github.io)

---

## Structure

One page, four sections: About → Experience → Projects → Contact.

- `index.html` — all the markup and content
- `css/main.scss` — design tokens, layout, components
- `js/main.js` — one `IntersectionObserver` that highlights the nav link for the section
  you're reading. Everything else (smooth scrolling, the sticky header, responsive
  layout) is CSS.
- `assets/` — profile photo and project screenshots

No framework. Light and dark themes both come from CSS custom properties, following the
visitor's `prefers-color-scheme`.

## Running it

```bash
npm install
npm start          # webpack dev server, opens localhost
```

## Deploying

GitHub Pages serves the **`gh-pages`** branch, which holds the webpack build — not the
source in `master`. `index.html` has no `<script>` or stylesheet tag of its own because
`HtmlWebpackPlugin` injects them at build time, so opening the source file directly won't
show a styled page.

```bash
npm run build      # -> dist/
npm run deploy     # gh-pages -d dist
```

## Built with

HTML · SCSS · vanilla ES6 · webpack · Font Awesome
