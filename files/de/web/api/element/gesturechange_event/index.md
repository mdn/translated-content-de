---
title: "Element: gesturechange Ereignis"
short-title: gesturechange
slug: Web/API/Element/gesturechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Non-standard_header}}

Das **`gesturechange`** Ereignis wird ausgelöst, wenn sich Finger während einer Touch-Geste bewegen.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("gesturechange", (event) => { })

ongesturechange = (event) => { }
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit dem Beginn des Ereignisses. Positive Werte weisen auf eine Drehung im Uhrzeigersinn hin; negative Werte auf eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}}
  - : Entfernung zwischen zwei Fingern seit dem Beginn des Ereignisses. Angegeben als Gleitkommazahl, die ein Vielfaches der anfänglichen Entfernung zwischen den Fingern zu Beginn der Geste darstellt. Werte unter 1.0 weisen auf ein Zusammenziehen (Herauszoomen) hin. Werte über 1.0 weisen auf ein Auseinanderziehen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
