---
title: "SubtleCrypto: generateKey()-Methode"
short-title: generateKey()
slug: Web/API/SubtleCrypto/generateKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`generateKey()`**-Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle wird verwendet, um einen neuen Schlüssel (für symmetrische Algorithmen) oder ein Schlüsselpaar (für Public-Key-Algorithmen) zu generieren.

## Syntax

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das den zu generierenden Schlüsseltyp definiert und zusätzliche algorithmenspezifische Parameter bereitstellt.

    - Für [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      übergeben Sie ein [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams)-Objekt.
    - Für [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      übergeben Sie ein [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams)-Objekt.
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac): übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)-Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams)-Objekt.
    - Für [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519): übergeben Sie den String `Ed25519` oder ein Objekt der Form `{ name: "Ed25519" }`.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519): übergeben Sie den String `X25519` oder ein Objekt der Form `{ name: "X25519" }`.

- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) zu exportieren.
- `keyUsages`

  - : Ein {{jsxref("Array")}} von Zeichenfolgen, die angeben, was mit dem neu generierten Schlüssel gemacht werden kann. Mögliche Werte für Array-Elemente sind:

    - `encrypt`
      - : Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`
      - : Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`
      - : Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`
      - : Der Schlüssel kann verwendet werden, um Signaturen zu [überprüfen](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`
      - : Der Schlüssel kann verwendet werden, um [einen neuen Schlüssel abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveKey).
    - `deriveBits`
      - : Der Schlüssel kann verwendet werden, um [Bits abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`
      - : Der Schlüssel kann verwendet werden, um einen [Schlüssel zu verpacken](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`
      - : Der Schlüssel kann verwendet werden, um einen [Schlüssel zu entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) (für symmetrische Algorithmen) oder einem [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) (für Public-Key-Algorithmen) erfüllt wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgende Ausnahme auftritt:

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ergebnis ein [`CryptoKey`](/de/docs/Web/API/CryptoKey) vom Typ `secret` oder `private` ist, aber `keyUsages` leer oder für den Algorithmustyp ungültig ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ergebnis ein [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) ist und sein `privateKey.usages`-Attribut leer oder für den Algorithmustyp ungültig ist.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html).

### RSA-Schlüsselpaar-Generierung

Dieser Code generiert ein RSA-OAEP Verschlüsselungs-Schlüsselpaar.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256",
  },
  true,
  ["encrypt", "decrypt"],
);
```

### Elliptische-Kurve-Schlüsselpaar-Generierung

Dieser Code generiert ein ECDSA-Signaturschlüsselpaar.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "ECDSA",
    namedCurve: "P-384",
  },
  true,
  ["sign", "verify"],
);
```

### HMAC-Schlüsselerzeugung

Dieser Code generiert einen HMAC-Signaturschlüssel.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: { name: "SHA-512" },
  },
  true,
  ["sign", "verify"],
);
```

### AES-Schlüsselerzeugung

Dieser Code generiert einen AES-GCM Verschlüsselungsschlüssel.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"],
);
```

### Ed25519-Schlüsselerzeugung

