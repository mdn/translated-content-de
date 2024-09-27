---
title: "CryptoKey: type Eigenschaft"
short-title: type
slug: Web/API/CryptoKey/type
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft des [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Interfaces gibt an, welche Art von Schlüssel durch das Objekt repräsentiert wird. Sie kann die folgenden Werte haben:

- `"secret"`: Dieser Schlüssel ist ein geheimer Schlüssel zur Verwendung mit einem [symmetrischen Algorithmus](/de/docs/Glossary/Symmetric-key_cryptography).
- `"private"`: Dieser Schlüssel ist die private Hälfte eines [asymmetrischen Algorithmus](/de/docs/Glossary/Public-key_cryptography)'s [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair).
- `"public"`: Dieser Schlüssel ist die öffentliche Hälfte eines [asymmetrischen Algorithmus](/de/docs/Glossary/Public-key_cryptography)'s [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair).

## Wert

Einer der folgenden Strings: `"secret"`, `"private"` oder `"public"`.

## Beispiele

Diese Funktion überprüft eine Nachricht mit [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) und einem im Parameter angegebenen öffentlichen Schlüssel. Wenn der Schlüssel kein öffentlicher Schlüssel ist, gibt sie immer `"invalid"` zurück, da eine solche Überprüfung grundlegend unsicher ist.

```js
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let result = false; // By default, it is invalid

  if (publicKey.type === "public") {
    const encoded = getMessageEncoding();
    result = await window.crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      publicKey,
      signature,
      encoded,
    );
  }

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
