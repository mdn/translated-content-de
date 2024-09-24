---
title: "HTMLOptionElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLOptionElement/text
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{ApiRef("HTML DOM")}}

Die **`text`**-Eigenschaft des {{domxref("HTMLOptionElement")}} repräsentiert den Text innerhalb des {{htmlelement("option")}}-Elements. Diese Eigenschaft stellt die gleiche Information dar wie {{domxref("Node.textContent")}}.

> [!NOTE]
> Wenn das Element ein `label` hat, wird der Text innerhalb des {{htmlelement("option")}}-Elements nicht visuell dargestellt. In diesem Fall kann die `text`-Eigenschaft zwar verwendet werden, um den Inhalt festzulegen, aber es wird keine sichtbare Wirkung haben.

## Wert

Ein String.

## Beispiel

```js
const optionElement = document.getElementById("exampleOption");
console.log(`Text property: ${optionElement.text}`);
optionElement.text = "Updated text";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}
- {{domxref("HTMLOptionElement.value")}}
- {{domxref("HTMLOptionElement.label")}}
- {{domxref("HTMLScriptElement.text")}}
- {{domxref("HTMLAnchorElement.text")}}
