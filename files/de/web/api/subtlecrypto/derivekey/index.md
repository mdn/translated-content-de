---
title: "SubtleCrypto: deriveKey()-Methode"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: b5d8d9a015a58ad0403bbffe931594193396ca87
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`deriveKey()`**-Methode der {{domxref("SubtleCrypto")}}-Schnittstelle kann verwendet werden, um einen Geheimschlüssel aus einem Master-Schlüssel abzuleiten.

Sie nimmt als Argumente ein erstes Schlüsselmateriel, den zu verwendenden Ableitungsalgorithmus und die gewünschten Eigenschaften für den abzuleitenden Schlüssel.
Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem {{domxref("CryptoKey")}}-Objekt erfüllt wird, das den neuen Schlüssel darstellt.

Es ist erwähnenswert, dass die unterstützten Schlüsselderivierungsalgorithmen ganz unterschiedliche Eigenschaften aufweisen und in sehr unterschiedlichen Situationen geeignet sind.
Siehe [Unterstützte Algorithmen](#unterstützte_algorithmen) für weitere Details.

## Syntax

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](#unterstützte_algorithmen) definiert.
    - Um [ECDH](#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt, bei dem die Zeichenkette `ECDH` als `name`-Eigenschaft angegeben wird.
    - Um [HKDF](#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Um [X25519](#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt, bei dem die Zeichenkette `X25519` als `name`-Eigenschaft angegeben wird.
- `baseKey`
  - : Ein {{domxref("CryptoKey")}}, der den Eingang zum Ableitungsalgorithmus darstellt.
    Wenn `algorithm` ECDH oder X25519 ist, dann wird dies der ECDH- oder X25519-Privatschlüssel sein.
    Andernfalls wird es das Anfangsschlüsselmateriel für die Ableitungsfunktion sein: zum Beispiel könnte es für PBKDF2 ein Passwort sein, das mit [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) als `CryptoKey` importiert wurde.
- `derivedKeyAlgorithm`
  - : Ein Objekt, das den Algorithmus definiert, für den der abgeleitete Schlüssel verwendet wird:
    - Für [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac) übergeben Sie ein [`HmacKeyGenParams`](/de/docs/Web/API/HmacKeyGenParams)-Objekt.
    - Für [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/de/docs/Web/API/SubtleCrypto/encrypt#aes-cbc), [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) oder [AES-KW](/de/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) übergeben Sie ein [`AesKeyGenParams`](/de/docs/Web/API/AesKeyGenParams)-Objekt.
    - Für [HKDF](#hkdf) übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Für [PBKDF2](#pbkdf2) übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)-Objekt.
- `extractable`
  - : Ein boolescher Wert, der angibt, ob es möglich sein wird, den Schlüssel mit {{domxref("SubtleCrypto.exportKey()")}} oder {{domxref("SubtleCrypto.wrapKey()")}} zu exportieren.
- `keyUsages`
  - : Ein {{jsxref("Array")}}, das angibt, was mit dem abgeleiteten Schlüssel getan werden kann.
    Beachten Sie, dass die Schlüsselnutzungen durch den Algorithmus in `derivedKeyAlgorithm` erlaubt sein müssen.
    Mögliche Werte des Arrays sind:
    - `encrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [verschlüsseln](/de/docs/Web/API/SubtleCrypto/encrypt).
    - `decrypt`: Der Schlüssel kann verwendet werden, um Nachrichten zu [entschlüsseln](/de/docs/Web/API/SubtleCrypto/decrypt).
    - `sign`: Der Schlüssel kann verwendet werden, um Nachrichten zu [signieren](/de/docs/Web/API/SubtleCrypto/sign).
    - `verify`: Der Schlüssel kann verwendet werden, um Signaturen zu [verifizieren](/de/docs/Web/API/SubtleCrypto/verify).
    - `deriveKey`: Der Schlüssel kann verwendet werden, um einen neuen Schlüssel abzuleiten.
    - `deriveBits`: Der Schlüssel kann verwendet werden, um [Bits abzuleiten](/de/docs/Web/API/SubtleCrypto/deriveBits).
    - `wrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [umhüllen](/de/docs/Web/API/SubtleCrypto/wrapKey).
    - `unwrapKey`: Der Schlüssel kann verwendet werden, um einen Schlüssel zu [entpacken](/de/docs/Web/API/SubtleCrypto/unwrapKey).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("CryptoKey")}} erfüllt wird.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Master-Schlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der `keyUsages`-Wert dieses Schlüssels nicht `deriveKey` enthält.
- `NotSupported` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder für die Ableitung nicht geeignet ist, oder wenn der angeforderte Algorithmus für den abgeleiteten Schlüssel keine Schlüssellänge definiert.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `keyUsages` leer ist, aber der unentpackte Schlüssel vom Typ `secret` oder `private` ist.

## Unterstützte Algorithmen

Die von `deriveKey()` unterstützten Algorithmen haben ganz unterschiedliche Eigenschaften und sind in unterschiedlichen Situationen geeignet.

### Schlüsselerzeugungsalgorithmen

#### HKDF

HKDF ist eine _Schlüsselerzeugungsfunktion_.
Es ist dafür ausgelegt, Schlüsselmateriel aus einem hochentropischen Eingang abzuleiten, wie z.B. dem Ergebnis einer ECDH-Schlüsselvereinbarung.

Es ist _nicht_ dafür gedacht, Schlüssel aus relativ entropiearmen Eingaben wie Passwörtern abzuleiten.
Dafür sollten Sie PBKDF2 verwenden.

HKDF ist in [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) spezifiziert.

#### PBKDF2

PBKDF2 ist ebenfalls eine _Schlüsselerzeugungsfunktion_.
Es soll Schlüsselmateriel aus einer relativ entropiearmen Eingabe wie einem Passwort ableiten.
Es leitet Schlüsselmateriel ab, indem es eine Funktion wie HMAC auf das Eingabepasswort zusammen mit etwas Salz anwendet und diesen Prozess viele Male wiederholt.
Je öfter der Prozess wiederholt wird, desto rechenintensiver ist die Schlüsselerzeugung: dies erschwert es einem Angreifer, das Passwort mit einem Wörterbuchangriff durch rohe Gewalt zu erraten.

PBKDF2 ist in [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) spezifiziert.

### Schlüsselvereinbarungsalgorithmen

#### ECDH

ECDH (Elliptic Curve Diffie-Hellman) ist ein _Schlüsselvereinbarungsalgorithmus_.
Er ermöglicht es zwei Personen, die jeweils ein ECDH-Öffentlich/Privat-Schlüsselpaar haben, ein gemeinsames Geheimnis zu erzeugen: das ist ein Geheimnis, das sie - und niemand sonst - teilen.
Sie können dann dieses gemeinsame Geheimnis als symmetrischen Schlüssel verwenden, um ihre Kommunikation zu sichern, oder das Geheimnis als Eingang verwenden, um einen solchen Schlüssel abzuleiten (zum Beispiel mithilfe des HKDF-Algorithmus).

ECDH ist in [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) spezifiziert.

#### X25519

X25519 ist ein Schlüsselvereinbarungsalgorithmus wie ECDH, aber basierend auf der [Curve25519](https://en.wikipedia.org/wiki/Curve25519) Elliptischen Kurve, die Teil des Edwards-Curve Digital Signature Algorithm (EdDSA) Familie von Algorithmen ist, die in {{rfc("8032")}} definiert sind.

Die Curve25519-Algorithmen sind in der Kryptografie weit verbreitet und gelten als einige der effizientesten/schnellsten verfügbaren.
Verglichen mit den NIST (National Institute of Standards and Technology) Kurven-Schlüsselaustausch-Algorithmen, die mit ECDH verwendet werden, ist Curve25519 einfacher zu implementieren, und sein nicht-staatlicher Ursprung bedeutet, dass die Entscheidungen hinter den Designauswahlen transparent und offen sind.

X25519 ist in {{rfc("7748")}} spezifiziert.

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele auf GitHub](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html) ausprobieren.

### ECDH: Gemeinsamen geheimen Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar und tauschen dann öffentliche Schlüssel aus.
Sie verwenden dann `deriveKey()`, um einen gemeinsamen AES-Schlüssel abzuleiten, den sie verwenden könnten, um Nachrichten zu verschlüsseln.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
Leiten Sie einen AES-Schlüssel ab, gegeben:
- unser ECDH-Privatschlüssel
- ihr ECDH-Öffentlicher Schlüssel
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
  // Generieren Sie 2 ECDH-Schlüsselpaaren: eins für Alice und eins für Bob
  // Bei normaler Nutzung würden sie ihre Schlüsselpaaren
  // getrennt generieren und die öffentlichen Schlüssel sicher austauschen
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

  // Alice erzeugt dann einen geheimen Schlüssel mit ihrem privaten Schlüssel und Bobs öffentlichem Schlüssel.
  let alicesSecretKey = await deriveSecretKey(
    alicesKeyPair.privateKey,
    bobsKeyPair.publicKey,
  );

  // Bob erzeugt denselben geheimen Schlüssel mit seinem privaten Schlüssel und Alices öffentlichem Schlüssel.
  let bobsSecretKey = await deriveSecretKey(
    bobsKeyPair.privateKey,
    alicesKeyPair.publicKey,
  );

  // Alice kann dann ihre Kopie des geheimen Schlüssels verwenden, um eine Nachricht an Bob zu verschlüsseln.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(alicesSecretKey);
  });

  // Bob kann seine Kopie verwenden, um die Nachricht zu entschlüsseln.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobsSecretKey);
  });
}
```

### X25519: Gemeinsamen geheimen Schlüssel ableiten

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar und tauschen dann öffentliche Schlüssel aus.
Sie verwenden dann jeweils `deriveKey()`, um einen gemeinsamen AES-Schlüssel von ihrem eigenen privaten Schlüssel und den öffentlichen Schlüssel des jeweils anderen abzuleiten.
Sie können diesen gemeinsamen Schlüssel verwenden, um Nachrichten, die sie austauschen, zu verschlüsseln und zu entschlüsseln.

#### HTML

Zuerst definieren wir ein HTML {{HTMLElement("input")}}, das Sie verwenden werden, um die Klartextnachricht einzugeben, die "Alice" senden wird, sowie eine Schaltfläche, die Sie klicken können, um den Verschlüsselungsprozess zu starten.

```html
<label for="message">Klartextnachricht von Alice (Eingeben):</label>
<input
  type="text"
  id="message"
  name="message"
  size="50"
  value="Der Löwe brüllt bei Morgengrauen" />
