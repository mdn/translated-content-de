---
title: "Element: touchmove-Ereignis"
short-title: touchmove
slug: Web/API/Element/touchmove_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

Das `touchmove`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte über die Berührungsfläche bewegt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("touchmove", (event) => {});

ontouchmove = (event) => {};
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die einzelne Berührungspunkte darstellen, deren Zustände sich zwischen dem vorherigen Touch-Ereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Strg-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die sich sowohl derzeit in Kontakt mit der Berührungsfläche befinden **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Drehung (in Grad) seit dem Beginn des Ereignisses. Positive Werte geben eine Drehung im Uhrzeigersinn an; negative Werte geben eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Entfernung zwischen zwei Fingern seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Mehrfaches der anfänglichen Entfernung zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 zeigen eine Einwärtsbewegung (Herauszoomen). Werte über 1.0 zeigen eine Auswärtsbewegung (Hineinzoomen). Anfangswert: `1.0`.

## Beispiele

Beispielcode für diese Ereignisse finden Sie auf der speziellen Seite: [Touch-Ereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
