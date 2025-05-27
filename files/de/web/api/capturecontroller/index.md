---
title: CaptureController
slug: Web/API/CaptureController
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`CaptureController`**-Interface bietet Methoden, die genutzt werden können, um eine Aufnahmesitzung weiter zu manipulieren, getrennt von deren Initialisierung über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia).

Ein `CaptureController`-Objekt wird einer Aufnahmesitzung zugeordnet, indem es in einem Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.

## Konstruktor

- [`CaptureController()`](/de/docs/Web/API/CaptureController/CaptureController) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `CaptureController`-Objekts.

## Instanzmethoden

- [`setFocusBehavior()`](/de/docs/Web/API/CaptureController/setFocusBehavior) {{Experimental_Inline}}
  - : Steuert, ob der aufgenommene Tab oder das Fenster fokussiert wird oder ob der Fokus beim Tab mit der aufnehmenden Anwendung bleibt.

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
- [Besseres Bildschirmteilen mit bedingtem Fokus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
