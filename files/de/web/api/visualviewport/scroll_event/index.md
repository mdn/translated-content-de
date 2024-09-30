---
title: "VisualViewport: scroll Ereignis"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`scroll`** Ereignis des [`VisualViewport`](/de/docs/Web/API/VisualViewport) Interfaces wird ausgelöst, wenn das visuelle Viewport gescrollt wird. Dies ermöglicht Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während es gescrollt wird, die normalerweise an das Layout-Viewport verankert wären.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für eine Nutzungsvorführung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
