---
title: "SubtleCrypto: decrypt()-Methode"
short-title: decrypt()
slug: Web/API/SubtleCrypto/decrypt
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`decrypt()`**-Methode des {{domxref("SubtleCrypto")}}-Interfaces entschlüsselt einige verschlüsselte Daten.
Es benötigt als Argumente einen {{glossary("Schlüssel")}} zur Entschlüsselung, einige optionale zusätzliche Parameter und die zu entschlüsselnden Daten (auch als "Geheimtext" bekannt).
Es gibt ein {{jsxref("Promise")}} zurück, das mit den entschlüsselten Daten (auch bekannt als "Klartext") erfüllt wird.

## Syntax

```js-nolint
decrypt(algorithm, key, data)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das den zu verwendenden [Algorithmus](#unterstützte_algorithmen) angibt, sowie alle erforderlichen zusätzlichen Parameter.
    Die angegebenen Werte für die zusätzlichen Parameter müssen denen entsprechen, die im entsprechenden {{domxref("SubtleCrypto.encrypt()", "encrypt()")}}-Aufruf übergeben wurden.
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, übergeben Sie ein {{domxref("RsaOaepParams")}}-Objekt.
    - Um [AES-CTR](#aes-ctr) zu verwenden, übergeben Sie ein {{domxref("AesCtrParams")}}-Objekt.
    - Um [AES-CBC](#aes-cbc) zu verwenden, übergeben Sie ein {{domxref("AesCbcParams")}}-Objekt.
    - Um [AES-GCM](#aes-gcm) zu verwenden, übergeben Sie ein {{domxref("AesGcmParams")}}-Objekt.

- `key`
  - : Ein {{domxref("CryptoKey")}}, der den zu verwendenden Schlüssel zur Entschlüsselung enthält.
    Bei Verwendung von RSA-OAEP handelt es sich um die `privateKey`-Eigenschaft des {{domxref("CryptoKeyPair")}}-Objekts.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das die zu entschlüsselnden Daten enthält (auch bekannt als {{glossary("Geheimtext")}}).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Klartext enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z. B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Operation aus einem spezifischen Grund fehlgeschlagen ist (z. B. Algorithmusparameter mit ungültigen Größen oder ein Fehler beim Entschlüsseln des Geheimtextes).

## Unterstützte Algorithmen

Die `decrypt()`-Methode unterstützt dieselben Algorithmen wie die [`encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms)-Methode.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html).

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
Beachten Sie, dass `counter` denselben Wert besitzen muss, der für die Verschlüsselung verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

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
`iv` denselben Wert besitzen muss, der für die Verschlüsselung verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function decryptMessage(key, ciphertext) {
  // Der iv-Wert ist derselbe wie bei der Verschlüsselung
  return window.crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, ciphertext);
}
```

### AES-GCM

Dieser Code entschlüsselt `ciphertext` mit AES im GCM-Modus. Beachten Sie, dass
`iv` denselben Wert besitzen muss, der für die Verschlüsselung verwendet wurde. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function decryptMessage(key, ciphertext) {
  // Der iv-Wert ist derselbe wie bei der Verschlüsselung
  return window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SubtleCrypto.encrypt()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert den CTR-Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert den CBC-Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert den GCM-Modus.
- [FIPS 198-1](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf) spezifiziert HMAC.
