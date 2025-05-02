---
title: "Element: touchstart-Ereignis"
short-title: touchstart
slug: Web/API/Element/touchstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `touchstart`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf der Berührungsoberfläche platziert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("touchstart", (event) => { })

ontouchstart = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die einzelne Kontaktpunkte darstellen, deren Status sich zwischen dem vorherigen Berührungsereignis und diesem geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die derzeit sowohl in Kontakt mit der Berührungsoberfläche sind **als auch** auf demselben Element begonnen wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Ausgangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Entfernung zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkommamultiple des ursprünglichen Abstands zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 zeigen ein Zusammenkneifen (Herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen (Hineinzoomen) an. Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Berührungsereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
