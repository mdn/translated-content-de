---
title: "CryptoKey: Eigenschaften der Nutzungen"
short-title: Nutzungen
slug: Web/API/CryptoKey/usages
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

Die schreibgeschützte **`usages`**-Eigenschaft der {{DOMxRef("CryptoKey")}}-Schnittstelle gibt an, was mit dem Schlüssel gemacht werden kann.

## Wert

Ein {{jsxref("Array")}} von Zeichenfolgen aus der folgenden Liste:

- `"encrypt"`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
- `"decrypt"`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
- `"sign"`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
- `"verify"`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
- `"deriveKey"`: Der Schlüssel kann zur [Ableitung eines neuen Schlüssels](/de/docs/Web/API/SubtleCrypto/deriveKey) verwendet werden.
- `"deriveBits"`: Der Schlüssel kann zur [Ableitung von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
- `"wrapKey"`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [umhüllen](/de/docs/Web/API/SubtleCrypto/wrapKey).
- `"unwrapKey"`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

## Beispiele

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

// Importieren eines AES-Geheimschlüssels aus einem ArrayBuffer, der die rohen Bytes enthält.
// Nimmt einen ArrayBuffer-String, der die Bytes enthält, und gibt ein Promise zurück,
// das in einen CryptoKey aufgelöst wird, der den Geheimschlüssel darstellt.
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}

const key = importSecretKey(rawKey);
console.log(
  `Die folgenden Nutzungen werden für diesen Schlüssel angegeben: ${key.usages.toString()}`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
