---
title: "NodeList: length-Eigenschaft"
short-title: length
slug: Web/API/NodeList/length
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`NodeList.length`**-Eigenschaft gibt die Anzahl der Elemente in einer [`NodeList`](/de/docs/Web/API/NodeList) zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in einer `NodeList` darstellt.

## Beispiele

Die `length`-Eigenschaft ist oft nützlich in der DOM-Programmierung. Sie wird häufig verwendet, um die Länge einer Liste zu testen, um festzustellen, ob diese überhaupt existiert. Sie wird auch häufig als Iterator in einer `for`-Schleife verwendet, wie in diesem Beispiel.

```js
// All the paragraphs in the document
const items = document.getElementsByTagName("p");

// For each item in the list,
// append the entire element as a string of HTML
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross is now all the HTML for the paragraphs
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
