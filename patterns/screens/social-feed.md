---
version: 1
name: social-feed
platform: android
---

# Social Feed

## Description

An infinite, vertically scrolling stream of user-generated content. This is the
home screen of Instagram, TikTok, Threads, and X on Android. Content never runs
out, so exploration must favour **bottom-nav navigation over scrolling** — the
goal is to map the app, not to consume the feed.

## Required Components

- feed-post (or full-screen video item)
- bottom-nav-bar

## Supporting Components

- profile-header
- search-bar
- permission-dialog (frequently interrupts on first run)

## Navigation Model

- type: infinite-scroll
- backtrack: switch tabs via the bottom nav; `press_back` (androir `press_back`)
  to leave any drill-down (a post detail, profile, or settings list)
- scroll_behavior: infinite — text feeds scroll, video feeds advance on an
  upward `swipe`
- depth_pattern: flat at the top level; tabs reveal deeper structure

## Exploration Hints

- Do NOT scroll the feed indefinitely — sample 2-3 items, then switch tabs.
- For video feeds (TikTok, Reels), advance with an upward `swipe`, never a tap;
  tapping pauses playback or opens an overlay.
- Profile and Search / Explore tabs hold the richest navigable structure.
- The action row on each post (like / comment / share / save) is engagement, not
  navigation — skip it during exploration.
- Resolve any permission dialog immediately (default to "Don't allow") so the
  feed is not blocked.
