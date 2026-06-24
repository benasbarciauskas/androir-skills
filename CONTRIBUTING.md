# Contributing to androir-skills

Thanks for helping grow the library! It is a collection of **patterns** (what
Android apps look like) and **skills** (flows an agent runs) for
[androir-mcp](https://github.com/benasbarciauskas/androir-mcp). The most useful
thing you can add is an `APP.md` for an app you actually use.

## What you can add

| Contribution | Where it goes |
|---|---|
| App pattern | `patterns/apps/<app>/APP.md` |
| Element pattern | `patterns/elements/<element>.md` |
| Screen pattern | `patterns/screens/<archetype>.md` |
| Single-app skill | `skills/apps/<app>/SKILL.md` |
| Cross-app workflow | `skills/workflows/<name>/SKILL.md` |

Read [`patterns/README.md`](patterns/README.md) and
[`skills/README.md`](skills/README.md) for the formats.

## Add an APP.md

This is the highest-leverage contribution and the only file the validator
enforces.

1. Create `patterns/apps/<app>/APP.md`.
2. Add the front matter:

   ```yaml
   ---
   version: 1
   app: Example
   package: com.example.android
   archetype: social-feed
   obstacle_mode: auto
   ---
   ```

   - `package` is the Android package id — find it in the Play Store URL
     (`?id=...`) or via `adb shell pm list packages`.
   - `archetype` is one of `social-feed`, `dashboard`, `settings-list`,
     `content-grid`, `conversation-list`, `utility-display`, `detail-form`.

3. Write the sections:
   - **Structure** *(required)* — the bottom-nav tabs and a note per tab.
   - **Obstacles** *(required)* — `popup -> action` lines for real Android
     prompts: runtime permission dialogs (**Allow** / **Don't allow** /
     **While using the app** / **Only this time**), login / signup walls,
     "Turn on notifications", interest pickers, and in-app upsells.
   - **Skip** *(required)* — destructive buttons the agent must never tap:
     **Post**, **Delete**, **Log out**, **Subscribe**, plus block / report / pay.
   - **Tips** *(optional)* — anything else worth knowing.

Describe the app from the real thing, not from memory — accuracy is the point.

## Add a skill

Write steps as **intents**, not coordinates. The agent reads each screen with
`describe_screen`, finds the named element, and adapts. Use `${VAR:-default}` for
configurable values, include a safety bound on any loop, and keep it read-only
unless the task genuinely needs to act. Never hardcode credentials.

## Validate

```bash
node scripts/validate.mjs
```

The validator checks every `patterns/apps/*/APP.md` for the required front
matter (`version`, `app`, `archetype`) and the required sections (`Structure`,
`Obstacles`, `Skip`). It must exit 0. The same check runs in CI on every push
and PR.

## PR flow

1. Fork and branch: `git checkout -b feat/<app>-pattern`.
2. Make your change and run `node scripts/validate.mjs`.
3. Commit with a clear message and open a pull request.
4. Fill in the PR checklist so reviewers can confirm it validates and the
   sections are present.

By contributing you agree your contribution is licensed under the repository's
[Apache 2.0 License](LICENSE).
