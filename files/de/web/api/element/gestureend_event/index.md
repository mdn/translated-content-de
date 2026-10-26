---
title: "Element: gestureend-Ereignis"
short-title: gestureend
slug: Web/API/Element/gestureend_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}{{Non-standard_header}}

Das **`gestureend`**-Ereignis wird ausgelöst, wenn nicht mehr mehrere Finger die Touch-Oberfläche berühren und die Geste damit endet.

Es handelt sich um ein proprietäres, WebKit-spezifisches Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("gestureend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ongestureend = (event) => { }
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
