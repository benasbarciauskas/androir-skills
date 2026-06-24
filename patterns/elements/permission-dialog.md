---
version: 1
name: permission-dialog
platform: android
---

# Runtime Permission Dialog

## Description

The system-rendered Android runtime permission request (the
`com.android.permissioncontroller` "Grant permissions" dialog). It interrupts a
flow the first time an app needs notifications, camera, microphone, location,
photos, or contacts. It is an **obstacle**: the agent should resolve it with a
deliberate choice and continue, not get stuck on it. Because it is drawn by the
OS, the button labels are stable across apps.

## Visual Pattern

- A centred dialog over a dimmed background.
- A short title naming the app and the permission, e.g.
  "Allow Example to send you notifications?".
- 2-4 stacked or side-by-side buttons.

## Match Rules

- zone: center
- title matches: "Allow * to *" / "* wants to access *"
- buttons drawn from a fixed set (see Interaction)
- modal: blocks all other input until answered

## Interaction

- clickable: true (must pick exactly one button to proceed)
- common buttons: **Allow**, **Don't allow**, **While using the app**,
  **Only this time**, **Allow all the time** (location)
- default-safe choice during exploration: **Don't allow** (least access), unless
  the task genuinely needs the capability — then **While using the app** /
  **Only this time**
- click_result: dismisses the dialog and returns to the underlying screen
- back_after_click: false

## Grouping

- absorbs_same_row: true (group the buttons as one decision)
- never treat a permission grant as routine navigation — it is a deliberate,
  recorded choice
