---
title: "Standort: search-Eigenschaft"
short-title: search
slug: Web/API/Location/search
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{ApiRef("Location")}}

Die **`search`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist eine Suchzeichenfolge, auch bekannt als _Abfragezeichenfolge_, die eine Zeichenfolge mit einem `"?"` ist, gefolgt von den Parametern der URL des Standorts. Wenn die URL keine Suchanfrage hat, enthält diese Eigenschaft eine leere Zeichenfolge, `""`.

Diese Eigenschaft kann gesetzt werden, um die Abfragezeichenfolge der URL zu ändern. Beim Setzen wird ein einzelnes `"?"`-Präfix zum bereitgestellten Wert hinzugefügt, falls nicht bereits vorhanden. Das Setzen auf `""` entfernt die Abfragezeichenfolge.

Die Abfrage wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, aber beim Lesen nicht dekodiert.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples)
an, um das Auslesen der Parameter aus der Abfragezeichenfolge zu erleichtern.

Siehe [`URL.search`](/de/docs/Web/API/URL/search) für weitere Informationen.

## Wert

Eine Zeichenfolge.

## Beispiele

```js
// Let an <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> element be in the document
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q"), 10); // is the number 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
