---
title: CryptoKeyPair
slug: Web/API/CryptoKeyPair
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("Web Crypto API")}}

Das **`CryptoKeyPair`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert ein Schlüsselpaar für einen asymmetrischen Kryptographie-Algorithmus, auch bekannt als Public-Key-Algorithmus.

Ein `CryptoKeyPair`-Objekt kann mit {{domxref("SubtleCrypto.generateKey()")}} erhalten werden, wenn der gewählte Algorithmus einer der asymmetrischen Algorithmen ist: RSASSA-PKCS1-v1_5, RSA-PSS, RSA-OAEP, ECDSA oder ECDH.

Es enthält zwei Eigenschaften, die beide [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekte sind: eine `privateKey`-Eigenschaft, die den privaten Schlüssel enthält, und eine `publicKey`-Eigenschaft, die den öffentlichen Schlüssel enthält.

## Instanz-Eigenschaften

- `CryptoKeyPair.privateKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt, das den privaten Schlüssel darstellt. Bei Verschlüsselungs- und Entschlüsselungsalgorithmen wird dieser Schlüssel zum Entschlüsseln verwendet. Bei Signier- und Verifizierungsalgorithmen wird er zum Signieren verwendet.
- `CryptoKeyPair.publicKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt, das den öffentlichen Schlüssel darstellt. Bei Verschlüsselungs- und Entschlüsselungsalgorithmen wird dieser Schlüssel zum Verschlüsseln verwendet. Bei Signier- und Verifizierungsalgorithmen wird er zur Überprüfung von Signaturen verwendet.

## Beispiele

Die Beispiele für `SubtleCrypto`-Methoden verwenden oft `CryptoKeyPair`-Objekte. Zum Beispiel:

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

## Siehe auch

- {{domxref("SubtleCrypto.generateKey")}}.
- {{domxref("SubtleCrypto.sign")}} und {{domxref("SubtleCrypto.verify")}}.
- {{domxref("SubtleCrypto.encrypt")}} und {{domxref("SubtleCrypto.decrypt")}}.
