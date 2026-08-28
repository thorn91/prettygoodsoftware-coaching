import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// A GitHub Pages *project* site served from a custom domain sits at the domain
// root, so there is deliberately no `base` here — setting one would prefix every
// asset with the repo name and 404 the lot.
export default defineConfig({
  site: 'https://coaching.prettygoodsoftware.llc',
  integrations: [tailwind()],
});
