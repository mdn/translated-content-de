---
title: "SubtleCrypto: Methode deriveBits()"
short-title: deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
l10n:
  sourceCommit: 1efed35637ca064574e1f7928ddcfa34d54d7b56
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die Methode **`deriveBits()`** der Schnittstelle [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) kann verwendet werden, um ein Bit-Array aus einem Basisschlüssel abzuleiten.

Sie akzeptiert als Argumente den Basisschlüssel, den zu verwendenden Ableitungsalgorithmus und die Länge der abzuleitenden Bits.
Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
zurück, das mit einem
[`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
erfüllt wird, der die abgeleiteten Bits enthält.

Diese Methode ist [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) sehr ähnlich, mit der Ausnahme, dass `deriveKey()` ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt statt eines `ArrayBuffer` zurückgibt.
Im Wesentlichen besteht `deriveKey()` aus `deriveBits()`, gefolgt von [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

Diese Funktion unterstützt dieselben Ableitungsalgorithmen wie `deriveKey()`: ECDH, HKDF, PBKDF2 und X25519.
Weitere Details zu diesen Algorithmen finden Sie unter [Unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Syntax

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) definiert.
    - Um [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt und geben Sie die Zeichenfolge `ECDH` als Eigenschaft `name` an.
    - Um [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Um [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) zu verwenden, übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)-Objekt.
    - Um [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt und geben Sie die Zeichenfolge `X25519` als Eigenschaft `name` an.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der die Eingabe für den Ableitungsalgorithmus darstellt.
    Wenn `algorithm` ECDH oder X25519 ist, handelt es sich dabei um den privaten Schlüssel.
    Andernfalls handelt es sich um das anfängliche Schlüsselmaterial für die Ableitungsfunktion: Bei PBKDF2 könnte dies beispielsweise ein Passwort sein, das mit [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) als `CryptoKey` importiert wurde.
- `length`
  - : Eine Zahl, die die Anzahl der abzuleitenden Bits darstellt.
    Um mit allen Browsern kompatibel zu sein, sollte die Zahl ein Vielfaches von 8 sein.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise),
das mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
erfüllt wird, der die abgeleiteten Bits enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `TypeError`
  - : Wird ausgelöst, wenn der Parameter _length_ des Aufrufs von `deriveBits()` negativ, nicht endlich (`NaN` oder `Infinity`) oder größer als 4294967295 (`2^32 - 1`) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird aus Gründen ausgelöst, die spezifisch für den angeforderten Ableitungsalgorithmus sind.
    - Bei HKDF und PBKDF2 wird sie ausgelöst, wenn der Parameter [`length`](#length) `null` ist oder kein Vielfaches von 8 ist.
    - Bei PBKDF2 wird sie außerdem ausgelöst, wenn der Parameter `iterations` null ist.
    - Bei ECDH und X25519 wird sie ausgelöst, wenn die angeforderte `length` größer ist als die Anzahl der Bits, die der Algorithmus ableiten kann (256 Bits für X25519; die Feldgröße der Kurve für ECDH).
      Nur bei X25519 auch dann, wenn das abgeleitete Geheimnis ausschließlich aus Nullen besteht.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Basisschlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der Wert [`CryptoKey.usages`](/de/docs/Web/API/CryptoKey) dieses Schlüssels `deriveBits` nicht enthält.
    Bei ECDH und X25519 wird sie außerdem ausgelöst, wenn der in `algorithm` übergebene öffentliche Schlüssel kein öffentlicher Schlüssel ist, der Basisschlüssel kein privater Schlüssel ist oder die beiden Schlüssel nicht denselben Algorithmus verwenden (und bei ECDH nicht dieselbe Kurve).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt oder nicht für die Ableitung geeignet ist.

## Unterstützte Algorithmen

Siehe den [Abschnitt zu unterstützten Algorithmen in der `deriveKey()`-Dokumentation](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Beispiele

> [!NOTE]
> Sie können die [funktionierenden Beispiele ausprobieren](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html).

### ECDH

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar.

Anschließend verwenden wir Alices privaten Schlüssel und Bobs öffentlichen Schlüssel, um ein gemeinsames Geheimnis abzuleiten.
[Den vollständigen Code auf GitHub ansehen.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)

```js
async function deriveSharedSecret(privateKey, publicKey) {
  const sharedSecret = await window.crypto.subtle.deriveBits(
    {
      name: "ECDH",
      namedCurve: "P-384",
      public: publicKey,
    },
    privateKey,
    128,
  );

  const buffer = new Uint8Array(sharedSecret, 0, 5);
  const sharedSecretValue = document.querySelector(".ecdh .derived-bits-value");
  sharedSecretValue.classList.add("fade-in");
  sharedSecretValue.addEventListener("animationend", () => {
    sharedSecretValue.classList.remove("fade-in");
  });
  sharedSecretValue.textContent = `${buffer}…[${sharedSecret.byteLength} bytes total]`;
}

// Generate 2 ECDH key pairs: one for Alice and one for Bob
// In more normal usage, they would generate their key pairs
// separately and exchange public keys securely
const generateAliceKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

const generateBobKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

Promise.all([generateAliceKeyPair, generateBobKeyPair]).then((values) => {
  const aliceKeyPair = values[0];
  const bobKeyPair = values[1];

  const deriveBitsButton = document.querySelector(".ecdh .derive-bits-button");
  deriveBitsButton.addEventListener("click", () => {
    // Alice then generates a secret using her private key and Bob's public key.
    // Bob could generate the same secret using his private key and Alice's public key.
    deriveSharedSecret(aliceKeyPair.privateKey, bobKeyPair.publicKey);
  });
});
```

### X25519

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar.
Anschließend verwenden wir Alices privaten Schlüssel und Bobs öffentlichen Schlüssel, um ein Geheimnis abzuleiten, und vergleichen es mit dem Geheimnis, das mit Bobs privatem Schlüssel und Alices öffentlichem Schlüssel erzeugt wurde, um zu zeigen, dass sie geteilt/identisch sind.

#### HTML

Das HTML definiert zwei Schaltflächen.
Die Schaltfläche „Change keys“ wird gedrückt, um neue Schlüsselpaare für Alice und Bob zu erzeugen.
Die Schaltfläche „Derive bits“ wird gedrückt, um mit dem aktuellen Satz von Schlüsselpaaren ein gemeinsames Geheimnis abzuleiten.

```html
<input id="buttonDeriveKeys" type="button" value="Derive bits" />
<input id="buttonChangeKeys" type="button" value="Change keys" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  width: 90%;
  white-space: pre-wrap; /* wrap pre blocks */
  overflow-wrap: break-word; /* break on words */
  overflow-y: auto;
  padding: 0.5rem;
  border: 1px solid black;
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

Die Funktion zum Erzeugen eines gemeinsamen Geheimnisses mit dem X25519-Algorithmus wird unten gezeigt.
Sie verwendet einen privaten Schlüssel einer Partei und den öffentlichen Schlüssel einer anderen Partei.

```js
async function deriveSharedSecret(privateKey, publicKey) {
  return await window.crypto.subtle.deriveBits(
    {
      name: "X25519",
      public: publicKey,
    },
    privateKey,
    128,
  );
}
```

Der folgende Code fügt eine Funktion hinzu, um neue Schlüssel für Alice und Bob zu erzeugen.
Dies geschieht beim ersten Laden des JavaScript und wird jedes Mal wiederholt, wenn die Schaltfläche „Change keys“ gedrückt wird (dadurch können wir die Auswirkung eines Schlüsselwechsels auf das gemeinsame Geheimnis sehen).

```js
let aliceKeyPair;
let bobKeyPair;

async function changeKeys() {
  try {
    aliceKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveBits"],
    );

    bobKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveBits"],
    );

    log("Keys changed");
  } catch (e) {
    log(e);
  }
}

changeKeys();

const changeKeysButton = document.querySelector("#buttonChangeKeys");

// Generate 2 X25519 key pairs: one for Alice and one for Bob
// In more normal usage, they would generate their key pairs
// separately and exchange public keys securely
changeKeysButton.addEventListener("click", changeKeys);
```

Der folgende Code fügt eine Handler-Funktion hinzu, die jedes Mal aufgerufen wird, wenn die Schaltfläche „Derive bits“ gedrückt wird.
Der Handler erzeugt die gemeinsamen Geheimnisse für Alice und Bob mithilfe der oben definierten Methode `deriveSharedSecret()` und protokolliert sie für einen einfachen Vergleich.

```js
const deriveBitsButton = document.querySelector("#buttonDeriveKeys");

deriveBitsButton.addEventListener("click", async () => {
  // Generate 2 X25519 key pairs: one for Alice and one for Bob
  // In more normal usage, they would generate their key pairs
  // separately and exchange public keys securely

  // Alice then generates a secret using her private key and Bob's public key.
  // Bob could generate the same secret using his private key and Alice's public key.

  const sharedSecretAlice = await deriveSharedSecret(
    aliceKeyPair.privateKey,
    bobKeyPair.publicKey,
  );

  let buffer = new Uint8Array(sharedSecretAlice, 0, 10);
  log(`${buffer}…[${sharedSecretAlice.byteLength} bytes total] (Alice secret)`);

  const sharedSecretBob = await deriveSharedSecret(
    bobKeyPair.privateKey,
    aliceKeyPair.publicKey,
  );

  buffer = new Uint8Array(sharedSecretBob, 0, 10);
  log(`${buffer}…[${sharedSecretAlice.byteLength} bytes total] (Bob secret)`);
});
```

#### Ergebnis

Drücken Sie die Schaltfläche „Derive bits“, um ein gemeinsames Geheimnis aus Bobs und Alices Schlüsseln zu erzeugen und zu protokollieren.
Drücken Sie die Schaltfläche „Change keys“, um die von beiden Parteien verwendeten X25519-Schlüssel zu ändern.

{{EmbedLiveSample("X25519", "100%", "340px")}}

### PBKDF2

In diesem Beispiel fragen wir den Benutzer nach einem Passwort und verwenden es anschließend, um mit PBKDF2 einige Bits abzuleiten.
[Den vollständigen Code auf GitHub ansehen.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)

```js
let salt;

/*
Get some key material to use as input to the deriveBits method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Derive some bits from a password supplied by the user.
*/
async function getDerivedBits() {
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  const buffer = new Uint8Array(derivedBits, 0, 5);
  const derivedBitsValue = document.querySelector(
    ".pbkdf2 .derived-bits-value",
  );
  derivedBitsValue.classList.add("fade-in");
  derivedBitsValue.addEventListener("animationend", () => {
    derivedBitsValue.classList.remove("fade-in");
  });
  derivedBitsValue.textContent = `${buffer}…[${derivedBits.byteLength} bytes total]`;
}

const deriveBitsButton = document.querySelector(".pbkdf2 .derive-bits-button");
deriveBitsButton.addEventListener("click", () => {
  getDerivedBits();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST-Leitlinien für passwortbasierte Schlüsselableitung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Spickzettel zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Empfehlungen zur Wahl einer Iterationsanzahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
