---
title: "HTMLAreaElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAreaElement/search
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.search`**-Eigenschaft ist eine Suchzeichenfolge, auch bekannt als _Abfragezeichenfolge_, die eine Zeichenfolge ist, die ein `'?'` enthält, gefolgt von den Parametern der URL.

Moderne Browser bieten
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples)
und
[`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples),
um das Analysieren der Parameter aus der Abfragezeichenfolge zu erleichtern.

## Wert

Eine Zeichenkette.

## Beispiele

### Abrufen der Suchzeichenfolge von einem Bereichslink

```js
// Ein <area id="myArea" href="/de/docs/HTMLAreaElement?q=123">-Element ist im Dokument
const area = document.getElementById("myArea");
area.search; // gibt '?q=123' zurück
```

### Erweiterte Analyse mit URLSearchParams

Alternativ kann [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) verwendet werden:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // gibt die Zahl 123 zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
