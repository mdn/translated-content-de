---
title: "Element: touchstart-Ereignis"
short-title: touchstart
slug: Web/API/Element/touchstart_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

Das `touchstart`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf der Touch-Oberfläche platziert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("touchstart", (event) => {});

ontouchstart = (event) => {};
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Objekt, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte darstellen, deren Status sich zwischen dem vorherigen Touch-Ereignis und diesem geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sich gerade mit der Touch-Oberfläche in Kontakt befinden **und** auch auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder Statusänderungen.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Fingern seit dem Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des ursprünglichen Abstands zwischen den Fingern zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein Heranzoomen (Rauszoomen) hin. Werte über 1.0 deuten auf ein Herauszoomen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
