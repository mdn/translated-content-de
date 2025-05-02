---
title: "Element: touchcancel Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `touchcancel` Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementationsspezifische Weise unterbrochen wurden.

Einige Beispiele für Situationen, die ein `touchcancel` Ereignis auslösen:

- Ein Hardware-Ereignis tritt ein, das die Berührungsaktivitäten abbricht. Dazu gehört beispielsweise, dass der Benutzer Anwendungen über eine Anwendungsumschaltfläche wechselt oder die "Home"-Taste auf einem mobilen Gerät verwendet.
- Die Bildschirmorientierung des Geräts wird geändert, während die Berührung aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Berührungseingabe versehentlich begonnen hat. Dies kann passieren, wenn die Hardware beispielsweise Palm-Rejection unterstützt, um zu verhindern, dass eine ruhende Hand auf dem Display beim Verwenden eines Stifts versehentlich Ereignisse auslöst.
- Die {{cssxref("touch-action")}} CSS-Eigenschaft verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Fingern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle bestehenden Zeiger auslösen (auch wenn der Benutzer den Bildschirm weiterhin berührt).

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
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch) Objekten, die einzelne Kontaktpunkte darstellen, deren Zustände sich zwischen dem vorherigen Touch-Ereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch) Objekten, die sich derzeit auf der Berührungsoberfläche befinden **und** auch auf demselben Element begonnen haben, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch) Objekten, die alle aktuellen Kontaktpunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte weisen auf eine Drehung im Uhrzeigersinn hin; negative Werte geben eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Angegeben als Gleitkomma-Multiplikator des Anfangsabstands zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein Hineinzwicken (Zoom out) hin. Werte über 1.0 deuten auf ein Herauszwicken (Zoom in) hin. Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Touch events](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
