---
title: "SubtleCrypto: deriveBits() Methode"
short-title: deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`deriveBits()`** Methode der
[`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle kann verwendet werden, um ein Array von Bits aus einem Basisschlüssel abzuleiten.

Sie nimmt als Argumente den Basisschlüssel, den zu verwendenden Ableitungsalgorithmus und die Länge der abzuleitenden Bits. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
zurück, das mit einem
[`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
erfüllt wird, welcher die abgeleiteten Bits enthält.

Diese Methode ist `SubtleCrypto.deriveKey()` sehr ähnlich, mit dem Unterschied, dass `deriveKey()` ein
[`CryptoKey`](/de/docs/Web/API/CryptoKey) Objekt anstelle eines
`ArrayBuffer` zurückgibt. Grundsätzlich ist `deriveKey()` aus
`deriveBits()` gefolgt von
[`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) zusammengesetzt.

Diese Funktion unterstützt die gleichen Ableitungsalgorithmen wie `deriveKey()`: ECDH, HKDF, PBKDF2 und X25519.
Sehen Sie [Unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) für weitere Details zu diesen Algorithmen.

## Syntax

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den [Ableitungsalgorithmus](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) definiert, der verwendet werden soll.
    - Um [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams) Objekt und geben den String `ECDH` als `name` Eigenschaft an.
    - Um [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams) Objekt.
    - Um [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) zu verwenden, übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params) Objekt.
    - Um [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams) Objekt und geben den String `X25519` als `name` Eigenschaft an.
- `baseKey`
  - : Ein [`CryptoKey`](/de/docs/Web/API/CryptoKey), der den Input für den Ableitungsalgorithmus darstellt. Wenn `algorithm` ECDH ist, wird dies der ECDH-Privatschlüssel sein. Andernfalls wird es das initiale Schlüsselmaterium für die Ableitungsfunktion sein: Zum Beispiel könnte es bei PBKDF2 ein Passwort sein, das als `CryptoKey` mithilfe von [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) importiert wurde.
- `length`
  - : Eine Zahl, die die Anzahl der abzuleitenden Bits repräsentiert. Um mit allen Browsern kompatibel zu sein, sollte die Zahl ein Vielfaches von 8 sein.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise),
das mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
erfüllt wird, welcher die abgeleiteten Bits enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der _length_ Parameter des `deriveBits()` Aufrufs null ist und auch in einigen Fällen, wenn der _length_ Parameter kein Vielfaches von 8 ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Basisschlüssel kein Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der [`CryptoKey.usages`](/de/docs/Web/API/CryptoKey) Wert dieses Schlüssels nicht `deriveBits` enthält.
- `NotSupported` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder nicht für die Ableitung geeignet ist.

## Unterstützte Algorithmen

Siehe den [Abschnitt über unterstützte Algorithmen in der `deriveKey()` Dokumentation](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Beispiele

> [!NOTE]
> Sie können die [funktionsfähigen Beispiele auf GitHub ausprobieren](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html).

### ECDH

In diesem Beispiel generieren Alice und Bob jeweils ein ECDH-Schlüsselpaar.

Wir verwenden dann Alice's privaten Schlüssel und Bob's öffentlichen Schlüssel, um ein gemeinsames Geheimnis abzuleiten. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)

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

In diesem Beispiel generieren Alice und Bob jeweils ein X25519-Schlüsselpaar. Wir verwenden dann Alice's privaten Schlüssel und Bob's öffentlichen Schlüssel, um ein Geheimnis abzuleiten, und vergleichen dies mit dem Geheimnis, das mit Bob's privaten Schlüssel und Alice's öffentlichen Schlüssel generiert wurde, um zu zeigen, dass sie geteilt/identisch sind.

#### HTML

Das HTML definiert zwei Schaltflächen. Die Schaltfläche "Schlüssel ändern" wird gedrückt, um neue Schlüsselpaaren für Alice und Bob zu generieren. Die Schaltfläche "Bits ableiten" wird gedrückt, um ein gemeinsames Geheimnis mit dem aktuellen Satz von Schlüsselpaaren abzuleiten.

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

Die Funktion zur Generierung eines gemeinsamen Geheimnisses unter Verwendung des X25519-Algorithmus wird unten gezeigt. Sie nimmt einen privaten Schlüssel von einer Partei und den öffentlichen Schlüssel von einer anderen Partei.

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

Der folgende Code fügt eine Funktion hinzu, um neue Schlüssel für Alice und Bob zu generieren. Dies geschieht beim ersten Laden des JavaScripts und wird jedes Mal wiederholt, wenn die Schaltfläche "Schlüssel ändern" gedrückt wird (dies ermöglicht es uns, die Auswirkung des Schlüsselwechsels auf das gemeinsame Geheimnis zu sehen).

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

Der folgende Code fügt eine Handler-Funktion hinzu, die jedes Mal aufgerufen wird, wenn die Schaltfläche "Bits ableiten" gedrückt wird. Der Handler generiert die gemeinsamen Geheimnisse für Alice und Bob unter Verwendung der oben definierten `deriveSharedSecret()` Methode und protokolliert sie, um den Vergleich zu erleichtern.

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

Drücken Sie die Schaltfläche "Bits ableiten", um ein gemeinsames Geheimnis aus Bob's und Alice's Schlüsseln zu generieren und zu protokollieren. Drücken Sie die Schaltfläche "Schlüssel ändern", um die von beiden Parteien verwendeten X25519-Schlüssel zu ändern.

{{EmbedLiveSample("X25519", "100%", "340px")}}

### PBKDF2

In diesem Beispiel bitten wir den Benutzer um ein Passwort, das dann verwendet wird, um einige Bits mit PBKDF2 abzuleiten. [Sehen Sie den vollständigen Code auf GitHub.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)

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

- [HKDF Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST-Richtlinien für passwortbasierte Schlüsselerzeugung](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Leitfaden zur Speicherung von Passwörtern](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Ratschläge zur Auswahl einer Iterationsanzahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
