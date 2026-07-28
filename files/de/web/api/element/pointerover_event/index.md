---
title: "Element: pointerover Ereignis"
short-title: pointerover
slug: Web/API/Element/pointerover_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das `pointerover` Ereignis wird ausgelöst, wenn ein Zeigegerät in die Hit-Test-Grenzen eines Elements bewegt wird.

`pointerover` Ereignisse haben die gleichen Probleme wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event). Wenn das Ziel-Element Kindelemente hat, werden `pointerout` und `pointerover` Ereignisse ausgelöst, während sich der Zeiger über die Grenzen dieser Elemente bewegt, nicht nur über das Ziel-Element selbst. In der Regel ist das Verhalten von [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) Ereignissen sinnvoller, da sie nicht davon beeinflusst werden, dass man in Kindelemente hinein- oder herausbewegt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerover", (event) => { })

onpointerover = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerover", (event) => {
  console.log("Pointer moved in");
});
```

Verwendung der `onpointerover` Ereignis-Handler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointerover = (event) => {
  console.log("Pointer moved in");
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
  - [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
