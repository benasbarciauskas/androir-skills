---
version: 1
app: X
package: com.twitter.android
archetype: social-feed
obstacle_mode: auto
---

# X

## Structure

X (formerly Twitter) is a text-and-media social feed. Bottom navigation bar with
5 tabs: **Home**, **Search / Explore** (magnifying glass), **Grok / Communities**
(varies by account), **Notifications** (bell), and **Messages** (envelope). A
floating compose button (feather / +) sits above the bottom-right corner. The
left-edge **drawer** (swipe from the left or tap the avatar, top-left) holds
Profile, Lists, Bookmarks, and Settings. Use `press_back` to unwind drill-downs.

## Home Tab

- Vertical feed of posts; "For you" and "Following" toggle along the top.
- Each post has reply / repost / like / view / bookmark / share actions.
- Pull-to-refresh at the top loads newer posts.

## Search / Explore Tab

- Search field pinned at the top, with Trends and topic tabs below.
- The richest surface for discovering accounts, hashtags, and trends.

## Notifications Tab

- "All", "Verified", and "Mentions" filter tabs along the top.
- A list of likes, reposts, follows, replies, and mentions.

## Messages Tab

- A conversation list of direct messages; tapping one opens the thread.

## Profile (via the drawer)

- Header with banner, avatar, handle, bio, and follower / following counts.
- Tab strip toggles **Posts**, **Replies**, **Highlights**, **Media**, **Likes**.

## Obstacles

- Runtime permission "Allow X to send you notifications?" -> tap "Don't allow"
- Runtime permission "Allow X to access photos and media?" -> tap "Don't allow"
- Login / signup wall "See what's happening" -> tap the X (close) or `press_back`
- "Turn on notifications" in-app prompt -> tap "Not now" / "Skip for now"
- **X Premium** / "Subscribe to Premium" upsell sheet -> dismiss via the X or `press_back`
- "Add X to your Home screen" prompt -> tap "Cancel"
- "Choose your topics / who to follow" interstitial -> tap "Skip"
- Grok / AI promo sheet -> dismiss via `press_back`

## Skip

- **Post** (publishes a post — never tap during exploration)
- **Delete** (removes a post or the account)
- **Log out** (under the drawer -> Settings)
- **Subscribe** / **Subscribe to Premium** (a paid action)
- **Block** / **Report** / **Mute** (moderation actions)
- **Repost** / **Follow** unless that is the explicit task

## Tips

- The Profile entry lives in the left drawer, not the bottom nav — open it from
  the avatar at the top-left or by swiping in from the left edge.
- "For you" is algorithmic and effectively infinite; sample, then move on.
- The floating feather button composes a post; avoid it during exploration.
- `press_back` from any thread, profile, or settings screen returns cleanly.
