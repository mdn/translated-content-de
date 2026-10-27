---
title: "WindowControlsOverlay: geometrychange-Ereignis"
short-title: geometrychange
slug: Web/API/WindowControlsOverlay/geometrychange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Das `geometrychange`-Ereignis wird ausgelöst, wenn sich die Position, Größe oder Sichtbarkeit des Titelleistenbereichs einer Progressive Web App ändert.

Dies gilt nur für Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind und die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("geometrychange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ongeometrychange = (event) => { }
```

## Ereignistyp

Ein [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WindowControlsOverlayGeometryChangeEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
navigator.windowControlsOverlay.addEventListener("geometrychange", (event) => {
  const { x, y, width, height } = event.titlebarAreaRect;
  console.log(
    `The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`,
  );
});
```

Verwendung der Event-Handler-Eigenschaft `ongeometrychange` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ongeometrychange` hinzugefügte Ereignis-Listener ersetzt werden):

```js
navigator.windowControlsOverlay.ongeometrychange = (event) => {
  const { x, y, width, height } = event.titlebarAreaRect;
  console.log(
    `The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
