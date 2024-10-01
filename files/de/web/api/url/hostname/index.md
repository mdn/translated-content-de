---
title: "URL: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URL/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der den {{Glossary("domain_name", "Domainnamen")}} der URL enthält.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
