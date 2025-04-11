---
title: "HTMLOptionElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLOptionElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)-Interfaces repräsentiert den Wert des {{htmlelement("option")}}-Elements als String oder den leeren String, wenn kein Wert gesetzt ist. Sie spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/option#value)-Attribut des Elements wider, sofern vorhanden. Andernfalls gibt sie den Inhalt des Elements zurück oder setzt diesen, ähnlich der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

## Wert

Ein String, der den Wert des `value`-Attributs enthält, falls vorhanden, oder den Inhalt des Elements.

## Beispiele

```js
const optionElement = document.querySelector("datalist option:first-of-type");
const oldValue = optionElement.value;
optionElement.value = oldValue.toUpperCase();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
- [`HTMLOptionElement.defaultSelected`](/de/docs/Web/API/HTMLOptionElement/defaultSelected)
- [`HTMLOptionElement.label`](/de/docs/Web/API/HTMLOptionElement/label)