<input id="encrypt-button" type="button" value="Verschlüsseln" />
```

Dies wird gefolgt von weiteren zwei Elementen zum Anzeigen des Chiffretextes, nachdem Alice den Klartext mit ihrer Kopie des geheimen Schlüssels verschlüsselt hat, und zum Anzeigen des Textes, nachdem Bob ihn mit seiner Kopie des geheimen Schlüssels entschlüsselt hat.

```html
<div id="results">
  <label for="encrypted">Verschlüsselt (Alice)</label>
  <input
    type="text"
    id="encrypted"
    name="encrypted"
    size="30"
    value=""
    readonly />

  <label for="results">Entschlüsselt (Bob)</label>
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

Der unten stehende Code zeigt, wie wir `deriveKey()` verwenden.
Wir geben den X25519-öffentlichen Schlüssel der Gegenpartei, den X25519-privaten Schlüssel der lokalen Partei an und spezifizieren, dass der abgeleitete Schlüssel ein AES-GCM-Schlüssel sein soll.
Wir legen auch fest, dass der abgeleitete Schlüssel nicht extrahierbar und für Verschlüsselung und Entschlüsselung geeignet ist.

Wir verwenden diese Funktion weiter unten im Code, um gemeinsame Schlüssel für Bob und Alice zu erstellen.

