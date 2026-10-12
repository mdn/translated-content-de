---
title: "SubtleCrypto: Methode wrapKey()"
short-title: wrapKey()
slug: Web/API/SubtleCrypto/wrapKey
l10n:
  sourceCommit: 6e52a630cb324d0d74e5968661b7e270ac7df93e
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die Methode **`wrapKey()`** der Schnittstelle [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) „verpackt“ einen Schlüssel.
Das bedeutet, dass sie den Schlüssel zunächst in ein externes, portables Format exportiert und den exportierten Schlüssel anschließend verschlüsselt.
Das Verpacken eines Schlüssels hilft, ihn in nicht vertrauenswürdigen Umgebungen zu schützen, etwa in einem ansonsten ungeschützten Datenspeicher oder bei der Übertragung über ein ungeschütztes Netzwerk.

Wie bei [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) geben Sie für den Schlüssel ein [Exportformat](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) an.
Damit ein Schlüssel exportiert werden kann, muss [`CryptoKey.extractable`](/de/docs/Web/API/CryptoKey/extractable) auf `true` gesetzt sein.

Da `wrapKey()` den zu exportierenden Schlüssel auch verschlüsselt, müssen Sie außerdem den Schlüssel übergeben, mit dem er verschlüsselt werden soll.
Dieser wird manchmal als „Wrapping Key“ bezeichnet.

Die Umkehrung von `wrapKey()` ist [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey): Während `wrapKey` aus Exportieren und Verschlüsseln besteht, besteht `unwrapKey` aus Importieren und Entschlüsseln.

## Syntax

```js-nolint
wrapKey(format, key, wrappingKey, wrapAlgo)
```

### Parameter

- `format`
  - : Eine Zeichenfolge, die das Datenformat beschreibt, in das der Schlüssel vor der Verschlüsselung exportiert wird. Sie kann einen der folgenden Werte haben:
    - `raw`
      - : [Raw-Format](/de/docs/Web/API/SubtleCrypto/importKey#raw).
    - `pkcs8`
      - : [PKCS-#8-Format](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8).
    - `spki`
      - : [SubjectPublicKeyInfo-Format](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo).
    - `jwk`
      - : [JSON-Web-Key-Format](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key).
- `key`
  - : Der zu verpackende [`CryptoKey`](/de/docs/Web/API/CryptoKey).
- `wrappingkey`
  - : Der [`CryptoKey`](/de/docs/Web/API/CryptoKey), mit dem der exportierte Schlüssel verschlüsselt wird. Für diesen Schlüssel muss die Verwendung `wrapKey` festgelegt sein.
- `wrapAlgo`
  - : Ein Objekt, das den [Algorithmus](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) zum Verschlüsseln des exportierten Schlüssels sowie alle erforderlichen zusätzlichen Parameter angibt:
    - Um [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) zu verwenden, übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt.
    - Um [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) zu verwenden, übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt.
    - Um [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) zu verwenden, übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt.
    - Um [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) zu verwenden, übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt.
    - Um [AES-KW](#aes-kw) zu verwenden, übergeben Sie die Zeichenfolge `"AES-KW"` oder ein Objekt der Form `{ name: "AES-KW" }`.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der den verschlüsselten exportierten Schlüssel enthält.

### Ausnahmen

Die Promise wird zurückgewiesen, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wrapping Key kein Schlüssel für den angeforderten Verpackungsalgorithmus ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen unbekannten Algorithmus oder einen Algorithmus zu verwenden, der sich nicht zum Verschlüsseln oder Verpacken eignet.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden.

## Unterstützte Algorithmen

Alle [Algorithmen, die zum Verschlüsseln verwendet werden können](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms), können auch zum Verpacken von Schlüsseln verwendet werden, sofern für den Schlüssel die Verwendung „wrapKey“ festgelegt ist.
Zum Verpacken von Schlüsseln steht zusätzlich [AES-KW](#aes-kw) zur Verfügung.

### AES-KW

AES-KW ist eine Möglichkeit, die AES-Chiffre zum Verpacken von Schlüsseln zu verwenden.

Ein Vorteil von AES-KW gegenüber einem anderen AES-Modus wie AES-GCM ist, dass AES-KW keinen Initialisierungsvektor benötigt.
Für die Verwendung von AES-KW muss die Eingabe ein Vielfaches von 64 Bit lang sein.

AES-KW ist in [RFC 3394](https://datatracker.ietf.org/doc/html/rfc3394) spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionsfähigen Beispiele](https://mdn.github.io/dom-examples/web-crypto/wrap-key/index.html) auf GitHub ausprobieren.

### Verpacken im Raw-Format

Dieses Beispiel verpackt einen AES-Schlüssel.
Es verwendet „raw“ als Exportformat und AES-KW mit einem aus einem Passwort abgeleiteten Schlüssel, um ihn zu verschlüsseln. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/raw.js)

```js
let salt;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-KW key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-KW", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);

  return window.crypto.subtle.wrapKey("raw", keyToWrap, wrappingKey, "AES-KW");
}

/*
Generate an encrypt/decrypt secret key,
then wrap it.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((secretKey) => wrapCryptoKey(secretKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

### Verpacken im PKCS-#8-Format

Dieses Beispiel verpackt einen privaten RSA-Signaturschlüssel. Es verwendet „pkcs8“ als Exportformat und AES-GCM mit einem aus einem Passwort abgeleiteten Schlüssel, um ihn zu verschlüsseln.
[Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/pkcs8.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-GCM key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(12));

  return window.crypto.subtle.wrapKey("pkcs8", keyToWrap, wrappingKey, {
    name: "AES-GCM",
    iv,
  });
}

/*
Generate a sign/verify key pair,
then wrap the private key.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.privateKey))
  .then((wrappedKey) => {
    console.log(wrappedKey);
  });
```

### Verpacken im SubjectPublicKeyInfo-Format

Dieses Beispiel verpackt einen öffentlichen RSA-Verschlüsselungsschlüssel. Es verwendet „spki“ als Exportformat und AES-CBC mit einem aus einem Passwort abgeleiteten Schlüssel, um ihn zu verschlüsseln.
[Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/spki.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-CBC key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-CBC", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(16));

  return window.crypto.subtle.wrapKey("spki", keyToWrap, wrappingKey, {
    name: "AES-CBC",
    iv,
  });
}

/*
Generate an encrypt/decrypt key pair,
then wrap it.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.publicKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

### Verpacken im JSON-Web-Key-Format

Dieses Beispiel verpackt einen privaten ECDSA-Signaturschlüssel. Es verwendet „jwk“ als Exportformat und AES-GCM mit einem aus einem Passwort abgeleiteten Schlüssel, um ihn zu verschlüsseln.
[Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/jwk.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-GCM key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(12));

  return window.crypto.subtle.wrapKey("jwk", keyToWrap, wrappingKey, {
    name: "AES-GCM",
    iv,
  });
}

/*
Generate a sign/verify key pair,
then wrap the private key
*/
window.crypto.subtle
  .generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.privateKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS-#8-Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo-Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON-Web-Key-Format](https://datatracker.ietf.org/doc/html/rfc7517).
- [AES-KW-Spezifikation](https://datatracker.ietf.org/doc/html/rfc3394).
