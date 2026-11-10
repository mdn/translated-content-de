---
title: "SubtleCrypto: Methode generateKey()"
short-title: generateKey()
slug: Web/API/SubtleCrypto/generateKey
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die Methode **`generateKey()`** der Schnittstelle [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) wird verwendet, um einen neuen Schlüssel (für symmetrische Algorithmen) oder ein Schlüsselpaar (für Public-Key-Algorithmen) zu erzeugen.

## Syntax

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den Typ des zu erzeugenden Schlüssels festlegt und zusätzliche algorithmusspezifische Parameter bereitstellt.
    - Für [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      Übergeben Sie ein [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams)-Objekt.
    - Für [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      Übergeben Sie ein [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams)-Objekt.
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac): Übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)-Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      Übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams)-Objekt.
    - Für [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519): Übergeben Sie die Zeichenfolge `Ed25519` oder ein Objekt der Form `{ name: "Ed25519" }`.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519): Übergeben Sie die Zeichenfolge `X25519` oder ein Objekt der Form `{ name: "X25519" }`.

- `extractable`
  - : Ein boolescher Wert, der angibt, ob der Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) exportiert werden kann.
    Beachten Sie, dass beim Erzeugen asymmetrischer Schlüsselpaare (wie RSA oder ECDSA) der Parameter `extractable` bestimmt, ob der private Schlüssel exportiert werden kann; der öffentliche Schlüssel ist immer exportierbar.
- `keyUsages`
  - : Ein {{jsxref("Array")}} von Zeichenfolgen, die angeben, wofür der neu erzeugte Schlüssel verwendet werden kann.
    Mögliche Werte für die Array-Elemente sind:
    - `encrypt`
      - : Der Schlüssel kann zum [Verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt) von Nachrichten verwendet werden.
    - `decrypt`
      - : Der Schlüssel kann zum [Entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt) von Nachrichten verwendet werden.
    - `sign`
      - : Der Schlüssel kann zum [Signieren](/de/docs/Web/API/SubtleCrypto/sign) von Nachrichten verwendet werden.
    - `verify`
      - : Der Schlüssel kann zum [Überprüfen](/de/docs/Web/API/SubtleCrypto/verify) von Signaturen verwendet werden.
    - `deriveKey`
      - : Der Schlüssel kann zum [Ableiten eines neuen Schlüssels](/de/docs/Web/API/SubtleCrypto/deriveKey) verwendet werden.
    - `deriveBits`
      - : Der Schlüssel kann zum [Ableiten von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
    - `wrapKey`
      - : Der Schlüssel kann zum [Verpacken eines Schlüssels](/de/docs/Web/API/SubtleCrypto/wrapKey) verwendet werden.
    - `unwrapKey`
      - : Der Schlüssel kann zum [Entpacken eines Schlüssels](/de/docs/Web/API/SubtleCrypto/unwrapKey) verwendet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) (für symmetrische Algorithmen) oder einem [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) (für Public-Key-Algorithmen) erfüllt wird.

### Ausnahmen

Das Promise wird zurückgewiesen, wenn eine der folgenden Ausnahmen auftritt:

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ergebnis ein [`CryptoKey`](/de/docs/Web/API/CryptoKey) vom Typ `secret` oder `private` ist, aber `keyUsages` leer oder für den Algorithmustyp ungültig ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ergebnis ein [`CryptoKeyPair`](/de/docs/Web/API/CryptoKeyPair) ist und dessen Attribut `privateKey.usages` leer oder für den Algorithmustyp ungültig ist.

## Beispiele

> [!NOTE]
> Sie können die [funktionsfähigen Beispiele](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) auf GitHub ausprobieren.

### Erzeugen eines RSA-Schlüsselpaars

Dieser Code erzeugt ein RSA-OAEP-Schlüsselpaar für die Verschlüsselung.
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

### Erzeugen eines Schlüsselpaares mit elliptischen Kurven

Dieser Code erzeugt ein ECDSA-Schlüsselpaar zum Signieren.
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

### Erzeugen eines HMAC-Schlüssels

Dieser Code erzeugt einen HMAC-Schlüssel zum Signieren.
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

### Erzeugen eines AES-Schlüssels

Dieser Code erzeugt einen AES-GCM-Schlüssel für die Verschlüsselung.
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

### Erzeugen eines Ed25519-Schlüssels

Dieser Code erzeugt ein Ed25519-Schlüsselpaar zum Signieren.
Er basiert auf [diesem Quellcode auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ed25519.js), den Sie [hier direkt ausführen können](https://mdn.github.io/dom-examples/web-crypto/sign-verify/).

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

Der folgende Code zeigt, wie ein Schlüsselpaar mit dem Algorithmus `Ed25519` erzeugt und die Informationen zu jedem Schlüssel protokolliert werden.
Beachten Sie, dass der Code in einem `try..catch`-Block ausgeführt wird, da nicht alle Browser diesen Algorithmus unterstützen.

Das JavaScript ruft zunächst die {{HTMLElement("input")}}-Elemente `#sign-button` und `#message` ab und fügt dann dem Button einen Listener für das `click`-Ereignis hinzu.
Der Event-Handler leert das Protokoll und führt die weiteren Operationen mit dem Inhalt des `<input>`-Elements aus.

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

Die Informationen zu den erzeugten Schlüsseln werden unten protokolliert (oder eine Fehlermeldung, wenn der Browser das Erzeugen des Schlüssels nicht zulässt).

{{EmbedLiveSample("ed25519_key_generation", "100%", "240px")}}

### Erzeugen eines X25519-Schlüssels

Dieser Code erzeugt ein öffentliches und ein privates X25519-Schlüsselpaar, das in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) zum Erzeugen eines gemeinsamen Schlüssels oder in [`SubtleCrypto.deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits) zum Erzeugen eines gemeinsamen Geheimnisses verwendet werden kann.

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

Der folgende Code zeigt, wie ein Schlüsselpaar mit dem Algorithmus `X25519` erzeugt und die Informationen zu jedem Schlüssel protokolliert werden.
Beachten Sie, dass der Code in einem `try..catch`-Block ausgeführt wird, da nicht alle Browser diesen Algorithmus unterstützen.

Das JavaScript ruft zunächst die {{HTMLElement("input")}}-Elemente `#run-button` und `#log` ab und fügt dann dem Button einen Listener für das `click`-Ereignis hinzu.
Der Event-Handler leert das Protokoll, erzeugt ein X25519-Schlüsselpaar und protokolliert einige seiner Eigenschaften.

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

Die Informationen zu den erzeugten Schlüsseln werden unten protokolliert (oder eine Fehlermeldung, wenn der Browser das Erzeugen des Schlüssels nicht zulässt).

{{EmbedLiveSample("x25519_key_generation", "100%", "240px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Empfehlungen zur Länge kryptografischer Schlüssel](https://www.keylength.com/).
- [NIST: Umstellung bei der Verwendung kryptografischer Algorithmen und Schlüssellängen](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final).
