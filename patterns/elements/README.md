# Element patterns

**Element patterns** describe a single, recurring **row-level UI component** —
the small, repeated building blocks an Android screen is assembled from: the
bottom navigation bar, a runtime permission dialog, a list row, a toolbar
action. They tell androir-mcp how to *recognise* a component from the
`describe_screen` UI tree and how to *treat* it: is it clickable, where does a
tap land, should the labels be grouped so the agent does not waste actions
poking each one.

They are the smallest scale of [pattern](../README.md). Screen patterns compose
elements; app patterns reference both.

## Format

```markdown
---
version: 1
name: <element-name>
platform: android
---

# <Title>

## Description
What the component is and why it matters for navigation.

## Visual Pattern
How it appears in the UI tree / on screen (position, count, spacing).

## Match Rules
Heuristics that identify it (element count, row height, screen zone).

## Interaction
clickable, where a tap lands, and what a tap does.

## Grouping
Whether nearby labels should be absorbed into one component.
```

## Examples in this directory

- [`bottom-nav-bar.md`](bottom-nav-bar.md) — the Android bottom navigation bar.
- [`permission-dialog.md`](permission-dialog.md) — a runtime permission request.
