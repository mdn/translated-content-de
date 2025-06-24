---
title: "HTMLElement: click()-Methode"
short-title: click()
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.click()`**-Methode simuliert einen Mausklick auf ein Element. Wenn die Methode auf einem Element aufgerufen wird, wird das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis des Elements ausgelöst (es sei denn, das Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) ist gesetzt).

## Syntax

```js-nolint
click()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Mausklick simulieren, wenn der Mauszeiger über ein Kontrollkästchen bewegt wird:

### HTML

```html
<form>
  <input type="checkbox" id="myCheck" />
</form>
```

### JavaScript

```js
const checkbox = document.getElementById("myCheck");

// On mouse-over, execute myFunction
checkbox.addEventListener("mouseover", () => {
  // Simulate a mouse click
  checkbox.click();
});

checkbox.addEventListener("click", () => {
  console.log("click event occurred");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignishandler
  - [`Element.onclick`](/de/docs/Web/API/Element/click_event)
  - [`Element.ondblclick`](/de/docs/Web/API/Element/dblclick_event)
  - [`Element.onauxclick`](/de/docs/Web/API/Element/auxclick_event)
