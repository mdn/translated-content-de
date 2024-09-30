---
title: "VisualViewport: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`scrollend`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle wird ausgelöst, wenn eine Bildlaufoperation im visuellen Viewport endet. Dies ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Bildlaufaktion abgeschlossen ist. Zum Beispiel könnten Sie die [`resize`](/de/docs/Web/API/VisualViewport/resize_event) und [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event) Ereignisse verwenden, um ein Element während des Pinch-Zoomens und Scrollens fest an den visuellen Viewport zu binden und es mit neuem Inhalt zu aktualisieren, sobald der Bildlauf mit `scrollend` endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für eine Nutzungsdemo an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
