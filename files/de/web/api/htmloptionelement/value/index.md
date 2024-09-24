---
title: "HTMLOptionElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLOptionElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des {{DOMxRef("HTMLOptionElement")}}-Interfaces repräsentiert den Wert des {{htmlelement("option")}}-Elements als Zeichenkette oder den leeren String, wenn kein Wert festgelegt ist. Sie spiegelt das [`value`](/de/docs/Web/HTML/Element/option#value)-Attribut des Elements wider, falls vorhanden. Andernfalls gibt sie die Inhalte des Elements zurück oder setzt diese, ähnlich der Eigenschaft {{domxref("Node.textContent","textContent")}}.

## Wert

Eine Zeichenkette, die den Wert des `value`-Attributs enthält, falls vorhanden, oder die Inhalte des Elements.

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
- {{DOMXref("HTMLOptionElement.selected")}}
- {{DOMXref("HTMLOptionElement.defaultSelected")}}
- {{DOMXref("HTMLOptionElement.label")}}
