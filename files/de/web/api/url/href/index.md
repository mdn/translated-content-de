---
title: "URL: href-Eigenschaft"
short-title: href
slug: Web/API/URL/href
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`href`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist ein Zeichenstring, der die gesamte URL enthält.

## Wert

Ein Zeichenstring.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href",
);
console.log(url.href); // Logs: 'https://developer.mozilla.org/en-US/docs/Web/API/URL/href'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
