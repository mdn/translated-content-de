---
title: "VisualViewport: scroll-Event"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`scroll`**-Event des [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Interfaces wird ausgelöst, wenn der visuelle Viewport gescrollt wird. Dies ermöglicht Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während er gescrollt wird, was normalerweise an den Layout-Viewport gekoppelt wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Siehe die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für ein Anwendungsbeispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
