---
title: "SubtleCrypto: deriveKey() Methode"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`deriveKey()`** Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Interfaces kann verwendet werden, um einen geheimen Schlüssel aus einem Hauptschlüssel abzuleiten.

Als Argumente nimmt sie einige anfängliche Schlüsselmaterialien, den zu verwendenden Ableitungsalgorithmus und die gewünschten Eigenschaften für den abzuleitenden Schlüssel.
Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) Objekt, das den neuen Schlüssel darstellt, erfüllt wird.

Es ist erwähnenswert, dass die unterstützten Schlüsselableitungsalgorithmen recht unterschiedliche Eigenschaften haben und in ganz unterschiedlichen Situationen angemessen sind.
Siehe [Unterstützte Algorithmen](#unterstützte_algorithmen) für weitere Details dazu.

## Syntax

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](#unterstützte_algorithmen) definiert.
    - Um [ECDH](#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams) Objekt und geben Sie den String `ECDH` als `name` Eigenschaft an.
    - Um [HKDF](#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams) Objekt.
    - Um [X25519](#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams) Objekt und geben Sie den String `X25519` als `name` Eigenschaft an.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den Eingang zum Ableitungsalgorithmus darstellt.
    Wenn `algorithm` ECDH oder X25519 ist, dann wird dies der ECDH- oder X25519-Private-Key sein.
    Andernfalls wird es das anfängliche Schlüsselmaterial für die Derivationsfunktion sein: zum Beispiel könnte es sich bei PBKDF2 um ein Passwort handeln, das als `CryptoKey` mit [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) importiert wurde.
- `derivedKeyAlgorithm`
  - : Ein Objekt, das den Algorithmus definiert, für den der abgeleitete Schlüssel verwendet wird:
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams) Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams) Objekt.
    - Für [HKDF](#hkdf), übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams) Objekt.
    - Für [PBKDF2](#pbkdf2), übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params) Objekt.
- `extractable`
  - : Ein boolean-Wert, der angibt, ob es möglich sein wird, den Schlüssel mit [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) zu exportieren.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, was mit dem abgeleiteten Schlüssel gemacht werden kann.
    Beachten Sie, dass die Schlüsselverwendungen durch den im `derivedKeyAlgorithm` festgelegten Algorithmus erlaubt sein müssen.
    Mögliche Werte des Arrays sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann bei der Ableitung eines neuen Schlüssels verwendet werden.
    - `deriveBits`: Der Schlüssel kann zur [Ableitung von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [verpacken](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird.

### Ausnahmen

Das `Promise` wird abgelehnt, wenn eine der folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Hauptschlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der `keyUsages`-Wert dieses Schlüssels `deriveKey` nicht enthält.
- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder sich nicht für die Ableitung eignet, oder wenn der angeforderte Algorithmus für den abgeleiteten Schlüssel keine Schlüssellänge definiert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `keyUsages` leer ist, aber der unverdeckte Schlüssel vom Typ `secret` oder `private` ist.

## Unterstützte Algorithmen

Die von `deriveKey()` unterstützten Algorithmen haben ganz unterschiedliche Eigenschaften und sind in verschiedenen Situationen angemessen.

### Schlüsselableitungsalgorithmen

#### HKDF

HKDF ist eine _Schlüsselableitungsfunktion_.
Es ist dafür ausgelegt, Schlüsselmaterial aus einer hochentropischen Eingabe abzuleiten, wie zum Beispiel dem Ergebnis eines ECDH-Schlüsselaustauschvorgangs.

Es ist _nicht_ dafür ausgelegt, Schlüssel aus relativ wenig entropischen Eingaben wie Passwörtern abzuleiten.
Verwenden Sie dafür PBKDF2.

HKDF ist in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) spezifiziert.

#### PBKDF2

PBKDF2 ist ebenfalls eine _Schlüsselableitungsfunktion_.
Es ist dafür ausgelegt, Schlüsselmaterial aus einer relativ wenig entropischen Eingabe abzuleiten, wie zum Beispiel einem Passwort.
Es leitet Schlüsselmaterial ab, indem es eine Funktion wie HMAC auf das Eingabepasswort zusammen mit etwas Salz anwendet und diesen Prozess viele Male wiederholt.
Je öfter der Prozess wiederholt wird, desto rechenintensiver ist die Schlüsselerstellung: Dies erschwert es einem Angreifer, mittels Brute-Force durch einen Wörterbuchangriff den Schlüssel zu entdecken.

PBKDF2 ist in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) spezifiziert.

### Schlüsselaustauschalgorithmen

#### ECDH

ECDH (Elliptic Curve Diffie-Hellman) ist ein _Schlüsselaustauschalgorithmus_.
Es ermöglicht zwei Personen, die jeweils ein ECDH-Public/Private-Key-Paar haben, ein gemeinsames Geheimnis zu erzeugen: das heißt, ein Geheimnis, das sie – und niemand sonst – teilen.
Sie können dann dieses gemeinsame Geheimnis als symmetrischen Schlüssel verwenden, um ihre Kommunikation zu sichern, oder das Geheimnis als Eingabe zur Ableitung eines solchen Schlüssels verwenden (zum Beispiel unter Verwendung des HKDF-Algorithmus).

ECDH ist in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) spezifiziert.

#### X25519

X25519 ist ein Schlüsselaustauschalgorithmus ähnlich ECDH, jedoch basierend auf der [Curve25519](https://en.wikipedia.org/wiki/Curve25519) elliptischen Kurve, die Teil der Familie der Edwards-Kurven-Signaturalgorithmen (EdDSA) ist, die in {{rfc("8032")}} definiert sind.

Die Curve25519-Algorithmen sind weit verbreitet in der Kryptographie und gelten als einige der effizientesten/schnellsten verfügbaren. Im Vergleich zu den NIST (National Institute of Standards and Technology) Kurven-Schlüsselaustauschalgorithmen, die mit ECDH verwendet werden, ist Curve25519 einfacher zu implementieren, und seine nicht-staatliche Herkunft bedeutet, dass die Entscheidungen hinter den Designauswahl transparent und offen sind.

X25519 ist in {{rfc("7748")}} spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html).

### ECDH: gemeinsamer geheimer Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar und tauschen dann die öffentlichen Schlüssel aus.
Sie verwenden dann `deriveKey()`, um einen gemeinsamen AES-Schlüssel abzuleiten, den sie zum Verschlüsseln von Nachrichten verwenden könnten.
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
  let alicesKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  let bobsKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  // Alice then generates a secret key using her private key and Bob's public key.
  let alicesSecretKey = await deriveSecretKey(
    alicesKeyPair.privateKey,
    bobsKeyPair.publicKey,
  );

  // Bob generates the same secret key using his private key and Alice's public key.
  let bobsSecretKey = await deriveSecretKey(
    bobsKeyPair.privateKey,
    alicesKeyPair.publicKey,
  );

  // Alice can then use her copy of the secret key to encrypt a message to Bob.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(alicesSecretKey);
  });

  // Bob can use his copy to decrypt the message.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobsSecretKey);
  });
}
```

### X25519: gemeinsamer geheimer Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar und tauschen dann die öffentlichen Schlüssel aus.
Sie verwenden dann jeweils `deriveKey()`, um einen gemeinsamen AES-Schlüssel aus ihrem eigenen privaten Schlüssel und dem öffentlichen Schlüssel des jeweils anderen abzuleiten.
Sie können diesen gemeinsamen Schlüssel verwenden, um Nachrichten, die sie austauschen, zu verschlüsseln und zu entschlüsseln.

#### HTML

Zuerst definieren wir ein HTML {{HTMLElement("input")}}, das Sie verwenden, um die Klartextnachricht einzugeben, die "Alice" senden wird, sowie einen Button, den Sie klicken können, um den Verschlüsselungsprozess zu starten.

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

Dies wird gefolgt von zwei weiteren Elementen, um den Chiffretext anzuzeigen, nachdem Alice den Klartext mit ihrer Kopie des geheimen Schlüssels verschlüsselt hat, und um den Text anzuzeigen, nachdem Bob ihn mit seiner Kopie des geheimen Schlüssels entschlüsselt hat.

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
  margin: 5px 0px 5px 0px;
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

Der untenstehende Code zeigt, wie `deriveKey()` verwendet wird.
Wir übergeben den X25519-Public-Key der entfernten Partei, den X25519-Private-Key der lokalen Partei und spezifizieren, dass der abgeleitete Schlüssel ein AES-GCM-Schlüssel sein soll.
Wir legen auch fest, dass der abgeleitete Schlüssel nicht-extrahierbar und für die Verschlüsselung und Entschlüsselung geeignet ist.

Diese Funktion verwenden wir weiter unten im Code, um gemeinsame Schlüssel für Bob und Alice zu erstellen.

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

Als nächstes definieren wir die Funktionen, die Alice verwenden wird, um ihre Klartextnachricht [UTF-8](/de/docs/Glossary/UTF-8) zu kodieren und dann zu verschlüsseln, und die Bob verwenden wird, um die Nachricht zu entschlüsseln und dann zu dekodieren.
Beide nehmen als Argumente den gemeinsamen AES-Schlüssel, einen [Initialisierungsvektor](/de/docs/Web/API/AesGcmParams#iv) und den zu verschlüsselnden oder zu entschlüsselnden Text.

Der gleiche Initialisierungsvektor muss für die Verschlüsselung und Entschlüsselung verwendet werden, aber er muss nicht geheim sein, daher wird er normalerweise zusammen mit der verschlüsselten Nachricht gesendet.
In diesem Fall machen wir ihn jedoch direkt verfügbar, da wir tatsächlich keine Nachricht senden.

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

Die `agreeSharedSecretKey()`-Funktion unten wird beim Laden aufgerufen, um Paare und gemeinsame Schlüssel für Alice und Bob zu erzeugen.
Sie fügt außerdem einen Click-Handler für die "Verschlüsseln"-Schaltfläche hinzu, die die Verschlüsselung und dann die Entschlüsselung des im ersten `<input>` definierten Textes auslöst.
Beachten Sie, dass der gesamte Code innerhalb eines `try...catch`-Handlers sitzt, um sicherzustellen, dass wir den Fall protokollieren können, in dem die Schlüsselerstellung fehlschlägt, weil der X25519-Algorithmus nicht unterstützt wird.

```js
async function agreeSharedSecretKey() {
  try {
    // Generate 2 X25519 key pairs: one for Alice and one for Bob
    // In more normal usage, they would generate their key pairs
    // separately and exchange public keys securely
    const alicesKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Alices's key pair: (algorithm: ${JSON.stringify(
        alicesKeyPair.privateKey.algorithm,
      )}, usages: ${alicesKeyPair.privateKey.usages})`,
    );

    const bobsKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Created Bob's key pair: (algorithm: ${JSON.stringify(
        bobsKeyPair.privateKey.algorithm,
      )}, usages: ${bobsKeyPair.privateKey.usages})`,
    );

    // Alice then generates a secret key using her private key and Bob's public key.
    const alicesSecretKey = await deriveSecretKey(
      alicesKeyPair.privateKey,
      bobsKeyPair.publicKey,
    );

    log(
      `alicesSecretKey: ${alicesSecretKey.type} (algorithm: ${JSON.stringify(
        alicesSecretKey.algorithm,
      )}, usages: ${alicesSecretKey.usages}), `,
    );

    // Bob generates the same secret key using his private key and Alice's public key.
    const bobsSecretKey = await deriveSecretKey(
      bobsKeyPair.privateKey,
      alicesKeyPair.publicKey,
    );

    log(
      `bobsSecretKey: ${bobsSecretKey.type} (algorithm: ${JSON.stringify(
        bobsSecretKey.algorithm,
      )}, usages: ${bobsSecretKey.usages}), \n`,
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
        alicesSecretKey,
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
        bobsSecretKey,
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

Drücken Sie die "Verschlüsseln"-Schaltfläche, um den Text im oberen `<input>`-Element zu verschlüsseln, und zeigen Sie den verschlüsselten Chiffretext und den entschlüsselten Chiffretext in den folgenden beiden Elementen an.
Der Protokollbereich am unteren Rand liefert Informationen über die Schlüssel, die vom Code generiert werden.

{{EmbedLiveSample("X25519 abgeleiteter gemeinsamer Schlüssel", "100%", "400px")}}

### PBKDF2: AES-Schlüssel aus Passwort ableiten

In diesem Beispiel bitten wir den Benutzer um ein Passwort, verwenden es dann, um einen AES-Schlüssel mit PBKDF2 abzuleiten, und verwenden den AES-Schlüssel dann, um eine Nachricht zu verschlüsseln.
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

In diesem Beispiel verschlüsseln wir eine Nachricht `plainText` mit einem gemeinsamen Geheimnis `secret`, das selbst möglicherweise unter Verwendung eines Algorithmus wie ECDH abgeleitet wurde.
Anstatt das gemeinsame Geheimnis direkt zu verwenden, nutzen wir es als Schlüsselmaterial für die HKDF-Funktion, um einen AES-GCM-Verschlüsselungsschlüssel abzuleiten, den wir dann verwenden, um die Nachricht zu verschlüsseln.
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
      salt: salt,
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
- [NIST-Richtlinien für passwortbasierte Schlüsselableitung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Cheat Sheet zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Ratschläge zur Auswahl einer Iterationsanzahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
