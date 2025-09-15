---
title: "VisualViewport: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Das **`scrollend`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn eine Scroll-Operation auf dem visuellen Viewport endet. Dies ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Scroll-Aktion abgeschlossen ist. Sie könnten beispielsweise die [`resize`](/de/docs/Web/API/VisualViewport/resize_event)- und [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)-Ereignisse verwenden, um ein Element fixiert auf dem visuellen Viewport zu halten, während es durch Pinch-Zooming und Scrollen bewegt wird, und es mit neuem Inhalt zu aktualisieren, wenn das Scrollen mit `scrollend` endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Siehe die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples)-Startseite für eine Anwendungsdemo.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
