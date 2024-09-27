---
title: "SubtleCrypto: importKey()-Methode"
short-title: importKey()
slug: Web/API/SubtleCrypto/importKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`importKey()`**-Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle importiert einen Schlüssel: Das heißt, sie nimmt einen Schlüssel in einem externen, portablen Format als Eingabe und gibt Ihnen ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt, das Sie in der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) verwenden können.

Die Funktion akzeptiert mehrere Importformate: Einzelheiten finden Sie unter [Unterstützte Formate](#unterstützte_formate).

## Syntax

```js-nolint
importKey(format, keyData, algorithm, extractable, keyUsages)
```

### Parameter

- `format`
  - : Ein String, der das Datenformat des zu importierenden Schlüssels beschreibt. Es kann einer der folgenden sein:
    - `raw`: [Roh](#roh)format.
    - `pkcs8`: [PKCS #8](#pkcs_8) Format.
    - `spki`: [SubjectPublicKeyInfo](#subjectpublickeyinfo) Format.
    - `jwk`: [JSON Web Key](#json_web_key) Format.
- `keyData`
  - : Ein {{jsxref("ArrayBuffer")}}, ein [TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray),
    ein {{jsxref("DataView")}} oder ein `JSONWebKey`-Objekt, das den Schlüssel im angegebenen Format enthält.
- `algorithm`
  - : Ein Objekt, das den Typ des zu importierenden Schlüssels definiert und zusätzliche algorithmenspezifische Parameter bereitstellt.
    - Für [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      geben Sie ein [`RsaHashedImportParams`](/de/docs/Web/API/RsaHashedImportParams)-Objekt an.
    - Für [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      geben Sie ein [`EcKeyImportParams`](/de/docs/Web/API/EcKeyImportParams)-Objekt an.
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac):
      geben Sie ein [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)-Objekt an.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) und [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      geben Sie den String an, der den Algorithmus identifiziert, oder ein Objekt der Form `{ name: ALGORITHM }`, wobei `ALGORITHM` der Name des Algorithmus ist.
    - Für [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2): geben Sie den String `PBKDF2` oder ein Objekt der Form `{ name: "PBKDF2" }` an.
    - Für [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf): geben Sie den String `HKDF` oder ein Objekt der Form `{ name: "HKDF" }` an.
    - Für [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519): geben Sie den String `Ed25519` oder ein Objekt der Form `{ name: "Ed25519" }` an.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519): geben Sie den String `X25519` oder ein Objekt der Form `{ name: "X25519" }` an.
- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) zu exportieren.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, was mit dem Schlüssel gemacht werden kann. Mögliche Werte sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann verwendet werden, um einen neuen Schlüssel [abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveKey).
    - `deriveBits`: Der Schlüssel kann verwendet werden, um Bits [abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [verpacken](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit dem importierten Schlüssel als [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt erfüllt wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn einer der folgenden Ausnahmen auftritt:

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `keyUsages` leer ist, aber der entschlüsselte Schlüssel vom Typ `secret` oder `private` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden oder wenn die `keyData` für dieses Format nicht geeignet sind.

## Unterstützte Formate

Diese API unterstützt vier verschiedene Formate für den Schlüsselimport/-export: Roh, PKCS #8, SubjectPublicKeyInfo und JSON Web Key.

### Roh

Dieses Format kann verwendet werden, um AES- oder HMAC-Geheimschlüssel oder elliptische Kurven-öffentliche Schlüssel zu importieren oder zu exportieren.

In diesem Format wird der Schlüssel als ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) geliefert, der die Rohdaten für den Schlüssel enthält.

### PKCS #8

Dieses Format kann verwendet werden, um RSA- oder elliptische Kurven-privaten Schlüssel zu importieren oder zu exportieren.

Das PKCS #8-Format ist in [RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208) definiert, unter Verwendung der [ASN.1-Notation](https://de.wikipedia.org/wiki/ASN.1):

```plain
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL }
```

Die `importKey()`-Methode erwartet, dass dieses Objekt als ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) geliefert wird, der die [DER-codierte](https://luca.ntop.org/Teaching/Appunti/asn1.html) Form von `PrivateKeyInfo` enthält. DER ist eine Sammlung von Regeln zur Kodierung von ASN.1-Strukturen in eine binäre Form.

Am häufigsten treten Sie auf dieses Objekt im [PEM-Format](https://de.wikipedia.org/wiki/Privacy-Enhanced_Mail). PEM-Format ist eine Methode, um binäre Daten in ASCII zu kodieren. Es besteht aus einem Header und einem Footer, und dazwischen die [base64-kodierten](/de/docs/Glossary/Base64) Binärdaten. Ein PEM-kodiertes `PrivateKeyInfo` sieht so aus:

```plain
-----BEGIN PRIVATE KEY-----
MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDAU9BD0jxDfF5OV380z
9VIEUN2W5kJDZ3hbuaDenCxLiAMsoquKTfFaou71eLdN0TShZANiAARMUhCee/cp
xmjGc1roj0D0k6VlUqtA+JVCWigXcIAukOeTHCngZDKCrD4PkXDBvbciJdZKvO+l
ml2FIkoovZh/8yeTKmjUMb804g6OmjUc9vVojCRV0YdaSmYkkJMJbLg=
-----END PRIVATE KEY-----
```

Um dies in ein Format zu bringen, das Sie an `importKey()` übergeben können, müssen Sie zwei Dinge tun:

- Dekodieren Sie den Teil zwischen Header und Footer mit [`Window.atob()`](/de/docs/Web/API/Window/atob).
- Konvertieren Sie den resultierenden String in einen {{jsxref("ArrayBuffer")}}.

Sehen Sie im Abschnitt [Beispiele](#beispiele) für konkretere Anleitungen nach.

### SubjectPublicKeyInfo

Dieses Format kann verwendet werden, um RSA- oder elliptische Kurven-öffentliche Schlüssel zu importieren oder zu exportieren.

`SubjectPublicKey` ist in [RFC 5280, Abschnitt 4.1](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1) unter Verwendung der [ASN.1-Notation](https://de.wikipedia.org/wiki/ASN.1) definiert:

```plain
SubjectPublicKeyInfo  ::=  SEQUENCE  {
    algorithm            AlgorithmIdentifier,
    subjectPublicKey     BIT STRING  }
```

Genau wie [PKCS #8](#pkcs_8) erwartet die `importKey()`-Methode, dieses Objekt als ein [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) geliefert zu bekommen, der die [DER-codierte](https://luca.ntop.org/Teaching/Appunti/asn1.html) Form von `SubjectPublicKeyInfo` enthält.

Auch hier werden Sie höchstwahrscheinlich auf dieses Objekt im [PEM-Format](https://de.wikipedia.org/wiki/Privacy-Enhanced_Mail) treffen. Ein PEM-kodiertes `SubjectPublicKeyInfo` sieht so aus:

```plain
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3j+HgSHUnc7F6XzvEbD0
r3M5JNy+/kabiJVu8IU1ERAl3Osi38VgiMzjDBDOrFxVzNNzl+SXAHwXIV5BHiXL
CQ6qhwYsDgH6OqgKIwiALra/wNH4UHxj1Or/iyAkjHRR/kGhUtjyVCjzvaQaDpJW
2G+syd1ui0B6kJov2CRUWiPwpff8hBfVWv8q9Yc2yD5hCnykVL0iAiyn+SDAk/rv
8dC5eIlzCI4efUCbyG4c9O88Qz7bS14DxSfaPTy8P/TWoihVVjLaDF743LgM/JLq
CDPUBUA3HLsZUhKm3BbSkd7Q9Ngkjv3+yByo4/fL+fkYRa8j9Ypa2N0Iw53LFb3B
gQIDAQAB
-----END PUBLIC KEY-----
```

Genauso wie bei [PKCS #8](#pkcs_8) müssen Sie, um dies in ein Format zu bringen, das Sie an `importKey()` übergeben können, zwei Dinge tun:

- Dekodieren Sie den Teil zwischen Header und Footer mit [`Window.atob()`](/de/docs/Web/API/Window/atob).
- Konvertieren Sie den resultierenden String in einen {{jsxref("ArrayBuffer")}}.

Sehen Sie im Abschnitt [Beispiele](#beispiele) für konkretere Anleitungen nach.

### JSON Web Key

Sie können das JSON Web Key-Format verwenden, um RSA- oder elliptische Kurven-öffentliche oder private Schlüssel sowie AES- und HMAC-Geheimschlüssel zu importieren oder zu exportieren.

Das JSON Web Key-Format ist in [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) definiert. Es beschreibt eine Möglichkeit, öffentliche, private und geheime Schlüssel als JSON-Objekte darzustellen.

Ein JSON Web Key sieht folgendermaßen aus (dies ist ein EC-privater Schlüssel):

```json
{
  "crv": "P-384",
  "d": "wouCtU7Nw4E8_7n5C1-xBjB4xqSb_liZhYMsy8MGgxUny6Q8NCoH9xSiviwLFfK_",
  "ext": true,
  "key_ops": ["sign"],
  "kty": "EC",
  "x": "SzrRXmyI8VWFJg1dPUNbFcc9jZvjZEfH7ulKI1UkXAltd7RGWrcfFxqyGPcwu6AQ",
  "y": "hHUag3OvDzEr0uUQND4PXHQTXP5IDGdYhJhL-WLKjnGjQAw0rNGy5V29-aV-yseW"
};
```

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/import-key/index.html).

### Rohimport

Dieses Beispiel importiert einen AES-Schlüssel aus einem `ArrayBuffer`, der die zu verwendenden Rohbytes enthält. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/raw.js)

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

/*
Import an AES secret key from an ArrayBuffer containing the raw bytes.
Takes an ArrayBuffer string containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the secret key.
*/
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}
```

### PKCS #8 Import

Dieses Beispiel importiert einen RSA-privaten Signaturschlüssel aus einem PEM-codierten PKCS #8-Objekt. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/pkcs8.js)

```js
/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

const pemEncodedKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDD0tPV/du2vftjvXj1t/gXTK39sNBVrOAEb/jKzXae+Xa0H+3LhZaQIQNMfACiBSgIfZUvEGb+7TqXWQpoLoFR/R7MvGWcSk98JyrVtveD8ZmZYyItSY7m2hcasqAFiKyOouV5vzyRe87/lEyzzBpF3bQQ4IDaQu+K9Hj5fKuU6rrOeOhsdnJc+VdDQLScHxvMoLZ9Vtt+oK9J4/tOLwr4CG8khDlBURcBY6gPcLo3dPU09SW+6ctX2cX4mkXx6O/0mmdTmacr/vu50KdRMleFeZYOWPAEhhMfywybTuzBiPVIZVP8WFCSKNMbfi1S9A9PdBqnebwwHhX3/hsEBt2BAgMBAAECggEABEI1P6nf6Zs7mJlyBDv+Pfl5rjL2cOqLy6TovvZVblMkCPpJyFuNIPDK2tK2i897ZaXfhPDBIKmllM2Hq6jZQKB110OAnTPDg0JxzMiIHPs32S1d/KilHjGff4Hjd4NXp1l1Dp8BUPOllorR2TYm2x6dcCGFw9lhTr8O03Qp4hjn84VjGIWADYCk83mgS4nRsnHkdiqYnWx1AjKlY51yEK6RcrDMi0Th2RXrrINoC35sVv+APt2rkoMGi52RwTEseA1KZGFrxjq61ReJif6p2VXEcvHeX6CWLx014LGk43z6Q28P6HgeEVEfIjyqCUea5Du/mYb/QsRSCosXLxBqwQKBgQD1+fdC9ZiMrVI+km7Nx2CKBn8rJrDmUh5SbXn2MYJdrUd8bYNnZkCgKMgxVXsvJrbmVOrby2txOiqudZkk5mD3E5O/QZWPWQLgRu8ueYNpobAX9NRgNfZ7rZD+81vh5MfZiXfuZOuzv29iZhU0oqyZ9y75eHkLdrerNkwYOe5aUQKBgQDLzapDi1NxkBgsj9iiO4KUa7jvD4JjRqFy4Zhj/jbQvlvM0F/uFp7sxVcHGx4r11C+6iCbhX4u+Zuu0HGjT4d+hNXmgGyxR8fIUVxOlOtDkVJa5sOBZK73/9/MBeKusdmJPRhalZQfMUJRWIoEVDMhfg3tW/rBj5RYAtP2dTVUMQKBgDs8yr52dRmT+BWXoFWwaWB0NhYHSFz/c8v4D4Ip5DJ5M5kUqquxJWksySGQa40sbqnD05fBQovPLU48hfgr/zghn9hUjBcsoZOvoZR4sRw0UztBvA+7jzOz1hKAOyWIulR6Vca0yUrNlJ6G5R56+sRNkiOETupi2dLCzcqb0PoxAoGAZyNHvTLvIZN4iGSrjz5qkM4LIwBIThFadxbv1fq6pt0O/BGf2o+cEdq0diYlGK64cEVwBwSBnSg4vzlBqRIAUejLjwEDAJyA4EE8Y5A9l04dzV7nJb5cRak6CrgXxay/mBJRFtaHxVlaZGxYPGSYE6UFS0+3EOmmevvDZQBf4qECgYEA0ZF6Vavz28+8wLO6SP3w8NmpHk7K9tGEvUfQ30SgDx4G7qPIgfPrbB4OP/E0qCfsIImi3sCPpjvUMQdVVZyPOIMuB+rV3ZOxkrzxEUOrpOpR48FZbL7RN90yRQsAsrp9e4iv8QwB3VxLe7X0TDqqnRyqrc/osGzuS2ZcHOKmCU8=
-----END PRIVATE KEY-----`;

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length - 1,
  );
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return window.crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSA-PSS",
      hash: "SHA-256",
    },
    true,
    ["sign"],
  );
}
```

### SubjectPublicKeyInfo Import

Dieses Beispiel importiert einen RSA-öffentlichen Verschlüsselungsschlüssel aus einem PEM-codierten SubjectPublicKeyInfo-Objekt. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/spki.js)

```js
// from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy3Xo3U13dc+xojwQYWoJLCbOQ5fOVY8LlnqcJm1W1BFtxIhOAJWohiHuIRMctv7dzx47TLlmARSKvTRjd0dF92jx/xY20Lz+DXp8YL5yUWAFgA3XkO3LSJgEOex10NB8jfkmgSb7QIudTVvbbUDfd5fwIBmCtaCwWx7NyeWWDb7A9cFxj7EjRdrDaK3ux/ToMLHFXVLqSL341TkCf4ZQoz96RFPUGPPLOfvN0x66CM1PQCkdhzjE6U5XGE964ZkkYUPPsy6Dcie4obhW4vDjgUmLzv0z7UD010RLIneUgDE2FqBfY/C+uWigNPBPkkQ+Bv/UigS6dHqTCVeD5wgyBQIDAQAB
-----END PUBLIC KEY-----`;

function importRsaKey(pem) {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PUBLIC KEY-----";
  const pemFooter = "-----END PUBLIC KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length - 1,
  );
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return window.crypto.subtle.importKey(
    "spki",
    binaryDer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"],
  );
}
```

### JSON Web Key Import

Dieser Code importiert einen ECDSA-privaten Signaturschlüssel, gegeben ein JSON Web Key-Objekt, das ihn darstellt. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/jwk.js)

```js
const jwkEcKey = {
  crv: "P-384",
  d: "wouCtU7Nw4E8_7n5C1-xBjB4xqSb_liZhYMsy8MGgxUny6Q8NCoH9xSiviwLFfK_",
  ext: true,
  key_ops: ["sign"],
  kty: "EC",
  x: "SzrRXmyI8VWFJg1dPUNbFcc9jZvjZEfH7ulKI1UkXAltd7RGWrcfFxqyGPcwu6AQ",
  y: "hHUag3OvDzEr0uUQND4PXHQTXP5IDGdYhJhL-WLKjnGjQAw0rNGy5V29-aV-yseW",
};

/*
Import a JSON Web Key format EC private key, to use for ECDSA signing.
Takes an object representing the JSON Web Key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(jwk) {
  return window.crypto.subtle.importKey(
    "jwk",
    jwk,
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    true,
    ["sign"],
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS #8 Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key Format](https://datatracker.ietf.org/doc/html/rfc7517).
