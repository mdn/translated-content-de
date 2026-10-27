---
title: "SubtleCrypto: Methode deriveKey()"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: bd7387afbc189848fe033cd43c1503a67c14187c
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Mit der Methode **`deriveKey()`** der Schnittstelle [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) können Sie aus einem Hauptschlüssel einen geheimen Schlüssel ableiten.

Als Argumente erwartet sie das ursprüngliche Schlüsselmaterial, den zu verwendenden Ableitungsalgorithmus und die gewünschten Eigenschaften des abzuleitenden Schlüssels. Sie gibt eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, die mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt für den neuen Schlüssel erfüllt wird.

Die unterstützten Schlüsselableitungsalgorithmen unterscheiden sich deutlich in ihren Eigenschaften und eignen sich für unterschiedliche Anwendungsfälle. Weitere Einzelheiten finden Sie unter [Unterstützte Algorithmen](#unterstützte-algorithmen).

## Syntax

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](#unterstützte-algorithmen) definiert.
    - Um [ECDH](#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt und geben Sie den String `ECDH` als Eigenschaft `name` an.
    - Um [HKDF](#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Um [PBKDF2](#pbkdf2) zu verwenden, übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)-Objekt.
    - Um [X25519](#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt und geben Sie den String `X25519` als Eigenschaft `name` an.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der die Eingabe für den Ableitungsalgorithmus darstellt.
    Wenn `algorithm` ECDH oder X25519 ist, handelt es sich um den privaten ECDH- beziehungsweise X25519-Schlüssel.
    Andernfalls ist es das ursprüngliche Schlüsselmaterial für die Ableitungsfunktion: Bei PBKDF2 könnte es beispielsweise ein Passwort sein, das mithilfe von [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) als `CryptoKey` importiert wurde.
- `derivedKeyType`
  - : Ein Objekt, das den Algorithmus definiert, für den der abgeleitete Schlüssel verwendet wird:
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) übergeben Sie ein [`HmacImportParams`](/de/docs/Web/API/HmacImportParams)-Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) übergeben Sie ein [`AesDerivedKeyParams`](/de/docs/Web/API/AesDerivedKeyParams)-Objekt.
- `extractable`
  - : Ein boolescher Wert, der angibt, ob sich der Schlüssel mithilfe von [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) exportieren lässt.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, wofür der abgeleitete Schlüssel verwendet werden darf.
    Die Schlüsselverwendungen müssen vom in `derivedKeyType` festgelegten Algorithmus zugelassen sein.
    Mögliche Werte des Arrays sind:
    - `encrypt`: Der Schlüssel darf zum [Verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt) von Nachrichten verwendet werden.
    - `decrypt`: Der Schlüssel darf zum [Entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt) von Nachrichten verwendet werden.
    - `sign`: Der Schlüssel darf zum [Signieren](/de/docs/Web/API/SubtleCrypto/sign) von Nachrichten verwendet werden.
    - `verify`: Der Schlüssel darf zum [Überprüfen](/de/docs/Web/API/SubtleCrypto/verify) von Signaturen verwendet werden.
    - `deriveKey`: Der Schlüssel darf zum Ableiten eines neuen Schlüssels verwendet werden.
    - `deriveBits`: Der Schlüssel darf zum [Ableiten von Bits](/de/docs/Web/API/SubtleCrypto/deriveBits) verwendet werden.
    - `wrapKey`: Der Schlüssel darf zum [Wrapping eines Schlüssels](/de/docs/Web/API/SubtleCrypto/wrapKey) verwendet werden.
    - `unwrapKey`: Der Schlüssel darf zum [Unwrapping eines Schlüssels](/de/docs/Web/API/SubtleCrypto/unwrapKey) verwendet werden.

### Rückgabewert

Eine {{jsxref("Promise")}}, die mit einem [`CryptoKey`](/de/docs/Web/API/CryptoKey) erfüllt wird.

### Ausnahmen

Die Promise wird zurückgewiesen, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Hauptschlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder der Wert `keyUsages` dieses Schlüssels `deriveKey` nicht enthält.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen unbekannten oder für die Ableitung ungeeigneten Algorithmus zu verwenden, oder wenn der für den abgeleiteten Schlüssel angeforderte Algorithmus keine Schlüssellänge definiert.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `keyUsages` leer ist, der entpackte Schlüssel aber vom Typ `secret` oder `private` ist.

## Unterstützte Algorithmen

Die von `deriveKey()` unterstützten Algorithmen unterscheiden sich deutlich in ihren Eigenschaften und eignen sich für unterschiedliche Anwendungsfälle.

### Schlüsselableitungsalgorithmen

#### HKDF

HKDF ist eine _Schlüsselableitungsfunktion_. Sie wurde entwickelt, um aus einer Eingabe mit hoher Entropie Schlüsselmaterial abzuleiten, beispielsweise aus dem Ergebnis eines ECDH-Schlüsselaustauschs.

Sie ist _nicht_ dafür ausgelegt, Schlüssel aus Eingaben mit vergleichsweise geringer Entropie wie Passwörtern abzuleiten. Verwenden Sie dafür PBKDF2.

HKDF ist in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) spezifiziert.

#### PBKDF2

PBKDF2 ist ebenfalls eine _Schlüsselableitungsfunktion_. Sie wurde entwickelt, um aus einer Eingabe mit vergleichsweise geringer Entropie, etwa einem Passwort, Schlüsselmaterial abzuleiten. Dazu wendet sie eine Funktion wie HMAC zusammen mit einem Salt auf das eingegebene Passwort an und wiederholt diesen Vorgang viele Male. Je häufiger der Vorgang wiederholt wird, desto rechenaufwendiger ist die Schlüsselableitung. Dadurch wird es für Angreifer schwieriger, den Schlüssel durch Ausprobieren vieler Möglichkeiten mithilfe eines Wörterbuchangriffs zu ermitteln.

PBKDF2 ist in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) spezifiziert.

