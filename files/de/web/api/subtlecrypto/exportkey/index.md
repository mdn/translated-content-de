---
title: "SubtleCrypto: exportKey()-Methode"
short-title: exportKey()
slug: Web/API/SubtleCrypto/exportKey
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`exportKey()`**-Methode der {{domxref("SubtleCrypto")}}-Schnittstelle exportiert einen Schlüssel: Das heißt, sie nimmt als Eingabe ein {{domxref("CryptoKey")}}-Objekt und gibt Ihnen den Schlüssel in einem externen, portablen Format.

Um einen Schlüssel zu exportieren, muss der {{domxref("CryptoKey.extractable")}}-Wert auf `true` gesetzt sein.

Schlüssel können in mehreren Formaten exportiert werden: Siehe [Unterstützte Formate](/de/docs/Web/API/SubtleCrypto/importKey#supported_formats) auf der Seite [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) für Details.

Schlüssel werden nicht in einem verschlüsselten Format exportiert: Um Schlüssel beim Exportieren zu verschlüsseln, verwenden Sie die [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey)-API stattdessen.

## Syntax

```js-nolint
exportKey(format, key)
```

### Parameter

- `format`
  - : Ein String-Wert, der das Datenformat beschreibt, in dem der Schlüssel exportiert werden soll. Es kann eines der folgenden sein:
    - `raw`: [Raw](/de/docs/Web/API/SubtleCrypto/importKey#raw)-Format.
    - `pkcs8`: [PKCS #8](/de/docs/Web/API/SubtleCrypto/importKey#pkcs_8)-Format.
    - `spki`: [SubjectPublicKeyInfo](/de/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo)-Format.
    - `jwk`: [JSON Web Key](/de/docs/Web/API/SubtleCrypto/importKey#json_web_key)-Format.
- `key`
  - : Der {{domxref("CryptoKey")}}, der exportiert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

- Wenn `format` `jwk` ist, wird das Promise mit einem JSON-Objekt erfüllt, das den Schlüssel enthält.
- Andernfalls wird das Promise mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt, der den Schlüssel enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, einen nicht-extrahierbaren Schlüssel zu exportieren.
- `NotSupported` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, in einem unbekannten Format zu exportieren.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn versucht wird, ein ungültiges Format zu verwenden.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/export-key/index.html).

### Rohdatenexport

Dieses Beispiel exportiert einen AES-Schlüssel als `ArrayBuffer`, der die Bytes für den Schlüssel enthält. [Siehe den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/raw.js).

```js
/*
Exportieren Sie den angegebenen Schlüssel und schreiben Sie ihn in den Bereich "exported-key".
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

/*
Generieren Sie einen Verschlüsselungs-/Entschlüsselungsgeheimschlüssel,
dann richten Sie einen Event-Listener auf den "Export"-Button ein.
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

### PKCS #8 Export

Dieses Beispiel exportiert einen RSA-privaten Signaturschlüssel als PKCS #8-Objekt. Der exportierte Schlüssel wird dann PEM-codiert. [Siehe den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/pkcs8.js).

```js
/*
Konvertieren Sie einen ArrayBuffer in einen String
von https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Exportieren Sie den angegebenen Schlüssel und schreiben Sie ihn in den Bereich "exported-key".
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
Generieren Sie ein Signatur-/Verifikationsschlüsselpaar,
dann richten Sie einen Event-Listener auf den "Export"-Button ein.
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
  .then((keyPair) => {
    const exportButton = document.querySelector(".pkcs8");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.privateKey);
    });
  });
```

### SubjectPublicKeyInfo Export

Dieses Beispiel exportiert einen RSA-öffentlichen Verschlüsselungsschlüssel als PEM-codiertes SubjectPublicKeyInfo-Objekt. [Siehe den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/spki.js).

```js
/*
Konvertieren Sie einen ArrayBuffer in einen String
von https://developer.chrome.com/blog/how-to-convert-arraybuffer-to-and-from-string/
*/
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/*
Exportieren Sie den angegebenen Schlüssel und schreiben Sie ihn in den Bereich "exported-key".
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
Generieren Sie ein Verschlüsselungs-/Entschlüsselungsschlüsselpaar,
dann richten Sie einen Event-Listener auf den "Export"-Button ein.
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
  .then((keyPair) => {
    const exportButton = document.querySelector(".spki");
    exportButton.addEventListener("click", () => {
      exportCryptoKey(keyPair.publicKey);
    });
  });
```

### JSON Web Key Export

Dieses Beispiel exportiert einen ECDSA-privaten Signaturschlüssel als JSON Web Key-Objekt. [Siehe den vollständigen Code auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/export-key/jwk.js).

```js
/*
Exportieren Sie den angegebenen Schlüssel und schreiben Sie ihn in den Bereich "exported-key".
*/
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("jwk", key);
  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = JSON.stringify(exported, null, " ");
}

/*
Generieren Sie ein Signatur-/Verifikationsschlüsselpaar,
dann richten Sie einen Event-Listener auf den "Export"-Button ein.
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8 Format](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo Format](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON Web Key Format](https://datatracker.ietf.org/doc/html/rfc7517).
