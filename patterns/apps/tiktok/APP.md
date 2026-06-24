---
version: 1
app: TikTok
package: com.zhiliaoapp.musically
archetype: social-feed
obstacle_mode: auto
---

# TikTok

## Structure

Full-screen video app with a bottom navigation bar of 5 tabs: **Home** (For You
/ Following), **Friends**, **+** (Create, centre), **Inbox** (Activity), and
**Profile**. The feed itself fills the screen with no chrome, so the bottom nav
is the only reliable way to move between sections. Use `press_back` to leave a
drill-down such as a profile, sound page, or settings list.

## Home Tab

- Full-screen vertical video. **Swipe up** (`swipe` upward) for the next clip — do NOT tap.
- "For You" and "Following" toggle along the top of the feed.
- The right-edge column (avatar, like, comment, bookmark, share) is engagement.
- The bottom shows the creator handle, caption, and the sound name.

## Friends Tab

- Surfaces content from accounts you follow and contacts.
- Same full-screen video model as Home.

## Inbox Tab

- Activity list: likes, comments, follows, and system notices.
- Top-right opens direct messages (a conversation list).

## Profile Tab

- Header with handle, follower / following / likes counts.
- A grid of the account's videos below the header.
- The hamburger / gear (top-right) opens **Settings and privacy** — a settings list.

## Obstacles

- Runtime permission "Allow TikTok to send you notifications?" -> tap "Don't allow"
- Runtime permission "Allow TikTok to record audio / take pictures?" -> tap "Don't allow"
- Login / signup wall "Sign up for TikTok" -> tap the X (close) or `press_back`
- "Turn on notifications" in-app prompt -> tap "Not now"
- Interest picker "Choose your interests" -> tap "Skip"
- "Add to Home screen" prompt -> tap "Cancel"
- Age-gate / content-preference sheet -> tap "Skip" or dismiss
- LIVE or shopping interstitial -> tap the X to close

## Skip

- **Post** (publishes a video — never tap during exploration)
- **Delete** (removes a video or the account)
- **Log out** (under Settings and privacy)
- **Subscribe** (creator subscriptions; a paid action)
- **Recharge** / **Send Gift** (in-app currency; a paid action)
- **Report** / **Block** (moderation actions)

## Tips

- The For You feed is infinite — read a few clips, then move via the bottom nav.
- Always advance video with an upward `swipe`; tapping pauses or opens overlays.
- The **+** tab opens the camera; skip it unless creating is the task.
- Profile and Inbox have the most navigable structure; the feed has the least.
