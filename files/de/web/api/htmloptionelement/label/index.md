---
title: "HTMLOptionElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLOptionElement/label
l10n:
  sourceCommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{ApiRef("HTML DOM")}}

Die **`label`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) repräsentiert den für eine Option in einem {{htmlelement("select")}}-Element angezeigten Text oder als Teil einer Liste von Vorschlägen in einem {{htmlelement("datalist")}}-Element. Sie spiegelt das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut des {{htmlelement("option")}}-Elements wider.

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
