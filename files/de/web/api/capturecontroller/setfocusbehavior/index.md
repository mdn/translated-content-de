---
title: "CaptureController: Methode setFocusBehavior()"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`setFocusBehavior()`** des Interfaces [`CaptureController`](/de/docs/Web/API/CaptureController) steuert, ob der erfasste Tab oder das erfasste Fenster den Fokus erhält, wenn die zugehörige {{jsxref("Promise")}} von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erfüllt wird, oder ob der Fokus beim Tab mit der erfassenden App bleibt.

Sie können dieses Verhalten vor dem Aufruf von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) mehrfach festlegen oder einmal unmittelbar, nachdem dessen `Promise` erfüllt wurde. Danach gilt das Fokusverhalten als endgültig festgelegt und kann nicht mehr geändert werden.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameter

- `focusBehavior`
  - : Ein Aufzählungswert, der angibt, ob der User Agent den Fokus auf die erfasste Anzeigefläche übertragen oder die erfassende App im Fokus behalten soll. Mögliche Werte sind `focus-captured-surface` (Fokus übertragen) und `no-focus-change` (Fokus bei der erfassenden App belassen).

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Erfassungsstream gestoppt wurde.
    - Der Benutzer einen Bildschirm (Typ `monitor` von [`displaySurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#displaysurface)) statt eines `browser`-Tabs oder eines `window` zur Freigabe ausgewählt hat – ein Monitor kann keinen Fokus erhalten. In diesem Fall wird die Ausnahme ausgelöst, nachdem die `Promise` von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erfüllt wurde.
    - Nach der Erfüllung der `Promise` von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) genügend Zeit vergangen ist, sodass das Fokusverhalten endgültig festgelegt wurde.

## Beispiele

### Grundlegende Verwendung von `setFocusBehavior()`

```js
// Create a new CaptureController instance
const controller = new CaptureController();

// Prompt the user to share a tab, window, or screen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Query the displaySurface value of the captured video track
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface === "browser") {
  // Focus the captured tab.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface === "window") {
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
- [Bessere Bildschirmfreigabe mit Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
