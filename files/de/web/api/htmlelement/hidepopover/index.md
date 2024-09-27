---
title: "HTMLElement: hidePopover()-Methode"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{APIRef("Popover API")}}

Die **`hidePopover()`**-Methode der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle verbirgt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d. h. eines mit einem gültigen [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut), indem es aus der [obersten Ebene](/de/docs/Glossary/top_layer) entfernt und mit `display: none` gestylt wird.

Wenn `hidePopover()` auf ein sichtbares Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)-Ereignis ausgelöst, gefolgt vom Verbergen des Popovers, und dann wird das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis ausgelöst. Wenn das Element bereits verborgen ist, wird ein Fehler ausgelöst.

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
  - : Wird ausgegeben, wenn das Popover bereits verborgen ist.

## Beispiele

### Ein Popover verbergen

Das folgende Beispiel bietet die Funktionalität, ein Popover durch das Drücken einer bestimmten Taste auf der Tastatur zu verbergen.

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
