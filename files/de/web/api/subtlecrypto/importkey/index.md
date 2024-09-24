---
title: "SubtleCrypto: importKey()-Methode"
short-title: importKey()
slug: Web/API/SubtleCrypto/importKey
l10n:
  sourceCommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`importKey()`**-Methode des {{domxref("SubtleCrypto")}}-Interfaces importiert einen Schlüssel: Das heißt, sie nimmt als Eingabe einen Schlüssel in einem externen, tragbaren Format und gibt Ihnen ein {{domxref("CryptoKey")}}-Objekt, das Sie in der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) verwenden können.

Die Funktion akzeptiert mehrere Importformate: Details dazu finden Sie unter [Unterstützte Formate](#unterstützte_formate).

## Syntax

```js-nolint
importKey(format, keyData, algorithm, extractable, keyUsages)
```

### Parameter

- `format`
  - : Ein String, der das Datenformat des zu importierenden Schlüssels beschreibt. Es kann eine der folgenden sein:
    - `raw`: [Raw](#raw)-Format.
    - `pkcs8`: [PKCS #8](#pkcs_8)-Format.
    - `spki`: [SubjectPublicKeyInfo](#subjectpublickeyinfo)-Format.
    - `jwk`: [JSON Web Key](#json_web_key)-Format.
- `keyData`
  - : Ein {{jsxref("ArrayBuffer")}}, ein [TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray),
    ein {{jsxref("DataView")}} oder ein `JSONWebKey`-Objekt, das den Schlüssel im angegebenen Format enthält.
- `algorithm`
  - : Ein Objekt, das den Typ des zu importierenden Schlüssels definiert und zusätzliche, algorithmspezifische Parameter bereitstellt.
    - Für [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      reichen Sie ein [`RsaHashedImportParams`](/de/docs/Web/API/RsaHashedImportParams)-Objekt ein.
    - Für [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      reichen Sie ein [`EcKeyImportParams`](/de/docs/Web/API/EcKeyImportParams)-Objekt ein.
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac):
      reichen Sie ein [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)-Objekt ein.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) und [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      reichen Sie den String ein, der den Algorithmus identifiziert, oder ein Objekt der Form `{ name: ALGORITHM }`, wobei `ALGORITHM` der Name des Algorithmus ist.
    - Für [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2): reichen Sie den String `PBKDF2` oder ein Objekt der Form `{ name: "PBKDF2" }` ein.
    - Für [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf): reichen Sie den String `HKDF` oder ein Objekt der Form `{ name: "HKDF" }` ein.
    - Für [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519): reichen Sie den String `Ed25519` oder ein Objekt der Form `{ name: "Ed25519" }` ein.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519): reichen Sie den String `X25519` oder ein Objekt der Form `{ name: "X25519" }` ein.
- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mit {{domxref("SubtleCrypto.exportKey()")}} oder {{domxref("SubtleCrypto.wrapKey()")}} zu exportieren.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, was mit dem Schlüssel gemacht werden kann. Mögliche Array-Werte sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann zur [Ableitung eines neuen Schlüssels](/de/docs/Web/API/SubtleCrypto/deriveKey) verwendet werden.
    - `deriveBits`: Der Schlüssel kann zur [Ableitung von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [verpacken](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise),
das sich mit dem importierten Schlüssel als {{domxref("CryptoKey")}}-Objekt erfüllt.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `keyUsages` leer ist, der entschlüsselte Schlüssel jedoch vom Typ `secret` oder `private` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden oder wenn die `keyData` nicht für dieses Format geeignet ist.

## Unterstützte Formate

Diese API unterstützt vier verschiedene Schlüsselimport-/exportformate: Raw, PKCS #8, SubjectPublicKeyInfo und JSON Web Key.

### Raw

Sie können dieses Format verwenden, um AES- oder HMAC-Secret-Schlüssel oder Elliptische Kurve-Public-Keys zu importieren oder zu exportieren.

In diesem Format wird der Schlüssel als
[`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
bereitgestellt, der die rohen Bytes für den Schlüssel enthält.

### PKCS #8

Sie können dieses Format verwenden, um RSA- oder Elliptische Kurve-Private-Keys zu importieren oder zu exportieren.

Das PKCS #8-Format ist in [RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208) definiert,
unter Verwendung der [ASN.1-Notation](https://en.wikipedia.org/wiki/ASN.1):

```plain
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL }
```

Die `importKey()`-Methode erwartet, dass dieses Objekt als
[`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
bereitgestellt wird, der die [DER-kodierte](https://luca.ntop.org/Teaching/Appunti/asn1.html)
Form des `PrivateKeyInfo` enthält. DER ist eine Reihe von Regeln zur Kodierung von ASN.1-Strukturen in eine binäre Form.

Am wahrscheinlichsten werden Sie diesem Objekt im [PEM-Format](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) begegnen. Das PEM-Format
ist eine Möglichkeit, Binärdaten in ASCII zu kodieren. Es besteht aus einem Header und einem Footer und dazwischen die [base64-kodierten](/de/docs/Glossary/Base64)
Binärdaten. Ein PEM-kodiertes `PrivateKeyInfo` sieht so aus:

```plain
-----BEGIN PRIVATE KEY-----
MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDAU9BD0jxDfF5OV380z
9VIEUN2W5kJDZ3hbuaDenCxLiAMsoquKTfFaou71eLdN0TShZANiAARMUhCee/cp
xmjGc1roj0D0k6VlUqtA+JVCWigXcIAukOeTHCngZDKCrD4PkXDBvbciJdZKvO+l
ml2FIkoovZh/8yeTKmjUMb804g6OmjUc9vVojCRV0YdaSmYkkJMJbLg=
-----END PRIVATE KEY-----
```

Um dies in ein Format zu bringen, das Sie `importKey()` geben können, müssen Sie zwei Dinge tun:

- Base64-dekodieren Sie den Teil zwischen Header und Footer mit {{domxref("Window.atob()")}}.
- Konvertieren Sie den resultierenden String in einen {{jsxref("ArrayBuffer")}}.

Siehe den Abschnitt [Beispiele](#beispiele) für konkretere Anleitungen.

### SubjectPublicKeyInfo

Sie können dieses Format verwenden, um RSA- oder Elliptische Kurve-Public-Keys zu importieren oder zu exportieren.

`SubjectPublicKey` ist in [RFC 5280, Abschnitt 4.1](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1) definiert unter Verwendung der
[ASN.1-Notation](https://en.wikipedia.org/wiki/ASN.1):

```plain
SubjectPublicKeyInfo  ::=  SEQUENCE  {
    algorithm            AlgorithmIdentifier,
    subjectPublicKey     BIT STRING  }
```

Genau wie bei [PKCS #8](#pkcs_8) erwartet die `importKey()`-Methode,
dass dieses Objekt als
[`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
bereitgestellt wird, der die [DER-kodierte](https://luca.ntop.org/Teaching/Appunti/asn1.html)
Form des `SubjectPublicKeyInfo` enthält.

Auch hier werden Sie diesem Objekt am wahrscheinlichsten im [PEM-Format](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) begegnen.
Ein PEM-kodiertes `SubjectPublicKeyInfo` sieht so aus:

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

Genau wie bei [PKCS #8](#pkcs_8), um dies in ein Format zu bringen, das Sie
`importKey()` geben können, müssen Sie zwei Dinge tun:

- Base64-dekodieren Sie den Teil zwischen Header und Footer mit {{domxref("Window.atob()")}}.
- Konvertieren Sie den resultierenden String in einen {{jsxref("ArrayBuffer")}}.

Siehe den Abschnitt [Beispiele](#beispiele) für konkretere Anleitungen.

### JSON Web Key

Sie können das JSON Web Key-Format verwenden, um RSA- oder Elliptische Kurve-Public- oder Private-Keys sowie AES- und HMAC-Secret-Keys zu importieren oder zu exportieren.

Das JSON Web Key-Format ist in [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) definiert.
Es beschreibt eine Möglichkeit, öffentliche, private und geheime Schlüssel als JSON-Objekte darzustellen.

Ein JSON Web Key sieht folgendermaßen aus (dies ist ein EC-Privatschlüssel):

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
> Sie können [die funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/import-key/index.html).

### Import im Raw-Format

Dieses Beispiel importiert einen AES-Schlüssel aus einem `ArrayBuffer`, der die zu verwendenden rohen Bytes enthält. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/raw.js)

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

/*
Importieren eines AES-Geheimschlüssels von einem ArrayBuffer, der die rohen Bytes enthält.
Nimmt einen ArrayBuffer-String entgegen, der die Bytes enthält, und gibt ein Promise zurück,
das zu einem CryptoKey wird, der den Geheimschlüssel darstellt.
*/
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}
```

### Import im PKCS #8-Format

Dieses Beispiel importiert einen RSA-Privatschlüssel zum Signieren aus einem PEM-kodierten PKCS #8-Objekt. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/pkcs8.js)

```js
/*
Konvertieren eines Strings in einen ArrayBuffer
von https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
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
Importieren eines PEM-kodierten RSA-Privatschlüssels, um ihn für die RSA-PSS-Signatur zu verwenden.
Nimmt einen String entgegen, der den PEM-kodierten Schlüssel enthält, und gibt ein Promise zurück,
das zu einem CryptoKey wird, der den Privatschlüssel darstellt.
*/
function importPrivateKey(pem) {
  // Ermitteln Sie den Teil des PEM-Strings zwischen Header und Footer
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length - 1,
  );
  // Base64-dekodieren Sie den String, um die Binärdaten zu erhalten
  const binaryDerString = window.atob(pemContents);
  // Konvertieren Sie den binären String in einen ArrayBuffer
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

### Import im SubjectPublicKeyInfo-Format

Dieses Beispiel importiert einen RSA-Public-Encryption-Key aus einem PEM-kodierten SubjectPublicKeyInfo-Objekt. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/spki.js)

```js
// von https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
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
  // Ermitteln Sie den Teil des PEM-Strings zwischen Header und Footer
  const pemHeader = "-----BEGIN PUBLIC KEY-----";
  const pemFooter = "-----END PUBLIC KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length - 1,
  );
  // Base64-dekodieren Sie den String, um die Binärdaten zu erhalten
  const binaryDerString = window.atob(pemContents);
  // Konvertieren Sie den binären String in einen ArrayBuffer
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

### Import im JSON Web Key-Format

Dieser Code importiert einen ECDSA-Privatschlüssel für die Signierung, der durch ein JSON Web Key-Objekt dargestellt wird. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/jwk.js)

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
Importieren eines im JSON Web Key-Format vorliegendes EC-Privatschlüssels, um es für die ECDSA-Signatur zu nutzen.
Nimmt ein Objekt entgegen, das den JSON Web Key darstellt, und gibt ein Promise zurück,
das zu einem CryptoKey wird, der den Privatschlüssel darstellt.
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
- [PKCS #8-Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo-Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key-Format](https://datatracker.ietf.org/doc/html/rfc7517).
