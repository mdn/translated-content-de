---
title: "Element: pointerout Ereignis"
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das `pointerout` Ereignis wird aus verschiedenen Gründen ausgelöst, unter anderem: wenn sich das Zeigegerät außerhalb der _Hit-Test_-Grenzen eines Elements bewegt; beim Auslösen des [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisses für ein Gerät, das keinen Hover unterstützt (siehe [`pointerup`](/de/docs/Web/API/Element/pointerup_event)); nach dem Auslösen des [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignisses (siehe [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)); wenn ein Stift außerhalb des durch den Digitalisierer erkennbaren Hover-Bereichs verlässt.

`pointerout` Ereignisse haben die gleichen Probleme wie [`mouseout`](/de/docs/Web/API/Element/mouseout_event). Wenn das Zielelement Kindelemente hat, werden `pointerout` und `pointerover` Ereignisse ausgelöst, wenn sich der Zeiger über die Grenzen dieser Elemente bewegt, nicht nur über das Zielelement selbst. Normalerweise ist das Verhalten der [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) Ereignisse sinnvoller, da sie nicht von der Bewegung in Kindelemente beeinflusst werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointerout", (event) => { })

onpointerout = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerout", (event) => {
  console.log("Pointer moved out");
});
```

Verwendung der `onpointerout` Ereignishandler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointerout = (event) => {
  console.log("Pointer moved out");
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
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
