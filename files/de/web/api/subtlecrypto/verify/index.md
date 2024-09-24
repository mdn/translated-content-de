---
title: "SubtleCrypto: verify()-Methode"
short-title: verify()
slug: Web/API/SubtleCrypto/verify
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`verify()`**-Methode der {{domxref("SubtleCrypto")}}
Schnittstelle überprüft eine digitale {{glossary("signature", "Signatur")}}.

Sie nimmt als Argumente einen {{glossary("key", "Schlüssel")}}, um die Signatur zu überprüfen, einige algorithmenspezifische Parameter, die Signatur und die ursprünglich signierten Daten.
Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem Boolean-Wert erfüllt wird, welcher angibt, ob die Signatur gültig ist.

## Syntax

```js-nolint
verify(algorithm, key, signature, data)
```

### Parameter

- `algorithm`
  - : Ein String oder Objekt, das den zu verwendenden Algorithmus definiert, und für einige Algorithmusauswahlen zusätzliche Parameter.
    Die für die zusätzlichen Parameter angegebenen Werte müssen mit denen übereinstimmen, die in den entsprechenden {{domxref("SubtleCrypto.sign()", "sign()")}}-Aufruf übergeben wurden.
    - Um [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5) zu verwenden, übergeben Sie den String `"RSASSA-PKCS1-v1_5"` oder ein Objekt der Form `{ "name": "RSASSA-PKCS1-v1_5" }`.
    - Um [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) zu verwenden, übergeben Sie ein {{domxref("RsaPssParams")}}-Objekt.
    - Um [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) zu verwenden, übergeben Sie ein {{domxref("EcdsaParams")}}-Objekt.
    - Um [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) zu verwenden, übergeben Sie den String `"HMAC"` oder ein Objekt der Form `{ "name": "HMAC" }`.
    - Um [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) zu verwenden, übergeben Sie ein Objekt der Form `{ "name": "Ed25519" }`.
- `key`
  - : Ein {{domxref("CryptoKey")}}, der den Schlüssel enthält, der zur Überprüfung der Signatur verwendet wird.
    Es ist der geheime Schlüssel für einen symmetrischen Algorithmus und der öffentliche Schlüssel für ein Public-Key-System.
- `signature`
  - : Ein {{jsxref("ArrayBuffer")}}, der die zu überprüfende {{glossary("signature", "Signatur")}} enthält.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, der die Daten enthält, deren Signatur überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem
Boolean-Wert erfüllt wird: `true`, wenn die Signatur gültig ist, `false`
andernfalls.

### Ausnahmen

Das Versprechen wird abgelehnt, wenn die folgende Ausnahme auftritt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Verschlüsselungsschlüssel kein Schlüssel für den angeforderten Überprüfungsalgorithmus ist oder wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder sich nicht für einen Überprüfungsvorgang eignet.

## Unterstützte Algorithmen

Die `verify()`-Methode unterstützt die gleichen Algorithmen wie die [`sign()`](/de/docs/Web/API/SubtleCrypto/sign#supported_algorithms) Methode.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html) auf GitHub ausprobieren.

### RSASSA-PKCS1-v1_5

Dieser Code verwendet einen öffentlichen Schlüssel, um eine Signatur zu überprüfen.
[Sehen Sie den kompletten Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Holen Sie sich den Inhalt der "message"-Textbox und kodieren Sie ihn
in einer Form, die wir für den Signaturvorgang verwenden können.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Holen Sie die kodierte Nachricht-zum-Signieren und überprüfen Sie sie anhand der gespeicherten Signatur.
* Wenn es übereinstimmt, setzen Sie die "valid"-Klasse auf die Signatur.
* Andernfalls setzen Sie die "invalid"-Klasse.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### RSA-PSS

Dieser Code verwendet einen öffentlichen Schlüssel, um eine Signatur zu überprüfen.
[Sehen Sie den kompletten Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Holen Sie sich den Inhalt der "message"-Textbox und kodieren Sie ihn
in einer Form, die wir für den Signaturvorgang verwenden können.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Holen Sie die kodierte Nachricht-zum-Signieren und überprüfen Sie sie anhand der gespeicherten Signatur.
* Wenn es übereinstimmt, setzen Sie die "valid"-Klasse auf die Signatur.
* Andernfalls setzen Sie die "invalid"-Klasse.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".rsa-pss .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### ECDSA

Dieser Code verwendet einen öffentlichen Schlüssel, um eine Signatur zu überprüfen.
[Sehen Sie den kompletten Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
Holen Sie sich den Inhalt der "message"-Textbox und kodieren Sie ihn
in einer Form, die wir für den Signaturvorgang verwenden können.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Holen Sie die kodierte Nachricht-zum-Signieren und überprüfen Sie sie anhand der gespeicherten Signatur.
* Wenn es übereinstimmt, setzen Sie die "valid"-Klasse auf die Signatur.
* Andernfalls setzen Sie die "invalid"-Klasse.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".ecdsa .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" },
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### HMAC

Dieser Code verwendet einen geheimen Schlüssel, um eine Signatur zu überprüfen.
[Sehen Sie den kompletten Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
Holen Sie sich den Inhalt der "message"-Textbox und kodieren Sie ihn
in einer Form, die wir für den Signaturvorgang verwenden können.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Holen Sie die kodierte Nachricht-zum-Signieren und überprüfen Sie sie anhand der gespeicherten Signatur.
* Wenn es übereinstimmt, setzen Sie die "valid"-Klasse auf die Signatur.
* Andernfalls setzen Sie die "invalid"-Klasse.
*/
async function verifyMessage(key) {
  const signatureValue = document.querySelector(".hmac .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "HMAC",
    key,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### Ed25519

Das [Ed25519-Beispiel](/de/docs/Web/API/SubtleCrypto/sign#ed25519_key_generation_signing_and_verification) in `SubtleCrypto.sign()` zeigt, wie man öffentliche und private Schlüssel generiert, den privaten Schlüssel verwendet, um einige Daten zu signieren, und dann den öffentlichen Schlüssel verwendet, um die Signatur zu überprüfen.

Der folgende Auszug zeigt den Teil, der für die Überprüfung der Signatur mit dem öffentlichen Schlüssel und den kodierten Daten relevant ist:

```js
// Überprüfung der Signatur mit dem öffentlichen Schlüssel
const verifyResult = await crypto.subtle.verify(
  {
    name: "Ed25519",
  },
  publicKey,
  signature,
  encodedData,
);
// Wahr, wenn die Signatur gültig ist.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SubtleCrypto.sign()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSASSA-PKCS1-v1_5.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSA-PSS.
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) spezifiziert ECDSA.
- [FIPS 198-1](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf) spezifiziert HMAC.
