---
title: "Element: touchmove-Ereignis"
short-title: touchmove
slug: Web/API/Element/touchmove_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Touch Events")}}

Das `touchmove`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte entlang der Berührungsfläche bewegt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("touchmove", (event) => { })

ontouchmove = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Element, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte repräsentieren, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Strg-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sich derzeit in Kontakt mit der Berührungsfläche befinden **und** auch auf dem gleichen Element gestartet wurden, das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche repräsentieren, unabhängig vom Ziel oder Änderungsstatus.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn; negative Werte zeigen eine Drehung entgegen dem Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des anfänglichen Abstands zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein Zuzammenkneifen (Herauszoomen) hin. Werte über 1.0 deuten auf ein Auseinanderziehen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse finden Sie auf der speziellen Seite: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
