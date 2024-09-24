---
title: "HTMLOptionElement: Eigenschaft defaultSelected"
short-title: defaultSelected
slug: Web/API/HTMLOptionElement/defaultSelected
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{ APIRef("HTML DOM") }}

Die **`defaultSelected`**-Eigenschaft der {{DOMxRef("HTMLOptionElement")}}-Schnittstelle gibt den standardmäßig ausgewählten Zustand des Elements an. Diese Eigenschaft spiegelt das `selected`-Attribut des {{htmlelement("option")}}-Elements wider. Die Anwesenheit des `selected`-Attributs setzt die `defaultSelected`-Eigenschaft auf `true`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const optionElement = document.getElementById("water");
console.log(optionElement.defaultSelected);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- {{DOMxRef("HTMLOptionElement.selected")}}
- {{DOMxRef("HTMLOptionElement.index")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{cssxref(":default")}}
