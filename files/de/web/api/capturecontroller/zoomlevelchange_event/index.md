---
title: "CaptureController: zoomlevelchange Ereignis"
short-title: zoomlevelchange
slug: Web/API/CaptureController/zoomlevelchange_event
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Das **`zoomlevelchange`** Ereignis der [`CaptureController`](/de/docs/Web/API/CaptureController) Schnittstelle wird ausgelöst, wenn sich der Zoom-Level der erfassten Anzeigeoberfläche ändert.

Dies tritt speziell auf, wenn:

- Die Methoden [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) oder [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) auf einem Controller aufgerufen werden, der aktiv eine erfasste Anzeigeoberfläche steuert.
- Der Benutzer den Zoom-Level in der erfassten Oberfläche ändert.
- Der Benutzer die erfasste Anzeigeoberfläche auf eine andere mit einem anderen Zoom-Level wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("zoomlevelchange", (event) => { })

onzoomlevelchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Verwendung von `zoomlevelchange`

Wenn sich der Zoom-Level einer erfassten Anzeigeoberfläche ändert, wird ein `zoomlevelchange` Ereignis auf dem Controller ausgelöst. Dieses kann verwendet werden, um einen Ereignishandler wie den folgenden auszuführen, der den aktualisierten Zoom-Level an ein beliebiges Ausgabe-Element schreibt.

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

Siehe [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) für ein vollständiges Arbeitsbeispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
