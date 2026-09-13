---
title: "Element: pointercancel-Ereignis"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{APIRef("Pointer Events")}}

Das **`pointercancel`**-Ereignis wird ausgelöst, wenn der Browser feststellt, dass es wahrscheinlich keine weiteren Zeigerereignisse mehr geben wird, oder wenn nach dem Auslösen des [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses der Zeiger dann zur Manipulation des Ansichtsbereichs durch Schwenken, Zoomen oder Scrollen verwendet wird.

Einige Beispiele für Situationen, die ein `pointercancel`-Ereignis auslösen werden:

- Ein Hardware-Ereignis tritt auf, das die Zeigeraktivitäten abbricht. Dies kann zum Beispiel der Fall sein, wenn der Benutzer zwischen Anwendungen über eine Anwendungsumschalter-Schnittstelle oder die "Home"-Taste auf einem Mobilgerät wechselt.
- Die Bildschirmorientierung des Geräts wird geändert, während der Zeiger aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Zeigereingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware beispielsweise Palm Rejection unterstützt, um zu verhindern, dass sich eine Hand auf dem Display ablegt, während ein Stift verwendet wird und versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen gleichzeitigen Zeigern interagiert, kann der Browser dieses Ereignis für alle bestehenden Zeiger auslösen (auch wenn der Benutzer den Bildschirm noch berührt).

> [!NOTE]
> Nachdem das `pointercancel`-Ereignis ausgelöst wurde, sendet der Browser auch [`pointerout`](/de/docs/Web/API/Element/pointerout_event), gefolgt von [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointercancel", (event) => { })

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

Verwendung der `onpointercancel`-Ereignishandler-Eigenschaft:

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
