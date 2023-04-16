import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://github.com/shishkin/astro-pagefind
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000/",
  integrations: [mdx(), robotsTxt(), sitemap(), pagefind()],
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