---
title: "VisualViewport: resize Event"
short-title: resize
slug: Web/API/VisualViewport/resize_event
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("CSSOM view API")}}

Das **`resize`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn der visuelle Viewport in der Größe verändert wird. Dadurch können Sie Elemente relativ zum visuellen Viewport positionieren, wenn hineingezoomt wird, was normalerweise an den Layout-Viewport verankert wäre.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sehen Sie sich die [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples) Hauptseite für eine Anwendungsdemo an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
