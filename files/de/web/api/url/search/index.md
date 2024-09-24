---
title: "URL: search-Eigenschaft"
short-title: search
slug: Web/API/URL/search
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`search`**-Eigenschaft des {{domxref("URL")}}-Interfaces ist eine Suchzeichenfolge, auch _Query-String_ genannt, die eine Zeichenfolge enthält, die ein `'?'` gefolgt von den Parametern der URL ist.

Moderne Browser stellen die {{domxref("URL.searchParams")}}-Eigenschaft bereit, um das Parsen der Parameter aus dem Query-String zu erleichtern.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/de/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Ausgabe: "?q=123"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige {{domxref("URL")}}-Interface.
