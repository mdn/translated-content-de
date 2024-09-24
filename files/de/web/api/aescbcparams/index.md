---
title: AesCbcParams
slug: Web/API/AesCbcParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

Das **`AesCbcParams`**-Wörterbuch des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)-Algorithmus verwendet wird.

## Instanzen-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `AES-CBC` gesetzt werden.
- `iv`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}. Der Initialisierungsvektor. Muss 16 Byte groß, unvorhersehbar und vorzugsweise kryptografisch zufällig sein. Er muss jedoch nicht geheim gehalten werden (zum Beispiel kann er unverschlüsselt zusammen mit dem Chiffretext übertragen werden).

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.encrypt()")}} und {{domxref("SubtleCrypto.decrypt()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "AES-CBC"-Algorithmus für die Methoden {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- Der CBC-Modus ist in Abschnitt 6.2 des [NIST SP800-38A Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) definiert.
- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
