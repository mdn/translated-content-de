---
title: "Element: pointerenter-Ereignis"
short-title: pointerenter
slug: Web/API/Element/pointerenter_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointerenter`-Ereignis wird ausgelöst, wenn ein Zeigegerät in den Bereich eines Elements oder eines seiner Nachfahren bewegt wird, in dem eine Treffertestung erfolgt. Dies gilt auch, wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis von einem Gerät ausgelöst wird, das kein Hover unterstützt (siehe [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)). Ansonsten funktioniert `pointerenter` wie [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event); beide Ereignisse werden gleichzeitig ausgelöst. Gegebenenfalls werden sie auch gleichzeitig mit den Ereignissen [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`pointerover`](/de/docs/Web/API/Element/pointerover_event) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerenter", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointerenter = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerenter", (event) => {
  console.log("Pointer entered element");
});
```

Verwendung der Event-Handler-Eigenschaft `onpointerenter` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpointerenter` hinzugefügte Event-Listener ersetzt werden):

```js
const para = document.querySelector("p");

para.onpointerenter = (event) => {
  console.log("Pointer entered element");
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
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
