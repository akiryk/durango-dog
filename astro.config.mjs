// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';

// Load environment variables
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// Debug: log first few characters of token (remove after confirming it works)
console.log('Storyblok token loaded:', env.STORYBLOK_TOKEN ? env.STORYBLOK_TOKEN.substring(0, 8) + '...' : 'NOT FOUND');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      region: 'us',
      components: {
        page: 'storyblok/Page',
        hero_section: 'storyblok/HeroSection',
        why_it_works: 'storyblok/WhyItWorks',
        who_its_for: 'storyblok/WhoItsFor',
        footer: 'storyblok/Footer',
        footer_value_prop: 'storyblok/FooterValueProp',
        footer_site_map: 'storyblok/FooterSiteMap',
        footer_link: 'storyblok/FooterLink',
        footer_get_in_touch: 'storyblok/FooterGetInTouch',
        footer_copy_right: 'storyblok/FooterCopyRight',
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});