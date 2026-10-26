---
title: "Element: gesturestart-Ereignis"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}{{Non-standard_header}}

Das **`gesturestart`**-Ereignis wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und dadurch eine neue Geste beginnt. Während der Geste werden [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event)-Ereignisse ausgelöst. Wenn die Geste endet, wird ein [`gestureend`](/de/docs/Web/API/Element/gestureend_event)-Ereignis ausgelöst.

Es handelt sich um ein proprietäres, WebKit-spezifisches Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("gesturestart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ongesturestart = (event) => { }
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Spezifikationen

Nicht Bestandteil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
