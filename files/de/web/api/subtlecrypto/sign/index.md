---
title: "SubtleCrypto: sign() Methode"
short-title: sign()
slug: Web/API/SubtleCrypto/sign
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`sign()`** Methode der {{domxref("SubtleCrypto")}}-Schnittstelle erzeugt eine digitale {{glossary("signature")}}.

Sie nimmt als Argumente einen {{glossary("key")}} zum Signieren, einige algorithmenspezifische Parameter und die zu signierenden Daten. Sie gibt ein {{jsxref("Promise")}} zurück, das mit der Signatur erfüllt wird.

Sie können die entsprechende {{domxref("SubtleCrypto.verify()")}}-Methode verwenden, um die Signatur zu überprüfen.

## Syntax

```js-nolint
sign(algorithm, key, data)
```

### Parameter

- `algorithm`
  - : Ein String oder Objekt, das den zu verwendenden Signaturalgorithmus und seine Parameter angibt:
    - Um [RSASSA-PKCS1-v1_5](#rsassa-pkcs1-v1_5) zu verwenden, übergeben Sie den String `RSASSA-PKCS1-v1_5` oder ein Objekt der Form `{ name: "RSASSA-PKCS1-v1_5" }`.
    - Um [RSA-PSS](#rsa-pss) zu verwenden, übergeben Sie ein {{domxref("RsaPssParams")}}-Objekt.
    - Um [ECDSA](#ecdsa) zu verwenden, übergeben Sie ein {{domxref("EcdsaParams")}}-Objekt.
    - Um [HMAC](#hmac) zu verwenden, übergeben Sie den String `HMAC` oder ein Objekt der Form `{ name: "HMAC" }`.
    - Um [Ed25519](#ed25519) zu verwenden, übergeben Sie den String `Ed25519` oder ein Objekt der Form `{ name: "Ed25519" }`.
- `key`
  - : Ein {{domxref("CryptoKey")}}-Objekt, das den Schlüssel enthält, der zum Signieren verwendet werden soll. Wenn `algorithm` ein öffentliches Schlüssel-Kryptosystem identifiziert, ist dies der private Schlüssel.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die zu signierenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der die Signatur enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgende Ausnahme auftritt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Signaturschlüssel kein Schlüssel für den angeforderten Signaturalgorithmus ist oder wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt oder nicht zur Signaturerstellung geeignet ist.

## Unterstützte Algorithmen

Die Web Crypto API bietet die folgenden Algorithmen, die für das Signieren und die Signaturverifizierung verwendet werden können.

RSASSA-PKCS1-v1_5, RSA-PSS, ECDSA und Ed25519 sind {{Glossary("public-key cryptography", "Public-Key-Kryptosysteme")}}, die den privaten Schlüssel zum Signieren und den öffentlichen Schlüssel zur Verifizierung verwenden. Diese Systeme verwenden alle einen [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms), um die Nachricht vor dem Signieren auf eine kleine feste Größe zu hashen.

- Für RSASSA-PKCS1-v1_5 und RSA-PSS wird die Wahl des Digest-Algorithmus in die {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}- oder {{domxref("SubtleCrypto.importKey()", "importKey()")}}-Funktionen übergeben.
- Für ECDSA ist die Wahl des Digest-Algorithmus im `algorithm`-Parameter enthalten, der in die `sign()`-Funktion übergeben wird.
- Für Ed25519 ist der Digest-Algorithmus immer SHA-512.

Der HMAC-Algorithmus unterscheidet sich von den anderen darin, dass er kein Public-Key-Kryptosystem ist: Er verwendet denselben Algorithmus und Schlüssel für das Signieren und die Verifizierung. Dies bedeutet, dass der Verifizierungsschlüssel geheim gehalten werden muss, was wiederum bedeutet, dass dieser Algorithmus für viele Anwendungsfälle von Signaturen nicht geeignet ist. Er kann jedoch eine gute Wahl sein, wenn der Signierer und der Verifizierer dieselbe Entität sind.

### RSASSA-PKCS1-v1_5

Der RSASSA-PKCS1-v1_5-Algorithmus ist in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

### RSA-PSS

Der RSA-PSS-Algorithmus ist in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

Er unterscheidet sich von RSASSA-PKCS1-v1_5 darin, dass er ein zufälliges Salt in die Signaturoperation einbezieht, sodass dasselbe mit demselben Schlüssel signierte Nachricht nicht jedes Mal zu derselben Signatur führt. Eine zusätzliche Eigenschaft, die die Länge des Salzes definiert, wird in die `sign()`- und {{domxref("SubtleCrypto.verify()", "verify()")}}-Funktionen übergeben, wenn sie aufgerufen werden.

### ECDSA

ECDSA (Elliptic Curve Digital Signature Algorithm) ist eine Variante des Digital Signature Algorithm, spezifiziert in [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf), die Elliptic Curve Cryptography verwendet ([RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090)).

Signaturen werden als die `s1` und `s2` Werte kodiert, die in RFC 6090 (bekannt als `r` und `s` in [RFC 4754](https://datatracker.ietf.org/doc/html/rfc4754#section-3)) spezifiziert sind, jeweils in big-endian byte arrays, mit ihrer Länge der Bit-Größe der Kurve aufgerundet auf eine ganze Anzahl von Bytes. Diese Werte werden in dieser Reihenfolge zusammengefügt.

Diese Kodierung wurde auch vom [IEEE 1363-2000](https://standards.ieee.org/ieee/1363/2049/) Standard vorgeschlagen und wird manchmal als IEEE P1363 Format bezeichnet. Sie unterscheidet sich von der [X.509](https://www.itu.int/rec/T-REC-X.509) Signaturstruktur, die das Standardformat ist, das von einigen Tools und Bibliotheken wie [OpenSSL](https://www.openssl.org/) erzeugt wird.

### Ed25519

Ed25519 ist ein digitaler Signaturalgorithmus, der auf der [Curve25519](https://en.wikipedia.org/wiki/Curve25519) elliptischen Kurve basiert, die Teil der Edwards-Curve Digital Signature Algorithm (EdDSA)-Familie von Algorithmen ist, die in {{rfc("8032")}} definiert sind.

### HMAC

Der HMAC-Algorithmus berechnet und überprüft hashbasierte Message Authentication Codes gemäß dem [FIPS 198-1 Standard (PDF)](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf).

Der zu verwendende Digest-Algorithmus wird in dem [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)-Objekt angegeben, das Sie an {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} übergeben, oder im [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)-Objekt, das Sie an {{domxref("SubtleCrypto.importKey()", "importKey()")}} übergeben.

Der HMAC-Algorithmus verwendet denselben Algorithmus und Schlüssel sowohl für das Signieren als auch für die Verifizierung. Dies bedeutet, dass der Verifizierungsschlüssel geheim gehalten werden muss, was wiederum bedeutet, dass dieser Algorithmus für viele Signaturanwendungsfälle nicht geeignet ist. Er kann jedoch eine gute Wahl sein, wenn der Signierer und der Verifizierer dieselbe Entität sind.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html).

### RSASSA-PKCS1-v1_5

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zum Signieren und signiert ihn mit einem privaten Schlüssel. [Sehen Sie den vollständigen Quellcode auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  "RSASSA-PKCS1-v1_5",
  privateKey,
  encoded,
);
```

### RSA-PSS

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zum Signieren und signiert ihn mit einem privaten Schlüssel. [Sehen Sie den vollständigen Quellcode auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  {
    name: "RSA-PSS",
    saltLength: 32,
  },
  privateKey,
  encoded,
);
```

### ECDSA

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zum Signieren und signiert ihn mit einem privaten Schlüssel. [Sehen Sie den vollständigen Quellcode auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  {
    name: "ECDSA",
    hash: { name: "SHA-384" },
  },
  privateKey,
  encoded,
);
```

### HMAC

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zum Signieren und signiert ihn mit einem geheimen Schlüssel. [Sehen Sie den vollständigen Quellcode auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign("HMAC", key, encoded);
```

### Ed25519 (Schlüsselerzeugung, Signieren und Verifizierung)

Dieser Code generiert ein Ed25519 Signaturschlüsselpaar, verwendet den privaten Schlüssel, um den (kodierten) Inhalt eines Text-[`<input>`](/de/docs/Web/HTML/Element/input/text) zu signieren, und überprüft dann die Signatur mit dem öffentlichen Schlüssel. Er ist abgeleitet von [diesem Quellcode auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ed25519.js), den Sie [hier live ausführen können](https://mdn.github.io/dom-examples/web-crypto/sign-verify/).

#### HTML

Das HTML definiert ein `<input>`-Element mit dem zu signierenden Text und einen Button, der die Operation zum Erstellen von Schlüsseln, Signieren des Texts und dann Überprüfen der Signatur startet.

```html
<label for="message">Geben Sie eine Nachricht zum Signieren ein:</label>
<input
  type="text"
  id="message"
  name="message"
  size="25"
  value="The lion roars near dawn" />

<input id="sign-button" type="button" value="Run" />
```

```html hidden
<pre id="log">Click "Run" button</pre>
```

```css hidden
#log {
  height: 120px;
  white-space: pre-wrap; /* wrap pre blocks */
  overflow-wrap: break-word; /* break on words */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Der JavaScript-Code ruft zunächst die `#sign-button` und `#message` {{HTMLElement("input")}}-Elemente auf und fügt dann einen Listener für das `click`-Ereignis des Buttons hinzu. Der Ereignishandler löscht das Protokoll und führt die anderen Operationen mit dem Inhalt des `<input>`-Elements aus.

```js
const button = document.querySelector("#sign-button");
const input = document.querySelector("#message");

button.addEventListener("click", () => {
  // Clear log
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Run test
  test(input.value);
});
```

Zuerst werden mit dem Ed25519-Algorithmus Schlüssel generiert, dann wird Text kodiert und mit dem privaten Schlüssel signiert. Schließlich wird {{domxref("SubtleCrypto.verify()")}} mit dem öffentlichen Schlüssel aufgerufen, um die Signatur zu überprüfen.

```js
async function test(data) {
  log(`Message: ${data}`);
  try {
    // Generate keys
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "Ed25519",
      },
      true,
      ["sign", "verify"],
    );

    log(`publicKey: ${publicKey}, type: ${publicKey.type}`);
    log(`privateKey: ${privateKey},  type: ${privateKey.type}`);

    // Encode data prior to signing
    const encoder = new TextEncoder();
    encodedData = encoder.encode(data);

    // Log the first part of the encoded data
    const shorterEncodedBuffer = new Uint8Array(encodedData.buffer, 0, 14);
    log(
      `encodedData: ${shorterEncodedBuffer}...[${encodedData.byteLength} bytes total]`,
    );
    //log(`encodedData: ${encodedData}`);

    // Sign the data using the private key.
    const signature = await crypto.subtle.sign(
      {
        name: "Ed25519",
      },
      privateKey,
      encodedData,
    );

    // Log the first part of the signature data
    const signatureBuffer = new Uint8Array(signature, 0, 14);
    log(
      `signature: ${signatureBuffer}...[${signature.byteLength} bytes total]`,
    );

    // Verify the signature using the public key
    const verifyResult = await crypto.subtle.verify(
      {
        name: "Ed25519",
      },
      publicKey,
      signature,
      encodedData,
    );

    // Log result - true if the text was signed with the corresponding public key.
    log(`signature verified?: ${verifyResult}`);
  } catch (error) {
    log(error);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Ed25519 (Schlüsselerzeugung, Signieren und Verifizierung)", "100", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SubtleCrypto.verify()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSASSA-PKCS1-v1_5.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSA-PSS.
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) spezifiziert ECDSA.
- [FIPS 198-1](https://csrc.nist.gov/files/pubs/fips/198-1/final/docs/fips-198-1_final.pdf) spezifiziert HMAC.
