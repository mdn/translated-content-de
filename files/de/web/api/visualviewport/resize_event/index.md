---
title: "VisualViewport: resize-Ereignis"
short-title: resize
slug: Web/API/VisualViewport/resize_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`resize`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn das visuelle Viewport geändert wird. Dies ermöglicht es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, wenn hineingezoomt wird, was normalerweise an das Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die Beispiel-Demo auf der [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples)-Übersichtsseite an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
