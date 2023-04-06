import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// Shiki syntax-highlighting theme
import catppuccin_mocha from "./src/themes/catppuccin-mocha.json";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000/",
  integrations: [mdx(), robotsTxt(), sitemap()],
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: catppuccin_mocha,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['python'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});