### Schlüsselaustauschalgorithmen

#### ECDH

ECDH (Elliptic Curve Diffie–Hellman) ist ein _Schlüsselaustauschalgorithmus_. Er ermöglicht es zwei Personen, die jeweils ein öffentliches und privates ECDH-Schlüsselpaar besitzen, ein gemeinsames Geheimnis zu erzeugen – also ein Geheimnis, das nur sie beide kennen. Anschließend können sie dieses gemeinsame Geheimnis als symmetrischen Schlüssel zur Absicherung ihrer Kommunikation verwenden oder es als Eingabe nutzen, um einen solchen Schlüssel abzuleiten, beispielsweise mit dem HKDF-Algorithmus.

ECDH ist in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) spezifiziert.

#### X25519

X25519 ist wie ECDH ein Schlüsselaustauschalgorithmus, basiert jedoch auf der elliptischen Kurve [Curve25519](https://en.wikipedia.org/wiki/Curve25519), die zur Familie der in {{rfc("8032")}} definierten Edwards-Curve-Digital-Signature-Algorithmus-Verfahren (EdDSA) gehört.

Die Curve25519-Algorithmen sind in der Kryptografie weit verbreitet und gelten als besonders effizient und schnell. Im Vergleich zu den mit ECDH verwendeten Schlüsselaustauschalgorithmen auf Basis von NIST-Kurven (National Institute of Standards and Technology) ist Curve25519 einfacher zu implementieren. Da Curve25519 nicht von einer staatlichen Stelle stammt, sind die Gründe für die Entwurfsentscheidungen zudem transparent und öffentlich nachvollziehbar.

X25519 ist in {{rfc("7748")}} spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionsfähigen Beispiele](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html) auf GitHub ausprobieren.

### ECDH: Gemeinsamen geheimen Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar und tauschen anschließend ihre öffentlichen Schlüssel aus. Danach verwenden sie `deriveKey()`, um einen gemeinsamen AES-Schlüssel abzuleiten, mit dem sie Nachrichten verschlüsseln könnten. [Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

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

### X25519: Gemeinsamen geheimen Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar und tauschen anschließend ihre öffentlichen Schlüssel aus. Danach verwenden beide `deriveKey()`, um aus ihrem eigenen privaten Schlüssel und dem öffentlichen Schlüssel der jeweils anderen Person einen gemeinsamen AES-Schlüssel abzuleiten. Mit diesem gemeinsamen Schlüssel können sie ausgetauschte Nachrichten ver- und entschlüsseln.

