---
title: "Location: search-Eigenschaft"
short-title: search
slug: Web/API/Location/search
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("Location")}}

Die **`search`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle ist eine Suchzeichenkette, auch als _Query-String_ bezeichnet, die eine Zeichenkette enthält, die mit einem `"?"` beginnt, gefolgt von den Parametern der URL des Standorts. Wenn die URL keine Suchabfrage enthält, enthält diese Eigenschaft eine leere Zeichenkette, `""`.

Diese Eigenschaft kann gesetzt werden, um den Query-String der URL zu ändern. Beim Setzen wird ein einzelnes `"?"`-Präfix zur angegebenen Zeichenkette hinzugefügt, falls es nicht bereits vorhanden ist. Das Setzen auf `""` entfernt den Query-String.

Die Abfrage wird beim Setzen {{Glossary("Percent-encoding", "percent-codiert")}}, aber beim Lesen nicht dekodiert.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) 
und 
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples), 
um das Analysieren der Parameter aus dem Query-String zu erleichtern.

Siehe [`URL.search`](/de/docs/Web/API/URL/search) für weitere Informationen.

## Wert

Eine Zeichenkette.

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
