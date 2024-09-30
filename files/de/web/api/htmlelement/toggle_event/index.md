---
title: "HTMLElement: toggle-Ereignis"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. einem Element, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut hat) unmittelbar nach dessen Anzeige oder Ausblendung ausgelöst.

- Wenn sich das Popover-Element vom versteckten zum sichtbaren Zustand ändert, wird die Eigenschaft `event.oldState` auf `closed` und die Eigenschaft `event.newState` auf `open` gesetzt.
- Wenn sich das Popover-Element vom sichtbaren zum versteckten Zustand ändert, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

> [!NOTE]
> Das `toggle`-Ereignis verhält sich anders, wenn es bei {{htmlelement("details")}}-Elementen ausgelöst wird. In diesem Fall bezieht es sich nicht auf Popovers und wird stattdessen ausgelöst, wenn der `open`/`closed`-Zustand eines `<details>`-Elements umgeschaltet wird. Weitere Informationen finden Sie auf der Seite zum `HTMLDetailsElement`-[`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event)-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Ereignistyp

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

### Eine Anmerkung zur Zusammenführung von Toggle-Ereignissen

Es ist hervorzuheben, dass `toggle`-Ereignisse zusammengeführt werden, was bedeutet, dass, wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Chance hat, sich zu drehen, nur ein einzelnes Ereignis ausgelöst wird.

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

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
