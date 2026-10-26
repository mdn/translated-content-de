---
title: "CaptureController: zoomlevelchange-Ereignis"
short-title: zoomlevelchange
slug: Web/API/CaptureController/zoomlevelchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Das **`zoomlevelchange`**-Ereignis der [`CaptureController`](/de/docs/Web/API/CaptureController)-Schnittstelle wird ausgelöst, wenn sich die Zoomstufe der erfassten Anzeigefläche ändert.

Dies geschieht insbesondere, wenn:

- Die Methoden [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) oder [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) auf einem Controller aufgerufen werden, der eine erfasste Anzeigefläche aktiv steuert.
- Die benutzende Person die Zoomstufe auf der erfassten Anzeigefläche ändert.
- Die benutzende Person zu einer anderen erfassten Anzeigefläche mit einer anderen Zoomstufe wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("zoomlevelchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onzoomlevelchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Verwendung von `zoomlevelchange`

Wenn sich die Zoomstufe einer erfassten Anzeigefläche ändert, wird auf dem Controller ein `zoomlevelchange`-Ereignis ausgelöst. Damit kann ein Event-Handler wie der folgende ausgeführt werden. Dieser schreibt die aktualisierte Zoomstufe in ein Ausgabeelement.

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

Ein vollständiges, funktionsfähiges Beispiel finden Sie unter [Verwenden der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [Verwenden der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
