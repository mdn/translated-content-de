---
title: "NodeList: length Eigenschaft"
short-title: length
slug: Web/API/NodeList/length
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`NodeList.length`**-Eigenschaft gibt die Anzahl der Elemente in einer {{domxref("NodeList")}} zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in einer `NodeList` darstellt.

## Beispiele

Die `length`-Eigenschaft ist häufig in der DOM-Programmierung nützlich. Sie wird oft verwendet, um die Länge einer Liste zu testen und zu prüfen, ob sie überhaupt existiert. Sie wird auch häufig als Iterator in einer `for`-Schleife verwendet, wie in diesem Beispiel.

```js
// Alle Absätze im Dokument
const items = document.getElementsByTagName("p");

// Für jedes Element in der Liste,
// den gesamten Elementinhalt als HTML-String hinzufügen
let gross = "";
for (let i = 0; i < items.length; i++) {
  gross += items[i].innerHTML;
}

// gross enthält jetzt den gesamten HTML-Code für die Absätze
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
