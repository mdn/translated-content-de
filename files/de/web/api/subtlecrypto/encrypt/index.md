---
title: "SubtleCrypto: encrypt()-Methode"
short-title: encrypt()
slug: Web/API/SubtleCrypto/encrypt
l10n:
  sourceCommit: f8022456101568d6260c824c982b69cf4902cb78
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die Methode **`encrypt()`** der Schnittstelle [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verschlüsselt Daten.

Sie erwartet als Argumente einen {{Glossary("key", "Schlüssel")}}, mit dem verschlüsselt werden soll, einige algorithmspezifische Parameter sowie die zu verschlüsselnden Daten (auch als „Klartext“ bezeichnet).
Sie gibt ein {{jsxref("Promise")}} zurück, das mit den verschlüsselten Daten (auch als „Chiffretext“ bezeichnet) erfüllt wird.

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
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den für die Verschlüsselung zu verwendenden Schlüssel enthält.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    das die zu verschlüsselnden Daten enthält (auch als {{Glossary("plaintext", "Klartext")}} bezeichnet).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den „Chiffretext“ enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn die folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angeforderte Operation für den bereitgestellten Schlüssel ungültig ist (z. B. ungültiger Verschlüsselungsalgorithmus oder ungültiger Schlüssel für den angegebenen Verschlüsselungsalgorithmus).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus einem operationsspezifischen Grund fehlgeschlagen ist (z. B. Algorithmusparameter mit ungültigen Größen oder AES-GCM-Klartext, der länger als 2<sup>39</sup>−256 Byte ist). Informationen zu Längenbeschränkungen finden Sie unter [Unterstützte Algorithmen](#unterstützte_algorithmen).

## Unterstützte Algorithmen

Die Web Crypto API stellt vier Algorithmen bereit, die die Operationen `encrypt()` und `decrypt()` unterstützen.

Einer dieser Algorithmen – RSA-OAEP – ist ein {{Glossary("public-key_cryptography", "Public-Key-Kryptosystem")}}.

Die anderen drei Verschlüsselungsalgorithmen sind alle {{Glossary("Symmetric-key_cryptography", "symmetrische Algorithmen")}} und basieren alle auf derselben zugrunde liegenden Chiffre, AES (Advanced Encryption Standard).
Der Unterschied zwischen ihnen liegt im {{Glossary("Block_cipher_mode_of_operation", "Modus")}}.
Die Web Crypto API unterstützt drei verschiedene AES-Modi:

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

Es wird dringend empfohlen, _authentifizierte Verschlüsselung_ zu verwenden, die Prüfungen umfasst, ob der Chiffretext von einem Angreifer verändert wurde.
Die Authentifizierung schützt vor _Chosen-Ciphertext_-Angriffen, bei denen ein Angreifer das System auffordern kann, beliebige Nachrichten zu entschlüsseln, und das Ergebnis verwendet, um Informationen über den geheimen Schlüssel abzuleiten.
Es ist zwar möglich, CTR- und CBC-Modi um Authentifizierung zu erweitern, sie stellen diese jedoch standardmäßig nicht bereit, und bei der manuellen Implementierung können leicht kleine, aber schwerwiegende Fehler passieren.
GCM bietet integrierte Authentifizierung und wird deshalb häufig gegenüber den beiden anderen AES-Modi empfohlen.

> [!NOTE]
> Die nachstehenden Klartextlängenlimits sind Obergrenzen, keine Garantien dafür, dass ein Browser Nachrichten dieser Größe verschlüsseln kann. Die Web Crypto API und die zugrunde liegende kryptografische Implementierung können zusätzliche Einschränkungen auferlegen, und der verfügbare Speicher kann die Größe der Eingabe zusätzlich begrenzen.

### RSA-OAEP

Das RSA-OAEP-Public-Key-Verschlüsselungssystem ist in [RFC 8017](https://datatracker.ietf.org/doc/html/rfc8017) spezifiziert.

Der Klartext darf nicht länger als `k - 2 * hLen - 2` Byte sein, wobei `k` die Länge des RSA-Modulus in Byte und `hLen` die Ausgabelänge der dem Schlüssel zugeordneten Hash-Funktion in Byte ist. Beispielsweise kann ein 2048-Bit-RSA-Schlüssel mit SHA-256 höchstens `256 - 2 * 32 - 2 = 190` Byte verschlüsseln. Wird dieses Limit überschritten, wird das Promise mit einem `OperationError` abgelehnt. Die vollständigen Einschränkungen finden Sie unter [RSAES-OAEP encryption](https://datatracker.ietf.org/doc/html/rfc8017#section-7.1.1).

### AES-CTR

Dies entspricht AES im Counter Mode, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

AES ist eine Blockchiffre, was bedeutet, dass die Nachricht in Blöcke aufgeteilt und jeweils ein Block verschlüsselt wird.
Im CTR-Modus wird bei jeder Verschlüsselung eines Nachrichtenblocks ein zusätzlicher Datenblock beigemischt. Dieser zusätzliche Block wird als „Counter Block“ bezeichnet.

Ein bestimmter Counter-Block-Wert darf mit demselben Schlüssel niemals mehr als einmal verwendet werden:

- Bei einer Nachricht mit _n_ Blöcken muss für jeden Block ein anderer Counter Block verwendet werden.
- Wenn derselbe Schlüssel zum Verschlüsseln von mehr als einer Nachricht verwendet wird, muss für alle Blöcke aller Nachrichten ein anderer Counter Block verwendet werden.

Typischerweise wird dies erreicht, indem der anfängliche Counter-Block-Wert in zwei verkettete Teile aufgeteilt wird:

- Eine {{Glossary("Nonce", "Nonce")}} (also eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird eine neue Nonce ausgewählt. Nonces müssen nicht geheim sein, dürfen jedoch nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird bei jeder Verschlüsselung eines Blocks erhöht.

Im Wesentlichen gilt: Die Nonce sollte sicherstellen, dass Counter Blocks nicht von einer Nachricht zur nächsten wiederverwendet werden, während der Zähler sicherstellen sollte, dass Counter Blocks nicht innerhalb einer einzelnen Nachricht wiederverwendet werden.

Um zu verhindern, dass sich der Zähler innerhalb einer Nachricht wiederholt, muss der Aufrufer sicherstellen, dass die Anzahl der 16-Byte-Blöcke, einschließlich eines abschließenden Teilblocks, `2 ** length` nicht überschreitet, wobei `length` die in [`AesCtrParams`](/de/docs/Web/API/AesCtrParams) angegebene Zählerlänge in Bit ist. Dies ist eine Anforderung für die sichere Verwendung, unabhängig davon, ob eine Implementierung eine zu große Nachricht ablehnt.

> [!NOTE]
> Weitere Informationen finden Sie in [Anhang B des NIST-SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).

### AES-CBC

Dies entspricht AES im Cipher Block Chaining Mode, wie in [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) spezifiziert.

Die [Web-Crypto-API-Spezifikation](https://w3c.github.io/webcrypto/#aes-cbc-operations-encrypt) definiert keine maximale Klartextlänge für AES-CBC.

### AES-GCM

Dies entspricht AES im Galois/Counter Mode, wie in [NIST SP800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) spezifiziert.

Ein wesentlicher Unterschied zwischen diesem Modus und den anderen besteht darin, dass GCM ein „authentifizierter“ Modus ist. Das bedeutet, dass er Prüfungen enthält, ob der Chiffretext von einem Angreifer verändert wurde.

Die GCM-Spezifikation begrenzt den Klartext für eine einzelne Verschlüsselungsoperation auf `2 ** 39 - 256` Bit (64 GiB minus 32 Byte). Siehe Abschnitt 5.2.1.1 von [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf).

> [!NOTE]
> Die [Web-Crypto-API-Spezifikation](https://w3c.github.io/webcrypto/#aes-gcm-operations-encrypt) besagt, dass Klartext, der länger als `2 ** 39 - 256` _Byte_ ist, einen `OperationError` verursacht. Dieser Schwellenwert ist größer als das obige Limit des GCM-Algorithmus. Das kleinere GCM-Limit sowie alle kleineren Implementierungslimits gelten weiterhin.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html) auf GitHub ausprobieren.

### RSA-OAEP

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit RSA-OAEP. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit AES im CTR-Modus.
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

### AES-CBC

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit AES im CBC-Modus.
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

Dieser Code ruft den Inhalt eines Textfelds ab, kodiert ihn zur Verschlüsselung und verschlüsselt ihn mit AES im GCM-Modus.
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
