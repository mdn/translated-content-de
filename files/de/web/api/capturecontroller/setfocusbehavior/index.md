---
title: "CaptureController: setFocusBehavior()-Methode"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setFocusBehavior()`**-Methode des [`CaptureController`](/de/docs/Web/API/CaptureController)-Interfaces steuert, ob der erfasste Tab oder das Fenster fokussiert wird, wenn ein zugehöriges [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) {{jsxref("Promise")}} erfüllt wird, oder ob der Fokus bei dem Tab bleibt, der die aufzeichnende App enthält.

Sie können dieses Verhalten mehrfach vor dem Aufruf von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) festlegen oder einmal unmittelbar nachdem dessen `Promise` erfüllt wird. Danach wird das Fokusverhalten als finalisiert betrachtet und kann nicht mehr geändert werden.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameter

- `focusBehavior`
  - : Ein enumerierter Wert, der beschreibt, ob der Benutzeragent den Fokus auf die erfasste Anzeigefläche übertragen oder die aufzeichnende App fokussiert lassen sollte. Mögliche Werte sind `focus-captured-surface` (Fokus übertragen) und `no-focus-change` (Fokus auf der aufzeichnenden App beibehalten).

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Der Aufnahmestrom gestoppt wurde.
    - Der Benutzer gewählt hat, einen Bildschirm ([`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) Typ `monitor`) anstelle eines `browser`-Tabs oder `window` freizugeben — Sie können keinen Monitor fokussieren. In diesem Fall wird die Ausnahme nach der Erfüllung des [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) `Promise` geworfen.
    - Genügend Zeit nach der Erfüllung des [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) `Promise` vergangen ist, sodass das Fokusverhalten finalisiert wurde.

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
- [Besseres Screensharing mit Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
