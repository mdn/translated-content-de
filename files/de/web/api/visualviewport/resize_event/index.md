---
title: "VisualViewport: resize Ereignis"
short-title: resize
slug: Web/API/VisualViewport/resize_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Visual Viewport")}}

Das **`resize`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn der visuelle Viewport in der Größe verändert wird. Dies ermöglicht es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während es gezoomt wird, was normalerweise am Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Ereignisart

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Siehe die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für eine Anwendungsdemo.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
