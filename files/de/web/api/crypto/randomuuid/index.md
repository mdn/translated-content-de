---
title: "Crypto: randomUUID()-Methode"
short-title: randomUUID()
slug: Web/API/Crypto/randomUUID
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`randomUUID()`**-Methode der {{domxref("Crypto")}}-Schnittstelle wird verwendet, um eine v4-{{Glossary("UUID")}} unter Verwendung eines kryptographisch sicheren Zufallszahlengenerators zu erzeugen.

## Syntax

```js-nolint
randomUUID()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der eine zufällig generierte, 36 Zeichen lange v4 UUID enthält.

## Beispiele

```js
/* Vorausgesetzt, dass self.crypto.randomUUID() verfügbar ist */

let uuid = self.crypto.randomUUID();
console.log(uuid); // zum Beispiel "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- {{ domxref("Crypto.getRandomValues") }}, eine Quelle für beliebige Mengen an sicheren Zufallsbytes.
