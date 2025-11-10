---
title: "CaptureController: setFocusBehavior() Methode"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setFocusBehavior()`** Methode der [`CaptureController`](/de/docs/Web/API/CaptureController) Schnittstelle steuert, ob der erfasste Tab oder das Fenster fokussiert wird, wenn das zugehörige [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) {{jsxref("Promise")}} erfüllt wird, oder ob der Fokus beim Tab mit der erfassenden Anwendung bleibt.

Sie können dieses Verhalten mehrmals vor dem Aufruf von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) festlegen oder einmal unmittelbar, nachdem das `Promise` gelöst wurde. Danach wird gesagt, dass das Fokusverhalten abgeschlossen ist und nicht mehr geändert werden kann.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameter

- `focusBehavior`
  - : Ein enumerierter Wert, der beschreibt, ob der Benutzeragent den Fokus auf die erfasste Anzeigefläche übertragen oder die erfassende Anwendung fokussiert lassen soll. Mögliche Werte sind `focus-captured-surface` (überträgt den Fokus) und `no-focus-change` (behält den Fokus auf der erfassenden Anwendung).

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Erfassungsstrom gestoppt wurde.
    - Der Benutzer sich entschieden hat, einen Bildschirm zu teilen (Typ [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) `monitor`) anstatt eines `browser` Tabs oder `window` — Sie können keinen Monitor fokussieren. In diesem Fall wird die Ausnahme ausgelöst, nachdem das [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) `Promise` gelöst wurde.
    - Genügend Zeit vergangen ist, nachdem das [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) `Promise` erfüllt wurde, sodass das Fokusverhalten abgeschlossen ist.

## Beispiele

### Grundlegende Nutzung von `setFocusBehavior()`

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
- [Besseres Bildschirmfreigeben mit bedingtem Fokus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
