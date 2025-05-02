---
title: "Element: touchmove-Ereignis"
short-title: touchmove
slug: Web/API/Element/touchmove_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `touchmove`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf der Oberfläche bewegt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("touchmove", (event) => { })

ontouchmove = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte darstellen, deren Status sich zwischen dem vorherigen und dem aktuellen Berührungsereignis geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sowohl aktuell Kontakt mit der Berührungsoberfläche haben **als auch** auf demselben Element gestartet wurden, welches das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Entfernung zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator der ursprünglichen Entfernung zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 zeigen ein Heran- (Herauszoomen) und Werte über 1.0 ein Auseinander-Zupfen (Hineinzoomen) an. Anfangswert: `1.0`.

## Beispiele

Beispielcodes für diese Ereignisse sind auf der dedizierten Seite verfügbar: [Berührungsereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
