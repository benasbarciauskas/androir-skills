---
version: 1
name: Open Instagram and browse the feed
app: Instagram
package: com.instagram.android
tags: ["instagram", "social", "feed", "browse"]
---

Open Instagram, get past any first-run dialogs, and browse the Home feed by
scrolling a few posts and capturing a screenshot. Read-only — it never likes,
comments, follows, or posts.

## Steps

1. Launch **Instagram** (`launch_app` com.instagram.android).
2. Wait for the **Home** feed to appear — call `describe_screen` and look for the
   Stories tray and the bottom navigation bar.
3. If a runtime permission dialog appears ("Allow Instagram to send you
   notifications?") -> tap **Don't allow**.
4. If a "Save your login info?" or "Turn on notifications" prompt appears ->
   tap **Not now**.
5. Screenshot: "feed_top".
6. Swipe up once to scroll roughly one screen of the feed.
7. Repeat the upward swipe **${SCROLLS:-3}** times total, pausing briefly between
   swipes so content loads.
8. Screenshot: "feed_scrolled".
9. Tap the **Search** tab (magnifying glass) in the bottom navigation bar.
10. Wait for the Explore grid to appear (`describe_screen`).
11. Screenshot: "explore".
12. `press_back` (or tap **Home**) to return to the feed.

## Notes

- Do NOT tap the like / comment / share / save row on any post — that is
  engagement, not navigation.
- The feed is infinite; the `${SCROLLS}` bound keeps this skill finite.
- If a login wall blocks the Home feed, stop and report that the account is
  logged out rather than attempting to sign in.
