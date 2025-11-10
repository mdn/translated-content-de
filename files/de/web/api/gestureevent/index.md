---
title: GestureEvent
slug: Web/API/GestureEvent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das **`GestureEvent`** ist eine proprietäre Schnittstelle, die spezifisch für WebKit ist und Informationen zu Multi-Touch-Gesten bereitstellt. Ereignisse, die diese Schnittstelle verwenden, umfassen [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event), [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) und [`gestureend`](/de/docs/Web/API/Element/gestureend_event).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.rotation`](/de/docs/Web/API/GestureEvent/rotation) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`GestureEvent.scale`](/de/docs/Web/API/GestureEvent/scale) {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Fließkommazahl, die ein Vielfaches des initialen Abstands zwischen den Fingern zu Beginn der Geste ist. Werte unter 1.0 geben ein Zusammenkneifen (Verkleinern) an. Werte über 1.0 geben ein Auseinanderziehen (Vergrößern) an. Anfangswert: `1.0`.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`GestureEvent.initGestureEvent()`](/de/docs/Web/API/GestureEvent/initGestureEvent) {{Non-standard_Inline}}
  - : Initialisiert den Wert eines `GestureEvent`. Wenn das Ereignis bereits ausgelöst wurde, hat diese Methode keine Wirkung.

## Gesten-Ereignistypen

- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event)
- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event)
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event)

## Spezifikationen

_Nicht Teil einer offiziellen Spezifikation._ Apple bietet [eine Beschreibung in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent).

## Browser-Kompatibilität

{{Compat}}
