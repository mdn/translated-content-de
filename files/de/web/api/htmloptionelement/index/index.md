---
title: "HTMLOptionElement: index-Eigenschaft"
short-title: index
slug: Web/API/HTMLOptionElement/index
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`index`**-Eigenschaft der [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)-Schnittstelle gibt den 0-basierten Index des Elements an; das heißt, die Position des {{HTMLElement("option")}} innerhalb der Liste von Optionen, zu der es gehört, in Baumreihenfolge, als Ganzzahl. Wenn das `<option>` nicht Teil einer Optionsliste ist, ist der Wert `0`.

## Wert

Eine Zahl.

## Beispiele

```js
const optionElement = document.getElementById("myOption");
console.log(optionElement.index);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- [`HTMLOptionElement.defaultSelected`](/de/docs/Web/API/HTMLOptionElement/defaultSelected)
- [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
