---
title: "SubtleCrypto: Methode exportKey()"
short-title: exportKey()
slug: Web/API/SubtleCrypto/exportKey
l10n:
  sourceCommit: 6e52a630cb324d0d74e5968661b7e270ac7df93e
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die Methode **`exportKey()`** des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces exportiert einen Schlüssel: Sie nimmt ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt entgegen und gibt den Schlüssel in einem externen, portablen Format zurück.

Damit ein Schlüssel exportiert werden kann, muss [`CryptoKey.extractable`](/de/docs/Web/API/CryptoKey/extractable) auf `true` gesetzt sein.

Schlüssel können in mehreren Formaten exportiert werden. Einzelheiten finden Sie unter [Unterstützte Formate](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) auf der Seite zu [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

Schlüssel werden nicht in einem verschlüsselten Format exportiert. Wenn Sie Schlüssel beim Exportieren verschlüsseln möchten, verwenden Sie stattdessen die API [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey).

## Syntax

```js-nolint
exportKey(format, key)
```

### Parameter

- `format`
  - : Ein String-Wert, der das Datenformat beschreibt, in dem der Schlüssel exportiert werden soll. Möglich sind:
    - `raw`: [Raw-Format](/de/docs/Web/API/SubtleCrypto/importKey#raw).
    - `pkcs8`: [PKCS #8-Format](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8).
    - `spki`: [SubjectPublicKeyInfo-Format](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo).
    - `jwk`: [JSON Web Key-Format](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key).
- `key`
  - : Der zu exportierende [`CryptoKey`](/de/docs/Web/API/CryptoKey).

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

- Wenn `format` den Wert `jwk` hat, wird die Promise mit einem JSON-Objekt erfüllt, das den Schlüssel enthält.
- Andernfalls wird die Promise mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt, der den Schlüssel enthält.

### Ausnahmen

Die Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn versucht wird, einen nicht extrahierbaren Schlüssel zu exportieren.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn versucht wird, in ein unbekanntes Format zu exportieren.
- {{jsxref("TypeError")}}
  - : Tritt auf, wenn versucht wird, ein ungültiges Format zu verwenden.

## Beispiele

> [!NOTE]
> Sie können die [funktionsfähigen Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/export-key/index.html).

### Raw-Export

Dieses Beispiel exportiert einen AES-Schlüssel als `ArrayBuffer`, der die Bytes des Schlüssels enthält. [Den vollständigen Code finden Sie auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/raw.js).

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

Dieses Beispiel exportiert einen privaten RSA-Signaturschlüssel als PKCS #8-Objekt. Der exportierte Schlüssel wird anschließend PEM-kodiert. [Den vollständigen Code finden Sie auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/pkcs8.js).

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

Dieses Beispiel exportiert einen öffentlichen RSA-Verschlüsselungsschlüssel als PEM-kodiertes SubjectPublicKeyInfo-Objekt. [Den vollständigen Code finden Sie auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/spki.js).

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

Dieses Beispiel exportiert einen privaten ECDSA-Signaturschlüssel als JSON Web Key-Objekt. [Den vollständigen Code finden Sie auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/jwk.js).

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
