---
title: "Element: pointerenter Ereignis"
short-title: pointerenter
slug: Web/API/Element/pointerenter_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das `pointerenter`-Ereignis tritt auf, wenn ein Zeigegerät in die Hit-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses von einem Gerät, das Hover nicht unterstützt (siehe [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)). Ansonsten funktioniert `pointerenter` genauso wie [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event) und wird zur gleichen Zeit ausgelöst. Sie werden auch zur gleichen Zeit wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event) und [`pointerover`](/de/docs/Web/API/Element/pointerover_event) Ereignisse ausgelöst, wenn dies zutrifft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointerenter", (event) => { })

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

Verwendung der `onpointerenter` Ereignishandlereigenschaft:

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