```js
/*
Leiten Sie einen AES-GCM-Schlüssel ab, gegeben:
- unser X25519-Privatschlüssel
- ihr X25519-Öffentlicher Schlüssel
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

Als nächstes definieren wir die Funktionen, die Alice verwenden wird, um ihre Klartextnachricht in {{glossary("UTF-8")}} zu kodieren und dann zu verschlüsseln, und die Bob verwenden wird, um die Nachricht zu entschlüsseln und dann zu dekodieren.
Beide nehmen als Argumente den gemeinsamen AES-Schlüssel, einen [Initialisierungsvektor](/de/docs/Web/API/AesGcmParams#iv) und den zu verschlüsselnden oder zu entschlüsselnden Text.

Der gleiche Initialisierungsvektor muss für Verschlüsselung und Entschlüsselung verwendet werden, aber er muss nicht geheim sein, daher wird er normalerweise zusammen mit der verschlüsselten Nachricht gesendet.
In diesem Fall, da wir keine Nachricht tatsächlich versenden, machen wir ihn direkt verfügbar.

```js
async function encryptMessage(key, initializationVector, message) {
  try {
    const encoder = new TextEncoder();
    encodedMessage = encoder.encode(message);
    // iv wird zur Entschlüsselung benötigt
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
      // Der iv-Wert muss der gleiche wie bei der Verschlüsselung sein
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

Die Funktion `agreeSharedSecretKey()` wird beim Laden aufgerufen, um Paare und gemeinsame Schlüssel für Alice und Bob zu generieren.
Sie fügt auch einen Click-Handler für die Schaltfläche "Verschlüsseln" hinzu, der die Verschlüsselung und Entschlüsselung des Textes auslöst, der im ersten `<input>` definiert ist.
Beachten Sie, dass der gesamte Code in einem `try...catch`-Handler ist, um sicherzustellen, dass wir den Fall protokollieren können, in dem die Schlüsselerzeugung fehlschlägt, weil der X25519-Algorithmus nicht unterstützt wird.

```js
async function agreeSharedSecretKey() {
  try {
    // Generieren Sie 2 X25519-Schlüsselpaaren: eins für Alice und eins für Bob
    // Bei normaler Nutzung würden sie ihre Schlüsselpaaren
    // getrennt generieren und die öffentlichen Schlüssel sicher austauschen
    const alicesKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Erstellt Alices Schlüsselpaar: (Algorithmus: ${JSON.stringify(
        alicesKeyPair.privateKey.algorithm,
      )}, Nutzungen: ${alicesKeyPair.privateKey.usages})`,
    );

    const bobsKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveKey"],
    );

    log(
      `Erstellt Bobs Schlüsselpaar: (Algorithmus: ${JSON.stringify(
        bobsKeyPair.privateKey.algorithm,
      )}, Nutzungen: ${bobsKeyPair.privateKey.usages})`,
    );

    // Alice erzeugt dann einen geheimen Schlüssel mit ihrem privaten Schlüssel und Bobs öffentlichem Schlüssel.
    const alicesSecretKey = await deriveSecretKey(
      alicesKeyPair.privateKey,
      bobsKeyPair.publicKey,
    );

    log(
      `alicesSecretKey: ${alicesSecretKey.type} (Algorithmus: ${JSON.stringify(
        alicesSecretKey.algorithm,
      )}, Nutzungen: ${alicesSecretKey.usages}), `,
    );

    // Bob erzeugt denselben geheimen Schlüssel mit seinem privaten Schlüssel und Alices öffentlichem Schlüssel.
    const bobsSecretKey = await deriveSecretKey(
      bobsKeyPair.privateKey,
      alicesKeyPair.publicKey,
    );

    log(
      `bobsSecretKey: ${bobsSecretKey.type} (Algorithmus: ${JSON.stringify(
        bobsSecretKey.algorithm,
      )}, Nutzungen: ${bobsSecretKey.usages}), \n`,
    );

    // Zugriffsrechte für die Schaltfläche verschlüsseln und die drei Eingaben erhalten
    const encryptButton = document.querySelector("#encrypt-button");
    const messageInput = document.querySelector("#message");
    const encryptedInput = document.querySelector("#encrypted");
    const decryptedInput = document.querySelector("#decrypted");

    encryptButton.addEventListener("click", async () => {
      log(`Klartext: ${messageInput.value}`);

      // Definieren Sie den Initialisierungsvektor, der bei der Verschlüsselung und Entschlüsselung verwendet wird.
      // Dieser muss für jede Nachricht neu generiert werden!
      const initializationVector = window.crypto.getRandomValues(
        new Uint8Array(8),
      );

      // Alice kann ihre Kopie des gemeinsamen Schlüssels verwenden, um die Nachricht zu verschlüsseln.
      const encryptedMessage = await encryptMessage(
        alicesSecretKey,
        initializationVector,
        messageInput.value,
      );

      // Wir zeigen dann einen Teil des verschlüsselten Buffers an und protokollieren die verschlüsselte Nachricht
      let buffer = new Uint8Array(encryptedMessage, 0, 5);
      encryptedInput.value = `${buffer}...[${encryptedMessage.byteLength} Bytes insgesamt]`;

      log(
        `encryptedMessage: ${buffer}...[${encryptedMessage.byteLength} Bytes insgesamt]`,
      );

      // Bob verwendet seinen gemeinsamen geheimen Schlüssel, um die Nachricht zu entschlüsseln.
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

// Schließlich rufen wir die Methode auf, um das Beispiel zu starten.
agreeSharedSecretKey();
```

#### Ergebnis

Drücken Sie die Schaltfläche Verschlüsseln, um den Text im oberen `<input>`-Element zu verschlüsseln, der den verschlüsselten und entschlüsselten Text in den beiden folgenden Elementen anzeigt.
Der Protokollbereich unten bietet Informationen über die Schlüssel, die durch den Code generiert werden.

{{EmbedLiveSample("X25519 abgeleiteter gemeinsamer Schlüssel", "100%", "400px")}}

### PBKDF2: AES-Schlüssel aus Passwort ableiten

In diesem Beispiel fragen wir den Benutzer nach einem Passwort, verwenden es dann, um einen AES-Schlüssel mithilfe von PBKDF2 abzuleiten und verwenden dann den AES-Schlüssel, um eine Nachricht zu verschlüsseln.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
Holen Sie sich etwas Schlüsselmateriel, um es als Eingabe für die deriveKey-Methode zu verwenden.
Das Schlüsselmateriel ist ein Passwort, das vom Benutzer bereitgestellt wird.
*/
function getKeyMaterial() {
  const password = window.prompt("Geben Sie Ihr Passwort ein");
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

In diesem Beispiel verschlüsseln wir eine Nachricht `plainText` basierend auf einem gemeinsamen Geheimnis `secret`, das selbst mithilfe eines Algorithmus wie ECDH abgeleitet worden sein könnte.
Anstatt das gemeinsame Geheimnis direkt zu verwenden, verwenden wir es als Schlüsselmateriel für die HKDF-Funktion, um einen AES-GCM-Verschlüsselungsschlüssel abzuleiten, den wir dann verwenden, um die Nachricht zu verschlüsseln.
[Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/hkdf.js)

```js
/*
  Geben Sie etwas Schlüsselmateriel und etwas zufälliges Salz,
  leiten Sie einen AES-GCM-Schlüssel mittels HKDF ab.
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
- [NIST-Richtlinien zur passwortbasierten Schlüsselerzeugung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Cheat Sheet zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Rat zur Auswahl einer Iterationsanzahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
