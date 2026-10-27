---
title: "Element: lostpointercapture-Ereignis"
short-title: lostpointercapture
slug: Web/API/Element/lostpointercapture_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das **`lostpointercapture`**-Ereignis wird ausgelöst, wenn ein [erfasster Pointer](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("lostpointercapture", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onlostpointercapture = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Dieses Beispiel überwacht das `lostpointercapture`-Ereignis für ein Element und erfasst den Pointer für dieses Element bei `pointerdown`. Wenn der Benutzer den Pointer anschließend freigibt, wird das `lostpointercapture`-Ereignis ausgelöst.

```js
const para = document.querySelector("p");

para.addEventListener("lostpointercapture", () => {
  console.log("I've been released!");
});

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

Dasselbe Beispiel, jedoch mit der Event-Handler-Eigenschaft `onlostpointercapture`. Beachten Sie, dass dadurch gegebenenfalls andere Ereignis-Listener ersetzt werden, die mit `onlostpointercapture` hinzugefügt wurden:

```js
const para = document.querySelector("p");

para.onlostpointercapture = () => {
  console.log("I've been released!");
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
  - [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
