---
title: "HTMLElement: click() Methode"
short-title: click()
slug: Web/API/HTMLElement/click
l10n:
  sourceCommit: bf0b6c9ae5845fdfca1398541ed26d9946db2495
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.click()`** Methode simuliert einen Mausklick auf ein Element. Wenn sie auf einem Element aufgerufen wird, wird das {{domxref("Element/click_event", "click")}}-Ereignis des Elements ausgelöst (es sei denn, das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut ist gesetzt).

## Syntax

```js-nolint
click()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Simulieren Sie einen Mausklick, wenn der Mauszeiger über ein Kontrollkästchen bewegt wird:

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
// Bei Mausüberlagerung myFunction ausführen
function myFunction() {
  document.getElementById("myCheck").click();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Zugehörige Ereignishandler

  - {{domxref("Element.click_event", "Element.onclick")}}
  - {{domxref("Element.dblclick_event", "Element.ondblclick")}}
  - {{domxref("Element.auxclick_event", "Element.onauxclick")}}
