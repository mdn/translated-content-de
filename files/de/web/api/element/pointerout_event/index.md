---
title: "Element: pointerout-Ereignis"
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointerout`-Ereignis wird aus mehreren Gründen ausgelöst: Ein Zeigegerät bewegt sich aus den Grenzen des _Hit-Tests_ eines Elements heraus; für ein Gerät, das Hover nicht unterstützt, wird das Ereignis [`pointerup`](/de/docs/Web/API/Element/pointerup_event) ausgelöst (siehe [`pointerup`](/de/docs/Web/API/Element/pointerup_event)); das Ereignis [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) wurde ausgelöst (siehe [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)); oder ein Eingabestift verlässt den vom Digitizer erkennbaren Hover-Bereich.

`pointerout`-Ereignisse haben dieselben Probleme wie [`mouseout`](/de/docs/Web/API/Element/mouseout_event). Wenn das Zielelement Kindelemente hat, werden `pointerout`- und `pointerover`-Ereignisse auch ausgelöst, wenn der Zeiger die Grenzen dieser Kindelemente überschreitet, nicht nur die Grenzen des Zielelements selbst. Das Verhalten der Ereignisse [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event) und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event) ist meist sinnvoller, da sie nicht durch Bewegungen in Kindelemente hinein beeinflusst werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerout", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

Verwendung der Event-Handler-Eigenschaft `onpointerout` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpointerout` hinzugefügte Event-Listener ersetzt werden):

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
