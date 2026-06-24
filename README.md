<a id="readme-top"></a>

<div align="center">

# androir-skills

**Patterns and skills that make [androir-mcp](https://github.com/benasbarciauskas/androir-mcp) drive Android apps reliably.**

A community library of declarative **patterns** (what Android apps look like and
where the dangers are) and imperative **skills** (step-by-step flows an agent
runs) for the `androir-mcp` Android automation server.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square)](LICENSE)
[![Patterns](https://img.shields.io/badge/patterns-4%20apps-6E56CF?style=flat-square)](patterns/apps)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/benasbarciauskas/androir-skills/pulls)
[![Stars](https://img.shields.io/github/stars/benasbarciauskas/androir-skills?style=flat-square)](https://github.com/benasbarciauskas/androir-skills/stargazers)

</div>

> [!NOTE]
> This repo is a **content library**, not a program. It ships markdown patterns
> and skills that [`androir-mcp`](https://github.com/benasbarciauskas/androir-mcp)
> reads to navigate Android apps. There is nothing to run here except the
> validator — point androir at this directory (or install it as a Claude Code
> plugin) and the content does the work.

## ✨ What is this?

`androir-mcp` gives an AI agent a clean way to drive a real Android device over
`adb` — capture the screen, read the live `uiautomator` UI tree, tap, swipe,
type. That tells the agent *how* to act, but not *what each app is*: where the
tabs are, which dialogs interrupt a fresh install, which buttons must never be
tapped on autopilot.

**androir-skills fills that gap.** It is two kinds of content:

- **Patterns** — declarative knowledge about Android apps and UI. An app's
  `APP.md` maps its bottom-nav structure, lists the obstacles to auto-dismiss
  (permission dialogs, login walls, upsells), and flags the destructive buttons
  to skip. Smaller-scale element and screen patterns describe the reusable
  building blocks.
- **Skills** — imperative flows. Numbered steps written as intents ("Tap
  **Search**", "Swipe up", "Dismiss the permission dialog") that the agent
  resolves against the live UI tree, so they survive layout and locale changes.

It is its own original project — Android-specific from the ground up, not a port
of any other skills library.

<p align="right"><a href="#readme-top">back to top ↑</a></p>

## 🗂️ Structure

```
androir-skills/
├── patterns/                      # declarative knowledge
│   ├── README.md                  # the pattern format
│   ├── apps/                      # APP.md per app
│   │   ├── instagram/APP.md
│   │   ├── tiktok/APP.md
│   │   ├── threads/APP.md
│   │   └── x/APP.md
│   ├── elements/                  # row-level UI components
│   │   ├── README.md
│   │   ├── bottom-nav-bar.md
│   │   └── permission-dialog.md
│   └── screens/                   # screen archetypes
│       ├── README.md
│       └── social-feed.md
├── skills/                        # imperative flows
│   ├── README.md
│   ├── apps/
│   │   └── instagram/SKILL.md
│   └── workflows/
│       └── warm-up-feed/SKILL.md
└── scripts/
    └── validate.mjs               # validates every APP.md
```

<p align="right"><a href="#readme-top">back to top ↑</a></p>

## 🧩 Patterns vs Skills

The library has two halves with two jobs:

| | Patterns | Skills |
|---|---|---|
| **Kind** | Declarative knowledge | Imperative flow |
| **Answers** | "What does this app look like, and where are the dangers?" | "Do this sequence of actions." |
| **Acts?** | No — read-only context for the agent | Yes — taps, swipes, types |
| **Format** | `APP.md` + element / screen `.md` | `SKILL.md` (numbered steps) |
| **Lives in** | [`patterns/`](patterns/) | [`skills/`](skills/) |

Patterns make the agent *understand* an app; skills make it *do* something in
one. A good skill leans on the matching pattern — it dismisses the obstacles the
`APP.md` already enumerated and steers clear of the buttons it marked skip.

<p align="right"><a href="#readme-top">back to top ↑</a></p>

## 🚀 Using these with androir-mcp

Clone the library where androir-mcp looks for patterns, or point androir at it
directly.

```bash
# Clone alongside androir-mcp (recursively scanned)
git clone https://github.com/benasbarciauskas/androir-skills ~/.androir-mcp/skills

# Or into a project-local directory
git clone https://github.com/benasbarciauskas/androir-skills .androir-mcp/skills
```

Then run androir-mcp as usual — it reads the `APP.md` for whatever app you drive,
loads the obstacle and skip lists, and uses the skills as ready-made flows.

### As a Claude Code plugin

```bash
claude plugin marketplace add benasbarciauskas/androir-skills
claude plugin install skills@androir-skills
```

<p align="right"><a href="#readme-top">back to top ↑</a></p>

## 🤝 Contributing

The most valuable contribution is an **`APP.md` for an app you use** — its
bottom-nav structure, the obstacles to auto-dismiss, and the destructive buttons
to skip.

1. Fork and branch: `git checkout -b feat/<app>-pattern`.
2. Add `patterns/apps/<app>/APP.md` with front matter (`version`, `app`,
   `package`, `archetype`, `obstacle_mode`) and the **Structure**, **Obstacles**,
   and **Skip** sections (see [`patterns/README.md`](patterns/README.md)).
3. Validate: `node scripts/validate.mjs` — it must exit 0.
4. Open a PR.

Element patterns, screen patterns, and skills are welcome too — see
[CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

<p align="right"><a href="#readme-top">back to top ↑</a></p>

## 🗺️ Status & roadmap

This library **fills in progressionally** — it starts with the apps and building
blocks below and grows as people contribute patterns for the apps they use.

- [x] Repository structure (patterns / skills / validator / CI)
- [x] App patterns for **Instagram**, **TikTok**, **Threads**, and **X**
- [x] Example element patterns (bottom nav bar, permission dialog)
- [x] Example screen pattern (social feed)
- [x] Example skills (browse a feed; warm-up workflow)
- [x] `APP.md` validator wired into CI
- [ ] App patterns for more apps (Reddit, YouTube, Snapchat, WhatsApp, ...)
- [ ] A fuller **element pattern** library (list rows, toolbars, dialogs, sheets)
- [ ] A fuller **screen pattern** library (settings list, content grid, conversation list)
- [ ] Skill packs per app (search, profile, settings flows)
- [ ] A browsable pattern / skill marketplace

<p align="right"><a href="#readme-top">back to top ↑</a></p>

## 📄 License

Distributed under the Apache License 2.0. See [`LICENSE`](LICENSE) for details.

<p align="right"><a href="#readme-top">back to top ↑</a></p>
