---
title: "HTMLAnchorElement: search-Eigenschaft"
short-title: search
slug: Web/API/HTMLAnchorElement/search
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.search`**-Eigenschaft ist ein Suchstring, auch _Abfragezeichenfolge_ genannt, der aus einem `'?'` besteht, gefolgt von den Parametern der URL.

Moderne Browser bieten [`URLSearchParams`](/de/docs/Web/API/URLSearchParams/get#examples) und [`URL.searchParams`](/de/docs/Web/API/URL/searchParams#examples) an, um das Parsen der Parameter aus der Abfragezeichenfolge zu erleichtern.

## Wert

Ein String.

## Beispiele

### Abfragezeichenfolge von einem Anker-Link abrufen

```js
// Ein <a id="myAnchor" href="/de/docs/HTMLAnchorElement?q=123"> Element befindet sich im Dokument
const anchor = document.getElementById("myAnchor");
anchor.search; // gibt '?q=123' zurück
```

### Fortgeschrittenes Parsen mit URLSearchParams

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

- Das {{domxref("HTMLAnchorElement")}}-Interface, zu dem es gehört.
