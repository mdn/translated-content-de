---
title: "VisualViewport: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Visual Viewport")}}

Das **`scrollend`**-Ereignis des [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Interfaces wird ausgelöst, wenn eine Scroll-Operation im visuellen Viewport endet. Dies ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Scroll-Aktion abgeschlossen ist. Zum Beispiel könnten Sie die [`resize`](/de/docs/Web/API/VisualViewport/resize_event)- und [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)-Ereignisse verwenden, um ein Element während des Pinch-Zoomens und Scrollens fest am visuellen Viewport zu halten, und es mit neuen Inhalten aktualisieren, wenn das Scrollen mit `scrollend` endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die Landingpage der [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) für eine Verwendungsvorführung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
