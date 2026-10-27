---
title: "Element: pointerup-Ereignis"
short-title: pointerup
slug: Web/API/Element/pointerup_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointerup`-Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist. Beachten Sie, dass stattdessen auch ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftreten kann.

Dieses Verhalten unterscheidet sich von [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignissen. Bei einer physischen Maus wird ein `mouseup`-Ereignis ausgelöst, sobald eine beliebige Maustaste losgelassen wird. Ein `pointerup`-Ereignis wird dagegen erst ausgelöst, wenn die letzte gedrückte Taste losgelassen wird. Werden zuvor Tasten losgelassen, während andere noch gedrückt sind, wird kein `pointerup`-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerup", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointerup = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerup", (event) => {
  console.log("Pointer up");
});
```

Verwendung der `onpointerup`-Ereignisbehandlungs-Eigenschaft (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpointerup` hinzugefügte Ereignis-Listener ersetzt werden):

```js
const para = document.querySelector("p");

para.onpointerup = (event) => {
  console.log("Pointer up");
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
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
