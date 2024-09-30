---
title: "SubtleCrypto: exportKey()-Methode"
short-title: exportKey()
slug: Web/API/SubtleCrypto/exportKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`exportKey()`**-Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces exportiert einen Schlüssel: Das heißt, sie nimmt als Eingabe ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt und gibt Ihnen den Schlüssel in einem externen, portablen Format aus.

Um einen Schlüssel zu exportieren, muss [`CryptoKey.extractable`](/de/docs/Web/API/CryptoKey/extractable) auf `true` gesetzt sein.

Schlüssel können in mehreren Formaten exportiert werden: Details finden Sie unter [Unterstützte Formate](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) auf der Seite [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

Schlüssel werden nicht in einem verschlüsselten Format exportiert: Um Schlüssel beim Exportieren zu verschlüsseln, verwenden Sie stattdessen die [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey)-API.

## Syntax

```js-nolint
exportKey(format, key)
```

### Parameter

- `format`
  - : Ein String-Wert, der das Datenformat beschreibt, in dem der Schlüssel exportiert werden soll. Es kann eines der folgenden sein:
    - `raw`: [Rohformat](/de/docs/Web/API/SubtleCrypto/importKey#raw).
    - `pkcs8`: [PKCS #8](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8)-Format.
    - `spki`: [SubjectPublicKeyInfo](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo)-Format.
    - `jwk`: [JSON Web Key](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key)-Format.
- `key`
  - : Der zu exportierende [`CryptoKey`](/de/docs/Web/API/CryptoKey).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

- Wenn `format` `jwk` war, wird das Promise mit einem JSON-Objekt erfüllt, das den Schlüssel enthält.
- Andernfalls wird das Promise mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt, der den Schlüssel enthält.

### Ausnahmen

Das Promise wird zurückgewiesen, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen nicht extrahierbaren Schlüssel zu exportieren.
- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, in einem unbekannten Format zu exportieren.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/export-key/index.html) auf GitHub ausprobieren.

### Roh-Export

Dieses Beispiel exportiert einen AES-Schlüssel als `ArrayBuffer`, der die Bytes für den Schlüssel enthält. [Sehen Sie den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/raw.js).

```js
/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

/*
Generate an encrypt/decrypt secret key,
then set up an event listener on the "Export" button.
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
  .then((key) => {
    const exportButton = document.querySelector(".raw");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  });
```

### PKCS #8-Export

Dieses Beispiel exportiert einen RSA-privaten Signaturschlüssel als PKCS #8-Objekt. Der exportierte Schlüssel wird dann PEM-codiert. [Sehen Sie den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/pkcs8.js).

```js
/*
Convert an ArrayBuffer into a string
from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("pkcs8", key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PRIVATE KEY-----\n${exportedAsBase64}\n-----END PRIVATE KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}

/*
Generate a sign/verify key pair,
then set up an event listener on the "Export" button.
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
  .then((keyPair) => {
    const exportButton = document.querySelector(".pkcs8");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

### SubjectPublicKeyInfo-Export

Dieses Beispiel exportiert einen RSA-öffentlichen Verschlüsselungsschlüssel als PEM-codiertes SubjectPublicKeyInfo-Objekt. [Sehen Sie den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/spki.js).

```js
/*
Convert an ArrayBuffer into a string
from https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("spki", key);
  const exportedAsString = ab2str(exported);
  const exportedAsBase64 = window.btoa(exportedAsString);
  const pemExported = `-----BEGIN PUBLIC KEY-----\n${exportedAsBase64}\n-----END PUBLIC KEY-----`;

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = pemExported;
}

/*
Generate an encrypt/decrypt key pair,
then set up an event listener on the "Export" button.
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
  .then((keyPair) => {
    const exportButton = document.querySelector(".spki");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.publicKey);
    });
  });
```

### JSON Web Key-Export

Dieses Beispiel exportiert einen ECDSA-privaten Signaturschlüssel als JSON Web Key-Objekt. [Sehen Sie den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/jwk.js).

```js
/*
Export the given key and write it into the "exported-key" space.
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("jwk", key);
  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = JSON.stringify(exported, null, " ");
}

/*
Generate a sign/verify key pair,
then set up an event listener on the "Export" button.
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
  .then((keyPair) => {
    const exportButton = document.querySelector(".jwk");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8-Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo-Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key-Format](https://datatracker.ietf.org/doc/html/rfc7517).
