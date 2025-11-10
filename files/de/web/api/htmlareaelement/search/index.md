---
title: "HTMLAreaElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAreaElement/search
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{ApiRef("HTML DOM")}}

Die **`search`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces ist ein Suchstring, auch _Query-String_ genannt, der eine Zeichenkette enthält, die mit einem `"?"` beginnt, gefolgt von den Parametern des `href`-Attributs des `<area>`-Elements. Wenn die URL keine Suchanfrage enthält, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Query-String der URL zu ändern. Beim Setzen wird ein einzelnes `"?"`-Präfix zum bereitgestellten Wert hinzugefügt, falls noch nicht vorhanden. Ein leerer Wert `""` entfernt den Query-String.

Der Query wird beim Setzen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdekodiert.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples)
an, um das Auslesen der Parameter aus dem Query-String zu erleichtern.

Weitere Informationen finden Sie unter [`URL.search`](/de/docs/Web/API/URL/search).

## Wert

Ein String.

## Beispiele

### Den Such-String von einem Area-Link abrufen

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement?q=123"> element is in the document
const area = document.getElementById("myArea");
area.search; // returns '?q=123'
```

### Fortgeschrittenes Parsen mit URLSearchParams

Alternativ kann [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) verwendet werden:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q"), 10); // returns the number 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface, zu dem es gehört.
