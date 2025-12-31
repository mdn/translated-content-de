---
title: "SubtleCrypto: encrypt()-Methode"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: 373b648fd3f8f742aac14180ebe4ab2e07f8dfab
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`encrypt()`**-Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces verschlüsselt Daten.

Sie nimmt als Argumente einen {{Glossary("key", "Schlüssel")}} zur Verschlüsselung, einige algorithmenspezifische Parameter und die zu verschlüsselnden Daten (auch bekannt als "Klartext").
Sie gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten (auch bekannt als "Chiffretext") erfüllt wird.

## Syntax

```js-nolint
encrypt(algorithm, key, data)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Algorithmus](#unterstützte_algorithmen) und gegebenenfalls zusätzliche Parameter spezifiziert:
    - Um [RSA-OAEP](#rsa-oaep) zu verwenden, geben Sie ein [`RsaOaepParams`](/de/docs/Web/API/RsaOaepParams)-Objekt an.
    - Um [AES-CTR](#aes-ctr) zu verwenden, geben Sie ein [`AesCtrParams`](/de/docs/Web/API/AesCtrParams)-Objekt an.
    - Um [AES-CBC](#aes-cbc) zu verwenden, geben Sie ein [`AesCbcParams`](/de/docs/Web/API/AesCbcParams)-Objekt an.
    - Um [AES-GCM](#aes-gcm) zu verwenden, geben Sie ein [`AesGcmParams`](/de/docs/Web/API/AesGcmParams)-Objekt an.

- `key`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), das den Schlüssel für die Verschlüsselung enthält.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}},
    das die zu verschlüsselnden Daten (auch bekannt als der {{Glossary("plaintext", "Klartext")}}) enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, das den "Chiffretext" enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn folgende Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel nicht gültig ist (z.B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlgeschlagen ist (z.B. Algorithmusparameter mit ungültigen Größen oder AES-GCM-Klartext länger als 2<sup>39</sup>−256 Bytes).

## Unterstützte Algorithmen

Die Web Crypto API stellt vier Algorithmen bereit, die die `encrypt()`- und `decrypt()`-Operationen unterstützen.

Einer dieser Algorithmen — RSA-OAEP — ist ein {{Glossary("public-key_cryptography", "Public-Key-Kryptosystem")}}.

Die anderen drei hier aufgeführten Verschlüsselungsalgorithmen sind alle {{Glossary("Symmetric-key_cryptography", "symmetrische Algorithmen")}}, und sie basieren alle auf dem gleichen zugrunde liegenden Chiffre, AES (Advanced Encryption Standard).
Der Unterschied zwischen ihnen ist der {{Glossary("Block_cipher_mode_of_operation", "Modus")}}.
Die Web Crypto API unterstützt drei verschiedene AES-Modi:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

Es wird dringend empfohlen, _authentifizierte Verschlüsselung_ zu verwenden, die überprüft, dass der Chiffretext nicht von einem Angreifer modifiziert wurde.
Authentifizierung hilft, _ausgewählte-Chiffretext_-Angriffe zu verhindern, bei denen ein Angreifer das System auffordern kann, beliebige Nachrichten zu entschlüsseln und das Ergebnis dazu verwenden kann, Informationen über den geheimen Schlüssel zu ziehen.
Während es möglich ist, Authentifizierung zu CTR- und CBC-Modi hinzuzufügen, bieten sie diese standardmäßig nicht an und bei der manuellen Implementierung können leicht kleine, aber schwerwiegende Fehler auftreten.
GCM bietet eingebaute Authentifizierung, und aus diesem Grund wird es oft gegenüber den anderen beiden AES-Modi empfohlen.

### RSA-OAEP

Das RSA-OAEP-Public-Key-Verschlüsselungssystem ist in [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) spezifiziert.

### AES-CTR

Dies repräsentiert AES im Counter Mode, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

AES ist ein Blockchiffre, was bedeutet, dass es die Nachricht in Blöcke aufteilt und diese Block für Block verschlüsselt.
Im CTR-Modus wird jedes Mal, wenn ein Block der Nachricht verschlüsselt wird, ein zusätzlicher Datenblock hinzugefügt. Dieser zusätzliche Block wird als "Counter-Block" bezeichnet.

Ein gegebener Zählerblock-Wert darf mit demselben Schlüssel nie mehr als einmal verwendet werden:

- Angenommen, eine Nachricht ist _n_ Blöcke lang, muss für jeden Block ein anderer Zählerblock verwendet werden.
- Wenn derselbe Schlüssel für mehr als eine Nachricht verwendet wird, muss ein anderer Zählerblock für alle Blöcke über alle Nachrichten hinweg verwendet werden.

Typischerweise wird dies erreicht, indem der initiale Zählerblockwert in zwei verkettete Teile aufgeteilt wird:

- Eine {{Glossary("Nonce", "Nonce")}} (das heißt, eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block in der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird ein neuer Nonce gewählt. Nonces müssen nicht geheim sein, dürfen jedoch nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal erhöht, wenn ein Block verschlüsselt wird.

Im Wesentlichen sollte der Nonce sicherstellen, dass Zählerblöcke nicht von einer Nachricht zur nächsten wiederverwendet werden, während der Zähler sicherstellen sollte, dass Zählerblöcke nicht innerhalb einer einzelnen Nachricht wiederverwendet werden.

> [!NOTE]
> Weitere Informationen finden Sie in [Anhang B des NIST SP800-38A Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).

### AES-CBC

Dies repräsentiert AES im Cipher Block Chaining Mode, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

### AES-GCM

Dies repräsentiert AES im Galois/Counter Mode, wie in [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert.

Ein wesentlicher Unterschied zwischen diesem Modus und den anderen ist, dass GCM ein "authentifizierter" Modus ist, was bedeutet, dass er überprüft, dass der Chiffretext nicht von einem Angreifer modifiziert wurde.

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) auf GitHub ausprobieren.

### RSA-OAEP

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit RSA-OAEP. [Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn unter Verwendung von AES im CTR-Modus.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

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

### AES-CBC

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn unter Verwendung von AES im CBC-Modus.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

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

Dieser Code ruft den Inhalt eines Textfeldes ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn unter Verwendung von AES im GCM-Modus.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

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
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CTR-Modus.
- [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert CBC-Modus.
- [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert GCM-Modus.
