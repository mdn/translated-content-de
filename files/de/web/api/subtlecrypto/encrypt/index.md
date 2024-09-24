---
title: "SubtleCrypto: encrypt() Methode"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`encrypt()`** Methode der {{domxref("SubtleCrypto")}} Schnittstelle verschlüsselt Daten.

Sie nimmt als Argumente einen {{glossary("key", "Schlüssel")}}, um zu verschlüsseln, einige algorithmenspezifische Parameter, und die zu verschlüsselnden Daten (auch bekannt als "Klartext").
Sie gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten (auch bekannt als "Geheimtext") erfüllt wird.

## Syntax

```js-nolint
encrypt(algorithm, key, data)
```

### Parameter

- `algorithm`

  - : Ein Objekt, das den [Algorithmus](#unterstützte_algorithmen), der verwendet werden soll, und alle zusätzlichen Parameter, falls erforderlich, spezifiziert:
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, übergeben Sie ein {{domxref("RsaOaepParams")}} Objekt.
    - Um [AES-CTR](#aes-ctr) zu verwenden, übergeben Sie ein {{domxref("AesCtrParams")}} Objekt.
    - Um [AES-CBC](#aes-cbc) zu verwenden, übergeben Sie ein {{domxref("AesCbcParams")}} Objekt.
    - Um [AES-GCM](#aes-gcm) zu verwenden, übergeben Sie ein {{domxref("AesGcmParams")}} Objekt.

- `key`
  - : Ein {{domxref("CryptoKey")}}, das den zu verwendenden Schlüssel für die Verschlüsselung enthält.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}},
    das die zu verschlüsselnden Daten enthält (auch bekannt als {{glossary("plaintext", "Klartext")}}).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den "Geheimtext" enthält.

### Ausnahmen

Das Promise wird zurückgewiesen, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z.B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlschlägt (z.B. Algorithmusparameter ungültiger Größen oder AES-GCM-Klartext länger als 2<sup>39</sup>—256 Bytes).

## Unterstützte Algorithmen

Die Web Crypto API bietet vier Algorithmen, die die `encrypt()` und `decrypt()` Operationen unterstützen.

Einer dieser Algorithmen — RSA-OAEP — ist ein {{Glossary("public-key cryptosystem", "Öffentlicher Schlüssel Kryptosystem")}}.

Die anderen drei hier aufgeführten Verschlüsselungsalgorithmen sind alle {{Glossary("Symmetric-key cryptography", "symmetrische Algorithmen")}}, und sie basieren alle auf dem gleichen zugrunde liegenden Chiffre, AES (Advanced Encryption Standard).
Der Unterschied zwischen ihnen ist der {{Glossary("Block cipher mode of operation", "Modus")}}.
Die Web Crypto API unterstützt drei verschiedene AES Modi:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

Es wird dringend empfohlen, _authentifizierte Verschlüsselung_ zu verwenden, die umfasst Überprüfungen, dass der Geheimtext nicht von einem Angreifer verändert wurde.
Authentifizierung hilft, sich gegen _chosen-ciphertext_ Angriffe zu schützen, bei denen ein Angreifer das System bitten kann, beliebige Nachrichten zu entschlüsseln, und das Ergebnis verwendet, um Informationen über den
geheimen Schlüssel zu erfahren.
Während es möglich ist, CTR und CBC Modi manuell Authentifizierung hinzuzufügen, bieten sie diese nicht standardmäßig an, und bei der Implementierung kann man leicht kleine, aber schwerwiegende Fehler machen.
GCM bietet eingebaute Authentifizierung, und aus diesem Grund wird es oft gegenüber den anderen beiden AES Modi empfohlen.

### RSA-OAEP

Das RSA-OAEP Verschlüsselungssystem mit öffentlichem Schlüssel ist in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

### AES-CTR

Dies stellt AES im Counter Mode dar, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

AES ist ein Blockchiffre, was bedeutet, dass es die Nachricht in Blöcke aufteilt und diese Blockweise verschlüsselt.
Im CTR-Modus wird jedes Mal, wenn ein Block der Nachricht verschlüsselt wird, ein zusätzlicher Datenblock eingemischt. Dieser zusätzliche Block wird als "Zählerblock" bezeichnet.

Ein gegebener Zählerblockwert darf niemals mehr als einmal mit demselben Schlüssel verwendet werden:

- Bei einer Nachricht des Blocks mit der Länge _n_ muss für jeden Block ein anderer Zählerblock verwendet werden.
- Wenn derselbe Schlüssel verwendet wird, um mehr als eine Nachricht zu verschlüsseln, muss ein anderer Zählerblock für alle Blöcke in allen Nachrichten verwendet werden.

Üblicherweise wird dies erreicht, indem der anfängliche Zählerblockwert in zwei verkettete Teile aufgeteilt wird:

- Ein [nonce](https://de.wikipedia.org/wiki/Kryptographische_Nonce) (d.h. eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block in der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird ein neuer Nonce ausgewählt. Nonces müssen nicht geheim sein, aber sie dürfen nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal inkrementiert, wenn ein Block verschlüsselt wird.

Im Wesentlichen: Der Nonce sollte sicherstellen, dass Zählerblöcke von einer Nachricht zur nächsten nicht wiederverwendet werden, während der Zähler sicherstellen sollte, dass Zählerblöcke innerhalb einer einzelnen Nachricht nicht wiederverwendet werden.

> [!NOTE]
> Weitere Informationen finden Sie in [Anhang B des NIST SP800-38A Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).

### AES-CBC

Dies stellt AES im Cipher Block Chaining Mode dar, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

### AES-GCM

Dies stellt AES im Galois/Counter Mode dar, wie in [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert.

Ein wesentlicher Unterschied zwischen diesem Modus und den anderen ist, dass GCM ein "authentifizierter" Modus ist, was bedeutet, dass er Überprüfungen umfasst, dass der Geheimtext nicht von einem Angreifer verändert wurde.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) auf GitHub ausprobieren.

### RSA-OAEP

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert es zur Verschlüsselung und verschlüsselt
es mit RSA-OAEP. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert es zur Verschlüsselung und verschlüsselt es im CTR-Modus.
[Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

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

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert es zur Verschlüsselung und verschlüsselt es im CBC-Modus.
[Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

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

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert es zur Verschlüsselung und verschlüsselt es im GCM-Modus.
[Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

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

- {{domxref("SubtleCrypto.decrypt()")}}.
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CTR Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CBC Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert GCM Modus.
