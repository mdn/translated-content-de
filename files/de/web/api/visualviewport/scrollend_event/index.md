---
title: "VisualViewport: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("CSSOM view API")}}

Das **`scrollend`**-Ereignis der [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle wird ausgelöst, wenn ein Scrollvorgang im visuellen Viewport endet. So können Sie ein Element aktualisieren, sobald der Scrollvorgang abgeschlossen ist. Beispielsweise können Sie mit den Ereignissen [`resize`](/de/docs/Web/API/VisualViewport/resize_event) und [`scroll`](/de/docs/Web/API/VisualViewport/scroll_event) ein Element im visuellen Viewport fixiert halten, während dieser per Pinch-Zoom vergrößert oder verkleinert und gescrollt wird. Mit `scrollend` können Sie das Element anschließend mit neuen Inhalten aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Ein Anwendungsbeispiel finden Sie auf der Seite zu [`VisualViewport`](/de/docs/Web/API/VisualViewport#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
