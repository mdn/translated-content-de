---
title: "HTMLOptionElement: label-Eigenschaft"
short-title: label
slug: Web/API/HTMLOptionElement/label
l10n:
  sourceCommit: 494566b8c0d99c0062fdfb672a329d5e00f89078
---

{{ApiRef("HTML DOM")}}

Die **`label`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) repräsentiert den Text, der für eine Option in einem {{htmlelement("select")}}-Element oder als Teil einer Liste von Vorschlägen in einem {{htmlelement("datalist")}}-Element angezeigt wird. Sie spiegelt das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut des {{htmlelement("option")}}-Elements wider.

Wenn das Attribut ausgelassen wird oder der leere String, gibt die `label`-Eigenschaft den [`text`](/de/docs/Web/API/HTMLOptionElement/text)-Inhalt des Elements zurück.

## Wert

Ein Zeichenstring.

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