#### HTML

Zunächst definieren wir ein HTML-{{HTMLElement("input")}}-Element, in das Sie die Klartextnachricht eingeben, die „Alice“ senden wird, sowie einen Button, mit dem Sie den Verschlüsselungsvorgang starten können.

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

Darauf folgen zwei weitere Elemente: eines zur Anzeige des verschlüsselten Textes, nachdem Alice den Klartext mit ihrem Exemplar des geheimen Schlüssels verschlüsselt hat, und eines zur Anzeige des Textes, nachdem Bob ihn mit seinem Exemplar des geheimen Schlüssels entschlüsselt hat.

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

Der folgende Code zeigt, wie wir `deriveKey()` verwenden. Wir übergeben den öffentlichen X25519-Schlüssel der anderen Partei und den privaten X25519-Schlüssel der lokalen Partei und legen fest, dass der abgeleitete Schlüssel ein AES-GCM-Schlüssel sein soll. Außerdem legen wir fest, dass der abgeleitete Schlüssel nicht exportierbar und zum Ver- und Entschlüsseln geeignet sein soll.

Weiter unten im Code verwenden wir diese Funktion, um gemeinsame Schlüssel für Bob und Alice zu erstellen.

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

Als Nächstes definieren wir die Funktionen, mit denen Alice ihre Klartextnachricht in {{Glossary("UTF-8", "UTF-8")}} kodiert und anschließend verschlüsselt und mit denen Bob die Nachricht entschlüsselt und anschließend dekodiert. Beide Funktionen erwarten als Argumente den gemeinsamen AES-Schlüssel, einen [Initialisierungsvektor](/de/docs/Web/API/AesGcmParams#iv) und den zu ver- beziehungsweise entschlüsselnden Text.

Für die Ver- und Entschlüsselung muss derselbe Initialisierungsvektor verwendet werden. Er muss jedoch nicht geheim sein und wird daher üblicherweise zusammen mit der verschlüsselten Nachricht übertragen. Da wir hier aber keine Nachricht tatsächlich übertragen, stellen wir ihn direkt zur Verfügung.

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

Die folgende Funktion `agreeSharedSecretKey()` wird beim Laden aufgerufen, um die Schlüsselpaare und gemeinsamen Schlüssel für Alice und Bob zu erzeugen. Sie fügt außerdem einen Click-Handler für den Button „Encrypt“ hinzu, der den im ersten `<input>` eingegebenen Text verschlüsselt und anschließend entschlüsselt. Der gesamte Code befindet sich innerhalb eines `try...catch`-Handlers. So können wir den Fall protokollieren, dass die Schlüsselerzeugung fehlschlägt, weil der X25519-Algorithmus nicht unterstützt wird.

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

Klicken Sie auf den Button „Encrypt“, um den Text im oberen `<input>`-Element zu verschlüsseln. In den beiden folgenden Elementen werden der verschlüsselte Text und der wieder entschlüsselte Text angezeigt. Der Protokollbereich unten enthält Informationen über die vom Code erzeugten Schlüssel.

{{EmbedLiveSample("X25519 derived shared key", "100%", "400px")}}

### PBKDF2: AES-Schlüssel aus einem Passwort ableiten

In diesem Beispiel fragen wir die Benutzerin oder den Benutzer nach einem Passwort, leiten daraus mit PBKDF2 einen AES-Schlüssel ab und verwenden diesen anschließend zum Verschlüsseln einer Nachricht. [Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

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

### HKDF: AES-Schlüssel aus einem gemeinsamen Geheimnis ableiten

In diesem Beispiel verschlüsseln wir eine Nachricht `plainText` mithilfe eines gemeinsamen Geheimnisses `secret`, das seinerseits beispielsweise mit einem Algorithmus wie ECDH abgeleitet worden sein könnte. Statt das gemeinsame Geheimnis direkt zu verwenden, nutzen wir es als Schlüsselmaterial für die HKDF-Funktion. Damit leiten wir einen AES-GCM-Schlüssel ab, den wir anschließend zum Verschlüsseln der Nachricht verwenden. [Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/hkdf.js)

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
- [Übersicht zur sicheren Speicherung von Passwörtern](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Empfehlungen zur Wahl der Iterationszahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
