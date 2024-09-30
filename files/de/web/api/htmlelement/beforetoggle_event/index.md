---
title: "HTMLElement: beforetoggle-Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{APIRef("Popover API")}}

Das **`beforetoggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle tritt bei einem [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. einem Element mit einem gültigen [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut) auf, kurz bevor es angezeigt oder versteckt wird.

- Wenn das Popover von versteckt auf sichtbar wechselt, wird die Eigenschaft `event.oldState` auf `closed` und die Eigenschaft `event.newState` auf `open` gesetzt.
- Wenn das Popover von sichtbar auf versteckt wechselt, wird `event.oldState` `open` und `event.newState` `closed` sein.

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

### Ein Hinweis zur Zusammenfassung von Toggle-Ereignissen

Es sei darauf hingewiesen, dass `beforetoggle`-Ereignisse zusammengefasst werden. Das bedeutet, dass, wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor der Ereignis-Loop die Chance hat, zu zyklieren, nur ein einziges Ereignis ausgelöst wird.

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

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
