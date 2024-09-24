---
title: "Element: gesturestart-Ereignis"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Non-standard_header}}

Das **`gesturestart`**-Ereignis wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und damit eine neue Geste starten. Während der Geste werden {{domxref("Element/gesturechange_event", "gesturechange")}}-Ereignisse ausgelöst. Wenn die Geste beendet ist, wird ein {{domxref("Element/gestureend_event", "gestureend")}}-Ereignis ausgelöst.

Es ist ein proprietäres Ereignis, das spezifisch für WebKit ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("gesturestart", (event) => {});

ongesturestart = (event) => {};
```

## Ereignistyp

Ein {{domxref("GestureEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Vielfaches des ursprünglichen Abstands zwischen den Fingern zu Beginn der Geste. Werte unter 1.0 zeigen ein Zusammenziehen der Finger (Rauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen der Finger (Hineinzoomen) an. Anfangswert: `1.0`.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [GestureEvent-Klassenreferenz in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
