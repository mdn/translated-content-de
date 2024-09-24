---
title: "VisualViewport: resize-Ereignis"
short-title: resize
slug: Web/API/VisualViewport/resize_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`resize`**-Ereignis der {{domxref("VisualViewport")}}-Schnittstelle wird ausgelöst, wenn das visuelle Viewport geändert wird. Dies ermöglicht es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, wenn es gezoomt wird, was normalerweise an den Layout-Viewport gebunden wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Sehen Sie sich die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für eine Demo der Verwendung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
