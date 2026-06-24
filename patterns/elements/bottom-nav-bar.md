---
version: 1
name: bottom-nav-bar
platform: android
---

# Bottom Navigation Bar

## Description

The primary navigation surface on most Android apps: a horizontal strip of 3-5
destinations pinned to the bottom of the screen (Material `BottomNavigationView`
/ `NavigationBar`). Grouping its labels into one component stops the agent from
treating each tab label as an individual fallback target and wasting taps. Tab
switching is navigation, not element interaction — the agent decides which
destination to visit; it does not blindly tap every label.

## Visual Pattern

- A single row of 3-5 short labels (often with an icon above each).
- Pinned to the bottom ~10-12% of the screen.
- Evenly spaced across the full width.
- The active destination is highlighted (filled icon / accent colour / label
  shown); inactive ones are muted.

## Match Rules

- min_elements: 3
- max_elements: 5
- zone: bottom_bar
- max_row_height_pt: 80
- spacing: evenly distributed across screen width

## Interaction

- clickable: true (each destination switches the active tab)
- click_target: the centre of the chosen destination
- click_result: swaps the screen content; does not push a back-stack entry you
  unwind with `press_back`
- back_after_click: false

## Grouping

- absorbs_same_row: true
- absorb_condition: labels share the bottom zone and are evenly spaced
- treat the whole bar as one component, then choose a single destination
