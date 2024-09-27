---
title: "SubtleCrypto: encrypt() Methode"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`encrypt()`** Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle verschlüsselt Daten.

Sie nimmt als Argumente einen [Schlüssel](/de/docs/Glossary/key) zum Verschlüsseln, algorithmenspezifische Parameter und die zu verschlüsselnden Daten (auch als "Klartext" bekannt).
Sie gibt ein {{jsxref("Promise")}} zurück, welches mit den verschlüsselten Daten (auch als "Chiffretext" bekannt) erfüllt wird.

## Syntax

```js-nolint
encrypt(algorithm, key, data)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das den [Algorithmus](#unterstützte_algorithmen) angibt, der verwendet werden soll, einschließlich erforderlicher zusätzlicher Parameter:
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt.
    - Um [AES-CTR](#aes-ctr) zu verwenden, übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt.
    - Um [AES-CBC](#aes-cbc) zu verwenden, übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt.
    - Um [AES-GCM](#aes-gcm) zu verwenden, übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt.

- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den zu verwendenden Schlüssel für die Verschlüsselung enthält.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    das die zu verschlüsselnden Daten enthält (auch bekannt als [Klartext](/de/docs/Glossary/plaintext)).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den "Chiffretext" enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z. B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlgeschlagen ist (z. B. algorithmische Parameter ungültiger Größen oder AES-GCM-Klartext länger als 2<sup>39</sup>−256 Bytes).

## Unterstützte Algorithmen

Die Web Crypto API bietet vier Algorithmen, die die `encrypt()` und `decrypt()` Operationen unterstützen.

Einer dieser Algorithmen — RSA-OAEP — ist ein [öffentliches Schlüsselkryptosystem](/de/docs/Glossary/public-key_cryptography).

Die anderen drei Verschlüsselungsalgorithmen hier sind [symmetrische Algorithmen](/de/docs/Glossary/Symmetric-key_cryptography) und basieren alle auf dem gleichen zugrunde liegenden Verschlüsselungsverfahren, AES (Advanced Encryption Standard).
Der Unterschied zwischen ihnen liegt im [Modus](/de/docs/Glossary/Block_cipher_mode_of_operation).
Die Web Crypto API unterstützt drei verschiedene AES-Modi:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

Es wird dringend empfohlen, _authentifizierte Verschlüsselung_ zu verwenden, die Überprüfungen umfasst, dass der Chiffretext nicht von einem Angreifer verändert wurde.
Authentifizierung hilft, Angriffe mit _gewähltem Chiffretext_ abzuwehren, bei denen ein Angreifer das System auffordern kann, beliebige Nachrichten zu entschlüsseln und das Ergebnis zu verwenden, um Informationen über den geheimen Schlüssel abzuleiten.
Auch wenn es möglich ist, CTR- und CBC-Modi manuell mit Authentifizierung zu versehen, bieten sie diese standardmäßig nicht und bei der manuellen Implementierung kann man leicht kleine, aber schwerwiegende Fehler machen.
GCM bietet eingebaute Authentifizierung und wird aus diesem Grund häufig gegenüber den anderen beiden AES-Modi empfohlen.

### RSA-OAEP

Das RSA-OAEP Public-Key-Verschlüsselungssystem ist in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

### AES-CTR

Dies steht für AES im Counter Mode, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

AES ist ein Blockchiffre-Verfahren, was bedeutet, dass es die Nachricht in Blöcke unterteilt und diese blockweise verschlüsselt.
Im CTR-Modus wird jedes Mal, wenn ein Block der Nachricht verschlüsselt wird, ein zusätzlicher Block Daten eingemischt. Dieser zusätzliche Block wird als "Counter Block" bezeichnet.

Ein bestimmter Wert des Counter Blocks darf nie mehr als einmal mit demselben Schlüssel verwendet werden:

- Bei einer Nachricht mit _n_ Blöcken muss für jeden Block ein anderer Counter Block verwendet werden.
- Wenn derselbe Schlüssel verwendet wird, um mehr als eine Nachricht zu verschlüsseln, muss für alle Blöcke über alle Nachrichten hinweg ein anderer Counter Block verwendet werden.

Typischerweise wird dies erreicht, indem der anfängliche Counter Block-Wert in zwei verkettete Teile aufgeteilt wird:

- Eine [Nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) (das heißt, eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block in der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird eine neue Nonce gewählt. Nonces müssen nicht geheim sein, dürfen aber nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal erhöht, wenn ein Block verschlüsselt wird.

Im Wesentlichen soll die Nonce sicherstellen, dass Counter Blocks von einer Nachricht zur nächsten nicht wiederverwendet werden, während der Zähler sicherstellen soll, dass Counter Blocks innerhalb einer einzelnen Nachricht nicht wiederverwendet werden.

> [!NOTE]
> Siehe [Anhang B des NIST SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) für weitere Informationen.

### AES-CBC

Dies steht für AES im Cipher Block Chaining Mode, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

### AES-GCM

Dies steht für AES im Galois/Counter Mode, wie in [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert.

Ein wesentlicher Unterschied zwischen diesem Modus und den anderen besteht darin, dass GCM ein "authentifizierter" Modus ist, was bedeutet, dass er Überprüfungen beinhaltet, dass der Chiffretext nicht von einem Angreifer verändert wurde.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) auf GitHub ausprobieren.

### RSA-OAEP

Dieser Code liest den Inhalt eines Textfelds aus, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit RSA-OAEP. [Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

Dieser Code liest den Inhalt eines Textfelds aus, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im CTR-Modus mit AES.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

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
const key_encoded = await window.crypto.subtle.importKey(
  "raw",
  key.buffer,
  "AES-CTR",
  false,
  ["encrypt", "decrypt"],
);
const encrypted_content = await window.crypto.subtle.encrypt(
  {
    name: "AES-CTR",
    counter: iv,
    length: 128,
  },
  key_encoded,
  data,
);

// Uint8Array
console.log(encrypted_content);
```

### AES-CBC

Dieser Code liest den Inhalt eines Textfelds aus, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im CBC-Modus mit AES.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

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
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv: iv,
    },
    key,
    encoded,
  );
}
```

### AES-GCM

Dieser Code liest den Inhalt eines Textfelds aus, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im GCM-Modus mit AES.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

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
  return window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encoded,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CTR-Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CBC-Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert GCM-Modus.
