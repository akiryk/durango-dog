# Claude Code Instructions

This repository contains a small, statically generated demo site built with Astro.
It models a local dog training business website.

## Project Goals

- Build a realistic but intentionally simple static site
- Optimize for performance, SEO, and clarity
- Use Storyblok as a hosted headless CMS (integration will be added later)
- Keep the codebase easy to understand and maintain

This is a demo and exploration project, not a production site.

## Tech Stack

- Astro (static site generation only — no SSR)
- Storyblok (planned CMS integration)
- Deployed to static hosting (Netlify or similar)
- No framework hydration unless explicitly requested

## Development Guidelines

- Prefer **simple, readable solutions** over clever abstractions
- Make **small, incremental changes**
- Do not refactor unrelated files
- Avoid introducing unnecessary dependencies
- Keep components minimal and composable
- Assume content will eventually come from Storyblok, even if hard-coded for now

## Styling

- Use Tailwind CSS for styling
- Prefer:
  - Clear, readable utility usage
  - Minimal custom configuration
- Avoid heavy UI component libraries or CSS frameworks that impose markup or behavior
- Favor semantic HTML and accessibility by default

## Content & Pages

- Pages include: Home, Services, About, Contact
- Content should be realistic but generic (demo site)
- Do not invent real businesses, addresses, phone numbers, or people unless asked

## What NOT to Do

- Do not introduce server-side rendering
- Do not add authentication or complex state
- Do not add analytics, tracking, or third-party scripts unless requested
- Do not rewrite large sections of the codebase without explanation

## Working Style

- When making changes, explain **what** you changed and **why**
- If unsure about an approach, ask before proceeding
- Prefer clarity over verbosity

## Image Handling Rules (Do Not Deviate)

- JPEG/PNG photos must be placed in `src/assets/`, not `public/`.
- Store exactly one high-quality source image per asset. Do not manually resize or compress images.
- All images from `src/assets/` must be rendered using Astro's `Image` component from `astro:assets`.
- Do not use raw `<img>` tags for images that live in `src/assets/`.
- The `public/` directory is reserved for assets that must be served as-is (SVG logos, icons, favicons, OG images).
- **Exception:** Video poster images (e.g., `public/image/dogsvideo.jpg`) may live in `public/` since they're tied to externally-hosted videos and need a direct URL.

**Why this matters:** Images in `public/` bypass Astro's optimization pipeline — they won't be resized, converted to modern formats (WebP/AVIF), or lazy-loaded automatically.

**Example usage:**
```astro
---
import { Image } from 'astro:assets';
import hero from '../assets/hero.jpg';
---

<Image src={hero} alt="Description of the image" />
```

The goal is to rely entirely on Astro's build-time image optimization and avoid manual image processing workflows.
