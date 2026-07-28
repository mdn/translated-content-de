---
title: "Element: pointerleave Ereignis"
short-title: pointerleave
slug: Web/API/Element/pointerleave_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das `pointerleave`-Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Treffergrenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stift den vom Digitalisierer erkennbaren Hover-Bereich verlässt. Ansonsten funktioniert `pointerleave` genauso wie [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event) und wird zur gleichen Zeit ausgelöst. Sie werden ebenfalls zur gleichen Zeit wie die Ereignisse [`mouseout`](/de/docs/Web/API/Element/mouseout_event) und [`pointerout`](/de/docs/Web/API/Element/pointerout_event) ausgelöst, wenn zutreffend.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointerleave", (event) => { })

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

Verwendung der `onpointerleave` Ereignishandler-Eigenschaft:

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
