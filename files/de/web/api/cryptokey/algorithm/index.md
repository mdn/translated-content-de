---
title: "CryptoKey: algorithm-Eigenschaft"
short-title: algorithm
slug: Web/API/CryptoKey/algorithm
l10n:
  sourceCommit: 9148d0040835210e7b4295efde6976053a703406
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`algorithm`**-Eigenschaft der [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Schnittstelle gibt ein Objekt zurück, das den Algorithmus beschreibt, für den dieser Schlüssel verwendet werden kann, sowie alle zugehörigen zusätzlichen Parameter.

Das zurückgegebene Objekt hängt von dem Algorithmus ab, der zur Erzeugung des Schlüssels verwendet wurde.

## Wert

Ein Objekt, das einem der folgenden entspricht:

- [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams), wenn der Algorithmus eine der AES-Varianten ist.
- [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams), wenn der Algorithmus eine der RSA-Varianten ist.
- [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams), wenn der Algorithmus eine der EC-Varianten ist.
- [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams), wenn der Algorithmus HMAC ist.

Für `RsaHashedKeyGenParams` und `HmacKeyGenParams` ist die `hash`-Eigenschaft immer in der Objektform (mit einer Eigenschaft namens `name`), nicht in der Stringform.

## Beispiele

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

// Import an AES secret key from an ArrayBuffer containing the raw bytes.
// Takes an ArrayBuffer string containing the bytes, and returns a Promise
// that will resolve to a CryptoKey representing the secret key.
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}

importSecretKey(rawKey).then((key) =>
  console.log(
    `This key is to be used with the ${key.algorithm.name} algorithm.`,
  ),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
