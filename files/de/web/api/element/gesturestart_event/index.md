---
title: "Element: gesturestart-Event"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}{{Non-standard_header}}

Das **`gesturestart`**-Ereignis wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und damit eine neue Geste starten. Während der Geste werden [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event)-Ereignisse ausgelöst. Wenn die Geste beendet ist, wird ein [`gestureend`](/de/docs/Web/API/Element/gestureend_event)-Ereignis ausgelöst.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("gesturestart", (event) => { })

ongesturestart = (event) => { }
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
