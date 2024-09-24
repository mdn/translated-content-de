---
title: CryptoKey
slug: Web/API/CryptoKey
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Das **`CryptoKey`** Interface der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert einen kryptografischen {{glossary("Schlüssel")}}, der durch eine der {{domxref("SubtleCrypto")}}-Methoden {{domxref("SubtleCrypto.generateKey", "generateKey()")}}, {{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}, {{domxref("SubtleCrypto.importKey", "importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}} erzeugt wurde.

Aus Sicherheitsgründen kann das `CryptoKey` Interface nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

## Instanzeigenschaften

- {{domxref("CryptoKey.type")}} {{ReadOnlyInline}}

  - : Der Typ des Schlüssels, den das Objekt darstellt. Er kann einen der folgenden Werte annehmen: `"secret"`, `"private"` oder `"public"`.

- {{domxref("CryptoKey.extractable")}} {{ReadOnlyInline}}

  - : Ein boolescher Wert, der angibt, ob der Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) extrahiert werden darf.

- {{domxref("CryptoKey.algorithm")}} {{ReadOnlyInline}}

  - : Ein Objekt, das den Algorithmus beschreibt, für den dieser Schlüssel verwendet werden kann, und alle zugehörigen zusätzlichen Parameter.

- {{domxref("CryptoKey.usages")}} {{ReadOnlyInline}}

  - : Ein {{jsxref("Array")}} von Zeichenfolgen, das angibt, was mit dem Schlüssel gemacht werden kann. Mögliche Werte für Array-Elemente sind `"encrypt"`, `"decrypt"`, `"sign"`, `"verify"`, `"deriveKey"`, `"deriveBits"`, `"wrapKey"` und `"unwrapKey"`.

## Beispiele

Die Beispiele für `SubtleCrypto`-Methoden verwenden häufig `CryptoKey`-Objekte. Zum Beispiel:

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey)
- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)
- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey)
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey)
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey)
- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt)
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt)
- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)
- [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Web-Sicherheit](/de/docs/Web/Security)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- {{domxref("Crypto")}} und {{domxref("Crypto.subtle")}}.
