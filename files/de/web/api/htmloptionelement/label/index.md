---
title: "HTMLOptionElement: label Eigenschaft"
short-title: label
slug: Web/API/HTMLOptionElement/label
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{ApiRef("HTML DOM")}}

Die **`label`**-Eigenschaft des {{domxref("HTMLOptionElement")}} repräsentiert den Text, der für eine Option in einem {{htmlelement("select")}}-Element angezeigt wird oder als Teil einer Liste von Vorschlägen in einem {{htmlelement("datalist")}}-Element. Sie spiegelt das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut des {{htmlelement("option")}}-Elements wider.

Wenn das Attribut weggelassen wird oder ein leerer String ist, gibt die `label`-Eigenschaft den {{domxref("HTMLOptionElement.text", "text")}}-Inhalt des Elements zurück.

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

- {{domxref("HTMLOptionElement.value")}}
- {{domxref("HTMLOptionElement.label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}
