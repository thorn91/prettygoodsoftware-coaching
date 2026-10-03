import { defineConfig } from 'astro/config';

// A GitHub Pages *project* site served from a custom domain sits at the domain
// root, so there is deliberately no `base` here — setting one would prefix every
// asset with the repo name and 404 the lot.
//
// Tailwind runs through PostCSS (postcss.config.mjs) rather than the retired
// @astrojs/tailwind integration, which stops at Astro 5. The site only uses
// Tailwind's base layer (Preflight), imported in Layout.astro.
export default defineConfig({
  site: 'https://coaching.prettygoodsoftware.llc',
  // Astro 7 defaults to JSX whitespace rules, which drop the space before an
  // inline element on a new line ("then<strong>scan again</strong>"). `true`
  // is the lossless compression Astro 4 used.
  compressHTML: true,
});
