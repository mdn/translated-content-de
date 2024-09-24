---
title: "Element: gestureend-Ereignis"
short-title: gestureend
slug: Web/API/Element/gestureend_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

Das **`gestureend`**-Ereignis wird ausgelöst, wenn keine mehreren Finger mehr die Touch-Oberfläche berühren und die Geste somit endet.

Es handelt sich um ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("gestureend", (event) => {});

ongestureend = (event) => {};
```

## Ereignistyp

Ein {{domxref("GestureEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte weisen auf eine Drehung im Uhrzeigersinn hin; negative Werte auf eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}}
  - : Entfernung zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Vielfaches der anfänglichen Entfernung zwischen den Fingern zu Beginn der Geste. Werte unter 1,0 deuten auf ein Kneifen nach innen (Herauszoomen) hin. Werte über 1,0 deuten auf ein Auseinanderziehen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Spezifikationen

Kein Bestandteil einer Spezifikation.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [GestureEventClassReference in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
