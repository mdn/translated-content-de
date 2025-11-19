---
title: "WindowControlsOverlay: geometrychange-Ereignis"
short-title: geometrychange
slug: Web/API/WindowControlsOverlay/geometrychange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Das `geometrychange`-Ereignis wird ausgelöst, wenn sich die Position, Größe oder Sichtbarkeit des Titelbereichs einer Progressive Web App ändert.

Dies gilt nur für Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind und die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("geometrychange", (event) => { })

ongeometrychange = (event) => { }
```

## Ereignistyp

Ein [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WindowControlsOverlayGeometryChangeEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften stehen Ihnen auch die Eigenschaften der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) zur Verfügung._

- `titlebarAreaRect`
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect), das die Position und Größe des Titelbereichs innerhalb des Inhalts der App darstellt.
- `visible`
  - : Ein {{Glossary("Boolean", "Boolean")}}, der angibt, ob das Fenstersteuerungs-Overlay sichtbar ist oder nicht.

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

Verwendung der `ongeometrychange`-Ereignishandler-Eigenschaft:

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
