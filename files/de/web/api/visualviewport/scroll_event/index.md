---
title: "VisualViewport: scroll-Ereignis"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn das visuelle Viewport gescrollt wird. Dies ermöglicht Ihnen, Elemente relativ zum visuellen Viewport zu positionieren, während es gescrollt wird, was normalerweise an das Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples)-Startseite für eine Nutzungsvorführung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
