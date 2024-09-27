---
title: "SubtleCrypto: decrypt() Methode"
short-title: decrypt()
slug: Web/API/SubtleCrypto/decrypt
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`decrypt()`** Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle entschlüsselt verschlüsselte Daten.
Sie nimmt als Argumente einen [Schlüssel](/de/docs/Glossary/key) zur Entschlüsselung, einige optionale zusätzliche Parameter und die zu entschlüsselnden Daten (auch als "Chiffretext" bekannt).
Sie gibt ein {{jsxref("Promise")}} zurück, das mit den entschlüsselten Daten (auch als "Klartext" bekannt) erfüllt wird.

## Syntax

```js-nolint
decrypt(algorithm, key, data)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das den zu verwendenden [Algorithmus](#unterstützte_algorithmen) und alle erforderlichen zusätzlichen Parameter angibt.
    Die Werte für die zusätzlichen Parameter müssen mit denen übereinstimmen, die in den entsprechenden [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) Aufruf übergeben wurden.
    - Für die Verwendung von [RSA-OAEP](#rsa-oaep) übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams) Objekt.
    - Für die Verwendung von [AES-CTR](#aes-ctr) übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams) Objekt.
    - Für die Verwendung von [AES-CBC](#aes-cbc) übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams) Objekt.
    - Für die Verwendung von [AES-GCM](#aes-gcm) übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams) Objekt.

- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den für die Entschlüsselung zu verwendenden Schlüssel enthält.
    Bei der Verwendung von RSA-OAEP ist dies die `privateKey` Eigenschaft des [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) Objekts.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der die zu entschlüsselnden Daten enthält (auch als [Chiffretext](/de/docs/Glossary/ciphertext) bekannt).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Klartext enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z.B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlgeschlagen ist (z.B. Algorithmenparameter ungültiger Größen oder ein Fehler bei der Entschlüsselung des Chiffretextes).

## Unterstützte Algorithmen

Die `decrypt()` Methode unterstützt die gleichen Algorithmen wie die [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) Methode.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html).

### RSA-OAEP

Dieser Code entschlüsselt `ciphertext` mit RSA-OAEP. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function decryptMessage(privateKey, ciphertext) {
  return window.crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    ciphertext,
  );
}
```

### AES-CTR

Dieser Code entschlüsselt `ciphertext` mit AES im CTR-Modus.
Beachten Sie, dass `counter` mit dem Wert übereinstimmen muss, der für die Verschlüsselung verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt(
    { name: "AES-CTR", counter, length: 64 },
    key,
    ciphertext,
  );
}
```

### AES-CBC

Dieser Code entschlüsselt `ciphertext` mit AES im CBC-Modus. Beachten Sie, dass
`iv` mit dem Wert übereinstimmen muss, der für die Verschlüsselung verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function decryptMessage(key, ciphertext) {
  // The iv value is the same as that used for encryption
  return window.crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, ciphertext);
}
```

### AES-GCM

Dieser Code entschlüsselt `ciphertext` mit AES im GCM-Modus. Beachten Sie, dass
`iv` mit dem Wert übereinstimmen muss, der für die Verschlüsselung verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function decryptMessage(key, ciphertext) {
  // The iv value is the same as that used for encryption
  return window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt).
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CTR-Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CBC-Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert GCM-Modus.
- [FIPS 198-1](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf) spezifiziert HMAC.
