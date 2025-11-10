---
title: "Element: gesturestart-Event"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Non-standard_header}}

Das **`gesturestart`**-Event wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und damit eine neue Geste beginnen. Während der Geste werden [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event)-Events ausgelöst. Wenn die Geste beendet ist, wird ein [`gestureend`](/de/docs/Web/API/Element/gestureend_event)-Event ausgelöst.

Es handelt sich um ein proprietäres Event, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("gesturestart", (event) => { })

ongesturestart = (event) => { }
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Events. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Ausgangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Events. Ausgedrückt als Gleitkomma-Multiplikator des ursprünglichen Abstands zwischen den Fingern zu Beginn der Geste. Werte unter 1.0 zeigen ein Zusammendrücken nach innen (Herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen nach außen (Hineinzoomen) an. Ausgangswert: `1.0`.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
