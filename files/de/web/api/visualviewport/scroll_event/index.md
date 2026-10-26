---
title: "VisualViewport: scroll-Ereignis"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn der visuelle Viewport gescrollt wird. Damit können Sie Elemente beim Scrollen relativ zum visuellen Viewport positionieren, die normalerweise am Layout-Viewport verankert wären.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scroll", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Ein Anwendungsbeispiel finden Sie auf der Seite zu [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
