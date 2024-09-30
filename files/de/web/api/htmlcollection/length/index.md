---
title: "HTMLCollection: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLCollection/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

Die **`HTMLCollection.length`**-Eigenschaft gibt die Anzahl der Elemente in einer [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in einer `HTMLCollection` darstellt.

## Beispiele

Die `length`-Eigenschaft ist oft nützlich in der DOM-Programmierung. Sie wird oft verwendet, um die Länge einer Liste zu testen, um zu prüfen, ob sie überhaupt existiert. Sie wird auch häufig als Iterator in einer `for`-Schleife verwendet, wie in diesem Beispiel.

```js
// All the elements with the class ".test" in the document
const items = document.getElementsByClassName("test");

// For each test item in the list,
// append the entire element as a string of HTML
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross is now all the HTML for the test elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
