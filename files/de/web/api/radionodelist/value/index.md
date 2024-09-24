---
title: "RadioNodeList: Eigenschaft value"
short-title: value
slug: Web/API/RadioNodeList/value
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("HTML DOM") }}

Wenn die zugrunde liegende Elementkollektion Radiobuttons enthält, stellt die **`RadioNodeList.value`**-Eigenschaft den ausgewählten Radiobutton dar. Beim Abrufen der `value`-Eigenschaft wird der `value` des aktuell `checked` Radiobuttons als Zeichenfolge zurückgegeben. Wenn die Sammlung keine Radiobuttons enthält oder keiner der Radiobuttons in der Sammlung den Zustand `checked` hat, wird die leere Zeichenfolge zurückgegeben. Beim Setzen der `value`-Eigenschaft wird der erste Radiobutton-Eingabe, dessen `value`-Eigenschaft dem neuen Wert entspricht, auf `checked` gesetzt.

## Syntax

```js-nolint
value = radioNodeList.value
radioNodeList.value = string
```

## Beispiel

### HTML

```html
<form>
  <label><input type="radio" name="color" value="blue" />Blau</label>
  <label><input type="radio" name="color" value="red" />Rot</label>
</form>
```

### JavaScript

```js
// Holen Sie sich das Formular
const form = document.forms[0];

// Holen Sie sich die Radiobuttons des Formulars
const radios = form.elements["color"];

// Wählen Sie die Option "rot"
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
