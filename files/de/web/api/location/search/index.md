---
title: "Location: Eigenschaft search"
short-title: search
slug: Web/API/Location/search
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`search`**-Eigenschaft des {{domxref("Location")}}
Interfaces ist eine Suchzeichenkette, auch als _Query-String_ bekannt; das heißt, eine Zeichenkette, die ein `'?'` enthält, gefolgt von den Parametern der URL.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples)
an, um das einfache Parsen der Parameter aus dem Query-String zu ermöglichen.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// Angenommen, ein <a id="myAnchor" href="/de/docs/Location.search?q=123"> Element befindet sich im Dokument
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // Rückgabe: '?q=123'

// Weiteres Parsen:
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // ist die Zahl 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
