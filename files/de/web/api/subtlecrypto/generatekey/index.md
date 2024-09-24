---
title: "SubtleCrypto: generateKey() Methode"
short-title: generateKey()
slug: Web/API/SubtleCrypto/generateKey
l10n:
  sourceCommit: b5d8d9a015a58ad0403bbffe931594193396ca87
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`generateKey()`** Methode der {{domxref("SubtleCrypto")}} Schnittstelle wird verwendet, um einen neuen Schlüssel (für symmetrische Algorithmen) oder ein Schlüsselpaar (für Public-Key-Algorithmen) zu generieren.

## Syntax

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das die Art des zu generierenden Schlüssels definiert und zusätzliche, algorithmspezifische Parameter bereitstellt.

    - Für [RSASSA-PKCS1-v1_5](/de/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      oder [RSA-OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      Übergeben Sie ein [`RsaHashedKeyGenParams`](/de/docs/Web/API/RsaHashedKeyGenParams) Objekt.
    - Für [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      Übergeben Sie ein [`EcKeyGenParams`](/de/docs/Web/API/EcKeyGenParams) Objekt.
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac): Übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams) Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      Übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams) Objekt.
    - Für [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519): Übergeben Sie den String `Ed25519` oder ein Objekt der Form `{ name: "Ed25519" }`.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519): Übergeben Sie den String `X25519` oder ein Objekt der Form `{ name: "X25519" }`.

- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mit {{domxref("SubtleCrypto.exportKey()")}} oder {{domxref("SubtleCrypto.wrapKey()")}} zu exportieren.
- `keyUsages`

  - : Ein {{jsxref("Array")}} von Strings, die angeben, was mit dem neu generierten Schlüssel gemacht werden kann.
    Mögliche Werte für Arrayelemente sind:

    - `encrypt`
      - : Der Schlüssel kann verwendet werden, um Nachrichten zu {{domxref("SubtleCrypto.encrypt()", "verschlüsseln", "", "nocode")}}.
    - `decrypt`
      - : Der Schlüssel kann verwendet werden, um Nachrichten zu {{domxref("SubtleCrypto.decrypt()", "entschlüsseln", "", "nocode")}}.
    - `sign`
      - : Der Schlüssel kann verwendet werden, um Nachrichten zu {{domxref("SubtleCrypto.sign()", "signieren", "", "nocode")}}.
    - `verify`
      - : Der Schlüssel kann verwendet werden, um Signaturen zu {{domxref("SubtleCrypto.verify()", "verifizieren", "", "nocode")}}.
    - `deriveKey`
      - : Der Schlüssel kann verwendet werden, um einen neuen Schlüssel in {{domxref("SubtleCrypto.deriveKey()", "ableiten eines neuen Schlüssels", "", "nocode")}}.
    - `deriveBits`
      - : Der Schlüssel kann verwendet werden, um Bits in {{domxref("SubtleCrypto.deriveBits()", "ableiten von Bits", "", "nocode")}}.
    - `wrapKey`
      - : Der Schlüssel kann verwendet werden, um einen Schlüssel zu {{domxref("SubtleCrypto.wrapKey()", "verpacken eines Schlüssels", "", "nocode")}}.
    - `unwrapKey`
      - : Der Schlüssel kann verwendet werden, um einen Schlüssel zu {{domxref("SubtleCrypto.unwrapKey()", "entpacken eines Schlüssels", "", "nocode")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("CryptoKey")}} (für symmetrische Algorithmen) oder einem {{domxref("CryptoKeyPair")}} (für Public-Key-Algorithmen) erfüllt wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgende Ausnahme auftritt:

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Ergebnis ein {{domxref("CryptoKey")}} vom Typ `secret` oder `private` ist, aber `keyUsages` leer oder ungültig für den Algorithmustyp ist.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Ergebnis ein {{domxref("CryptoKeyPair")}} ist und sein `privateKey.usages` Attribut leer oder ungültig für den Algorithmustyp ist.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) ausprobieren.

### RSA-Schlüsselpaar-Generierung

