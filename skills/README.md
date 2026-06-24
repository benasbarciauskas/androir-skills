# Skills

**Skills are imperative flows.** Where [patterns](../patterns/) are declarative
knowledge ("this is what the app looks like"), a skill is a numbered sequence of
**intents** the agent executes ("open the app, scroll a few posts, screenshot").
Steps name elements and actions — they do not hardcode pixel coordinates. The
agent reads each screen with `describe_screen`, finds the named element, and
adapts to layout, locale, and unexpected dialogs as it goes.

| | Patterns | Skills |
|---|---|---|
| **Kind** | Declarative knowledge | Imperative flow |
| **Answers** | "What does this app look like?" | "Do this sequence of actions." |
| **Acts?** | No — read-only context | Yes — taps, swipes, types |
| **Format** | `APP.md` / element / screen `.md` | `SKILL.md` (steps) |

## SKILL.md — the format

```markdown
---
version: 1
name: Browse the Instagram feed
app: Instagram
package: com.instagram.android
tags: ["instagram", "social", "browse"]
---

What this skill does, in one or two sentences.

## Steps

1. Launch **Instagram** (`launch_app` com.instagram.android)
2. Wait for the **Home** feed to appear (`describe_screen`)
3. Dismiss any runtime permission dialog -> tap "Don't allow"
4. Swipe up to scroll one screen of the feed
5. Screenshot: "feed"
```

### Front matter

| Field | Required | Meaning |
|-------|----------|---------|
| `version` | yes | Skill schema version (start at `1`). |
| `name` | yes | Human-readable skill name. |
| `app` | for app skills | The app the skill drives. |
| `package` | recommended | Android package id for `launch_app`. |
| `tags` | recommended | Searchable labels. |

### Steps

Steps map onto the androir-mcp tool surface — `launch_app`, `describe_screen`,
`screenshot`, `tap`, `swipe`, `long_press`, `type_text`, `press_key`,
`press_home`, `press_back`, `open_url`. Write them as intents ("Tap **Search**",
"Swipe up", "Dismiss the permission dialog") and let the agent resolve labels
to coordinates from the live UI tree.

## Layout

- [`apps/<app>/`](apps/) — single-app flows (browse a feed, open search).
- [`workflows/`](workflows/) — cross-app or multi-step sequences.

## Variables

Use `${VAR}` placeholders for configurable values, with `${VAR:-default}` for a
fallback. Never hardcode credentials in a skill — load them from the
environment, and let the agent ask if a value is missing.
