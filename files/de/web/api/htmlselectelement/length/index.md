---
title: "HTMLSelectElement: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLSelectElement/length
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

Die **`length`**-Eigenschaft der {{DOMxRef("HTMLSelectElement")}}-Schnittstelle gibt die Anzahl der {{htmlelement("option")}}-Elemente im {{htmlelement("select")}}-Element an. Sie stellt die Anzahl der Knoten in der {{DOMxRef("HTMLSelectElement.options", "options")}}-Sammlung dar. Beim Setzen wirkt sie ähnlich wie ({{DOMxRef("HTMLOptionsCollection.length")}}).

## Wert

Eine Zahl.

## Beispiele

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- {{DOMXref("HTMLSelectElement.options")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.multiple")}}
- {{DOMXref("HTMLSelectElement.selectedIndex")}}
