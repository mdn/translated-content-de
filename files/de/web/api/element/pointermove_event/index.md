---
title: "Element: pointermove-Ereignis"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointermove`-Ereignis wird ausgelöst, wenn sich die Koordinaten eines Zeigers ändern und der Zeiger nicht durch die [touch-action](/de/docs/Web/CSS/Reference/Properties/touch-action) eines Browsers [abgebrochen](/de/docs/Web/API/Element/pointercancel_event) wurde. Das Ereignis wird auch ausgelöst, wenn sich eine andere Eigenschaft des Zeigers ändert, sofern diese Änderung kein anderes Zeigerereignis auslöst. Dazu gehören Änderungen an Druck, tangentialem Druck, Neigung, Drehung, Kontaktgeometrie (Breite und Höhe) oder [gleichzeitig gedrückten Tasten](https://w3c.github.io/pointerevents/#dfn-chorded-buttons).

Das `pointermove`-Ereignis kann zusammengefasste Ereignisse enthalten, wenn bereits ein anderes `pointermove`-Ereignis mit derselben Zeiger-ID vorliegt, das noch nicht im Event-Loop ausgelöst wurde.
Werden Ereignisse zusammengefasst, ist das `target` des ausgelösten Ereignisses dasselbe wie das des zuletzt zusammengefassten Ereignisses.
Weitere Informationen zu zusammengefassten Ereignissen finden Sie in der Dokumentation zu [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

Dieses Ereignis ähnelt dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis, bietet aber mehr Funktionen. Diese Ereignisse treten unabhängig davon auf, ob Zeigertasten gedrückt sind. Sie können sehr häufig ausgelöst werden. Die Häufigkeit hängt unter anderem davon ab, wie schnell der Benutzer den Zeiger bewegt, wie leistungsfähig das Gerät ist und welche anderen Aufgaben und Prozesse ausgeführt werden.

Der Unterschied zwischen [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) und `pointermove` liegt in der Häufigkeit, mit der sie ausgelöst werden.
Ein Browser kann `pointermove`-Ereignisse verzögern, um die Leistung zu verbessern. `pointerrawupdate`-Ereignisse werden dagegen so früh und so häufig ausgelöst, wie der Browser sie bereitstellen kann.
In den meisten Anwendungsfällen sollten Sie `pointermove` bevorzugen, um Leistungsprobleme zu vermeiden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointermove", (event) => { })
```

Alternativ können Sie die [Ereignisbehandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointermove = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Verwendungshinweise

Das Ereignis vom Typ [`PointerEvent`](/de/docs/Web/API/PointerEvent) liefert alle Informationen, die Sie über die Interaktion des Benutzers mit dem Zeigegerät benötigen, darunter Position, zurückgelegte Strecke, Tastenzustände und vieles mehr.

## Beispiele

So fügen Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Behandler für `pointermove`-Ereignisse hinzu:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Pointer moved");
});
```

Sie können auch die Ereignisbehandler-Eigenschaft `onpointermove` verwenden. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpointermove` hinzugefügte Ereignisbehandler ersetzt werden:

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("Pointer moved");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
