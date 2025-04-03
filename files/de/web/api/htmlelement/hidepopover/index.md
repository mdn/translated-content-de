---
title: "HTMLElement: hidePopover() Methode"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Popover API")}}

Die **`hidePopover()`**-Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces versteckt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut hat), indem es aus der {{Glossary("top_layer", "Top-Ebene")}} entfernt und mit `display: none` gestylt wird.

Wenn `hidePopover()` bei einem angezeigten Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Event ausgelöst, gefolgt davon, dass das Popover versteckt wird, und anschließend wird das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event ausgelöst. Wenn das Element bereits versteckt ist, wird ein Fehler ausgelöst.

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
  - : Wird ausgelöst, wenn das Popover bereits versteckt ist.

## Beispiele

### Ein Popover verstecken

Das folgende Beispiel bietet die Funktionalität, ein Popover durch Drücken einer bestimmten Taste auf der Tastatur zu verstecken.

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
