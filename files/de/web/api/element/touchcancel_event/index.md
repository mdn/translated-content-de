---
title: "Element: touchcancel Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `touchcancel` Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise unterbrochen wurden.

Einige Beispiele für Situationen, die ein `touchcancel` Ereignis auslösen:

- Ein Hardware-Ereignis tritt auf, das die Touch-Aktivitäten abbricht. Dies kann zum Beispiel der Fall sein, wenn der Benutzer zwischen Anwendungen mit einer Anwendungsumschaltungsschnittstelle oder der "Home"-Taste auf einem mobilen Gerät wechselt.
- Die Bildschirmorientierung des Geräts wird geändert, während die Berührung aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Berührungseingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware Palm Rejection unterstützt, um zu verhindern, dass eine auf dem Display liegende Hand beim Verwenden eines Eingabestifts versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Fingern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle vorhandenen Zeiger auslösen (auch wenn der Benutzer den Bildschirm weiterhin berührt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("touchcancel", (event) => {});

ontouchcancel = (event) => {};
```

## Ereignistyp

Ein [`TouchEvent`](/de/docs/Web/API/TouchEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TouchEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch) Objekten, die individuelle Berührungspunkte repräsentieren, deren Zustände sich zwischen dem vorherigen Touch-Ereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch) Objekten, die sowohl derzeit in Kontakt mit der Berührungsoberfläche sind **als auch** am selben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch) Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche unabhängig vom Ziel oder geänderter Status darstellen.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des anfänglichen Abstands zwischen den Punkten zu Beginn des Ereignisses. Werte unter 1.0 weisen auf ein Hereinzoomen (Verkleinern) hin. Werte über 1.0 weisen auf ein Herauszoomen (Vergrößern) hin. Anfangswert: `1.0`.

## Beispiele

Code-Beispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Touch-Ereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
