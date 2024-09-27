---
title: "URL: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/URL/protocol
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`protocol`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der das Protokollschema der URL darstellt, einschließlich des abschließenden `':'`.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
