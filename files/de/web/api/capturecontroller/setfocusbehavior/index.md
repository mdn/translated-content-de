---
title: "CaptureController: setFocusBehavior()-Methode"
short-title: setFocusBehavior()
slug: Web/API/CaptureController/setFocusBehavior
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setFocusBehavior()`**-Methode der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle steuert, ob die aufgenommene Registerkarte oder das Fenster fokussiert wird, wenn eine zugehörige [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) {{jsxref("Promise")}} erfüllt wird, oder ob der Fokus bei der Registerkarte bleibt, die die aufnehmende Anwendung enthält.

Sie können dieses Verhalten mehrmals einstellen, bevor der [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufruf erfolgt, oder einmal unmittelbar nachdem dessen `Promise` aufgelöst wird. Danach gilt das Fokusverhalten als finalisiert und kann nicht mehr geändert werden.

## Syntax

```js-nolint
setFocusBehavior(focusBehavior)
```

### Parameter

- `focusBehavior`
  - : Ein enumerierter Wert, der beschreibt, ob der Benutzeragent den Fokus auf die aufgenommene Anzeigeoberfläche übertragen soll oder die aufnehmende Anwendung fokussiert bleiben soll. Mögliche Werte sind `focus-captured-surface` (Fokus übertragen) und `no-focus-change` (Fokus auf die aufnehmende Anwendung beibehalten).

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der Aufnahmestrom gestoppt wurde.
    - Der Benutzer sich dafür entschieden hat, einen Bildschirm ([`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) Typ `monitor`) anstelle einer `browser`-Registerkarte oder eines `window` zu teilen – ein Monitor kann nicht fokussiert werden. In diesem Fall wird die Ausnahme ausgelöst, nachdem das `Promise` von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufgelöst wurde.
    - Genügend Zeit nach dem Erfüllen des `Promise` von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) vergangen ist, sodass das Fokusverhalten finalisiert wurde.

## Beispiele

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
- [Besseres Screen Sharing mit Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
