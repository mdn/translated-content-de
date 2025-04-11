---
title: "HTMLElement: click() Methode"
short-title: click()
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.click()`** Methode simuliert einen Mausklick auf ein Element. Wenn sie auf ein Element aufgerufen wird, wird das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis des Elements ausgelöst (es sei denn, das Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) ist gesetzt).

## Syntax

```js-nolint
click()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Simuliert einen Mausklick, wenn der Mauszeiger über ein Kontrollkästchen bewegt wird:

### HTML

```html
<form>
  <input
    type="checkbox"
    id="myCheck"
    onmouseover="myFunction()"
    onclick="alert('click event occurred')" />
</form>
```

### JavaScript

```js
// On mouse-over, execute myFunction
function myFunction() {
  document.getElementById("myCheck").click();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisbehandler

  - [`Element.onclick`](/de/docs/Web/API/Element/click_event)
  - [`Element.ondblclick`](/de/docs/Web/API/Element/dblclick_event)
  - [`Element.onauxclick`](/de/docs/Web/API/Element/auxclick_event)
