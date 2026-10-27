---
title: "Element: pointerleave-Ereignis"
short-title: pointerleave
slug: Web/API/Element/pointerleave_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointerleave`-Ereignis wird ausgelöst, wenn ein Zeigegerät den für die Trefferprüfung relevanten Bereich eines Elements verlässt. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stift den vom Digitizer erfassbaren Hover-Bereich verlässt. Ansonsten verhält sich `pointerleave` wie [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event); beide Ereignisse werden gleichzeitig ausgelöst. Gegebenenfalls werden zur selben Zeit auch die Ereignisse [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`pointerout`](/de/docs/Web/API/Element/pointerout_event) ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerleave", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onpointerleave = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerleave", (event) => {
  console.log("Pointer left element");
});
```

Verwendung der Event-Handler-Eigenschaft `onpointerleave` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpointerleave` hinzugefügte Event-Listener ersetzt werden):

```js
const para = document.querySelector("p");

para.onpointerleave = (event) => {
  console.log("Pointer left element");
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
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
