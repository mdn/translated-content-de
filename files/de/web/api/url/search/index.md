---
title: "URL: search-Eigenschaft"
short-title: search
slug: Web/API/URL/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein Suchstring, auch _Query-String_ genannt, der eine Zeichenkette mit einem `'?'` gefolgt von den Parametern der URL ist.

Moderne Browser bieten die [`URL.searchParams`](/de/docs/Web/API/URL/searchParams)-Eigenschaft an, um das Parsen der Parameter aus dem Query-String zu erleichtern.

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

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
