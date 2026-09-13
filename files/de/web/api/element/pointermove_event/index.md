---
title: "Element: pointermove-Ereignis"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: a0d27fbd56b5327923e072af498c3e8e3252afce
---

{{APIRef("Pointer Events")}}

Das `pointermove`-Ereignis wird ausgelöst, wenn ein Zeiger die Koordinaten ändert und der Zeiger nicht durch eine Browser-[touch-action](/de/docs/Web/CSS/Reference/Properties/touch-action) [abgebrochen](/de/docs/Web/API/Element/pointercancel_event) wurde. Das Ereignis tritt ebenfalls auf, wenn ein Zeiger eine seiner anderen Eigenschaften ändert, vorausgesetzt, die Änderung löst kein anderes Zeigerereignis aus. Dies schließt jede Änderung des Drucks, des tangentialen Drucks, der Neigung, der Drehung, der Kontaktgeometrie (Breite und Höhe) oder der [verketteten Tasten](https://w3c.github.io/pointerevents/#dfn-chorded-buttons) ein.

Das `pointermove`-Ereignis kann zusammengefasste Ereignisse haben, wenn bereits ein anderes `pointermove`-Ereignis mit derselben Zeiger-ID vorhanden ist, das noch nicht in der Ereignisschleife verarbeitet wurde.
Wenn Ereignisse zusammengefasst sind, ist das `target` des ausgelösten Ereignisses dasselbe wie das letzte zusammengefasste. Weitere Informationen zu zusammengefassten Ereignissen finden Sie in der Dokumentation zu [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

Dieses Ereignis ist dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis sehr ähnlich, bietet jedoch mehr Funktionen. Diese Ereignisse treten unabhängig davon auf, ob Zeigertasten gedrückt sind oder nicht. Sie können mit sehr hoher Rate ausgelöst werden, abhängig davon, wie schnell der Benutzer den Zeiger bewegt, wie schnell die Maschine ist, welche anderen Aufgaben und Prozesse ausgeführt werden, etc.

Der Unterschied zwischen [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) und `pointermove` liegt in ihrer Auslösefrequenz.
Ein Browser kann `pointermove`-Ereignisse verzögern, um die Leistung zu verbessern, während `pointerrawupdate`-Ereignisse so schnell und häufig wie möglich vom Browser gesendet werden.
Für die meisten Anwendungsfälle sollten Sie `pointermove` bevorzugen, um Leistungsprobleme zu vermeiden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Nutzungshinweise

Das Ereignis, welches vom Typ [`PointerEvent`](/de/docs/Web/API/PointerEvent) ist, bietet alle Informationen, die Sie über die Interaktion des Benutzers mit dem Zeigegerät wissen müssen, einschließlich der Position, der Bewegungsdistanz, der Tastenzustände und vielem mehr.

## Beispiele

Um einen Handler für `pointermove`-Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzuzufügen:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Pointer moved");
});
```

Sie können auch die `onpointermove`-Ereignis-Handler-Eigenschaft verwenden:

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
