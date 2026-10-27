---
title: "Element: pointercancel-Ereignis"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das **`pointercancel`**-Ereignis wird ausgelöst, wenn der Browser feststellt, dass voraussichtlich keine weiteren Pointer-Ereignisse auftreten werden, oder wenn der Pointer nach dem Auslösen des [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses zum Verschieben, Zoomen oder Scrollen des Viewports verwendet wird.

Beispiele für Situationen, die ein `pointercancel`-Ereignis auslösen:

- Ein Hardware-Ereignis bricht die Pointer-Aktivitäten ab. Das kann beispielsweise der Fall sein, wenn die Person über eine Oberfläche zum Wechseln zwischen Anwendungen oder mit der „Home“-Taste eines Mobilgeräts zu einer anderen Anwendung wechselt.
- Die Bildschirmausrichtung des Geräts ändert sich, während der Pointer aktiv ist.
- Der Browser stellt fest, dass die Pointer-Eingabe versehentlich begonnen wurde. Dies kann beispielsweise passieren, wenn die Hardware eine Handballenerkennung unterstützt, damit eine auf dem Display aufliegende Hand bei der Verwendung eines Eingabestifts nicht versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn eine Person mit zu vielen Pointern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle vorhandenen Pointer auslösen (auch wenn die Person den Bildschirm weiterhin berührt).

> [!NOTE]
> Nach dem Auslösen des `pointercancel`-Ereignisses sendet der Browser außerdem [`pointerout`](/de/docs/Web/API/Element/pointerout_event), gefolgt von [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointercancel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointercancel = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("Pointer event canceled");
});
```

Verwendung der Event-Handler-Eigenschaft `onpointercancel` (beachten Sie jedoch, dass dadurch andere gegebenenfalls über `onpointercancel` hinzugefügte Event-Listener ersetzt werden):

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Pointer event canceled");
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
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
