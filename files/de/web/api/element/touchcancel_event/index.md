---
title: "Element: touchcancel-Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Touch Events")}}

Das `touchcancel`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementationsspezifische Weise unterbrochen wurden.

Einige Beispiele für Situationen, die ein `touchcancel`-Ereignis auslösen:

- Ein Hardware-Ereignis tritt auf, das die Berührungsaktivitäten abbricht. Dazu kann beispielsweise gehören, dass der Benutzer mit einer Anwendungsumschaltoberfläche oder der "Home"-Taste auf einem mobilen Gerät Anwendungen wechselt.
- Die Ausrichtung des Gerätebildschirms wird geändert, während die Berührung aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Berührungseingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware beispielsweise Palm-Rejection unterstützt, um zu verhindern, dass eine Hand, die auf dem Display ruht, beim Verwenden eines Stylus versehentlich Ereignisse auslöst.
- Die {{cssxref("touch-action")}} CSS-Eigenschaft verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Fingern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle bestehenden Zeiger auslösen (auch wenn der Benutzer den Bildschirm noch berührt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("touchcancel", (event) => { })

ontouchcancel = (event) => { }
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte repräsentieren, deren Zustand sich zwischen dem vorherigen und diesem Berührungsereignis geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sich derzeit sowohl in Kontakt mit der Berührungsfläche befinden als auch auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Veränderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Ausgangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkommamultiplikator des anfänglichen Abstands zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 zeigen ein Verkleinern (Herauszoomen) an. Werte über 1.0 zeigen ein Vergrößern (Hineinzoomen) an. Ausgangswert: `1.0`.

## Beispiele

Beispielcode für diese Ereignisse ist auf der speziellen Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
