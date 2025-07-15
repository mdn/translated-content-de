---
title: "CaptureController: zoomLevel-Eigenschaft"
short-title: zoomLevel
slug: Web/API/CaptureController/zoomLevel
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Die schreibgeschützte **`zoomLevel`**-Eigenschaft der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle gibt den aktuellen Zoomfaktor der erfassten Anzeigefläche zurück.

## Wert

Eine Zahl, die den aktuellen Zoomfaktor der erfassten Anzeigefläche darstellt.

## Beispiele

### Grundlegende Verwendung von `zoomLevel`

In unserem Live-Demo, gezeigt in [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), verwenden wir die `zoomLevel`-Eigenschaft innerhalb einer Ereignisbehandlungsfunktion für das [`zoomlevelchange`](/de/docs/Web/API/CaptureController/zoomlevelchange_event)-Ereignis des Controllers. Wenn das Ereignis ausgelöst wird, wird der aktualisierte `zoomLevel` in ein `<output>`-Element geschrieben.

```js
// Create controller and start capture
const controller = new CaptureController();
videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
  controller,
});

// ...

controller.addEventListener(
  "zoomlevelchange",
  () => (outputElem.textContent = `${controller.zoomLevel}%`),
);
```

Siehe [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
