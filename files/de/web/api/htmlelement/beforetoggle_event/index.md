---
title: "HTMLElement: beforetoggle-Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Das **`beforetoggle`**-Ereignis des {{domxref("HTMLElement")}}-Interfaces wird auf einem {{domxref("Popover_API", "Popover", "", "nocode")}}-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut hat) ausgelöst, unmittelbar bevor es angezeigt oder verborgen wird.

- Wenn das Popover von verborgen zu angezeigt wechselt, wird die Eigenschaft `event.oldState` auf `closed` und die Eigenschaft `event.newState` auf `open` gesetzt.
- Wenn das Popover von angezeigt zu verborgen wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Ereignistyp

Ein {{domxref("ToggleEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover wird angezeigt");
  } else {
    console.log("Popover wird verborgen");
  }
});
```

### Eine Anmerkung zum Coalescing von Toggle-Ereignissen

Es ist erwähnenswert, dass `beforetoggle`-Ereignisse zusammengefasst werden, was bedeutet, dass, wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Chance hat, zu zyklisieren, nur ein einziges Ereignis ausgelöst wird.

Zum Beispiel:

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` wird nur einmal ausgelöst
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
