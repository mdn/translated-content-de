---
title: "HTMLElement: toggle Ereignis"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`toggle`** Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API) Element (d. h. einem Element, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut besitzt) unmittelbar nach dem Ein- oder Ausblenden ausgelöst.

- Wenn das Popover-Element von unsichtbar zu sichtbar wechselt, wird die Eigenschaft `event.oldState` auf `closed` gesetzt und die Eigenschaft `event.newState` auf `open`.
- Wenn das Popover-Element von sichtbar zu unsichtbar wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

> [!NOTE]
> Das `toggle` Ereignis verhält sich anders, wenn es auf {{htmlelement("details")}} Elementen ausgelöst wird. In diesem Fall bezieht es sich nicht auf Popovers, sondern wird ausgelöst, wenn der `open`/`closed` Zustand eines `<details>` Elements umgeschaltet wird. Weitere Informationen finden Sie auf der `HTMLDetailsElement` [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event) Ereignis-Seite.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Ereignis-Typ

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

### Eine Anmerkung zur Coalescence von toggle Ereignissen

Es sei darauf hingewiesen, dass `toggle` Ereignisse zusammengefasst werden, was bedeutet, dass, wenn mehrere `toggle` Ereignisse ausgelöst werden, bevor die Ereignisschleife die Chance hat, sich zu drehen, nur ein einziges Ereignis ausgelöst wird.

Zum Beispiel:

```js
popover.addEventListener("toggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `toggle` only fires once
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
