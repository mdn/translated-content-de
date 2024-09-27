---
title: "HTMLOptionElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLOptionElement/text
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{ApiRef("HTML DOM")}}

Die **`text`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) stellt den Text innerhalb des {{htmlelement("option")}}-Elements dar. Diese Eigenschaft repräsentiert die gleiche Information wie [`Node.textContent`](/de/docs/Web/API/Node/textContent).

> [!NOTE]
> Wenn das Element ein `label` hat, wird der Text innerhalb des {{htmlelement("option")}} nicht visuell dargestellt. In diesem Fall kann die `text`-Eigenschaft weiterhin verwendet werden, um den Inhalt festzulegen, aber dies wird keine sichtbare Wirkung haben.

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
- [`HTMLOptionElement.value`](/de/docs/Web/API/HTMLOptionElement/value)
- [`HTMLOptionElement.label`](/de/docs/Web/API/HTMLOptionElement/label)
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
- [`HTMLAnchorElement.text`](/de/docs/Web/API/HTMLAnchorElement/text)
