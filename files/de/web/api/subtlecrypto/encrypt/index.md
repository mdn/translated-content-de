---
title: "SubtleCrypto: encrypt() Methode"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`encrypt()`**-Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces verschlüsselt Daten.

Sie nimmt als Argumente einen {{Glossary("key", "Schlüssel")}} zur Verschlüsselung, einige algorithmusspezifische Parameter und die zu verschlüsselnden Daten (auch als "Klartext" bekannt).
Sie gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten (auch als "Chiffretext" bekannt) erfüllt wird.

## Syntax

```js-nolint
encrypt(algorithm, key, data)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Algorithmus](#unterstützte_algorithmen) und gegebenenfalls zusätzliche Parameter definiert:
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, geben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt an.
    - Um [AES-CTR](#aes-ctr) zu verwenden, geben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt an.
    - Um [AES-CBC](#aes-cbc) zu verwenden, geben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt an.
    - Um [AES-GCM](#aes-gcm) zu verwenden, geben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt an.

- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den Schlüssel enthält, der für die Verschlüsselung verwendet werden soll.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}},
    der die zu verschlüsselnden Daten enthält (auch bekannt als der {{Glossary("plaintext", "Klartext")}}).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den "Chiffretext" enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z.B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlgeschlagen ist (z.B. Algorithmusparameter mit ungültigen Größen oder AES-GCM Klartext, der länger als 2<sup>39</sup>−256 Bytes ist).

## Unterstützte Algorithmen

Die Web Crypto API bietet vier Algorithmen, die die `encrypt()` und `decrypt()` Operationen unterstützen.

Einer dieser Algorithmen — RSA-OAEP — ist ein {{Glossary("public-key_cryptography", "Public-Key-Kryptosystem")}}.

Die anderen drei Verschlüsselungsalgorithmen hier sind alle {{Glossary("Symmetric-key_cryptography", "symmetrische Algorithmen")}}, und sie basieren alle auf demselben zugrunde liegenden Verschlüsselungsverfahren, AES (Advanced Encryption Standard).
Der Unterschied zwischen ihnen liegt im {{Glossary("Block_cipher_mode_of_operation", "Modus")}}.
Die Web Crypto API unterstützt drei verschiedene AES-Modi:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

Es wird dringend empfohlen, _authentifizierte Verschlüsselung_ zu verwenden, die Überprüfungen enthält, ob der Chiffretext nicht von einem Angreifer verändert wurde.
Authentifizierung hilft dabei, sich gegen _Chiffretext ausgewählte Angriffe_ zu schützen, bei denen ein Angreifer das System bitten kann, beliebige Nachrichten zu entschlüsseln und das Ergebnis zu verwenden, um Informationen über den geheimen Schlüssel abzuleiten.
Während es möglich ist, CTR und CBC Modi manuell um Authentifizierung zu erweitern, bieten diese Modi standardmäßig keine Authentifizierung und bei manueller Implementierung kann man leicht kleine, aber schwerwiegende Fehler machen.
GCM bietet eingebaute Authentifizierung und wird aus diesem Grund oft über die anderen beiden AES-Modi empfohlen.

### RSA-OAEP

Das RSA-OAEP Public-Key-Verschlüsselungssystem wird in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

### AES-CTR

Dies stellt AES im Counter Mode dar, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

AES ist ein Blockchiffre, was bedeutet, dass es die Nachricht in Blöcke unterteilt und diese Blockweise verschlüsselt.
Im CTR-Modus wird jedes Mal, wenn ein Block der Nachricht verschlüsselt wird, ein zusätzlicher Datenblock eingebracht. Dieser zusätzliche Block wird "Zählerblock" genannt.

Ein gegebener Wert eines Zählerblocks darf nicht mehr als einmal mit demselben Schlüssel verwendet werden:

- Bei einer Nachricht mit _n_ Blöcken muss für jeden Block ein anderer Zählerblock verwendet werden.
- Wenn derselbe Schlüssel zum Verschlüsseln mehrerer Nachrichten verwendet wird, muss ein anderer Zählerblock für alle Blöcke über alle Nachrichten hinweg verwendet werden.

Typischerweise wird dies erreicht, indem der anfängliche Zählerblockwert in zwei verkettete Teile aufgeteilt wird:

- Eine [Nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) (das heißt, eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block in der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht zu verschlüsseln ist, wird eine neue Nonce gewählt. Nonces müssen nicht geheim sein, dürfen aber nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal erhöht, wenn ein Block verschlüsselt wird.

Im Wesentlichen: Die Nonce sollte sicherstellen, dass Zählerblöcke nicht von einer Nachricht zur nächsten wiederverwendet werden, während der Zähler sicherstellen sollte, dass Zählerblöcke nicht innerhalb einer einzelnen Nachricht wiederverwendet werden.

> [!NOTE]
> Weitere Informationen finden Sie in [Anhang B des NIST SP800-38A Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).

### AES-CBC

Dies stellt AES im Cipher Block Chaining Mode dar, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

### AES-GCM

Dies stellt AES im Galois/Counter Mode dar, wie in [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert.

Ein wesentlicher Unterschied zwischen diesem Modus und den anderen ist, dass GCM ein "authentifizierter" Modus ist, was bedeutet, dass er prüft, ob der Chiffretext von einem Angreifer verändert wurde.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) ausprobieren.

### RSA-OAEP

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit RSA-OAEP. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-oaep #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(publicKey) {
  let encoded = getMessageEncoding();
  return window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded,
  );
}
```

### AES-CTR

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im AES-CTR-Modus.
[Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-ctr #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // counter will be needed for decryption
  counter = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64,
    },
    key,
    encoded,
  );
}
```

```js
let iv = window.crypto.getRandomValues(new Uint8Array(16));
let key = window.crypto.getRandomValues(new Uint8Array(16));
let data = new Uint8Array(12345);
// crypto functions are wrapped in promises so we have to use await and make sure the function that
// contains this code is an async function
// encrypt function wants a cryptokey object
const keyEncoded = await window.crypto.subtle.importKey(
  "raw",
  key.buffer,
  "AES-CTR",
  false,
  ["encrypt", "decrypt"],
);
const encryptedContent = await window.crypto.subtle.encrypt(
  {
    name: "AES-CTR",
    counter: iv,
    length: 128,
  },
  keyEncoded,
  data,
);

// Uint8Array
console.log(encryptedContent);
```

### AES-CBC

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im AES-CBC-Modus.
[Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-cbc #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // iv will be needed for decryption
  iv = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt({ name: "AES-CBC", iv }, key, encoded);
}
```

### AES-GCM

Dieser Code holt den Inhalt eines Textfeldes, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im AES-GCM-Modus.
[Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-gcm #message");
  const message = messageBox.value;
  const enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  const encoded = getMessageEncoding();
  // iv will be needed for decryption
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert den CTR-Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert den CBC-Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert den GCM-Modus.
