---
version: 1
app: Instagram
package: com.instagram.android
archetype: social-feed
obstacle_mode: auto
---

# Instagram

## Structure

Bottom navigation bar with 5 tabs: **Home** (feed), **Search** (Explore /
magnifying glass), **Reels** (clapperboard, centre), **Shop / Notifications**
(varies by account), and **Profile** (avatar, far right). The active tab is
filled; inactive tabs are outlined. Use `press_back` (androir `press_back`) to
unwind any drill-down — Instagram does not always render an in-app up arrow.

## Home Tab

- Vertical feed of posts and ads; the top row is the Stories tray.
- Each post has a like / comment / share / save action row underneath.
- Logo at top-left; the messaging (DM) icon sits top-right.
- Pull-to-refresh at the very top reloads the feed.

## Search Tab

- Search field pinned at the top over a content grid (Explore).
- Tapping a grid cell opens a media viewer — `press_back` returns to the grid.
- The richest place to discover hashtags, audio, and accounts.

## Reels Tab

- Full-screen vertical video. **Swipe up** to advance (`swipe` upward), never tap.
- Right-edge column is engagement (like / comment / share / more), not navigation.
- Treat as an infinite stream: read a few, then leave via the bottom nav.

## Profile Tab

- Header with avatar, follower / following counts, and bio.
- Tab strip below the bio toggles the grid / reels / tagged views.
- The hamburger (top-right) opens **Settings and activity** — a settings list.

## Obstacles

- Runtime permission "Allow Instagram to send you notifications?" -> tap "Don't allow"
- Runtime permission for camera / microphone (on Reels / Create) -> tap "Don't allow"
- Runtime permission "Allow Instagram to access photos and media?" -> tap "Don't allow"
- "Turn on notifications" in-app banner -> tap "Not now"
- "Save your login info?" -> tap "Not now"
- "Add Instagram to your Home screen" prompt -> tap "Cancel" or `press_back`
- Suggested-accounts / "Discover people" interstitial -> tap "Skip"
- "Meta Verified" / blue-tick upsell sheet -> dismiss via the X or `press_back`

## Skip

- **Share** / **Post** (publishes a post or story — never tap during exploration)
- **Delete** (removes posts, comments, or the account)
- **Log out** (under Settings and activity)
- **Subscribe** (creator subscriptions; a paid action)
- **Block** / **Report** (moderation actions on other users)
- **Follow** / **Unfollow** unless that is the explicit task

## Tips

- Reels and the Stories tray are infinite media — sample, don't binge-scroll.
- Navigate via the bottom nav to map the app; avoid wandering into post threads.
- The DM inbox (top-right of Home) is a conversation list, not part of the nav.
- After opening any media viewer or sheet, `press_back` reliably returns you.
