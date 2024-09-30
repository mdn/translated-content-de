---
title: "Element: touchcancel-Ereignis"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `touchcancel`-Ereignis wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise unterbrochen wurden.

Einige Beispiele für Situationen, die ein `touchcancel`-Ereignis auslösen können:

- Ein Hardware-Ereignis tritt auf, das die Berührungsaktivitäten abbricht. Dies kann beispielsweise der Fall sein, wenn der Benutzer Anwendungen mit einer Anwendungswechsler-Schnittstelle oder der "Home"-Taste auf einem mobilen Gerät wechselt.
- Die Ausrichtung des Bildschirms des Geräts wird geändert, während die Berührung aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Berührungseingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware beispielsweise Handflächenablehnung unterstützt, um zu verhindern, dass eine auf dem Bildschirm ruhende Hand beim Verwenden eines Stifts versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Fingern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle vorhandenen Zeigegeräte auslösen (auch wenn der Benutzer den Bildschirm noch berührt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

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
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte repräsentieren, deren Status sich zwischen dem vorherigen Berührungsereignis und diesem geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Metataste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sich sowohl derzeit in Kontakt mit der Berührungsoberfläche befinden **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder dem geänderten Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte geben eine Drehung im Uhrzeigersinn an; negative Werte geben eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Berührungspunkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkommapunkt-Multiplikator des anfänglichen Abstands zwischen den Berührungspunkten zu Beginn des Ereignisses. Werte unter 1.0 geben eine Pinch-Bewegung nach innen an (Verkleinern). Werte über 1.0 geben eine Pinch-Bewegung nach außen an (Vergrößern). Anfangswert: `1.0`.

## Beispiele

Codebeispiele für diese Ereignisse sind auf der speziellen Seite verfügbar: [Berührungsereignisse](/de/docs/Web/API/Touch_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
