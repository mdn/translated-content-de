---
title: "HTMLSelectElement: multiple-Eigenschaft"
short-title: multiple
slug: Web/API/HTMLSelectElement/multiple
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

Die **`multiple`**-Eigenschaft der {{DOMxRef("HTMLSelectElement")}}-Schnittstelle gibt an, dass der Benutzer mehr als eine Option aus der Liste der Optionen auswählen kann. Sie spiegelt das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-Attribut des {{htmlelement("select")}}-Elements wider.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const selectElement = document.getElementById("comment");
console.log(selectElement.multiple);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("select")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.length")}}
- {{DOMXref("HTMLSelectElement.selectedIndex")}}
