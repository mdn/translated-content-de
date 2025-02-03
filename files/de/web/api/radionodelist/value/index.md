---
title: "RadioNodeList: value-Eigenschaft"
short-title: value
slug: Web/API/RadioNodeList/value
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{ APIRef("HTML DOM") }}

Wenn die zugrunde liegende Elementesammlung Optionsfelder enthält, repräsentiert die **`RadioNodeList.value`**-Eigenschaft das ausgewählte Optionsfeld. Beim Abrufen der `value`-Eigenschaft wird der `value` des aktuell `checked` Optionsfeldes als Zeichenkette zurückgegeben. Wenn die Sammlung keine Optionsfelder enthält oder keines der Optionsfelder in der Sammlung im `checked`-Zustand ist, wird die leere Zeichenkette zurückgegeben. Beim Setzen der `value`-Eigenschaft wird das erste Optionenfelder-Input-Element, dessen `value`-Eigenschaft dem neuen Wert entspricht, auf `checked` gesetzt.

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

- Die {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} Elemente.
