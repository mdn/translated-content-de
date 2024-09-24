---
title: "URL: host Eigenschaft"
short-title: host
slug: Web/API/URL/host
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`host`**-Eigenschaft der {{domxref("URL")}} Schnittstelle enthält eine Zeichenkette, die den Host darstellt, also das {{domxref("URL.hostname", "hostname")}}, und dann, falls der {{glossary("port")}} der URL nicht leer ist, ein `':'`, gefolgt vom {{domxref("URL.port", "port")}} der URL.

## Wert

Eine Zeichenkette.

## Beispiele

```js
let url = new URL("https://developer.mozilla.org/de/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/de/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// Die Portnummer wird nicht einbezogen, da 443 der Standardport des Schemas ist

url = new URL("https://developer.mozilla.org:4097/de/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}} Schnittstelle, zu der es gehört.
