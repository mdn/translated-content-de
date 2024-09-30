---
title: "HTMLOptionElement: defaultSelected-Eigenschaft"
short-title: defaultSelected
slug: Web/API/HTMLOptionElement/defaultSelected
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{ APIRef("HTML DOM") }}

Die **`defaultSelected`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)-Interfaces gibt den standardmäßigen ausgewählten Zustand des Elements an. Diese Eigenschaft spiegelt das [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut des {{htmlelement("option")}}-Elements wider. Das Vorhandensein des `selected`-Attributs setzt die `defaultSelected`-Eigenschaft auf `true`.

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
- [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
- [`HTMLOptionElement.index`](/de/docs/Web/API/HTMLOptionElement/index)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- {{cssxref(":default")}}
