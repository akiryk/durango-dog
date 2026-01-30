# Dev Grid Overlay Tool

## Purpose

This project includes a **dev-only grid overlay** used to visually verify that
content aligns correctly to the site’s column grid.

The overlay exists to:

- debug layout alignment
- validate grid-based design decisions
- catch subtle spacing errors early
- provide a shared visual reference for humans and AI tools

This tool is **never included in production builds**.

---

## What This Tool Is (and Is Not)

**Is:**

- a diagnostic overlay
- dev-only
- project-configurable
- independent of page content

**Is not:**

- a production feature
- a layout system
- a CSS framework
- shipped to users

---

## How It Works (High Level)

- A fixed-position overlay is mounted in the DOM **only in development**
- The overlay renders vertical columns, gutters, and margins
- Grid dimensions are driven by a project-level config file
- The overlay sits above page content and does not affect layout

---

## File Structure

```text
dev/
  grid-overlay/
    GridOverlay.ts
    mountGridOverlay.ts

src/
  scripts/
    dev-grid-overlay.ts

layout.config.ts
```

## Configuration

Grid dimensions are defined in a single config file:

```text
// layout.config.ts
export const layoutConfig = {
  columns: 9,
  gutter: 40,
  margin: 40,
  color: 'rgba(255, 0, 255, 0.15)' // default overlay color
};
```

Each project can change these values to match its grid system.

## Mounting the Overlay (Dev Only)

The overlay is mounted via a dev-only script.

```text
// src/scripts/dev-grid-overlay.ts
import { mountGridOverlay } from '../../dev/grid-overlay/mountGridOverlay';

mountGridOverlay();
```

This script is loaded conditionally in the base layout:

```text
{import.meta.env.DEV && (
  <script type="module" src="/src/scripts/dev-grid-overlay.ts"></script>
)}
```

This ensures:

- the overlay is available during npm run dev
- the overlay is excluded from production builds

## Key Design Principles

- The overlay does not use CSS Grid
- It renders absolute-positioned columns based on math
- It must match the same margins and gutters as the real layout
- It must never influence layout or measurements
- It is visual-only

## Reusing This Tool in Another Project

1. To reproduce this tool in a new repo:
2. Copy the dev/grid-overlay/ directory
3. Add a layout.config.ts matching the new project’s grid
4. Add a dev-only entry script (e.g. src/scripts/dev-grid-overlay.ts)
5. Load that script conditionally in the base layout
6. Adjust overlay color if needed for visibility
7. This tool intentionally has no dependencies on framework-specific APIs beyond DOM access.

## Why This Exists

CSS Grid devtools show grid lines per element.
This tool shows the global layout grid, across the entire page, at once.

That difference is critical for diagnosing:

- background alignment
- panel boundaries
- grid-breaking visual elements
- asymmetric layouts
