---
title: "HTMLOptionElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLOptionElement/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`label`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) steht für den Text, der für eine Option in einem {{htmlelement("select")}}-Element oder als Teil einer Vorschlagsliste in einem {{htmlelement("datalist")}}-Element angezeigt wird. Sie spiegelt das Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) des {{htmlelement("option")}}-Elements wider.

Wenn das Attribut weggelassen wird oder eine leere Zeichenkette ist, gibt die `label`-Eigenschaft den [`text`](/de/docs/Web/API/HTMLOptionElement/text)-Inhalt des Elements zurück.

## Wert

Ein String.

## Beispiel

```js
const optionElement = document.getElementById("exampleOption");
console.log(`Option's label: ${optionElement.label}`);
optionElement.label = "Updated label";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionElement.value`](/de/docs/Web/API/HTMLOptionElement/value)
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}
