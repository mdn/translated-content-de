---
title: GestureEvent
slug: Web/API/GestureEvent
l10n:
  sourceCommit: a206991dd1e28c401accbaa3e1267bc146920eb6
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das **`GestureEvent`** ist ein proprietäres Interface, das spezifisch für WebKit ist und Informationen zu Mehrfach-Touch-Gesten liefert. Ereignisse, die dieses Interface verwenden, umfassen {{domxref("Element/gesturestart_event", "gesturestart")}}, {{domxref("Element/gesturechange_event", "gesturechange")}} und {{domxref("Element/gestureend_event", "gestureend")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Änderung in der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Distanz zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkommazahl, die das Vielfache der anfänglichen Distanz zwischen den Fingern zu Beginn der Geste ist. Werte unter 1.0 zeigen ein Zusammendrücken (Herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen (Hineinzoomen) an. Anfangswert: `1.0`.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seiner Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("GestureEvent.initGestureEvent()")}} {{Non-standard_Inline}}
  - : Initialisiert den Wert eines `GestureEvent`. Wenn das Ereignis bereits ausgelöst wurde, führt diese Methode keine Aktion aus.

## Gestenereignistypen

- {{domxref("Element/gesturestart_event", "gesturestart")}}
- {{domxref("Element/gesturechange_event", "gesturechange")}}
- {{domxref("Element/gestureend_event", "gestureend")}}

## Spezifikationen

_Teil keiner Spezifikation._ Apple hat [eine Beschreibung in der Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent).

## Browser-Kompatibilität

{{Compat}}
