---
title: "HTMLOptionElement: value Eigenschaft"
short-title: value
slug: Web/API/HTMLOptionElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)-Schnittstelle repräsentiert den Wert des {{htmlelement("option")}}-Elements als einen String oder den leeren String, wenn kein Wert festgelegt ist. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut des Elements wider, falls vorhanden. Andernfalls gibt sie den Inhalt des Elements zurück oder legt diesen fest, ähnlich der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

## Wert

Ein String, der den `value`-Attributwert enthält, falls vorhanden, oder den Inhalt des Elements.

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
