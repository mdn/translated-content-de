---
title: "HTMLCollection: length-Eigenschaft"
short-title: length
slug: Web/API/HTMLCollection/length
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

Die **`HTMLCollection.length`**-Eigenschaft gibt die Anzahl der Elemente in einer {{domxref("HTMLCollection")}} zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in einer `HTMLCollection` darstellt.

## Beispiele

Die `length`-Eigenschaft ist häufig in der DOM-Programmierung nützlich. Sie wird oft verwendet, um die Länge einer Liste zu testen, um festzustellen, ob sie überhaupt existiert. Auch wird sie häufig als Iterator in einer `for`-Schleife verwendet, wie in diesem Beispiel.

```js
// Alle Elemente mit der Klasse ".test" im Dokument
const items = document.getElementsByClassName("test");

// Für jedes Testelement in der Liste,
// füge das gesamte Element als HTML-String hinzu
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross enthält jetzt den gesamten HTML-Code für die Testelemente
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
