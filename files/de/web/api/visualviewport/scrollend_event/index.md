---
title: "VisualViewport: scrollend Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`scrollend`** Ereignis der {{domxref("VisualViewport")}}-Schnittstelle wird ausgelöst, wenn ein Scrollvorgang auf dem visuellen Viewport beendet wird. Dies ermöglicht es Ihnen, ein Element zu aktualisieren, wenn eine Scrollaktion abgeschlossen ist. Beispielsweise könnten Sie die {{domxref("VisualViewport/resize_event", "resize")}}- und {{domxref("VisualViewport/scroll_event", "scroll")}}-Ereignisse verwenden, um ein Element beim Pinch-Zoomen und Scrollen fest an den visuellen Viewport zu binden, und es mit neuen Inhalten zu aktualisieren, wenn das Scrollen mit `scrollend` endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Siehe die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Übersichtsseite für eine Verwendungsvorführung.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
