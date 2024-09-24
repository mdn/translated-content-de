---
title: "WindowControlsOverlay: geometrychange Ereignis"
short-title: geometrychange
slug: Web/API/WindowControlsOverlay/geometrychange_event
l10n:
  sourceCommit: 750a9229b8e3ff1e459922ba0972724363d460e2
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Das `geometrychange` Ereignis wird ausgelöst, wenn sich die Position, Größe oder Sichtbarkeit des Titelleistenbereichs einer Progressive Web App ändert.

Dies gilt nur für Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind und die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("geometrychange", (event) => {});

ongeometrychange = (event) => {};
```

## Ereignistyp

Ein {{domxref("WindowControlsOverlayGeometryChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("WindowControlsOverlayGeometryChangeEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- `titlebarAreaRect`
  - : Ein {{domxref("DOMRect")}}, das die Position und Größe des Titelleistenbereichs innerhalb des Inhalts der App darstellt.
- `visible`
  - : Ein {{Glossary("Boolean")}}, das anzeigt, ob das Fenstersteuerungen-Overlay sichtbar ist oder nicht.

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

Verwendung der `ongeometrychange` Ereignis-Handler-Eigenschaft:

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
