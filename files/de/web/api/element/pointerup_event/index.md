---
title: "Element: pointerup-Ereignis"
short-title: pointerup
slug: Web/API/Element/pointerup_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das `pointerup`-Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist. Denken Sie daran, dass es stattdessen möglich ist, ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis zu erhalten.

Dieses Verhalten unterscheidet sich von [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignissen. Beim Verwenden einer physischen Maus werden `mouseup`-Ereignisse immer dann ausgelöst, wenn eine Taste an der Maus losgelassen wird. `pointerup`-Ereignisse werden nur beim Loslassen der letzten Taste ausgelöst; vorherige Tastenfreigaben, während andere Tasten gedrückt gehalten werden, lösen keine `pointerup`-Ereignisse aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerup", (event) => { })

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

Verwendung der `onpointerup`-Ereignis-Handler-Eigenschaft:

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
