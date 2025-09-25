---
title: "Element: touchstart event"
short-title: touchstart
slug: Web/API/Element/touchstart_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Touch Events")}}

Das `touchstart`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte die Berührungsoberfläche berühren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte darstellen, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Shift-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die derzeit sowohl in Kontakt mit der Berührungsoberfläche sind **als auch** auf demselben Element begonnen wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche unabhängig vom Ziel oder geändertem Status darstellen.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an, negative Werte eine Drehung entgegen dem Uhrzeigersinn. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des anfänglichen Abstands zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 zeigen ein Zusammenziehen nach innen (herauszoomen) an. Werte über 1.0 zeigen ein Auseinanderziehen nach außen (hereinzoomen) an. Anfangswert: `1.0`.

## Beispiele

Beispielcode für diese Ereignisse ist auf der dedizierten Seite verfügbar: [Berührungsereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
