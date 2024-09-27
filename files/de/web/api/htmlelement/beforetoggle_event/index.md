---
title: "HTMLElement: beforetoggle Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Das **`beforetoggle`**-Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces wird auf einem [Popover](/de/docs/Web/API/Popover_API)-Element ausgelöst (d.h. einem Element mit einem gültigen [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut), unmittelbar bevor es angezeigt oder verborgen wird.

- Wenn das Popover von verborgen zu sichtbar wechselt, wird die Eigenschaft `event.oldState` auf `closed` gesetzt und die Eigenschaft `event.newState` auf `open`.
- Wenn das Popover von sichtbar zu verborgen wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});
```

### Ein Hinweis zur Koaleszenz von Toggle-Ereignissen

Es ist anzumerken, dass `beforetoggle`-Ereignisse koalesziert werden, was bedeutet, dass, wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Chance hat, zu zyklisieren, nur ein einziges Ereignis ausgelöst wird.

Zum Beispiel:

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