Dieser Code generiert ein Ed25519 Signatur-Schlüsselpaar.
Er stammt aus [diesem Quellcode auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ed25519.js), den Sie [hier live ausführen können](https://mdn.github.io/dom-examples/web-crypto/sign-verify/).

```html hidden
<input id="run-button" type="button" value="Run" />
<pre id="log">Click "Run" button</pre>
```

```css hidden
#log {
  height: 170px;
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

Der Code zur Erzeugung eines Schlüsselpaares mit dem `Ed25519`-Algorithmus und zum Protokollieren der Informationen in jedem Schlüssel wird unten gezeigt.
Beachten Sie, dass der Code in einem `try..catch`-Block ausgeführt wird, da nicht alle Browser diesen Algorithmus unterstützen.

Das JavaScript holt zuerst die `#sign-button` und `#message` {{HTMLElement("input")}} Elemente und fügt dann einen Listener für das `click` Ereignis auf dem Button hinzu.
Der Ereignishandler löscht das Protokoll und führt die anderen Operationen aus, indem er den Inhalt des `<input>` Elements übergibt.

```js
const button = document.querySelector("#run-button");
const input = document.querySelector("#log");

button.addEventListener("click", () => {
  // Clear log
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Run test
  test();
});

async function test() {
  try {
    // Create a key pair and use destructuring assignment to assign to variables
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "Ed25519",
      },
      true,
      ["sign", "verify"],
    );

    // Log the properties of the keys
    log(`publicKey: ${publicKey}`);
    log(` type: ${publicKey.type}`);
    log(` extractable: ${publicKey.extractable}`);
    log(` algorithm: ${JSON.stringify(publicKey.algorithm)}`);
    log(` usages: ${publicKey.usages}`);
    log(`privateKey: ${privateKey}`);
    log(` type: ${privateKey.type}`);
    log(` extractable: ${privateKey.extractable}`);
    log(` algorithm: ${JSON.stringify(privateKey.algorithm)}`);
    log(` usages: ${privateKey.usages}`);
  } catch (error) {
    log(error);
  }
}
```

#### Ergebnis

Die Informationen zu den erstellten Schlüsseln werden unten protokolliert (oder eine Fehlermeldung, wenn der Browser das Erstellen des Schlüssels nicht zulässt).

{{EmbedLiveSample("Ed25519", "100%", "240px")}}

### X25519-Schlüsselerzeugung

Dieser Code generiert ein X25519-Öffentliches und Privates Schlüsselpaar, das in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) zum Erstellen eines gemeinsamen Schlüssels oder in [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) zum Erstellen eines gemeinsamen Geheimnisses verwendet werden kann.

```html hidden
<input id="run-button" type="button" value="Run" />
<pre id="log">Click "Run" button</pre>
```

```css hidden
#log {
  height: 170px;
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

Der Code zur Erzeugung eines Schlüsselpaares mit dem `X25519`-Algorithmus und zum Protokollieren der Informationen in jedem Schlüssel wird unten gezeigt.
Beachten Sie, dass der Code in einem `try..catch`-Block ausgeführt wird, da nicht alle Browser diesen Algorithmus unterstützen.

Das JavaScript holt zuerst die `#run-button` und `#log` {{HTMLElement("input")}} Elemente und fügt dann einen Listener für das `click` Ereignis auf dem Button hinzu.
Der Ereignishandler löscht das Protokoll, generiert ein X25519-Schlüsselpaar und protokolliert einige seiner Eigenschaften.

```js
const button = document.querySelector("#run-button");
const input = document.querySelector("#log");

button.addEventListener("click", () => {
  // Clear log
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Run test
  test();
});

async function test() {
  try {
    // Create a key pair and use destructuring assignment to assign to variables
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      true,
      ["deriveKey", "deriveBits"],
    );

    // Log the properties of the keys
    log(`publicKey: ${publicKey}`);
    log(` type: ${publicKey.type}`);
    log(` extractable: ${publicKey.extractable}`);
    log(` algorithm: ${JSON.stringify(publicKey.algorithm)}`);
    log(` usages: ${publicKey.usages}`);
    log(`privateKey: ${privateKey}`);
    log(` type: ${privateKey.type}`);
    log(` extractable: ${privateKey.extractable}`);
    log(` algorithm: ${JSON.stringify(privateKey.algorithm)}`);
    log(` usages: ${privateKey.usages}`);
  } catch (error) {
    log(error);
  }
}
```

#### Ergebnis

Die Informationen zu den erstellten Schlüsseln werden unten protokolliert (oder eine Fehlermeldung, wenn der Browser das Erstellen des Schlüssels nicht zulässt).

{{EmbedLiveSample("X25519", "100%", "240px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Empfehlungen zur Länge kryptografischer Schlüssel](https://www.keylength.com/).
- [NIST Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final).
