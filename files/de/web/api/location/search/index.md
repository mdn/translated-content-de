---
title: "Location: search-Eigenschaft"
short-title: search
slug: Web/API/Location/search
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`search`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein Suchstring, auch bekannt als _Abfragezeichenkette_; das heißt, ein String, der ein `'?'` enthält, gefolgt von den Parametern der URL.

Moderne Browser bieten [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) und [`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples) an, um das Parsen der Parameter aus der Abfragezeichenkette zu erleichtern.

## Wert

Ein String.

## Beispiele

```js
// Let an <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> element be in the document
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // is the number 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
