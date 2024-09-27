---
title: "CryptoKey: usages-Eigenschaft"
short-title: usages
slug: Web/API/CryptoKey/usages
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`usages`**-Eigenschaft der [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Schnittstelle gibt an, was mit dem Schlüssel gemacht werden kann.

## Wert

Ein {{jsxref("Array")}} von Zeichenfolgen aus der folgenden Liste:

- `"encrypt"`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
- `"decrypt"`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
- `"sign"`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
- `"verify"`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
- `"deriveKey"`: Der Schlüssel kann beim [Ableiten eines neuen Schlüssels](/de/docs/Web/API/SubtleCrypto/deriveKey) verwendet werden.
- `"deriveBits"`: Der Schlüssel kann beim [Ableiten von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
- `"wrapKey"`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [verpacken](/de/docs/Web/API/SubtleCrypto/wrapKey).
- `"unwrapKey"`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

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
console.log(
  `The following usages are reported for this key: ${key.usages.toString()}`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
