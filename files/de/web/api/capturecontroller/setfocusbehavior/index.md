---
title: "CaptureController: setFocusBehavior() Methode"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setFocusBehavior()`** Methode der [`CaptureController`](/de/docs/Web/API/CaptureController) Schnittstelle steuert, ob die erfasste Registerkarte oder das Fenster fokussiert wird, wenn ein zugehöriges [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) {{jsxref("Promise")}} erfüllt wird, oder ob der Fokus auf der Registerkarte mit der erfassenden Anwendung bleibt.

Sie können dieses Verhalten mehrmals festlegen, bevor der Aufruf von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erfolgt, oder einmal unmittelbar, nachdem das `Promise` erfüllt wurde. Danach wird das Fokusverhalten als festgelegt betrachtet und kann nicht mehr geändert werden.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameter

- `focusBehavior`
  - : Ein enumerierter Wert, der beschreibt, ob der Benutzeragent den Fokus auf die erfasste Anzeigefläche übertragen soll oder die erfassende App im Fokus bleiben soll. Mögliche Werte sind `focus-captured-surface` (Fokus übertragen) und `no-focus-change` (Fokus auf der erfassenden App belassen).

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Erfassungsstrom wurde gestoppt.
    - Der Benutzer gewählt hat, einen Bildschirm ([`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) Typ `monitor`) statt einer `browser`-Registerkarte oder eines `window` zu teilen — ein Monitor kann nicht fokussiert werden. In diesem Fall wird die Ausnahme nach der Erfüllung des `Promise` von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ausgelöst.
    - Nach der Erfüllung des `Promise` von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ist genügend Zeit vergangen, sodass das Fokusverhalten als abgeschlossen gilt.

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
- [Bessere Bildschirmfreigabe mit bedingtem Fokus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
