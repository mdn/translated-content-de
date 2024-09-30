---
title: "Element: gestureend Ereignis"
short-title: gestureend
slug: Web/API/Element/gestureend_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

Das **`gestureend`** Ereignis wird ausgelöst, wenn keine mehreren Finger mehr die Berührungsoberfläche kontaktieren und somit die Geste beendet wird.

Es ist ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("gestureend", (event) => {});

ongestureend = (event) => {};
```

## Ereignistyp

Ein [`GestureEvent`](/de/docs/Web/API/GestureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkommazahl, die das Vielfache des anfänglichen Abstands zwischen den Fingern zu Beginn der Geste darstellt. Werte unter 1.0 zeigen ein Zusammenziehen (herauszoomen) an. Werte über 1.0 zeigen ein Aufziehen (hereinzoomen) an. Anfangswert: `1.0`.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
