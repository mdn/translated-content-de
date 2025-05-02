---
title: "Element: touchend-Ereignis"
short-title: touchend
slug: Web/API/Element/touchend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `touchend`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Oberfläche entfernt werden. Beachten Sie, dass es stattdessen möglich ist, ein [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("touchend", (event) => { })

ontouchend = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte darstellen, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sich momentan im Kontakt mit der Berührungsoberfläche befinden **und** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte geben eine Drehung im Uhrzeigersinn an; negative Werte gegen den Uhrzeigersinn. Ausgangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Vielfaches des anfänglichen Abstands zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 zeigen eine einwärts gerichtete Kneifbewegung an (herauszoomen). Werte über 1.0 zeigen eine auswärts gerichtete Ausweichbewegung an (hineinzoomen). Ausgangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
