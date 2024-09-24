---
title: "HTMLElement: Methode hidePopover()"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{APIRef("Popover API")}}

Die **`hidePopover()`**-Methode des {{domxref("HTMLElement")}}-Interfaces verbirgt ein [Popover](/de/docs/Web/API/Popover_API)-Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut besitzt), indem es aus der {{glossary("top layer")}} entfernt und mit `display: none` gestylt wird.

Wenn `hidePopover()` auf einem sichtbaren Element mit dem [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut aufgerufen wird, wird ein {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}-Ereignis ausgelöst, gefolgt davon, dass das Popover verborgen wird, und dann das {{domxref("HTMLElement/toggle_event", "toggle")}}-Ereignis ausgelöst. Wenn das Element bereits verborgen ist, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
hidePopover()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Popover bereits verborgen ist.

## Beispiele

### Ein Popover verbergen

Das folgende Beispiel bietet Funktionalität, um ein Popover zu verbergen, indem eine bestimmte Taste auf der Tastatur gedrückt wird.

#### HTML

```html
<button popovertarget="mypopover">Display des Popovers umschalten</button>
<div id="mypopover" popover="manual">
  Sie können <kbd>h</kbd> auf Ihrer Tastatur drücken, um das Popover zu schließen.
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
