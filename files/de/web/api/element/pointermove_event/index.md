---
title: "Element: pointermove-Ereignis"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das `pointermove`-Ereignis wird ausgelöst, wenn ein Zeiger die Koordinaten ändert und der Zeiger nicht durch eine [Browser-Touch-Aktion](/de/docs/Web/CSS/Reference/Properties/touch-action) [abgebrochen](/de/docs/Web/API/Element/pointercancel_event) wurde. Es ist dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis sehr ähnlich, bietet jedoch mehr Funktionen.

Diese Ereignisse treten unabhängig davon auf, ob Zeigertasten gedrückt sind oder nicht. Sie können mit einer sehr hohen Rate ausgelöst werden, abhängig davon, wie schnell der Benutzer den Zeiger bewegt, wie schnell die Maschine ist, welche anderen Aufgaben und Prozesse ablaufen usw.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Anwendungshinweise

Das Ereignis, das vom Typ [`PointerEvent`](/de/docs/Web/API/PointerEvent) ist, bietet alle Informationen, die Sie über die Interaktion des Benutzers mit dem Zeigegerät wissen müssen, einschließlich der Position, der Bewegungsdistanz, der Tastenstatus und vieles mehr.

## Beispiele

Um einen Handler für `pointermove`-Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzuzufügen:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Pointer moved");
});
```

Sie können auch die `onpointermove`-Ereignishandlereigenschaft verwenden:

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
