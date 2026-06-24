# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-06-24

Initial pattern library.

### Added

- App patterns (`APP.md`) for **Instagram**, **TikTok**, **Threads**, and **X**,
  each with Android-specific Structure, Obstacles, Skip, and Tips sections.
- Example element patterns: bottom navigation bar and runtime permission dialog.
- Example screen pattern: the social-feed archetype.
- Example skills: an Instagram feed-browse flow and a cross-app "warm up a feed"
  workflow.
- `scripts/validate.mjs` — validates every `APP.md` for required front matter
  and sections, wired into CI on push and PR.
- Repository scaffolding: README, contributing guide, code of conduct, issue and
  PR templates, Claude Code plugin marketplace manifest, `.editorconfig`, and
  `.gitattributes`.

[Unreleased]: https://github.com/benasbarciauskas/androir-skills/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/benasbarciauskas/androir-skills/releases/tag/v0.1.0
