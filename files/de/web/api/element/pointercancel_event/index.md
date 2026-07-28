---
title: "Element: pointercancel Ereignis"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das **`pointercancel`**-Ereignis wird ausgelöst, wenn der Browser feststellt, dass es wahrscheinlich keine weiteren Pointer-Ereignisse geben wird, oder wenn nach dem [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis der Pointer verwendet wird, um den Ansichtsbereich durch Schwenken, Zoomen oder Scrollen zu manipulieren.

Einige Beispiele von Situationen, die ein `pointercancel`-Ereignis auslösen:

- Ein Hardware-Ereignis tritt auf, das die Pointer-Aktivitäten abbricht. Dies kann zum Beispiel geschehen, wenn der Benutzer Anwendungen über ein Anwendungsumschalter-Interface wechselt oder die "Home"-Taste auf einem mobilen Gerät drückt.
- Die Ausrichtung des Gerätebildschirms wird geändert, während der Pointer aktiv ist.
- Der Browser entscheidet, dass der Benutzer versehentlich die Eingabe mit dem Pointer begonnen hat. Dies kann der Fall sein, wenn die Hardware Palm-Rejection unterstützt, um zu verhindern, dass eine auf dem Display ruhende Hand beim Verwenden eines Stifts versehentlich Ereignisse auslöst.
- Die {{cssxref("touch-action")}} CSS-Eigenschaft verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen gleichzeitigen Zeigern interagiert, kann der Browser dieses Ereignis für alle vorhandenen Zeiger auslösen (selbst wenn der Benutzer noch den Bildschirm berührt).

> [!NOTE]
> Nachdem das `pointercancel`-Ereignis ausgelöst wurde, sendet der Browser auch [`pointerout`](/de/docs/Web/API/Element/pointerout_event) gefolgt von [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event).

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
  console.log("Pointer event cancelled");
});
```

Verwendung der `onpointercancel`-Ereignishandler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Pointer event cancelled");
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
