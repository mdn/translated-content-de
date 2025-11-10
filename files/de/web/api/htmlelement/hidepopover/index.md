---
title: "HTMLElement: Methode hidePopover()"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Popover API")}}

Die **`hidePopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces verbirgt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut hat), indem es aus der {{Glossary("top_layer", "Top-Ebene")}} entfernt und mit `display: none` gestylt wird.

Wenn `hidePopover()` bei einem sichtbaren Element mit dem [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt davon, dass das Popover verborgen wird, und dann das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis ausgelöst. Wenn das Element bereits verborgen ist, wird ein Fehler ausgelöst.

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
  - : Wird ausgelöst, wenn das Popover bereits verborgen ist.

## Beispiele

### Ein Popover verbergen

Das folgende Beispiel bietet eine Funktionalität, um ein Popover durch das Drücken einer bestimmten Taste auf der Tastatur zu verbergen.

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
