---
title: "Element: touchend-Ereignis"
short-title: touchend
slug: Web/API/Element/touchend_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Touch Events")}}

Das `touchend`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden. Beachten Sie, dass es möglich ist, stattdessen ein [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("touchend", (event) => { })

ontouchend = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von seinem übergeordneten Interface, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die einzelne Berührungspunkte darstellen, deren Status sich zwischen dem vorherigen Touch-Ereignis und diesem einen geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Strg-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die derzeit sowohl mit der Berührungsoberfläche in Kontakt sind **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Die Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des ursprünglichen Abstands zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 zeigen ein Zusammenziehen (Herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen (Hineinzoomen) an. Anfangswert: `1.0`.

## Beispiele

Beispielcode für diese Ereignisse ist auf der dedizierten Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
