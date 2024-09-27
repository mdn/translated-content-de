---
title: "HTMLAreaElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAreaElement/search
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.search`**-Eigenschaft ist ein Suchstring,
auch _Abfragezeichenfolge_ genannt, der eine Zeichenkette ist, die
ein `'?'` enthält, gefolgt von den Parametern der URL.

Moderne Browser stellen
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples)
bereit, um das Parsen der Parameter aus dem Abfragezeichenfolge zu erleichtern.

## Wert

Eine Zeichenkette.

## Beispiele

### Abrufen des Suchstrings von einem Bereichslink

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement?q=123"> element is in the document
const area = document.getElementById("myArea");
area.search; // returns '?q=123'
```

### Fortgeschrittenes Parsen mit URLSearchParams

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

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) Schnittstelle, zu der es gehört.
