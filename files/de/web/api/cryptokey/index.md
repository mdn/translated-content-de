---
title: CryptoKey
slug: Web/API/CryptoKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`CryptoKey`**-Schnittstelle der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) stellt einen kryptografischen [Schlüssel](/de/docs/Glossary/key) dar, der durch eine der Methoden von [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) erhalten wurde: [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).

Aus Sicherheitsgründen kann die `CryptoKey`-Schnittstelle nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verwendet werden.

## Instanz-Eigenschaften

- [`CryptoKey.type`](/de/docs/Web/API/CryptoKey/type) {{ReadOnlyInline}}

  - : Der Typ des Schlüssels, den das Objekt darstellt. Es kann einen der folgenden Werte annehmen: `"secret"`, `"private"` oder `"public"`.

- [`CryptoKey.extractable`](/de/docs/Web/API/CryptoKey/extractable) {{ReadOnlyInline}}

  - : Ein boolescher Wert, der angibt, ob der Schlüssel mithilfe von [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) extrahiert werden kann.

- [`CryptoKey.algorithm`](/de/docs/Web/API/CryptoKey/algorithm) {{ReadOnlyInline}}

  - : Ein Objekt, das den Algorithmus beschreibt, für den dieser Schlüssel verwendet werden kann und alle damit verbundenen zusätzlichen Parameter.

- [`CryptoKey.usages`](/de/docs/Web/API/CryptoKey/usages) {{ReadOnlyInline}}

  - : Ein {{jsxref("Array")}} von Zeichenfolgen, die anzeigen, was mit dem Schlüssel gemacht werden kann. Mögliche Werte für Array-Elemente sind `"encrypt"`, `"decrypt"`, `"sign"`, `"verify"`, `"deriveKey"`, `"deriveBits"`, `"wrapKey"` und `"unwrapKey"`.

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
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
- [`Crypto`](/de/docs/Web/API/Crypto) und [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle).
