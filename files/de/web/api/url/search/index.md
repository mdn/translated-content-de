---
title: "URL: search-Eigenschaft"
short-title: search
slug: Web/API/URL/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle
ist ein Suchstring, auch _query string_ genannt, der aus einem
String besteht, der ein `'?'` enthält, gefolgt von den Parametern der
URL.

Moderne Browser bieten die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft, die es einfach macht,
die Parameter aus dem Suchstring zu extrahieren.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
