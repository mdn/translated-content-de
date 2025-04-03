---
title: "SubtleCrypto: decrypt() Methode"
short-title: decrypt()
slug: Web/API/SubtleCrypto/decrypt
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`decrypt()`** Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle entschlüsselt einige verschlüsselte Daten. Sie nimmt als Argumente einen {{Glossary("key", "Schlüssel")}} zur Entschlüsselung, einige optionale Zusatzparameter und die zu entschlüsselnden Daten (auch als "Ciphertext" bekannt). Sie gibt ein {{jsxref("Promise")}} zurück, das mit den entschlüsselten Daten (auch als "Klartext" bekannt) erfüllt wird.

## Syntax

```js-nolint
decrypt(algorithm, key, data)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das den zu verwendenden [Algorithmus](#unterstützte_algorithmen) und alle erforderlichen Zusatzparameter angibt. Die angegebenen Werte für die Zusatzparameter müssen mit denen übereinstimmen, die im entsprechenden [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) Aufruf verwendet wurden.
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams) Objekt.
    - Um [AES-CTR](#aes-ctr) zu verwenden, übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams) Objekt.
    - Um [AES-CBC](#aes-cbc) zu verwenden, übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams) Objekt.
    - Um [AES-GCM](#aes-gcm) zu verwenden, übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams) Objekt.

- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey) mit dem zur Entschlüsselung zu verwendenden Schlüssel. Bei Verwendung von RSA-OAEP ist dies die `privateKey` Eigenschaft des [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) Objekts.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder eine {{jsxref("DataView")}} mit den zu entschlüsselnden Daten (auch als {{Glossary("ciphertext", "Ciphertext")}} bekannt).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Klartext enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn die angeforderte Operation für den bereitgestellten Schlüssel ungültig ist (z.B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn die Operation aus einem spezifischen Grund fehlgeschlagen ist (z.B. Algorithmusparameter mit ungültigen Größen oder es gab einen Fehler beim Entschlüsseln des Ciphertext).

## Unterstützte Algorithmen

Die `decrypt()` Methode unterstützt die gleichen Algorithmen wie die [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) Methode.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html).

### RSA-OAEP

Dieser Code entschlüsselt `ciphertext` mit RSA-OAEP. [Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

Dieser Code entschlüsselt `ciphertext` mit AES im CTR Modus. Beachten Sie, dass `counter` mit dem Wert übereinstimmen muss, der für die Verschlüsselung verwendet wurde. [Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

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

Dieser Code entschlüsselt `ciphertext` mit AES im CBC Modus. Beachten Sie, dass `iv` mit dem Wert übereinstimmen muss, der für die Verschlüsselung verwendet wurde. [Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function decryptMessage(key, ciphertext) {
  // The iv value is the same as that used for encryption
  return window.crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, ciphertext);
}
```

### AES-GCM

Dieser Code entschlüsselt `ciphertext` mit AES im GCM Modus. Beachten Sie, dass `iv` mit dem Wert übereinstimmen muss, der für die Verschlüsselung verwendet wurde. [Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

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
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) beschreibt RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) beschreibt den CTR Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) beschreibt den CBC Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) beschreibt den GCM Modus.
- [FIPS 198-1](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf) beschreibt HMAC.
