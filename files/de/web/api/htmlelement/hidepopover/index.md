---
title: "HTMLElement: hidePopover() Methode"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 58290795d9f78c91933e092053bb6439bde56651
---

{{APIRef("Popover API")}}

Die **`hidePopover()`** Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle verbirgt ein [Popover](/de/docs/Web/API/Popover_API) Element (d.h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut), indem es aus der {{Glossary("top_layer", "obersten Schicht")}} entfernt und mit `display: none` gestyled wird.

Wenn `hidePopover()` bei einem angezeigten Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis ausgelöst, gefolgt von der Ausblendung des Popovers und dann dem [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis. Wenn das Element bereits ausgeblendet ist, wird ein Fehler ausgelöst.

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
  - : Wird ausgelöst, wenn das Popover bereits ausgeblendet ist oder wenn diese Methode aufgerufen wird, während bereits ein anderes Popover im Prozess des Ein- oder Ausblendens ist (z. B. innerhalb eines `beforetoggle` Ereignis-Listeners).

## Beispiele

### Ein Popover ausblenden

Das folgende Beispiel bietet die Funktionalität, ein Popover durch Drücken einer bestimmten Taste auf der Tastatur auszublenden.

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
