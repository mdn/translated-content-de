---
title: "CaptureController: CaptureController()-Konstruktor"
short-title: CaptureController()
slug: Web/API/CaptureController/CaptureController
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der [`CaptureController`](/de/docs/Web/API/CaptureController)-Konstruktor erstellt eine neue Instanz des `CaptureController`-Objekts.

## Syntax

```js-nolint
CaptureController()
```

### Parameter

Keine.

## Beispiele

```js
// Create a new CaptureController instance
const controller = new CaptureController();

// Prompt the user to share a tab, window, or screen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Query the displaySurface value of the captured video track
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface == "browser") {
  // Focus the captured tab.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface == "window") {
  // Do not move focus to the captured window.
  // Keep the capturing page focused.
  controller.setFocusBehavior("no-focus-change");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Besseres Bildschirmteilen mit Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
