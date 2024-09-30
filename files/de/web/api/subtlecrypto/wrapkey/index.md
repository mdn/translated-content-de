---
title: "SubtleCrypto: wrapKey() Methode"
short-title: wrapKey()
slug: Web/API/SubtleCrypto/wrapKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`wrapKey()`**-Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces „umhüllt“ einen Schlüssel. Das bedeutet, dass der Schlüssel in einem externen, portablen Format exportiert und anschließend verschlüsselt wird. Das Umhüllen eines Schlüssels hilft, ihn in nicht vertrauenswürdigen Umgebungen zu schützen, wie z.B. in einem ansonsten ungeschützten Datenspeicher oder bei der Übertragung über ein ungeschütztes Netzwerk.

Wie bei [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) geben Sie ein [Exportformat](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) für den Schlüssel an. Um einen Schlüssel zu exportieren, muss [`CryptoKey.extractable`](/de/docs/Web/API/CryptoKey/extractable) auf `true` gesetzt sein.

Da `wrapKey()` den zu exportierenden Schlüssel verschlüsselt, müssen Sie auch den Schlüssel angeben, der zur Verschlüsselung verwendet werden soll. Dieser wird manchmal als „Verpackungsschlüssel“ bezeichnet.

Das Gegenteil von `wrapKey()` ist [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey): Während `wrapKey` aus Export + Verschlüsselung besteht, besteht `unwrapKey` aus Import + Entschlüsselung.

## Syntax

```js-nolint
wrapKey(format, key, wrappingKey, wrapAlgo)
```

### Parameter

- `format`
  - : Ein Zeichenfolgewert, der das Datenformat beschreibt, in dem der Schlüssel exportiert wird, bevor er verschlüsselt wird. Es kann eines der folgenden sein:
    - `raw`
      - : [Roh](/de/docs/Web/API/SubtleCrypto/importKey#raw) Format.
    - `pkcs8`
      - : [PKCS #8](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8) Format.
    - `spki`
      - : [SubjectPublicKeyInfo](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) Format.
    - `jwk`
      - : [JSON Web Key](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key) Format.
- `key`
  - : Der zu umhüllende [`CryptoKey`](/de/docs/Web/API/CryptoKey).
- `wrappingkey`
  - : Der [`CryptoKey`](/de/docs/Web/API/CryptoKey), der zum Verschlüsseln des exportierten Schlüssels verwendet wird. Der Schlüssel muss die Verwendung `wrapKey` haben.
- `wrapAlgo`
  - : Ein Objekt, das den zu verwendenden [Algorithmus](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) zur Verschlüsselung des exportierten Schlüssels und alle erforderlichen zusätzlichen Parameter spezifiziert:
    - Um [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) zu verwenden,
      geben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt an.
    - Um [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) zu verwenden,
      geben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt an.
    - Um [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) zu verwenden,
      geben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt an.
    - Um [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) zu verwenden,
      geben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt an.
    - Um [AES-KW](#aes-kw) zu verwenden,
      geben Sie die Zeichenfolge `"AES-KW"` oder ein Objekt der Form `{ name: "AES-KW" }` an.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der den verschlüsselten exportierten Schlüssel enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Verpackungsschlüssel nicht für den angeforderten Umhüllungsalgorithmus geeignet ist.
- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen unbekannten oder für Verschlüsselung oder Umhüllung ungeeigneten Algorithmus zu verwenden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden.

## Unterstützte Algorithmen

Alle [Algorithmen, die für die Verschlüsselung verwendet werden können](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms), können auch für die Schlüsselumhüllung verwendet werden, solange der Schlüssel die Verwendung "wrapKey" hat. Für die Schlüsselumhüllung haben Sie die zusätzliche Option von [AES-KW](#aes-kw).

### AES-KW

AES-KW ist eine Möglichkeit, das AES-Cipher für die Schlüsselumhüllung zu verwenden.

Ein Vorteil von AES-KW gegenüber anderen AES-Modi wie AES-GCM ist, dass AES-KW keinen Initialisierungsvektor benötigt. Um AES-KW zu verwenden, muss die Eingabe ein Vielfaches von 64 Bits sein.

AES-KW ist in [RFC 3394](https://datatracker.ietf.org/doc/html/rfc3394) spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/wrap-key/index.html).

### Rohumhüllung

Dieses Beispiel umhüllt einen AES-Schlüssel. Es verwendet "raw" als Exportformat und AES-KW mit einem passwortabgeleiteten Schlüssel, um ihn zu verschlüsseln. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/raw.js)

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

### PKCS #8 Umhüllung

Dieses Beispiel umhüllt einen RSA-privaten Signaturschlüssel. Es verwendet "pkcs8" als Exportformat und AES-GCM mit einem passwortabgeleiteten Schlüssel, um ihn zu verschlüsseln. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/pkcs8.js)

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

### SubjectPublicKeyInfo Umhüllung

Dieses Beispiel umhüllt einen RSA-öffentlichen Verschlüsselungsschlüssel. Es verwendet "spki" als Exportformat und AES-CBC mit einem passwortabgeleiteten Schlüssel, um ihn zu verschlüsseln. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/spki.js)

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

### JSON Web Key Umhüllung

Dieses Beispiel umhüllt einen ECDSA-privaten Signaturschlüssel. Es verwendet "jwk" als Exportformat und AES-GCM mit einem passwortabgeleiteten Schlüssel, um ihn zu verschlüsseln. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/jwk.js)

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
- [PKCS #8 Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key Format](https://datatracker.ietf.org/doc/html/rfc7517).
- [AES-KW-Spezifikation](https://datatracker.ietf.org/doc/html/rfc3394).
