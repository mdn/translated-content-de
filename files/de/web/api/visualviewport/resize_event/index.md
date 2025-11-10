---
title: "VisualViewport: resize-Ereignis"
short-title: resize
slug: Web/API/VisualViewport/resize_event
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Das **`resize`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn das visuelle Viewport geändert wird. Dies ermöglicht es Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während es gezoomt wird, was normalerweise am Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Siehe die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API#examples) Startseite für eine Nutzungsdemo.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
