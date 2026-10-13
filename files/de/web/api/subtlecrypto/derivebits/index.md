---
title: "SubtleCrypto: Methode deriveBits()"
short-title: deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Mit der Methode **`deriveBits()`** der Schnittstelle [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) lässt sich aus einem Basisschlüssel eine Folge von Bits ableiten.

Als Argumente erwartet sie den Basisschlüssel, den zu verwendenden Ableitungsalgorithmus und die Anzahl der abzuleitenden Bits. Sie gibt eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, die mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der die abgeleiteten Bits enthält.

Diese Methode ähnelt [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) sehr. Allerdings gibt `deriveKey()` ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt statt eines `ArrayBuffer` zurück. Im Wesentlichen besteht `deriveKey()` aus `deriveBits()`, gefolgt von [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

Diese Funktion unterstützt dieselben Ableitungsalgorithmen wie `deriveKey()`: ECDH, HKDF, PBKDF2 und X25519. Weitere Informationen zu diesen Algorithmen finden Sie unter [Unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Syntax

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) definiert.
    - Für [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt mit der Zeichenfolge `ECDH` als `name`-Eigenschaft.
    - Für [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf) übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Für [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)-Objekt.
    - Für [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt mit der Zeichenfolge `X25519` als `name`-Eigenschaft.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der die Eingabe für den Ableitungsalgorithmus darstellt. Wenn `algorithm` ECDH oder X25519 ist, handelt es sich um den privaten Schlüssel. Andernfalls ist es das anfängliche Schlüsselmaterial für die Ableitungsfunktion: Bei PBKDF2 könnte es beispielsweise ein Passwort sein, das mit [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) als `CryptoKey` importiert wurde.
- `length`
  - : Eine Zahl, die angibt, wie viele Bits abgeleitet werden sollen. Damit die Methode mit allen Browsern kompatibel ist, sollte die Zahl ein Vielfaches von 8 sein.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der die abgeleiteten Bits enthält.

### Ausnahmen

Die Promise wird zurückgewiesen, wenn eine der folgenden Ausnahmen auftritt:

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter _length_ beim Aufruf von `deriveBits()` negativ, nicht endlich (`NaN` oder `Infinity`) oder größer als 4294967295 (`2^32 - 1`) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird aus Gründen ausgelöst, die vom angeforderten Ableitungsalgorithmus abhängen.
    - Bei HKDF und PBKDF2, wenn der Parameter [`length`](#length) `null` oder kein Vielfaches von 8 ist.
    - Bei PBKDF2 auch, wenn der Parameter `iterations` null ist.
    - Bei ECDH und X25519, wenn der angeforderte Wert für `length` die Anzahl der Bits übersteigt, die der Algorithmus ableiten kann (256 Bits bei X25519; die Größe des zugrunde liegenden Feldes der Kurve bei ECDH). Nur bei X25519 auch dann, wenn das abgeleitete Geheimnis ausschließlich aus Nullen besteht.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Basisschlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder der Wert von [`CryptoKey.usages`](/de/docs/Web/API/CryptoKey) für diesen Schlüssel `deriveBits` nicht enthält. Bei ECDH und X25519 auch dann, wenn der in `algorithm` übergebene öffentliche Schlüssel kein öffentlicher Schlüssel ist, der Basisschlüssel kein privater Schlüssel ist oder die beiden Schlüssel nicht denselben Algorithmus verwenden (und bei ECDH nicht dieselbe Kurve).
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein unbekannter oder für die Ableitung ungeeigneter Algorithmus verwendet werden soll.

## Unterstützte Algorithmen

Siehe den [Abschnitt über unterstützte Algorithmen in der Dokumentation zu `deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Beispiele

> [!NOTE]
> Sie können die [funktionsfähigen Beispiele](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html) auf GitHub ausprobieren.

### ECDH

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar.

Anschließend leiten wir mit Alices privatem Schlüssel und Bobs öffentlichem Schlüssel ein gemeinsames Geheimnis ab. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)

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

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar. Anschließend leiten wir mit Alices privatem Schlüssel und Bobs öffentlichem Schlüssel ein Geheimnis ab und vergleichen es mit dem Geheimnis, das mit Bobs privatem Schlüssel und Alices öffentlichem Schlüssel erzeugt wurde. So lässt sich zeigen, dass beide Geheimnisse identisch sind.

#### HTML

Das HTML definiert zwei Schaltflächen. Mit „Change keys“ werden neue Schlüsselpaare für Alice und Bob erzeugt. Mit „Derive bits“ wird aus den aktuellen Schlüsselpaaren ein gemeinsames Geheimnis abgeleitet.

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

Die folgende Funktion erzeugt mit dem X25519-Algorithmus ein gemeinsames Geheimnis. Sie nimmt den privaten Schlüssel einer Partei und den öffentlichen Schlüssel der anderen entgegen.

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

Der folgende Code fügt eine Funktion hinzu, die neue Schlüssel für Alice und Bob erzeugt. Sie wird beim ersten Laden des JavaScripts und danach bei jedem Klick auf „Change keys“ ausgeführt. So können wir sehen, wie sich ein Schlüsselwechsel auf das gemeinsame Geheimnis auswirkt.

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

Der folgende Code fügt eine Handler-Funktion hinzu, die bei jedem Klick auf „Derive bits“ aufgerufen wird. Der Handler erzeugt mit der oben definierten Methode `deriveSharedSecret()` die gemeinsamen Geheimnisse für Alice und Bob und protokolliert sie, damit sie sich leicht vergleichen lassen.

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

Klicken Sie auf „Derive bits“, um aus den Schlüsseln von Bob und Alice ein gemeinsames Geheimnis zu erzeugen und zu protokollieren. Klicken Sie auf „Change keys“, um die X25519-Schlüssel beider Parteien zu ändern.

{{EmbedLiveSample("X25519", "100%", "340px")}}

### PBKDF2

In diesem Beispiel fragen wir die Benutzerin oder den Benutzer nach einem Passwort und leiten daraus mit PBKDF2 einige Bits ab. [Den vollständigen Code finden Sie auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)

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
- [NIST-Richtlinien zur passwortbasierten Schlüsselableitung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Kurzübersicht zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Empfehlungen zur Wahl der Iterationszahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
