---
title: "Element: pointerover-Ereignis"
short-title: pointerover
slug: Web/API/Element/pointerover_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointerover`-Ereignis wird ausgelöst, wenn ein Zeigegerät in den Trefferbereich eines Elements bewegt wird.

`pointerover`-Ereignisse haben dieselben Probleme wie [`mouseover`](/de/docs/Web/API/Element/mouseover_event). Wenn das Zielelement Kindelemente hat, werden `pointerout`- und `pointerover`-Ereignisse auch ausgelöst, wenn der Zeiger die Grenzen dieser Elemente überschreitet – nicht nur die des Zielelements selbst. Das Verhalten der Ereignisse [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) ist in der Regel sinnvoller, da sie nicht durch das Bewegen des Zeigers in Kindelemente beeinflusst werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerover", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

Verwendung der Event-Handler-Eigenschaft `onpointerover` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onpointerover` hinzugefügte Event-Listener ersetzt werden):

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
