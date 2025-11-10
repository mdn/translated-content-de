---
title: CaptureController
slug: Web/API/CaptureController
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`CaptureController`**-Interface bietet Methoden, die verwendet werden können, um eine erfasste Anzeigeoberfläche weiter zu manipulieren (erfasst mittels [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)).

Ein `CaptureController`-Objekt ist mit einer erfassten Anzeigeoberfläche verbunden, indem es in einen `getDisplayMedia()`-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.

## Konstruktor

- [`CaptureController()`](/de/docs/Web/API/CaptureController/CaptureController) {{Experimental_Inline}}
  - : Erstellt eine neue `CaptureController`-Objektinstanz.

## Instanzeigenschaften

- [`zoomLevel`](/de/docs/Web/API/CaptureController/zoomLevel) {{Experimental_Inline}}
  - : Der aktuelle Zoomfaktor der erfassten Anzeigeoberfläche.

## Instanzmethoden

- [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) {{Experimental_Inline}}
  - : Verringert den Zoomfaktor der erfassten Anzeigeoberfläche um eine Stufe.
- [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel) {{Experimental_Inline}}
  - : Beginnt damit, [`wheel`](/de/docs/Web/API/Element/wheel_event)-Events, die auf dem referenzierten Element ausgelöst werden, an die Ansicht einer verbundenen erfassten Anzeigeoberfläche weiterzuleiten.
- [`getSupportedZoomLevels()`](/de/docs/Web/API/CaptureController/getSupportedZoomLevels) {{Experimental_Inline}}
  - : Gibt die verschiedenen Zoomstufen zurück, die von der erfassten Anzeigeoberfläche unterstützt werden.
- [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel) {{Experimental_Inline}}
  - : Erhöht den Zoomfaktor der erfassten Anzeigeoberfläche um eine Stufe.
- [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) {{Experimental_Inline}}
  - : Setzt den Zoom der erfassten Anzeigeoberfläche auf seinen Anfangswert zurück, welcher `100` ist.
- [`setFocusBehavior()`](/de/docs/Web/API/CaptureController/setFocusBehavior) {{Experimental_Inline}}
  - : Steuert, ob der erfasste Tab oder das Fenster fokussiert wird oder ob der Fokus bei dem Tab bleibt, das die erfassende Anwendung enthält.

## Ereignisse

- [`zoomlevelchange`](/de/docs/Web/API/CaptureController/zoomlevelchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der Zoomfaktor der erfassten Anzeigeoberfläche ändert.

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
- [Verwendung der Elementfassungs- und Bereichserfassungs-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [Besseres Bildschirmfreigeben mit bedingtem Fokus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
