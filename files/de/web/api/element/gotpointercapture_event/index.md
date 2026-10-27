---
title: "Element: gotpointercapture-Ereignis"
short-title: gotpointercapture
slug: Web/API/Element/gotpointercapture_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das **`gotpointercapture`**-Ereignis wird ausgelöst, wenn ein Element mithilfe von [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) einen Zeiger erfasst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("gotpointercapture", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ongotpointercapture = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Dieses Beispiel ruft ein `<p>`-Element ab und lauscht auf das `gotpointercapture`-Ereignis. Bei einem `pointerdown`-Ereignis ruft es dann `setPointerCapture()` für das Element auf, wodurch `gotpointercapture` ausgelöst wird.

```js
const para = document.querySelector("p");

para.addEventListener("gotpointercapture", () => {
  console.log("I've been captured!");
});

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

Dasselbe Beispiel mit der Event-Handler-Eigenschaft `ongotpointercapture` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `ongotpointercapture` hinzugefügte Event-Listener ersetzt werden):

```js
const para = document.querySelector("p");

para.ongotpointercapture = () => {
  console.log("I've been captured!");
};

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
