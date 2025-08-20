---
title: "SubtleCrypto: deriveKey() Methode"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`deriveKey()`** Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle kann verwendet werden, um einen geheimen Schlüssel aus einem Master-Schlüssel abzuleiten.

Sie nimmt als Argumente etwas anfängliches Schlüsselmateriell, den zu verwendenden Ableitungsalgorithmus und die gewünschten Eigenschaften für den abzuleitenden Schlüssel.
Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) Objekt erfüllt wird, das den neuen Schlüssel darstellt.

Es ist erwähnenswert, dass die unterstützten Schlüsselableitungsalgorithmen sehr unterschiedliche Eigenschaften haben und für unterschiedliche Situationen geeignet sind.
Siehe [Unterstützte Algorithmen](#unterstützte_algorithmen) für weitere Details.

## Syntax

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den [Ableitungsalgorithmus](#unterstützte_algorithmen) definiert, der verwendet werden soll.
    - Um [ECDH](#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams) Objekt, das den String `ECDH` als `name`-Eigenschaft spezifiziert.
    - Um [HKDF](#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams) Objekt.
    - Um [PBKDF2](#pbkdf2) zu verwenden, übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params) Objekt.
    - Um [X25519](#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams) Objekt, das den String `X25519` als `name`-Eigenschaft spezifiziert.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den Eingang für den Ableitungsalgorithmus darstellt.
    Wenn `algorithm` ECDH oder X25519 ist, wird dies der ECDH- oder X25519-Privatschlüssel sein.
    Andernfalls wird es das anfängliche Schlüsselmateriell für die Ableitungsfunktion sein: zum Beispiel könnte es bei PBKDF2 ein Passwort sein, das als `CryptoKey` mithilfe von [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) importiert wird.
- `derivedKeyAlgorithm`
  - : Ein Objekt, das den Algorithmus definiert, für den der abgeleitete Schlüssel verwendet wird:
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams) Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams) Objekt.
    - Für [HKDF](#hkdf) übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams) Objekt.
    - Für [PBKDF2](#pbkdf2) übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params) Objekt.
- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mithilfe von [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) zu exportieren.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, was mit dem abgeleiteten Schlüssel getan werden kann.
    Beachten Sie, dass die Schlüsselverwendungen durch den im `derivedKeyAlgorithm` festgelegten Algorithmus erlaubt sein müssen.
    Mögliche Werte des Arrays sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um [Nachrichten zu verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um [Nachrichten zu entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um [Nachrichten zu signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um [Signaturen zu überprüfen](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann zur Ableitung eines neuen Schlüssels verwendet werden.
    - `deriveBits`: Der Schlüssel kann zur [Ableitung von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [umschließen](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Master-Schlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der `keyUsages`-Wert dieses Schlüssels nicht `deriveKey` enthält.
- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder für die Ableitung nicht geeignet ist, oder wenn der Algorithmus, der für den abgeleiteten Schlüssel angefordert wird, keine Schlüssellänge definiert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `keyUsages` leer ist, aber der entschlüsselte Schlüssel vom Typ `secret` oder `private` ist.

## Unterstützte Algorithmen

Die Algorithmen, die von `deriveKey()` unterstützt werden, haben sehr unterschiedliche Eigenschaften und sind für unterschiedliche Situationen geeignet.

### Schlüsselableitungsalgorithmen

#### HKDF

HKDF ist eine _Schlüsselableitungsfunktion_.
Es ist dafür konzipiert, Schlüsselmaterial aus einem hoch-entropischen Eingabewert abzuleiten, wie zum Beispiel dem Ergebnis einer ECDH-Schlüsselvereinbarung.

Es ist _nicht_ dafür vorgesehen, Schlüssel aus relativ niedrig-entropischen Eingaben wie Passwörtern abzuleiten.
Hierfür verwenden Sie PBKDF2.

HKDF ist in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) spezifiziert.

#### PBKDF2

PBKDF2 ist ebenfalls eine _Schlüsselableitungsfunktion_.
Es ist dafür konzipiert, Schlüsselmaterial aus einer relativ niedrig-entropischen Eingabe wie einem Passwort abzuleiten.
Es leitet Schlüsselmaterial ab, indem es eine Funktion wie HMAC auf das Eingabepasswort zusammen mit etwas Salz anwendet und diesen Prozess viele Male wiederholt.
Je öfter der Prozess wiederholt wird, desto rechenintensiver ist die Schlüsselformation: das macht es für einen Angreifer schwieriger, durch einen Wörterbuchangriff den Schlüssel mit brutaler Gewalt zu entdecken.

PBKDF2 ist in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) spezifiziert.

### Schlüsselvereinbarungsalgorithmen

#### ECDH

ECDH (Elliptic Curve Diffie–Hellman) ist ein _Schlüsselvereinbarungsalgorithmus_.
Er ermöglicht es zwei Personen, die jeweils ein ECDH-Öffentlich/Privat-Schlüsselpaar haben, ein gemeinsames Geheimnis zu erzeugen: ein Geheimnis, das sie — und niemand sonst — teilen.
Sie können dieses gemeinsame Geheimnis dann als symmetrischen Schlüssel verwenden, um ihre Kommunikation zu sichern, oder das Geheimnis als Eingabe verwenden, um einen solchen Schlüssel abzuleiten (zum Beispiel unter Verwendung des HKDF-Algorithmus).

ECDH ist in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) spezifiziert.

#### X25519

X25519 ist ein Schlüsselvereinbarungsalgorithmus ähnlich ECDH, jedoch aufgebaut auf der [Curve25519](https://en.wikipedia.org/wiki/Curve25519) elliptischen Kurve, die Teil der Edwards-Curve Digital Signature Algorithm (EdDSA) Familie von Algorithmen ist, die in {{rfc("8032")}} definiert sind.

Die Curve25519-Algorithmen werden in der Kryptographie weit verbreitet eingesetzt und gelten als einige der effizientesten/schnellsten verfügbaren.
Im Vergleich zu den NIST (National Institute of Standards and Technology) Kurvenschlüsselaustauschalgorithmen, die bei ECDH verwendet werden, ist Curve25519 einfacher zu implementieren, und sein nichtstaatlicher Ursprung bedeutet, dass die Entscheidungen hinter seinen Designwahlen transparent und offen sind.

X25519 ist in {{rfc("7748")}} spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html) auf GitHub ausprobieren.

### ECDH: gemeinsames geheimes Schlüssel ableiten

In diesem Beispiel generieren Alice und Bob jeweils ein ECDH-Schlüsselpaar und tauschen dann die öffentlichen Schlüssel aus.
Anschließend verwenden sie `deriveKey()`, um einen gemeinsamen AES-Schlüssel abzuleiten, den sie zur Verschlüsselung von Nachrichten verwenden könnten.
[Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
Derive an AES key, given:
- our ECDH private key
- their ECDH public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "ECDH",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

async function agreeSharedSecretKey() {
  // Generate 2 ECDH key pairs: one for Alice and one for Bob
  // In more normal usage, they would generate their key pairs
  // separately and exchange public keys securely
  let aliceKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  let bobKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  // Alice then generates a secret key using her private key and Bob's public key.
  let aliceSecretKey = await deriveSecretKey(
    aliceKeyPair.privateKey,
    bobKeyPair.publicKey,
  );

  // Bob generates the same secret key using his private key and Alice's public key.
  let bobSecretKey = await deriveSecretKey(
    bobKeyPair.privateKey,
    aliceKeyPair.publicKey,
  );

  // Alice can then use her copy of the secret key to encrypt a message to Bob.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(aliceSecretKey);
  });

  // Bob can use his copy to decrypt the message.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobSecretKey);
  });
}
```

### X25519: gemeinsames geheimes Schlüssel ableiten

In diesem Beispiel generieren Alice und Bob jeweils ein X25519-Schlüsselpaar und tauschen dann die öffentlichen Schlüssel aus.
Anschließend verwendet jeder von ihnen `deriveKey()`, um einen gemeinsamen AES-Schlüssel aus ihrem eigenen privaten Schlüssel und dem öffentlichen Schlüssel des anderen abzuleiten.
Sie können diesen gemeinsamen Schlüssel verwenden, um Nachrichten zu verschlüsseln und zu entschlüsseln, die sie austauschen.

#### HTML

Zuerst definieren wir ein HTML {{HTMLElement("input")}}, das Sie verwenden werden, um die Klartextnachricht einzugeben, die "Alice" senden wird, und eine Schaltfläche, die Sie anklicken können, um den Verschlüsselungsprozess zu starten.

```html
<label for="message">Plaintext message from Alice (Enter):</label>
<input
  type="text"
  id="message"
  name="message"
  size="50"
  value="The lion roars near dawn" />
<input id="encrypt-button" type="button" value="Encrypt" />
```

Dies wird gefolgt von zwei weiteren Elementen zur Anzeige des Chiffretexts, nachdem Alice den Klartext mit ihrer Kopie des geheimen Schlüssels verschlüsselt hat, und zur Anzeige des Textes, nachdem Bob ihn mit seiner Kopie des geheimen Schlüssels entschlüsselt hat.

```html
<div id="results">
  <label for="encrypted">Encrypted (Alice)</label>
  <input
    type="text"
    id="encrypted"
    name="encrypted"
    size="30"
    value=""
    readonly />

  <label for="results">Decrypted (Bob)</label>
  <input
    type="text"
    id="decrypted"
    name="decrypted"
    size="50"
    value=""
    readonly />
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
input {
  display: block;
  margin: 5px 0px;
}
#results {
  margin-top: 20px;
}

#log {
  height: 150px;
  width: 90%;
  white-space: pre-wrap; /* wrap pre blocks */
  overflow-wrap: break-word; /* break on words */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
  margin-top: 20px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der nachfolgende Code zeigt, wie `deriveKey()` verwendet wird.
Wir übergeben den X25519-öffentlichen Schlüssel der Remote-Partei, den X25519-Privatschlüssel der lokalen Partei und spezifizieren, dass der abgeleitete Schlüssel ein AES-GCM-Schlüssel sein soll.
Wir setzen den abgeleiteten Schlüssel außerdem auf nicht extrahierbar und geeignet für Verschlüsselung und Entschlüsselung.

Diese Funktion wird weiter unten im Code verwendet, um gemeinsame Schlüssel für Bob und Alice zu erstellen.

```js
/*
Derive an AES-GCM key, given:
- our X25519 private key
- their X25519 public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "X25519",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}
```

Als nächstes definieren wir die Funktionen, die Alice verwenden wird, um ihre Klartextnachricht {{Glossary("UTF-8", "UTF-8")}} zu kodieren und dann zu verschlüsseln, und die Bob verwenden wird, um die Nachricht zu entschlüsseln und dann zu dekodieren.
Beide verwenden als Argumente den gemeinsamen AES-Schlüssel, einen [Initialisierungsvektor](/de/docs/Web/API/AesGcmParams#iv) und den Text, der verschlüsselt oder entschlüsselt werden soll.

Der gleiche Initialisierungsvektor muss für Verschlüsselung und Entschlüsselung verwendet werden, aber er muss nicht geheim sein. Normalerweise wird er zusammen mit der verschlüsselten Nachricht gesendet.
In diesem Fall jedoch, da wir keine Nachricht tatsächlich senden, machen wir ihn direkt verfügbar.

```js
async function encryptMessage(key, initializationVector, message) {
  try {
    const encoder = new TextEncoder();
    encodedMessage = encoder.encode(message);
    // iv will be needed for decryption
    return await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: initializationVector },
      key,
      encodedMessage,
    );
  } catch (e) {
    console.log(e);
    return `Encoding error`;
  }
}

async function decryptMessage(key, initializationVector, ciphertext) {
  try {
    const decryptedText = await window.crypto.subtle.decrypt(
      // The iv value must be the same as that used for encryption
      { name: "AES-GCM", iv: initializationVector },
      key,
      ciphertext,
    );

    const utf8Decoder = new TextDecoder();
    return utf8Decoder.decode(decryptedText);
  } catch (e) {
    console.log(e);
    return "Decryption error";
  }
}
```

Die Funktion `agreeSharedSecretKey()` unten wird beim Laden aufgerufen, um Paare und gemeinsame Schlüssel für Alice und Bob zu generieren.
Es fügt auch einen Klick-Handler für die Schaltfläche "Verschlüsseln" hinzu, der die Verschlüsselung und dann die Entschlüsselung des Textes im ersten `<input>` auslöst.
Beachten Sie, dass der gesamte Code in einem `try...catch` Handler enthalten ist, um sicherzustellen, dass wir den Fall loggen können, in dem die Schlüsselerstellung fehlschlägt, weil der X25519 Algorithmus nicht unterstützt wird.

```js
async function agreeSharedSecretKey() {
  try {
    // Generate 2 X25519 key pairs: one for Alice and one for Bob
    // In more normal usage, they would generate their key pairs
    // separately and exchange public keys securely
    const aliceKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Alice's key pair: (algorithm: ${JSON.stringify(
        aliceKeyPair.privateKey.algorithm,
      )}, usages: ${aliceKeyPair.privateKey.usages})`,
    );

    const bobKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Bob's key pair: (algorithm: ${JSON.stringify(
        bobKeyPair.privateKey.algorithm,
      )}, usages: ${bobKeyPair.privateKey.usages})`,
    );

    // Alice then generates a secret key using her private key and Bob's public key.
    const aliceSecretKey = await deriveSecretKey(
      aliceKeyPair.privateKey,
      bobKeyPair.publicKey,
    );

    log(
      `aliceSecretKey: ${aliceSecretKey.type} (algorithm: ${JSON.stringify(
        aliceSecretKey.algorithm,
      )}, usages: ${aliceSecretKey.usages}), `,
    );

    // Bob generates the same secret key using his private key and Alice's public key.
    const bobSecretKey = await deriveSecretKey(
      bobKeyPair.privateKey,
      aliceKeyPair.publicKey,
    );

    log(
      `bobSecretKey: ${bobSecretKey.type} (algorithm: ${JSON.stringify(
        bobSecretKey.algorithm,
      )}, usages: ${bobSecretKey.usages}), \n`,
    );

    // Get access for the encrypt button and the three inputs
    const encryptButton = document.querySelector("#encrypt-button");
    const messageInput = document.querySelector("#message");
    const encryptedInput = document.querySelector("#encrypted");
    const decryptedInput = document.querySelector("#decrypted");

    encryptButton.addEventListener("click", async () => {
      log(`Plaintext: ${messageInput.value}`);

      // Define the initialization vector used when encrypting and decrypting.
      // This must be regenerated for every message!
      const initializationVector = window.crypto.getRandomValues(
        new Uint8Array(8),
      );

      // Alice can use her copy of the shared key to encrypt the message.
      const encryptedMessage = await encryptMessage(
        aliceSecretKey,
        initializationVector,
        messageInput.value,
      );

      // We then display part of the encrypted buffer and log the encrypted message
      let buffer = new Uint8Array(encryptedMessage, 0, 5);
      encryptedInput.value = `${buffer}...[${encryptedMessage.byteLength} bytes total]`;

      log(
        `encryptedMessage: ${buffer}...[${encryptedMessage.byteLength} bytes total]`,
      );

      // Bob uses his shared secret key to decrypt the message.
      const decryptedCiphertext = await decryptMessage(
        bobSecretKey,
        initializationVector,
        encryptedMessage,
      );

      decryptedInput.value = decryptedCiphertext;
      log(`decryptedCiphertext: ${decryptedCiphertext}\n`);
    });
  } catch (e) {
    log(e);
  }
}

// Finally we call the method to set the example running.
agreeSharedSecretKey();
```

#### Ergebnis

Drücken Sie die Verschlüsseln-Schaltfläche, um den Text im oberen `<input>`-Element zu verschlüsseln, und den verschlüsselten Chiffretext und den entschlüsselten Chiffretext in den folgenden beiden Elementen anzuzeigen.
Der Protokollbereich am unteren Rand liefert Informationen über die vom Code generierten Schlüssel.

{{EmbedLiveSample("X25519 abgeleiteter gemeinsamer Schlüssel", "100%", "400px")}}

### PBKDF2: AES-Schlüssel aus Passwort ableiten

In diesem Beispiel fragen wir den Benutzer nach einem Passwort, verwenden es dann, um mithilfe von PBKDF2 einen AES-Schlüssel abzuleiten, und verwenden dann den AES-Schlüssel, um eine Nachricht zu verschlüsseln.
[Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );
}

async function encrypt(plaintext, salt, iv) {
  const keyMaterial = await getKeyMaterial();
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
}
```

### HKDF: AES-Schlüssel aus gemeinsamem Geheimnis ableiten

In diesem Beispiel verschlüsseln wir eine Nachricht `plainText` mit einem gemeinsamen Geheimnis `secret`, das möglicherweise selbst mithilfe eines Algorithmus wie ECDH abgeleitet wurde.
Anstatt das gemeinsame Geheimnis direkt zu verwenden, verwenden wir es als Schlüsselmateriell für die HKDF-Funktion, um einen AES-GCM-Verschlüsselungsschlüssel abzuleiten, den wir dann verwenden, um die Nachricht zu verschlüsseln.
[Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/hkdf.js)

```js
/*
  Given some key material and some random salt,
  derive an AES-GCM key using HKDF.
  */
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "HKDF",
      salt,
      info: new TextEncoder().encode("Encryption example"),
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );
}

async function encrypt(secret, plainText) {
  const message = {
    salt: window.crypto.getRandomValues(new Uint8Array(16)),
    iv: window.crypto.getRandomValues(new Uint8Array(12)),
  };

  const key = await getKey(secret, message.salt);

  message.ciphertext = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: message.iv,
    },
    key,
    plainText,
  );

  return message;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST-Richtlinien zur passwortbasierten Schlüsselableitung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Passwort-Speicher-Cheat-Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Ratschläge zur Wahl einer Iterationsanzahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
