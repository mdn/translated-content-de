---
title: "SubtleCrypto: encrypt() Methode"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`encrypt()`** Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces verschlüsselt Daten.

Sie erhält als Argumente einen {{Glossary("key", "Schlüssel")}} zum Verschlüsseln, einige algorithmusspezifische Parameter und die zu verschlüsselnden Daten (auch als "Klartext" bekannt).
Sie gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten (auch als "Chiffretext" bekannt) erfüllt wird.

## Syntax

```js-nolint
encrypt(algorithm, key, data)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Algorithmus](#unterstützte_algorithmen) und gegebenenfalls zusätzliche Parameter angibt:
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, übergeben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt.
    - Um [AES-CTR](#aes-ctr) zu verwenden, übergeben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt.
    - Um [AES-CBC](#aes-cbc) zu verwenden, übergeben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt.
    - Um [AES-GCM](#aes-gcm) zu verwenden, übergeben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt.

- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den Schlüssel enthält, der für die Verschlüsselung verwendet werden soll.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    das die zu verschlüsselnden Daten enthält (auch bekannt als {{Glossary("plaintext", "Klartext")}}).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den "Chiffretext" enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z.B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlgeschlagen ist (z.B. Algorithmusparameter mit ungültigen Größen oder AES-GCM-Klartext, der länger als 2<sup>39</sup>−256 Bytes ist).

## Unterstützte Algorithmen

Die Web Crypto API stellt vier Algorithmen bereit, die die `encrypt()` und `decrypt()` Operationen unterstützen.

Einer dieser Algorithmen – RSA-OAEP – ist ein {{Glossary("public-key_cryptography", "Public-Key-Kryptosystem")}}.

Die anderen drei Verschlüsselungsalgorithmen hier sind alle {{Glossary("Symmetric-key_cryptography", "symmetrische Algorithmen")}}, und sie basieren alle auf demselben zugrunde liegenden Chiffre, AES (Advanced Encryption Standard).
Der Unterschied zwischen ihnen ist der {{Glossary("Block_cipher_mode_of_operation", "Modus")}}.
Die Web Crypto API unterstützt drei verschiedene AES-Modi:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

Es wird dringend empfohlen, _authentifizierte Verschlüsselung_ zu verwenden, die überprüft, dass der Chiffretext nicht von einem Angreifer verändert wurde.
Authentifizierung hilft, sich gegen _Chosen-Ciphertext_-Angriffe zu schützen, bei denen ein Angreifer das System bitten kann, beliebige Nachrichten zu entschlüsseln, und das Ergebnis verwenden kann, um Informationen über den geheimen Schlüssel abzuleiten.
Während es möglich ist, Authentifizierung zu den CTR- und CBC-Modi hinzuzufügen, bieten sie diese nicht standardmäßig an, und bei der manuellen Implementierung kann man leicht kleine, aber schwerwiegende Fehler machen.
GCM bietet eine eingebaute Authentifizierung, und aus diesem Grund wird es oft gegenüber den anderen beiden AES-Modi empfohlen.

### RSA-OAEP

Das RSA-OAEP-Public-Key-Verschlüsselungssystem ist in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

### AES-CTR

Dies stellt AES im Counter Mode dar, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

AES ist ein Blockchiffre, was bedeutet, dass er die Nachricht in Blöcke aufteilt und sie blockweise verschlüsselt.
Im CTR-Modus wird jedes Mal, wenn ein Nachrichtenblock verschlüsselt wird, ein zusätzlicher Datenblock hinzugefügt. Dieser zusätzliche Block wird als der "Counter Block" bezeichnet.

Ein gegebener Counter Block Wert darf niemals mehr als einmal mit demselben Schlüssel verwendet werden:

- Bei einer Nachricht von _n_ Blöcken Länge muss für jeden Block ein anderer Counter Block verwendet werden.
- Wenn derselbe Schlüssel verwendet wird, um mehr als eine Nachricht zu verschlüsseln, muss ein anderer Counter Block für alle Blöcke über alle Nachrichten hinweg verwendet werden.

In der Regel wird dies erreicht, indem der anfängliche Counter Block Wert in zwei verkettete Teile aufgeteilt wird:

- Ein {{Glossary("Nonce", "Nonce")}} (d.h. eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird ein neuer Nonce gewählt. Nonces müssen nicht geheim sein, dürfen aber nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal inkrementiert, wenn ein Block verschlüsselt wird.

Im Wesentlichen: Der Nonce sollte sicherstellen, dass Counter Blocks nicht von einer Nachricht zur nächsten wiederverwendet werden, während der Zähler sicherstellen sollte, dass Counter Blocks nicht innerhalb einer einzelnen Nachricht wiederverwendet werden.

> [!NOTE]
> Weitere Informationen finden Sie in [Anhang B des NIST SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).

### AES-CBC

Dies stellt AES im Cipher Block Chaining Mode dar, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

### AES-GCM

Dies stellt AES im Galois/Counter Mode dar, wie in [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert.

Ein wesentlicher Unterschied zwischen diesem Modus und den anderen ist, dass GCM ein "authentifizierter" Modus ist, was bedeutet, dass er überprüft, dass der Chiffretext nicht von einem Angreifer verändert wurde.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html).

### RSA-OAEP

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt
ihn mit RSA-OAEP. [Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im CTR-Modus mit AES.
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

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im CBC-Modus mit AES.
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
  return window.crypto.subtle.encrypt({ name: "AES-CBC", iv }, key, encoded);
}
```

### AES-GCM

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn im GCM-Modus mit AES.
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
