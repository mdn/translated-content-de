---
title: "VisualViewport: resize-Ereignis"
short-title: resize
slug: Web/API/VisualViewport/resize_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("CSSOM view API")}}

Das **`resize`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn sich die Größe des visuellen Viewports ändert. So können Sie Elemente relativ zum visuellen Viewport positionieren, während dieser gezoomt wird. Andernfalls wären die Elemente normalerweise am Layout-Viewport ausgerichtet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resize", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Ein Anwendungsbeispiel finden Sie auf der Seite zu [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
