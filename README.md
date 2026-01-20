# Durango Dog Training – Demo Site

## Purpose

This project is a small, statically generated demo site modeling a local dog training business. It exists primarily as an exploration of using Astro with a hosted headless CMS (Storyblok) and modern static hosting.

The goal is to build something realistic but intentionally simple: a handful of content-driven pages, excellent performance, strong SEO fundamentals, and a maintenance experience suitable for non-technical clients.

This is not a production site.

## Tech Stack

- Astro (static site generation)
- Storyblok (headless CMS — planned)
- Netlify or similar static hosting (planned)
- Claude Code (AI-assisted development)

## Local Development

```sh
npm install
npm run dev
```

The site runs locally at http://localhost:4321 by default.

This project is built as a fully static site (no server-side rendering).

## Project Status

- Astro project scaffolded and running locally
- Pages and layout are placeholders
- Content is currently hard-coded
- CMS integration and styling will be added incrementally

## Images

This project uses Astro’s built-in image optimization.

- Photos and content images live in `src/assets/` and are rendered via `astro:assets`.
- Only a single high-quality source image is stored; Astro generates optimized variants at build time.
- The `public/` directory is reserved for assets that should be served as-is (SVGs, favicons, OG images).

See `CLAUDE.md` for detailed image-handling rules.

## Video

This project uses Cloudinary for hosting videos. Videos should not be saved into Github.
