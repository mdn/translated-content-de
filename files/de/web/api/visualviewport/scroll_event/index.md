---
title: "VisualViewport: scroll-Ereignis"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis des [`VisualViewport`](/de/docs/Web/API/VisualViewport) Interfaces wird ausgelöst, wenn das visuelle Viewport gescrollt wird. Dies ermöglicht es, Elemente relativ zum visuellen Viewport zu positionieren, während es gescrollt wird, was normalerweise im Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Siehe die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Einstiegsseite für eine Anwendungsdemo.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
