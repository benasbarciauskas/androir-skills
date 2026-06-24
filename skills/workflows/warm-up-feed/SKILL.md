---
version: 1
name: Warm up a feed
app: any
tags: ["workflow", "social", "feed", "browse", "cross-app"]
---

A cross-app "warm-up": open any social app, then browse its feed by scrolling
through **${POSTS:-10}** posts, dwelling **1-5 seconds** on each so content loads
and renders the way a real reading session would. Works for Instagram, TikTok,
Threads, or X — pass the package via `${PACKAGE}` and the app's display name via
`${APP}`. Read-only: it scrolls and observes, never likes, follows, or posts.

## Steps

1. Launch the target app (`launch_app` **${PACKAGE:-com.instagram.android}**).
2. Wait for the feed to appear — call `describe_screen` and look for the bottom
   navigation bar and the first feed item.
3. Resolve any first-run obstacle (see the app's `APP.md`):
   - runtime permission dialog -> tap **Don't allow**
   - "Turn on notifications" prompt -> tap **Not now**
   - login / signup wall -> tap the **X** (close) or `press_back`; if it cannot
     be dismissed, stop and report the account is logged out
4. Screenshot: "warmup_start".
5. Repeat **${POSTS:-10}** times:
   1. Swipe up once to advance one post (an upward `swipe`; for video feeds this
      is the correct "next" gesture — do not tap).
   2. Dwell a random **1-5 seconds** so the post loads and would be "read".
   3. Every 5th iteration, `describe_screen` to confirm the feed is still
      advancing and no obstacle has appeared (resolve it per step 3 if so).
6. Screenshot: "warmup_end".

## Notes

- The dwell is deliberate: scrolling without pausing can outrun content loading
  and trips some feeds into a refresh.
- `${POSTS}` is the safety bound — the loop is always finite.
- Keep it read-only. The whole point is to browse, so never tap engagement or
  compose controls.
- For per-app obstacle and skip lists, read that app's
  [`patterns/apps/<app>/APP.md`](../../../patterns/apps/) first.
