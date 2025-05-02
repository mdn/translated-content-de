---
title: "VisualViewport: scroll-Ereignis"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Visual Viewport")}}

Das **`scroll`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn das visuelle Viewport gescrollt wird. Dies ermöglicht es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während es gescrollt wird, was normalerweise am Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples)-Landeseite für eine Anwendungsdemonstration an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
