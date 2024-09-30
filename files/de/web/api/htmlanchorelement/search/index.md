---
title: "HTMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.search`**-Eigenschaft ist ein Suchstring, auch _query string_ genannt, der ein String ist, der ein `'?'` gefolgt von den Parametern der URL enthält.

Moderne Browser bieten [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) und [`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples), um das einfache Parsen der Parameter aus dem Query-String zu ermöglichen.

## Wert

Ein String.

## Beispiele

### Abrufen des Suchstrings von einem Ankerlink

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=123"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.search; // returns '?q=123'
```

### Erweiterte Analyse mit URLSearchParams

Alternativ kann [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) verwendet werden:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // returns the number 123
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
