---
title: CaptureController
slug: Web/API/CaptureController
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`CaptureController`**-Schnittstelle stellt Methoden bereit, mit denen sich eine erfasste Bildschirmoberfläche weiter steuern lässt (erfasst über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)).

Ein `CaptureController`-Objekt wird einer erfassten Bildschirmoberfläche zugeordnet, indem es bei einem `getDisplayMedia()`-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.

## Konstruktor

- [`CaptureController()`](/de/docs/Web/API/CaptureController/CaptureController) {{Experimental_Inline}}
  - : Erstellt eine neue `CaptureController`-Objektinstanz.

## Instanzeigenschaften

- [`zoomLevel`](/de/docs/Web/API/CaptureController/zoomLevel) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die aktuelle Zoomstufe der erfassten Bildschirmoberfläche.

## Instanzmethoden

- [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) {{Experimental_Inline}}
  - : Verringert die Zoomstufe der erfassten Bildschirmoberfläche um eine Stufe.
- [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel) {{Experimental_Inline}}
  - : Beginnt damit, [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignisse, die auf dem referenzierten Element ausgelöst werden, an den Viewport einer zugeordneten erfassten Bildschirmoberfläche weiterzuleiten.
- [`getSupportedZoomLevels()`](/de/docs/Web/API/CaptureController/getSupportedZoomLevels) {{Experimental_Inline}}
  - : Gibt die verschiedenen Zoomstufen zurück, die von der erfassten Bildschirmoberfläche unterstützt werden.
- [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel) {{Experimental_Inline}}
  - : Erhöht die Zoomstufe der erfassten Bildschirmoberfläche um eine Stufe.
- [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) {{Experimental_Inline}}
  - : Setzt die Zoomstufe der erfassten Bildschirmoberfläche auf ihren Ausgangswert `100` zurück.
- [`setFocusBehavior()`](/de/docs/Web/API/CaptureController/setFocusBehavior) {{Experimental_Inline}}
  - : Steuert, ob der erfasste Tab oder das erfasste Fenster den Fokus erhält oder ob der Fokus bei dem Tab mit der erfassenden Anwendung bleibt.

## Ereignisse

- [`zoomlevelchange`](/de/docs/Web/API/CaptureController/zoomlevelchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Zoomstufe der erfassten Bildschirmoberfläche ändert.

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
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [Bessere Bildschirmfreigabe mit Conditional Focus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
