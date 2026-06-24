## What this adds

<!-- One or two lines: which app / element / screen / skill, and why. -->

## Type

- [ ] New app pattern (`patterns/apps/<app>/APP.md`)
- [ ] Element or screen pattern
- [ ] Skill (`skills/.../SKILL.md`)
- [ ] Fix / update to an existing file
- [ ] Docs / tooling

## Checklist

- [ ] `node scripts/validate.mjs` passes locally (exits 0)
- [ ] New `APP.md` has front matter: `version`, `app`, `package`, `archetype`, `obstacle_mode`
- [ ] New `APP.md` has the **Structure**, **Obstacles**, and **Skip** sections
- [ ] Obstacles are real Android prompts (permission dialogs, login walls, upsells) with a clear `-> action`
- [ ] Destructive buttons (Post, Delete, Log out, Subscribe, ...) are in **Skip**
- [ ] No secrets, credentials, or personal data anywhere in the change
- [ ] Content is accurate and concise — described from the real app, not guessed
