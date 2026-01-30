# Layout Patterns & Grid Intent Specification

_(Human- and AI-readable)_

---

## Purpose

This document defines a shared vocabulary and intent model for layout using a column-based grid.

Its goal is to eliminate ambiguity when expressing layout requirements—especially in cases where **content alignment** and **background paint regions** differ.

This specification is intended to be used by:

- designers
- frontend developers
- AI coding assistants

It reflects **practical constraints of CSS Grid**, including how gutters behave with background painting.

---

## 1. Grid Foundations (Structural Content Grid)

All layouts are built on a **structural content grid**.

**Baseline grid (example configuration):**

- Columns: 9
- Outer margins: 40px
- Gutters: 40px
- Content aligns to **column tracks**
- Grid lines define column boundaries

> The grid defines **content alignment and rhythm**.
> It does **not** define background paint regions.

---

## 2. Critical Distinction: Content vs Background Paint

Every layout element must be described using **two independent dimensions**:

### A. Content Span (Structural)

- How many columns the _content_ (text, images, media) occupies
- Expressed in columns or grid lines
- Example: “content spans 5 columns (columns 3–7)”

Content span is implemented using the grid.

---

### B. Background Paint Region (Visual)

- How far a background color visually extends
- Background paint **does not follow grid gutters**
- Backgrounds are **not expected** to align to column tracks

> Background paint is a **visual concern**, not a grid concern.

As a result, background regions are typically implemented using:

- gradients on the grid’s parent container
- or other paint-only techniques

---

## 3. Background Paint Patterns (Named)

All background treatments must use one of the following **named paint patterns**.

These patterns describe **visual regions**, not layout containers.

Each pattern includes example intent language.
Numeric examples are illustrative only.

---

### Pattern 1: Full-Bleed Paint Band

**Description**

- Content spans N columns
- Background color fills the entire horizontal region (edge to edge)

**Implementation guidance**

- Background applied to the section or grid parent
- Does not rely on grid items for paint

**Example intent language**

> “Full-bleed paint band; content spans 5 columns (columns 3–7)”

**Use cases**

- hero sections
- strong visual dividers

---

### Pattern 2: Contained Paint Region (Symmetric)

**Description**

- Content spans N columns
- Background paint fills a bounded region centered around the content
- Visual padding is symmetric

**Implementation guidance**

- Background defined via gradient stops
- Content remains aligned to grid columns

**Example intent language**

> “Contained paint region with symmetric padding; content spans 5 columns (columns 3–7)”

**Use cases**

- readable emphasis areas
- calm visual grouping

---

### Pattern 3: Asymmetric Paint Region

**Description**

- Content spans N columns
- Background paint extends beyond content on one side only
- Opposite side aligns visually with content edge

**Directionality is required**

- **leading**: paint extends before the content
- **trailing**: paint extends after the content

**Implementation guidance**

- Use a background gradient on the grid parent
- Gradient stops expressed as percentages of total width

**Example intent language**

> “Asymmetric paint region (trailing); background extends to the right of content. Content spans 5 columns (columns 3–7).”

**Use cases**

- editorial layouts
- directional emphasis

---

### Pattern 4: Tight Paint Region

**Description**

- Background paint hugs content closely
- Minimal or no visual padding

**Implementation guidance**

- Typically applied directly to content wrapper
- Does not involve gutters

**Example intent language**

> “Tight paint region aligned to content edges”

**Use cases**

- badges
- labels
- compact callouts

---

## 4. Expressing Layout Intent (Required Practice)

Every layout instruction must specify **both**:

1. **Content span** (structural, grid-based)
2. **Background paint pattern** (visual, paint-based)

Optional parameters (directionality, relative width, breakpoint behavior) should be included when relevant.

### Example

```text
Grid: 9 columns
Content span: 5 columns (columns 3–7)
Background paint pattern: Asymmetric (trailing)
Paint behavior:
  - paint occupies ~66% of total width
  - remaining region is transparent
```

## Implementation Guidance (Non-Normative)

- Prefer native layout mechanisms (CSS Grid, container padding)
- Avoid pseudo-elements (`::before`, `::after`) for panel sizing unless explicitly required
- Do not use positional offsets to simulate grid alignment

> If a layout cannot be expressed using **content span + panel pattern**, the intent is underspecified.

---

## Screenshots & Diagrams (Recommended)

Screenshots are **illustrative**, not normative:

- they clarify intent
- they do not override written definitions
- they should not be used for measurement

---

## Design System Rule

> Grids define alignment.
> Panels define containment.
> They must be specified independently.

---

```

```
