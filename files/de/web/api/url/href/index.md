---
title: "URL: href-Eigenschaft"
short-title: href
slug: Web/API/URL/href
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`href`**-Eigenschaft der {{domxref("URL")}}-Schnittstelle ist
ein String, der die gesamte URL enthält.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/de/docs/Web/API/URL/href",
);
console.log(url.href); // Protokolliert: 'https://developer.mozilla.org/de/docs/Web/API/URL/href'
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}}-Schnittstelle, zu der sie gehört.
