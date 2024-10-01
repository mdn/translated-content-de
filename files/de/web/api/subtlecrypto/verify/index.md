---
title: "SubtleCrypto: verify()-Methode"
short-title: verify()
slug: Web/API/SubtleCrypto/verify
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`verify()`**-Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces überprüft eine digitale {{Glossary("signature", "Signatur")}}.

Sie nimmt als Argumente einen {{Glossary("key", "Schlüssel")}} zur Überprüfung der Signatur, einige algorithmenspezifische Parameter, die Signatur und die ursprünglich signierten Daten.
Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob die Signatur gültig ist.

## Syntax

```js-nolint
verify(algorithm, key, signature, data)
```

### Parameter

- `algorithm`
  - : Ein String oder Objekt, das den Algorithmus definiert, sowie bei einigen Algorithmusoptionen zusätzliche Parameter.
    Die für die zusätzlichen Parameter angegebenen Werte müssen mit denen übereinstimmen, die im entsprechenden [`sign()`](/de/docs/Web/API/SubtleCrypto/sign)-Aufruf übergeben wurden.
    - Um [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5) zu verwenden, übergeben Sie den String `"RSASSA-PKCS1-v1_5"` oder ein Objekt der Form `{ "name": "RSASSA-PKCS1-v1_5" }`.
    - Um [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) zu verwenden, übergeben Sie ein [`RsaPssParams`](/de/docs/Web/API/RsaPssParams)-Objekt.
    - Um [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) zu verwenden, übergeben Sie ein [`EcdsaParams`](/de/docs/Web/API/EcdsaParams)-Objekt.
    - Um [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) zu verwenden, übergeben Sie den String `"HMAC"` oder ein Objekt der Form `{ "name": "HMAC" }`.
    - Um [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) zu verwenden, übergeben Sie ein Objekt der Form `{ "name": "Ed25519" }`.
- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), das den Schlüssel enthält, der zur Überprüfung der Signatur verwendet wird. Es ist der geheime Schlüssel für einen symmetrischen Algorithmus und der öffentliche Schlüssel für ein Public-Key-System.
- `signature`
  - : Ein {{jsxref("ArrayBuffer")}}, der die {{Glossary("signature", "Signatur")}} enthält, die überprüft werden soll.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, das die Daten enthält, deren Signatur überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert erfüllt wird: `true`, wenn die Signatur gültig ist, sonst `false`.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgende Ausnahme auftritt:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Verschlüsselungsschlüssel kein Schlüssel für den angeforderten Verifizierungsalgorithmus ist oder wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt oder für eine Verifizierungsoperation nicht geeignet ist.

## Unterstützte Algorithmen

Die `verify()`-Methode unterstützt die gleichen Algorithmen wie die [`sign()`](/de/docs/Web/API/SubtleCrypto/sign#supported_algorithms)-Methode.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html) auf GitHub ausprobieren.

### RSASSA-PKCS1-v1_5

Dieser Code verwendet einen öffentlichen Schlüssel, um eine Signatur zu überprüfen.
[Den vollständigen Code auf GitHub ansehen.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
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
[Den vollständigen Code auf GitHub ansehen.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
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
[Den vollständigen Code auf GitHub ansehen.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
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
[Den vollständigen Code auf GitHub ansehen.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
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

Das [Ed25519 Live-Beispiel](/de/docs/Web/API/SubtleCrypto/sign#ed25519_key_generation_signing_and_verification) in `SubtleCrypto.sign()` zeigt, wie man öffentliche und private Schlüssel generiert, den privaten Schlüssel verwendet, um einige Daten zu signieren, und anschließend den öffentlichen Schlüssel verwendet, um die Signatur zu überprüfen.

Der unten gezeigte Auszug zeigt den Teil, der für die Überprüfung der Signatur mit dem öffentlichen Schlüssel und den codierten Daten relevant ist:

```js
// Verify the signature using the public key
const verifyResult = await crypto.subtle.verify(
  {
    name: "Ed25519",
  },
  publicKey,
  signature,
  encodedData,
);
// True if the signature is valid.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign).
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSASSA-PKCS1-v1_5.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSA-PSS.
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) spezifiziert ECDSA.
- [FIPS 198-1](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf) spezifiziert HMAC.
