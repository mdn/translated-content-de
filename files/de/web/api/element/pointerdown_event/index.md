---
title: "Element: pointerdown-Ereignis"
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

Das `pointerdown`-Ereignis wird ausgelöst, wenn ein Zeiger aktiv wird. Bei einer Maus geschieht dies, wenn von keiner gedrückten Taste zu mindestens einer gedrückten Taste gewechselt wird. Bei einer Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitizer hergestellt wird. Bei einem Stift wird es ausgelöst, wenn die Stiftspitze physischen Kontakt mit dem Digitizer herstellt.

Dieses Verhalten unterscheidet sich von [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignissen. Bei einer physischen Maus werden `mousedown`-Ereignisse jedes Mal ausgelöst, wenn eine Maustaste gedrückt wird. `pointerdown`-Ereignisse werden nur beim ersten Tastendruck ausgelöst; weitere Tastendrücke lösen keine `pointerdown`-Ereignisse aus.

> [!NOTE]
> In Touchscreen-Browsern, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, löst ein `pointerdown`-Ereignis eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus. Dadurch erfasst das Zielelement alle nachfolgenden Zeigerereignisse, als würden sie über ihm stattfinden. Solange diese Erfassung besteht, werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**. Die Erfassung kann manuell aufgehoben werden, indem Sie [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) für das Zielelement aufrufen. Nach einem `pointerup`- oder `pointercancel`-Ereignis wird sie automatisch aufgehoben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("pointerdown", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpointerdown = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Beispiele

Mit `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerdown", (event) => {
  console.log("Pointer down event");
});
```

Mit der Ereignishandler-Eigenschaft `onpointerdown` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onpointerdown` hinzugefügte Ereignislistener ersetzt werden):

```js
const para = document.querySelector("p");

para.onpointerdown = (event) => {
  console.log("Pointer down event");
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
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
