---
title: "SubtleCrypto: wrapKey()-Methode"
short-title: wrapKey()
slug: Web/API/SubtleCrypto/wrapKey
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`wrapKey()`** Methode der {{domxref("SubtleCrypto")}} Schnittstelle "verpackt" einen Schlüssel. Das bedeutet, dass der Schlüssel in ein externes, portables Format exportiert und dann der exportierte Schlüssel verschlüsselt wird. Das Verpacken eines Schlüssels hilft, ihn in nicht vertrauenswürdigen Umgebungen zu schützen, wie z. B. in einem ansonsten ungeschützten Datenspeicher oder bei der Übertragung über ein ungeschütztes Netzwerk.

Wie bei {{DOMxRef("SubtleCrypto.exportKey()")}} geben Sie ein [Exportformat](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) für den Schlüssel an. Um einen Schlüssel zu exportieren, muss {{DOMxRef("CryptoKey.extractable")}} auf `true` gesetzt sein.

Da `wrapKey()` jedoch auch den zu exportierenden Schlüssel verschlüsselt, müssen Sie auch den Schlüssel angeben, der zur Verschlüsselung verwendet werden soll. Dieser wird manchmal als "Verpackungsschlüssel" bezeichnet.

Das Gegenstück zu `wrapKey()` ist {{domxref("SubtleCrypto.unwrapKey()")}}: Während `wrapKey` aus Export + Verschlüsselung besteht, besteht `unwrapKey` aus Import + Entschlüsselung.

## Syntax

```js-nolint
wrapKey(format, key, wrappingKey, wrapAlgo)
```

### Parameter