Dieser Code generiert ein RSA-OAEP-Verschlüsselungsschlüsselpaar.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

### Elliptische Kurve Schlüsselpaar-Generierung

Dieser Code generiert ein ECDSA-Signaturschlüsselpaar.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

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
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

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

Dieser Code generiert einen AES-GCM-Verschlüsselungsschlüssel.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

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

Dieser Code generiert ein Ed25519-Signaturschlüsselpaar.
Es wird von diesem [Quellcode auf GitHub](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ed25519.js) abgeleitet, den Sie [hier live ausführen können](https://mdn.github.io/dom-examples/web-crypto/sign-verify/).

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

Der unten gezeigte Code erzeugt ein Schlüsselpaar mit dem `Ed25519` Algorithmus und protokolliert die Informationen zu jedem Schlüssel.
Beachten Sie, dass der Code in einem `try..catch` Block ausgeführt wird, da nicht alle Browser diesen Algorithmus unterstützen.

Das JavaScript erhält zuerst die `#sign-button` und `#message` {{HTMLElement("input")}} Elemente und fügt dann einen Listener für das `click` Ereignis auf der Schaltfläche hinzu.
Der Ereignishandler löscht das Logbuch und führt die anderen Vorgänge aus, indem er den Inhalt des `<input>` Elements übergibt.

```js
const button = document.querySelector("#run-button");
const input = document.querySelector("#log");

button.addEventListener("click", () => {
  // Log löschen
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Test ausführen
  test();
});

async function test() {
  try {
    // Ein Schlüsselpaar erzeugen und die destrukturierende Zuordnung verwenden, um es Variablen zuzuweisen
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "Ed25519",
      },
      true,
      ["sign", "verify"],
    );

    // Protokollieren Sie die Eigenschaften der Schlüssel
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

Die Informationen über die erstellten Schlüssel werden unten protokolliert (oder ein Fehlerstring, falls der Browser den Schlüssel nicht erstellen lässt).

{{EmbedLiveSample("Ed25519", "100%", "240px")}}

### X25519-Schlüsselerzeugung

Dieser Code generiert ein X25519 öffentliches und privates Schlüsselpaar, das in {{domxref("SubtleCrypto.deriveKey()")}} verwendet werden kann, um einen gemeinsamen Schlüssel zu erstellen, oder in {{domxref("SubtleCrypto.deriveBits()")}}, um ein gemeinsames Geheimnis zu erstellen.

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

Der unten gezeigte Code erzeugt ein Schlüsselpaar mit dem `X25519` Algorithmus und protokolliert die Informationen zu jedem Schlüssel.
Beachten Sie, dass der Code in einem `try..catch` Block ausgeführt wird, da nicht alle Browser diesen Algorithmus unterstützen.

Das JavaScript erhält zuerst die `#run-button` und `#log` {{HTMLElement("input")}} Elemente und fügt dann einen Listener für das `click` Ereignis auf der Schaltfläche hinzu.
Der Ereignishandler löscht das Logbuch, generiert ein X25519-Schlüsselpaar und protokolliert einige seiner Eigenschaften.

```js
const button = document.querySelector("#run-button");
const input = document.querySelector("#log");

button.addEventListener("click", () => {
  // Log löschen
  logElement.innerText = "";
  logElement.scrollTop = logElement.scrollHeight;
  // Test ausführen
  test();
});

async function test() {
  try {
    // Ein Schlüsselpaar erzeugen und die destrukturierende Zuordnung verwenden, um es Variablen zuzuweisen
    const { publicKey, privateKey } = await crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      true,
      ["deriveKey", "deriveBits"],
    );

    // Protokollieren Sie die Eigenschaften der Schlüssel
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

Die Informationen über die erstellten Schlüssel werden unten protokolliert (oder ein Fehlerstring, falls der Browser den Schlüssel nicht erstellen lässt).

{{EmbedLiveSample("X25519", "100%", "240px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Empfehlungen zur Schlüssellänge in der Kryptographie](https://www.keylength.com/).
- [NIST Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://csrc.nist.gov/pubs/sp/800/131/a/r2/final).
