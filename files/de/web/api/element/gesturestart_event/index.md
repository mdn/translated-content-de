---
title: "Element: gesturestart Ereignis"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

Das **`gesturestart`** Ereignis wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und damit eine neue Geste beginnen. Während der Geste werden [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) Ereignisse ausgelöst. Wenn die Geste beendet ist, wird ein [`gestureend`](/de/docs/Web/API/Element/gestureend_event) Ereignis ausgelöst.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("gesturestart", (event) => {});

ongesturestart = (event) => {};
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Fließkomma-Vielfaches des anfänglichen Abstands zwischen den Punkten zu Beginn der Geste. Werte unter 1.0 zeigen ein Einknicken (herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen (hereinzoomen) an. Anfangswert: `1.0`.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
