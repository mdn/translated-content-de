---
title: "SubtleCrypto: deriveKey()-Methode"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`deriveKey()`**-Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle kann verwendet werden, um einen geheimen Schlüssel von einem Hauptschlüssel abzuleiten.

Sie nimmt als Argumente einige initiale Schlüsselinformationen, den zu verwendenden Ableitungsalgorithmus und die gewünschten Eigenschaften des abzuleitenden Schlüssels.
Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt erfüllt wird, das den neuen Schlüssel repräsentiert.

Es ist erwähnenswert, dass die unterstützten Schlüsselerzeugungsalgorithmen sehr unterschiedliche Eigenschaften haben und in ganz unterschiedlichen Situationen geeignet sind. Siehe [Unterstützte Algorithmen](#unterstützte_algorithmen) für weitere Details hierzu.

## Syntax

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](#unterstützte_algorithmen) definiert.
    - Um [ECDH](#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt und geben Sie den String `ECDH` als `name`-Eigenschaft an.
    - Um [HKDF](#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Um [X25519](#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt und geben Sie den String `X25519` als `name`-Eigenschaft an.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den Input für den Ableitungsalgorithmus darstellt. Wenn `algorithm` ECDH oder X25519 ist, dann wird dies der ECDH- oder X25519-Privatschlüssel sein. Andernfalls handelt es sich um das initiale Schlüsselmateriel für die Ableitungsfunktion: Beispielsweise könnte es sich für PBKDF2 um ein Passwort handeln, das als `CryptoKey` mithilfe von [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) importiert wurde.
- `derivedKeyAlgorithm`
  - : Ein Objekt, das den Algorithmus definiert, für den der abgeleitete Schlüssel verwendet wird:
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)-Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams)-Objekt.
    - Für [HKDF](#hkdf) übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Für [PBKDF2](#pbkdf2) übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)-Objekt.
- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mithilfe von [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) zu exportieren.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, was mit dem abgeleiteten Schlüssel gemacht werden kann. Beachten Sie, dass die Verwendungsmöglichkeiten des Schlüssels durch den in `derivedKeyAlgorithm` festgelegten Algorithmus erlaubt sein müssen. Mögliche Werte des Arrays sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann verwendet werden, um einen neuen Schlüssel abzuleiten.
    - `deriveBits`: Der Schlüssel kann verwendet werden, um [Bits abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [verpacken](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftreten:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Hauptschlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der `keyUsages`-Wert dieses Schlüssels nicht `deriveKey` enthält.
- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt oder nicht für Ableitungen geeignet ist, oder wenn der für den abgeleiteten Schlüssel angeforderte Algorithmus keine Schlüssellänge definiert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `keyUsages` leer ist, aber der unverpackte Schlüssel vom Typ `secret` oder `private` ist.

## Unterstützte Algorithmen

Die von `deriveKey()` unterstützten Algorithmen haben sehr unterschiedliche Merkmale und sind in verschiedenen Situationen geeignet.

### Schlüsselerzeugungsalgorithmen

#### HKDF

HKDF ist eine _Schlüsselableitungsfunktion_.
Sie ist dafür konzipiert, Schlüsselmateriel aus einem hoch-entropischen Input abzuleiten, wie zum Beispiel der Ausgabe eines ECDH-Schlüsselaustauschoperationsprozesses.

Sie ist _nicht_ dafür gedacht, Schlüssel aus relativ niedrig-entropischen Inputs wie Passwörtern abzuleiten. Dafür sollte PBKDF2 verwendet werden.

HKDF wird in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) spezifiziert.

#### PBKDF2

PBKDF2 ist ebenfalls eine _Schlüsselableitungsfunktion_.
Sie ist dafür konzipiert, Schlüsselmateriel aus einem relativ niedrig-entropischen Input, wie einem Passwort, abzuleiten.
Sie leitet Schlüsselmateriel ab, indem sie eine Funktion wie HMAC auf das Input-Passwort zusammen mit etwas Salt anwendet und diesen Prozess viele Male wiederholt.
Je öfter der Prozess wiederholt wird, desto rechenintensiver ist die Schlüsselerzeugung: Dies erschwert es einem Angreifer, den Schlüssel durch einen Brute-Force-Ansatz mit einem Wörterbuchangriff zu entdecken.

PBKDF2 wird in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) spezifiziert.

### Schlüsselvereinbarungsalgorithmen

#### ECDH

ECDH (Elliptic Curve Diffie-Hellman) ist ein _Schlüsselvereinbarungsalgorithmus_.
Er ermöglicht es zwei Personen, die jeweils ein ECDH-Öffentlich/Privater-Schlüsselpaar besitzen, ein gemeinsames Geheimnis zu erzeugen: also ein Geheimnis, das sie – und niemand sonst – teilen.
Sie können dann dieses gemeinsame Geheimnis als symmetrischen Schlüssel verwenden, um ihre Kommunikation zu sichern, oder das Geheimnis als Eingang verwenden, um einen solchen Schlüssel abzuleiten (zum Beispiel mit dem HKDF-Algorithmus).

ECDH wird in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) spezifiziert.

#### X25519

X25519 ist ein Schlüsselvereinbarungsalgorithmus wie ECDH, jedoch basierend auf der [Curve25519](https://en.wikipedia.org/wiki/Curve25519) Elliptische-Kurve, die Teil der Edwards-Curve Digital Signature Algorithm (EdDSA)-Familie der Algorithmen ist, die in {{rfc("8032")}} definiert sind.

Die Curve25519-Algorithmen werden weit in der Kryptographie verwendet und gelten als einige der effizientesten/schnellsten verfügbaren. Im Vergleich zu den vom NIST (National Institute of Standards and Technology) genutzten Kurvenschlüsselaustauschalgorithmen, die mit ECDH verwendet werden, ist Curve25519 einfacher zu implementieren, und sein nicht-staatlicher Ursprung bedeutet, dass die Entscheidungen hinter seinen Designauswahlen transparent und offen sind.

X25519 wird in {{rfc("7748")}} spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html).

### ECDH: gemeinsames geheimes Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar und tauschen dann öffentliche Schlüssel aus.
Sie verwenden anschließend `deriveKey()`, um einen gemeinsamen AES-Schlüssel abzuleiten, den sie verwenden könnten, um Nachrichten zu verschlüsseln.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

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

### X25519: gemeinsames geheimes Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar und tauschen dann öffentliche Schlüssel aus.
Sie verwenden dann jeweils `deriveKey()`, um einen gemeinsamen AES-Schlüssel aus ihrem eigenen privaten Schlüssel und dem öffentlichen Schlüssel des jeweils anderen abzuleiten. Sie können diesen gemeinsamen Schlüssel zum Verschlüsseln und Entschlüsseln von Nachrichten verwenden, die sie austauschen.

#### HTML

Zuerst definieren wir ein HTML-{{HTMLElement("input")}}, das Sie verwenden werden, um die Klartextnachricht einzugeben, die "Alice" senden wird, und eine Schaltfläche, die Sie klicken können, um den Verschlüsselungsprozess zu starten.

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

Darauf folgen zwei weitere Elemente, um den Chiffretext anzuzeigen, nachdem Alice den Klartext mit ihrer Kopie des geheimen Schlüssels verschlüsselt hat, und um den Text anzuzeigen, nachdem Bob ihn mit seiner Kopie des geheimen Schlüssels entschlüsselt hat.

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

Der untenstehende Code zeigt, wie wir `deriveKey()` verwenden.
Wir übergeben den X25519-Public-Key der entfernten Partei, den X25519-Privatschlüssel der lokalen Partei und spezifizieren, dass der abgeleitete Schlüssel ein AES-GCM-Schlüssel sein soll.
Wir setzen auch fest, dass der abgeleitete Schlüssel nicht extrahierbar und geeignet für Verschlüsselung und Entschlüsselung ist.

Wir verwenden diese Funktion weiter unten im Code, um gemeinsame Schlüssel für Bob und Alice zu erstellen.

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

Anschließend definieren wir die Funktionen, die Alice verwenden wird, um ihre Klartextnachricht im [UTF-8](/de/docs/Glossary/UTF-8) zu codieren und dann zu verschlüsseln, und die Bob verwenden wird, um die Nachricht zu entschlüsseln und dann zu dekodieren. Beide nehmen als Argumente den gemeinsamen AES-Schlüssel, einen [Initialisierungsvektor](/de/docs/Web/API/AesGcmParams#iv) und den Text, der verschlüsselt oder entschlüsselt werden soll.

Der gleiche Initialisierungsvektor muss für Verschlüsselung und Entschlüsselung verwendet werden, muss aber nicht geheim sein, daher wird er normalerweise zusammen mit der verschlüsselten Nachricht gesendet. In diesem Fall jedoch, da wir keine Nachricht tatsächlich senden, machen wir sie einfach direkt verfügbar.

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

Die Funktion `agreeSharedSecretKey()`, die unten gezeigt wird, wird beim Laden aufgerufen, um Paare und gemeinsame Schlüssel für Alice und Bob zu generieren. Sie fügt auch einen Klick-Handler für die "Verschlüsseln"-Schaltfläche hinzu, der die Verschlüsselung und dann die Entschlüsselung des in der ersten `<input>` definierten Textes auslöst. Beachten Sie, dass der gesamte Code innerhalb eines `try...catch`-Handlers eingeschlossen ist, um sicherzustellen, dass wir den Fall protokollieren können, wenn die Schlüsselerstellung fehlschlägt, weil der X25519-Algorithmus nicht unterstützt wird.

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

Drücken Sie die Verschlüsseln-Schaltfläche, um den Text im oberen `<input>`-Element zu verschlüsseln und den verschlüsselten Chiffretext und entschlüsselten Chiffretext in den folgenden beiden Elementen anzuzeigen. Der Protokollbereich am unteren Rand bietet Informationen über die von dem Code generierten Schlüssel.

{{EmbedLiveSample("X25519 abgeleiteter gemeinsamer Schlüssel", "100%", "400px")}}

### PBKDF2: AES-Schlüssel aus Passwort ableiten

In diesem Beispiel bitten wir den Benutzer um ein Passwort, verwenden es dann, um mit PBKDF2 einen AES-Schlüssel abzuleiten und verwenden dann den AES-Schlüssel, um eine Nachricht zu verschlüsseln.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

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

In diesem Beispiel verschlüsseln wir eine Nachricht `plainText` mit einem gemeinsamen Geheimnis `secret`, das selbst mit einem Algorithmus wie ECDH abgeleitet worden sein könnte. Anstatt das gemeinsame Geheimnis direkt zu verwenden, verwenden wir es als Schlüsselmateriel für die HKDF-Funktion, um einen AES-GCM-Verschlüsselungsschlüssel abzuleiten, den wir dann verwenden, um die Nachricht zu verschlüsseln.
[Siehe den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/hkdf.js)

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
- [NIST-Richtlinien für passwortbasierte Schlüsselerzeugung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Passwortspeicher-Cheat-Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Ratschläge zur Auswahl einer Iterationsanzahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
