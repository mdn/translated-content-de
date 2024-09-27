---
title: "VisualViewport: scrollend Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`scrollend`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn ein Scrollvorgang auf dem visuellen Viewport endet. Dadurch können Sie ein Element aktualisieren, wenn eine Scrollaktion abgeschlossen ist. Zum Beispiel könnten Sie die [`resize`](/de/docs/Web/API/VisualViewport/resize_event)- und [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)-Ereignisse verwenden, um ein Element am visuellen Viewport fixiert zu halten, während es gezoomt und gescrollt wird, und es mit neuem Inhalt aktualisieren, wenn das Scrollen mit `scrollend` endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für eine Demo zur Verwendung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
