---
title: "VisualViewport: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("CSSOM view API")}}

Das **`scrollend`**-Ereignis des [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Interfaces wird ausgelöst, wenn eine Scroll-Operation im visuellen Viewport endet. Dies ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Scroll-Aktion abgeschlossen ist. Zum Beispiel könnten Sie die [`resize`](/de/docs/Web/API/VisualViewport/resize_event)- und [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event)-Ereignisse verwenden, um ein Element an den visuellen Viewport fixiert zu halten, wenn es durch Pinch-Zooming und Scrollen bewegt wird, und es mit neuem Inhalt zu aktualisieren, wenn das Scrollen mit `scrollend` endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Siehe die [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples) Übersichtsseite für eine Nutzungsdemonstration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
