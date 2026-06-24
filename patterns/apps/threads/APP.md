---
version: 1
app: Threads
package: com.instagram.barcelona
archetype: social-feed
obstacle_mode: auto
---

# Threads

## Structure

Meta's text-first social app, built on the Instagram account system. Bottom
navigation bar with 5 tabs: **Home** (feed), **Search** (magnifying glass),
**Create** (pencil / +, centre), **Activity** (heart), and **Profile**. The
feed is a scrolling column of text posts ("threads"). Use `press_back` to exit a
thread detail, a profile, or the settings list.

## Home Tab

- Vertical feed of text posts, each with optional media, links, and replies.
- "For you" and "Following" toggle near the top of the feed.
- Each post has like / reply / repost / share actions in a row beneath it.
- The Threads logo at the top centre scrolls the feed to the top when tapped.

## Search Tab

- Search field at the top to look up profiles and keywords.
- Below it, suggested and trending profiles to follow.

## Activity Tab

- Notifications list: follows, likes, replies, reposts, mentions, and quotes.
- Filter chips along the top narrow the activity type.

## Profile Tab

- Header with avatar, name, handle, bio, and follower count.
- A tab strip toggles **Threads**, **Replies**, and **Reposts**.
- The hamburger (top-right) opens **Settings** — a settings list.

## Obstacles

- Runtime permission "Allow Threads to send you notifications?" -> tap "Don't allow"
- Runtime permission "Allow Threads to access photos and media?" -> tap "Don't allow"
- "Turn on notifications" in-app prompt -> tap "Not now"
- "Finish setting up your profile" sheet -> tap "Skip" or `press_back`
- "Follow suggested profiles" interstitial -> tap "Skip"
- "Add Threads to your Home screen" prompt -> tap "Cancel"
- Cross-posting / "Also share to Instagram" sheet -> dismiss via `press_back`

## Skip

- **Post** (publishes a thread — never tap during exploration)
- **Delete** (removes a post or the account)
- **Log out** (under Settings)
- **Deactivate profile** (under Settings)
- **Block** / **Report** / **Mute** (moderation actions)
- **Repost** / **Follow** unless that is the explicit task

## Tips

- The feed is a continuous column — read a handful of posts, then use the nav.
- Tapping a post opens the thread detail with replies; `press_back` returns.
- Threads shares the Instagram login, so logged-out state mirrors Instagram's.
- The Create tab opens a composer; skip it unless posting is the task.
