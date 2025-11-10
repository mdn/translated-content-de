---
title: "Element: gestureend Ereignis"
short-title: gestureend
slug: Web/API/Element/gestureend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Non-standard_header}}

Das **`gestureend`**-Ereignis wird ausgelöst, wenn nicht mehr mehrere Finger die Touch-Oberfläche berühren, wodurch die Geste beendet wird.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("gestureend", (event) => { })

ongestureend = (event) => { }
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer übergeordneten Schnittstellen, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte geben eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkommazahl, die das Vielfache des anfänglichen Abstands zwischen den Fingern zu Beginn der Geste darstellt. Werte unter 1.0 zeigen ein Einknicken nach innen (Herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen nach außen (Hineinzoomen) an. Anfangswert: `1.0`.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
