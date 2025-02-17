---
title: "CryptoKey: algorithm-Eigenschaft"
short-title: algorithm
slug: Web/API/CryptoKey/algorithm
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`algorithm`**-Eigenschaft des [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Interfaces gibt ein Objekt zurück, das den Algorithmus beschreibt, für den dieser Schlüssel verwendet werden kann, sowie alle zugehörigen zusätzlichen Parameter.

Das zurückgegebene Objekt hängt vom Algorithmus ab, der verwendet wurde, um den Schlüssel zu generieren.

## Wert

Ein Objekt, das zu Folgendem passt:

- [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams), wenn der Algorithmus eine Variante von AES ist.
- [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams), wenn der Algorithmus eine Variante von RSA ist.
- [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams), wenn der Algorithmus eine Variante von EC ist.
- [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams), wenn der Algorithmus HMAC ist.

Für `RsaHashedKeyGenParams` und `HmacKeyGenParams` ist die `hash`-Eigenschaft immer in der Objektform (mit einer Eigenschaft namens `name`) und nicht in der Zeichenkettenform.

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

const key = importSecretKey(rawKey);
console.log(`This key is to be used with the ${key.algorithm} algorithm.`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
