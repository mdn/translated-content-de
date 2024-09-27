---
title: "Crypto: randomUUID() Methode"
short-title: randomUUID()
slug: Web/API/Crypto/randomUUID
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`randomUUID()`** Methode des [`Crypto`](/de/docs/Web/API/Crypto) Schnittstelle wird verwendet, um eine v4 [UUID](/de/docs/Glossary/UUID) mit einem kryptografisch sicheren Zufallsgenerator zu erzeugen.

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
/* Assuming that self.crypto.randomUUID() is available */

let uuid = self.crypto.randomUUID();
console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [`Crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues), eine Quelle für beliebige Mengen sicherer Zufallsbytes.