- `format`
  - : Ein String, der das Datenformat beschreibt, in dem der Schlüssel exportiert wird, bevor er verschlüsselt wird. Es kann eines der folgenden sein:
    - `raw`
      - : [Raw](/de/docs/Web/API/SubtleCrypto/importKey#raw) Format.
    - `pkcs8`
      - : [PKCS #8](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8) Format.
    - `spki`
      - : [SubjectPublicKeyInfo](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) Format.
    - `jwk`
      - : [JSON Web Key](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key) Format.
- `key`
  - : Der {{domxref("CryptoKey")}}, der verpackt werden soll.
- `wrappingKey`
  - : Der {{domxref("CryptoKey")}}, der verwendet wird, um den exportierten Schlüssel zu verschlüsseln. Der Schlüssel muss die Verwendung `wrapKey` gesetzt haben.
- `wrapAlgo`
  - : Ein Objekt, das den [Algorithmus](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms) angibt, der verwendet werden soll, um den exportierten Schlüssel zu verschlüsseln, und alle erforderlichen zusätzlichen Parameter:
    - Um [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) zu verwenden,
      übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams) Objekt.
    - Um [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) zu verwenden,
      übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams) Objekt.
    - Um [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) zu verwenden,
      übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams) Objekt.
    - Um [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) zu verwenden,
      übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams) Objekt.
    - Um [AES-KW](#aes-kw) zu verwenden,
      übergeben Sie den String `"AES-KW"` oder ein Objekt der Form `{ name: "AES-KW" }`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der den verschlüsselten exportierten Schlüssel enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Verpackungsschlüssel kein Schlüssel für den angeforderten Verpackungsalgorithmus ist.
- `NotSupported` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt oder nicht für die Verschlüsselung oder Verpackung geeignet ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden.

## Unterstützte Algorithmen

Alle [Algorithmen, die zur Verschlüsselung verwendet werden können](/de/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms), können auch zur Verpackung von Schlüsseln verwendet werden, solange der Schlüssel die Verwendung "wrapKey" gesetzt hat. Für die Schlüsselverpackung haben Sie die zusätzliche Option [AES-KW](#aes-kw).

### AES-KW

AES-KW ist eine Möglichkeit, den AES-Cipher zur Schlüsselverpackung zu verwenden.

Ein Vorteil von AES-KW im Vergleich zu einem anderen AES-Modus wie AES-GCM ist, dass AES-KW keinen Initialisierungsvektor erfordert. Um AES-KW zu verwenden, muss die Eingabe ein Vielfaches von 64 Bit sein.

AES-KW ist in [RFC 3394](https://datatracker.ietf.org/doc/html/rfc3394) spezifiziert.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/wrap-key/index.html) auf GitHub ausprobieren.

### Raw-Verpackung

Dieses Beispiel verpackt einen AES-Schlüssel. Es verwendet "raw" als Exportformat und AES-KW, mit einem passwortbasierten Schlüssel, um ihn zu verschlüsseln. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/raw.js)

```js
let salt;

/*
Erlangen Sie ein Schlüsselmaterial, das als Eingabe für die deriveKey-Methode verwendet wird.
Das Schlüsselmaterial ist ein vom Benutzer bereitgestelltes Passwort.
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
Ausgehend von einem Schlüsselmaterial und einem zufälligen Salt
ein AES-KW-Schlüssel mittels PBKDF2 ableiten.
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
Den angegebenen Schlüssel verpacken.
*/
async function wrapCryptoKey(keyToWrap) {
  // den Schlüsselverschlüsselungsschlüssel erhalten
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);

  return window.crypto.subtle.wrapKey("raw", keyToWrap, wrappingKey, "AES-KW");
}

/*
Einen Verschlüsselungs-/Entschlüsselungsgeheimschlüssel erzeugen,
dann den Schlüssel verpacken.
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

### PKCS #8 Verpackung

Dieses Beispiel verpackt einen privaten RSA-Signierschlüssel. Es verwendet "pkcs8" als Exportformat und AES-GCM, mit einem passwortbasierten Schlüssel, um ihn zu verschlüsseln. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/pkcs8.js)

```js
let salt;
let iv;

/*
Erlangen Sie ein Schlüsselmaterial, das als Eingabe für die deriveKey-Methode verwendet wird.
Das Schlüsselmaterial ist ein vom Benutzer bereitgestelltes Passwort.
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
Ausgehend von einem Schlüsselmaterial und einem zufälligen Salt
einen AES-GCM-Schlüssel mittels PBKDF2 ableiten.
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
Den angegebenen Schlüssel verpacken.
*/
async function wrapCryptoKey(keyToWrap) {
  // den Schlüsselverschlüsselungsschlüssel erhalten
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
Ein Signier-/Verifizierungsschlüsselpaar erzeugen,
dann den privaten Schlüssel verpacken.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // Erwägen Sie die Verwendung eines 4096-Bit-Schlüssels für Systeme, die langfristige Sicherheit erfordern
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

### SubjectPublicKeyInfo Verpackung

Dieses Beispiel verpackt einen öffentlichen RSA-Verschlüsselungsschlüssel. Es verwendet "spki" als Exportformat und AES-CBC, mit einem passwortbasierten Schlüssel, um ihn zu verschlüsseln. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/spki.js)

```js
let salt;
let iv;

/*
Erlangen Sie ein Schlüsselmaterial, das als Eingabe für die deriveKey-Methode verwendet wird.
Das Schlüsselmaterial ist ein vom Benutzer bereitgestelltes Passwort.
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
Ausgehend von einem Schlüsselmaterial und einem zufälligen Salt
einen AES-CBC-Schlüssel mittels PBKDF2 ableiten.
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
Den angegebenen Schlüssel verpacken.
*/
async function wrapCryptoKey(keyToWrap) {
  // den Schlüsselverschlüsselungsschlüssel erhalten
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
Ein Verschlüsselungs-/Entschlüsselungsschlüsselpaar erzeugen,
dann den Schlüssel verpacken.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // Erwägen Sie die Verwendung eines 4096-Bit-Schlüssels für Systeme, die langfristige Sicherheit erfordern
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

### JSON Web Key Verpackung

Dieses Beispiel verpackt einen privaten ECDSA-Signierschlüssel. Es verwendet "jwk" als Exportformat und AES-GCM, mit einem passwortbasierten Schlüssel, um ihn zu verschlüsseln. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/jwk.js)

```js
let salt;
let iv;

/*
Erlangen Sie ein Schlüsselmaterial, das als Eingabe für die deriveKey-Methode verwendet wird.
Das Schlüsselmaterial ist ein vom Benutzer bereitgestelltes Passwort.
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
Ausgehend von einem Schlüsselmaterial und einem zufälligen Salt
einen AES-GCM-Schlüssel mittels PBKDF2 ableiten.
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
Den angegebenen Schlüssel verpacken.
*/
async function wrapCryptoKey(keyToWrap) {
  // den Schlüsselverschlüsselungsschlüssel erhalten
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
Ein Signier-/Verifizierungsschlüsselpaar erzeugen,
dann den privaten Schlüssel verpacken.
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
- [AES-KW Spezifikation](https://datatracker.ietf.org/doc/html/rfc3394).
