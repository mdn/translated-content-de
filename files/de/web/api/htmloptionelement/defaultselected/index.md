---
title: "HTMLOptionElement: defaultSelected-Eigenschaft"
short-title: defaultSelected
slug: Web/API/HTMLOptionElement/defaultSelected
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`defaultSelected`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)-Interfaces spezifiziert den standardmäßig ausgewählten Zustand des Elements. Diese Eigenschaft spiegelt das [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut des {{htmlelement("option")}}-Elements wider. Die Anwesenheit des `selected`-Attributs setzt die `defaultSelected`-Eigenschaft auf `true`.

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
