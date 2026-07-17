---
title: "HTMLElement: hidePopover()-Methode"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 88dc56f83da6cf7adf4a2ad8803a412141ed4989
---

{{APIRef("Popover API")}}

Die **`hidePopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle verbirgt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut), indem es vom {{Glossary("top_layer", "Top-Layer")}} entfernt und mit `display: none` gestylt wird.

Wenn `hidePopover()` auf einem sichtbaren Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Event ausgelöst, gefolgt vom Verbergen des Popovers, woraufhin das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event ausgelöst wird.

## Syntax

```js-nolint
hidePopover()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Methode aufgerufen wird, während ein anderes Popover bereits im Prozess des Zeigens oder Verbergens ist (z. B. innerhalb eines `beforetoggle`-Event-Listeners).

## Beispiele

### Ein Popover verbergen

Das folgende Beispiel bietet eine Funktionalität, um ein Popover durch Drücken einer bestimmten Taste auf der Tastatur zu verbergen.

#### HTML

```html
<button popovertarget="mypopover">Toggle popover's display</button>
<div id="mypopover" popover="manual">
  You can press <kbd>h</kbd> on your keyboard to close the popover.
</div>
```

#### JavaScript

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.hidePopover();
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Hiding a popover","100%",100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
