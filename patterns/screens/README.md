# Screen patterns

**Screen patterns** describe a recurring **screen archetype** — a whole screen
recognised by the [elements](../elements/) that compose it and the way it
navigates. Where an element pattern says "this is a bottom navigation bar", a
screen pattern says "this is a social feed: it has feed posts and a bottom nav,
it scrolls forever, and you backtrack by switching tabs". They give androir-mcp
a navigation model for the screen as a whole.

Screen archetypes line up with the `archetype` field in an
[`APP.md`](../apps/): `social-feed`, `dashboard`, `settings-list`,
`content-grid`, `conversation-list`, `utility-display`, `detail-form`.

## Format

```markdown
---
version: 1
name: <archetype>
platform: android
---

# <Title>

## Description
What this archetype is and where it shows up.

## Required Components
Element patterns that must be present.

## Supporting Components
Element patterns commonly present.

## Navigation Model
type, backtrack method, scroll behaviour, depth pattern.

## Exploration Hints
How an agent should move through it efficiently and safely.
```

## Examples in this directory

- [`social-feed.md`](social-feed.md) — the infinite social feed archetype.
