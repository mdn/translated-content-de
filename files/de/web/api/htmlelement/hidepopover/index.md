---
title: "HTMLElement: hidePopover() Methode"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{APIRef("Popover API")}}

Die **`hidePopover()`** Methode des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface versteckt ein [Popover](/de/docs/Web/API/Popover_API) Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut hat), indem es aus der [obersten Ebene](/de/docs/Glossary/top_layer) entfernt und mit `display: none` gestylt wird.

Wenn `hidePopover()` auf ein sichtbares Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut aufgerufen wird, wird ein [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) Ereignis ausgelöst, gefolgt vom Verstecken des Popovers und anschließend dem Auslösen des [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisses. Wenn das Element bereits versteckt ist, wird ein Fehler geworfen.

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
  - : Wird geworfen, wenn das Popover bereits versteckt ist.

## Beispiele

### Ein Popover verstecken

Das folgende Beispiel bietet eine Funktionalität, um ein Popover durch Drücken einer bestimmten Taste auf der Tastatur zu verstecken.

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
