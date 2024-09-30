---
title: "URL: host-Eigenschaft"
short-title: host
slug: Web/API/URL/host
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`host`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist
ein String, der den Host enthält, also den [`hostname`](/de/docs/Web/API/URL/hostname) und dann, falls der [Port](/de/docs/Glossary/port) der URL nicht leer ist, einen
`':'`, gefolgt vom [`port`](/de/docs/Web/API/URL/port) der URL.

## Wert

Ein String.

## Beispiele

```js
let url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

url = new URL("https://developer.mozilla.org:4097/en-US/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
