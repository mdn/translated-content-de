---
title: GestureEvent
slug: Web/API/GestureEvent
l10n:
  sourceCommit: a206991dd1e28c401accbaa3e1267bc146920eb6
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das **`GestureEvent`** ist eine proprietäre Schnittstelle, die spezifisch für WebKit ist und Informationen über Multi-Touch-Gesten liefert. Ereignisse, die diese Schnittstelle verwenden, umfassen [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event), [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) und [`gestureend`](/de/docs/Web/API/Element/gestureend_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Entfernung zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des anfänglichen Abstands zwischen den Fingern zu Beginn der Geste. Werte unter 1.0 weisen auf ein Zusammenziehen der Finger (Herauszoomen) hin. Werte über 1.0 weisen auf ein Spreizen der Finger (Hineinzoomen) hin. Anfangswert: `1.0`.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.initGestureEvent()`](/de/docs/Web/API/GestureEvent/initGestureEvent) {{Non-standard_Inline}}
  - : Initialisiert den Wert eines `GestureEvent`. Wenn das Ereignis bereits ausgelöst wurde, bewirkt diese Methode nichts.

## Gesten-Ereignistypen

- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event)
- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event)
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event)

## Spezifikationen

_Teil keiner Spezifikation._ Apple hat [eine Beschreibung in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent).

## Browser-Kompatibilität

{{Compat}}
