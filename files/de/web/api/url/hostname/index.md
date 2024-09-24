---
title: "URL: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URL/hostname
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft des {{domxref("URL")}}-Interfaces ist ein String, der den {{glossary("domain name")}} der URL enthält.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/de/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Protokolliert: 'developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das dazugehörige {{domxref("URL")}}-Interface.
