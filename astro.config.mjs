import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heckletbot.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') && !page.includes('/about') && !page.includes('/resume'),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
    },
  },
  redirects: {
    '/2024/11/13/moka': '/posts/moka/',
    '/archives': '/archive/',
    '/archives/2024': '/archive/',
    '/archives/2024/11': '/archive/',
    '/categories': '/archive/',
    '/categories/博客': '/archive/',
    '/links': '/',
    '/tags': '/archive/',
  },
});
