---
title: "VisualViewport: scroll-Ereignis"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

Das **`scroll`**-Ereignis der {{domxref("VisualViewport")}}-Schnittstelle wird ausgelöst, wenn das visuelle Viewport gescrollt wird. Dies ermöglicht es Ihnen, Elemente im Verhältnis zum visuellen Viewport zu positionieren, während es gescrollt wird, was normalerweise an das Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Sehen Sie sich die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Langingpage für ein Anwendungsbeispiel an.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
