---
title: "CaptureController: CaptureController() Konstruktor"
short-title: CaptureController()
slug: Web/API/CaptureController/CaptureController
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der {{domxref("CaptureController")}} Konstruktor erstellt eine neue `CaptureController` Objektinstanz.

## Syntax

```js-nolint
CaptureController()
```

### Parameter

Keine.

## Beispiele

```js
// Erstellen Sie eine neue CaptureController-Instanz
const controller = new CaptureController();

// Fordern Sie den Benutzer auf, einen Tab, ein Fenster oder den Bildschirm zu teilen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Abfragen des displaySurface-Werts des erfassten Videotracks
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface == "browser") {
  // Fokussieren Sie den erfassten Tab.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface == "window") {
  // Den Fokus nicht auf das erfasste Fenster verschieben.
  // Die fokussierende Seite bleibt unverändert.
  controller.setFocusBehavior("no-focus-change");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Besseres Bildschirmteilen mit bedingtem Fokus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
