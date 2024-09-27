---
title: "HTMLAnchorElement: search Eigenschaft"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.search`** Eigenschaft ist eine Suchzeichenkette, auch _Query String_ genannt, die eine Zeichenkette enthält, die mit einem `'?'` beginnt, gefolgt von den Parametern der URL.

Moderne Browser stellen
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples)
bereit, um das einfache Parsen der Parameter aus der Suchzeichenkette zu ermöglichen.

## Wert

Eine Zeichenkette.

## Beispiele

### Abrufen der Suchzeichenkette von einem Ankerlink

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

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle, zu der es gehört.
