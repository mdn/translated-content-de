---
title: "CryptoKey: algorithm-Eigenschaft"
short-title: algorithm
slug: Web/API/CryptoKey/algorithm
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

Die schreibgeschützte **`algorithm`**-Eigenschaft der {{DOMxRef("CryptoKey")}}-Schnittstelle gibt ein Objekt zurück, das den Algorithmus beschreibt, für den dieser Schlüssel verwendet werden kann, sowie die zugehörigen zusätzlichen Parameter.

Das zurückgegebene Objekt hängt von dem Algorithmus ab, der zur Erzeugung des Schlüssels verwendet wurde.

## Wert

Ein Objekt entsprechend:

- [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams), wenn der Algorithmus eine der AES-Varianten ist.
- [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams), wenn der Algorithmus eine der RSA-Varianten ist.
- [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams), wenn der Algorithmus eine der EC-Varianten ist.
- [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams), wenn der Algorithmus HMAC ist.

## Beispiele

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

// Importieren Sie einen AES-Geheimschlüssel aus einem ArrayBuffer, der die Rohbytes enthält.
// Nimmt einen ArrayBuffer-String, der die Bytes enthält, und gibt ein Promise zurück,
// das aufgelöst wird zu einem CryptoKey, der den Geheimschlüssel darstellt.
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
