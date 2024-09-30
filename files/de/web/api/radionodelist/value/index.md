---
title: "RadioNodeList: value-Eigenschaft"
short-title: value
slug: Web/API/RadioNodeList/value
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("HTML DOM") }}

Wenn die zugrunde liegende Elementkollektion Radio-Buttons enthält, repräsentiert die **`RadioNodeList.value`**-Eigenschaft den ausgewählten Radio-Button. Beim Abrufen der `value`-Eigenschaft wird der `value` des momentan ausgewählten (`checked`) Radio-Buttons als Zeichenkette zurückgegeben. Wenn die Sammlung keine Radio-Buttons enthält oder keiner der Radio-Buttons in der Sammlung im `checked`-Zustand ist, wird eine leere Zeichenkette zurückgegeben. Beim Festlegen der `value`-Eigenschaft wird der erste Radio-Button-Input, dessen `value`-Eigenschaft dem neuen Wert entspricht, auf `checked` gesetzt.

## Syntax

```js-nolint
value = radioNodeList.value
radioNodeList.value = string
```

## Beispiel

### HTML

```html
<form>
  <label><input type="radio" name="color" value="blue" />Blue</label>
  <label><input type="radio" name="color" value="red" />Red</label>
</form>
```

### JavaScript

```js
// Get the form
const form = document.forms[0];

// Get the form's radio buttons
const radios = form.elements["color"];

// Choose the "red" option
radios.value = "red";
```

### Ergebnis

{{EmbedLiveSample("Example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}-Elemente.
