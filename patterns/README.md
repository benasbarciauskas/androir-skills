# Patterns

**Patterns are declarative knowledge.** They teach androir-mcp what Android apps
look like and how they behave so an agent can navigate them reliably — without
re-discovering structure, walking into dangerous buttons, or stalling on a
permission dialog. Patterns describe; they never act. (For step-by-step flows
that *do* things, see [`skills/`](../skills/).)

Patterns come in three scales — the same idea at different granularity:

| Scale | What it describes | Location |
|-------|-------------------|----------|
| **App patterns** | App-level structure, obstacles, and skip lists (`APP.md`) | [`apps/`](apps/) |
| **Screen patterns** | Screen archetypes built from element composition | [`screens/`](screens/) |
| **Element patterns** | Row-level UI components (bottom nav, dialogs, buttons) | [`elements/`](elements/) |

## APP.md — the format

An app pattern is a single `patterns/apps/<app>/APP.md` file: YAML-style front
matter followed by a few markdown sections. This is the highest-leverage thing
to contribute, and the only file the [validator](../scripts/validate.mjs)
enforces.

```markdown
---
version: 1
app: Example
package: com.example.android
archetype: social-feed
obstacle_mode: auto
---

# Example

## Structure
Bottom navigation bar with N tabs: ...

## Obstacles
- Runtime permission "Allow Example to send you notifications?" -> tap "Don't allow"
- Login wall -> tap the X (close) or `press_back`

## Skip
- Post
- Delete
- Log out

## Tips
- Sample infinite feeds; navigate via the bottom nav to map the app.
```

### Front matter

| Field | Required | Meaning |
|-------|----------|---------|
| `version` | yes | Pattern schema version (start at `1`). |
| `app` | yes | Human-readable app name. |
| `package` | recommended | The Android package id (e.g. `com.instagram.android`) used by `launch_app`. |
| `archetype` | yes | How the app navigates — see below. |
| `obstacle_mode` | recommended | `auto` lets the agent dismiss known obstacles during exploration. |

The `archetype` tells androir-mcp the navigation model of the app:
`social-feed`, `dashboard`, `settings-list`, `content-grid`, `conversation-list`,
`utility-display`, or `detail-form`.

### Sections

- **Structure** *(required)* — the top-level map. On Android this almost always
  starts with the **bottom navigation bar** and its tabs, plus per-tab notes.
- **Obstacles** *(required)* — `popup -> action` lines. Android runtime
  permission dialogs ("Allow", "Don't allow", "While using the app", "Only this
  time"), login / signup walls, "Turn on notifications" prompts, interest
  pickers, and in-app upsells all belong here. Listed obstacles are
  auto-dismissed during exploration.
- **Skip** *(required)* — destructive or irreversible controls the agent must
  never tap on its own: **Post**, **Delete**, **Log out**, **Subscribe**, plus
  block / report / pay actions.
- **Tips** *(optional)* — anything else worth knowing: which tabs hold the
  richest structure, that a feed is infinite, that **back = system back**
  (androir `press_back`), and so on.

## Validation

`node scripts/validate.mjs` checks that every `patterns/apps/*/APP.md` has the
required front matter (`version`, `app`, `archetype`) and the required sections
(`Structure`, `Obstacles`, `Skip`). It runs in CI on every push and PR.
