---
title: "CryptoKey: type-Eigenschaft"
short-title: type
slug: Web/API/CryptoKey/type
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}

Die schreibgeschützte **`type`**-Eigenschaft der {{DOMxRef("CryptoKey")}} Schnittstelle gibt an, welche Art von Schlüssel durch das Objekt dargestellt wird. Sie kann folgende Werte haben:

- `"secret"`: Dieser Schlüssel ist ein geheimer Schlüssel für die Verwendung mit einer {{Glossary("Symmetric-key cryptography", "symmetrischen Algorithmus")}}.
- `"private"`: Dieser Schlüssel ist der private Teil eines {{Glossary("Public-key cryptography", "asymmetrischen Algorithmus")}} [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair).
- `"public"`: Dieser Schlüssel ist der öffentliche Teil eines {{Glossary("Public-key cryptography", "asymmetrischen Algorithmus")}} [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair).

## Wert

Einer der folgenden Strings: `"secret"`, `"private"` oder `"public"`.

## Beispiele

Diese Funktion überprüft eine Nachricht mithilfe von {{domxref("SubtleCrypto.verify()")}} und einem im Parameter angegebenen öffentlichen Schlüssel. Wenn der Schlüssel kein öffentlicher Schlüssel ist, gibt sie immer `"invalid"` zurück, da eine solche Verifikation grundsätzlich unsicher ist.

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
