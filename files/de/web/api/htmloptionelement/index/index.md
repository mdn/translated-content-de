---
title: "HTMLOptionElement: index Eigenschaft"
short-title: index
slug: Web/API/HTMLOptionElement/index
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`index`**-Eigenschaft der {{DOMxRef("HTMLOptionElement")}}-Schnittstelle gibt den 0-basierten Index des Elements an; das heißt die Position des {{HTMLElement("option")}} innerhalb der Liste von Optionen, zu der es gehört, in Baumreihenfolge, als Ganzzahl. Wenn das `<option>` nicht Teil einer Optionsliste ist, beträgt der Wert `0`.

## Wert

Eine Zahl.

## Beispiele

```js
const optionElement = document.getElementById("myOption");
console.log(optionElement.index);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- {{DOMxRef("HTMLOptionElement.selected")}}
- {{DOMxRef("HTMLSelectElement.selectedIndex")}}
- {{DOMxRef("HTMLOptionsCollection")}}
