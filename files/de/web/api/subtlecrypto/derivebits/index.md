---
title: "SubtleCrypto: deriveBits() Methode"
short-title: deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
l10n:
  sourceCommit: b5d8d9a015a58ad0403bbffe931594193396ca87
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`deriveBits()`**-Methode der
{{domxref("SubtleCrypto")}}-Schnittstelle kann verwendet werden, um ein Array von Bits aus einem Basisschlüssel abzuleiten.

Sie nimmt als Argumente den Basisschlüssel, den zu verwendenden Ableitungsalgorithmus und die Länge der abzuleitenden Bits. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, welches mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der die abgeleiteten Bits enthält.

Diese Methode ist sehr ähnlich zu [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), außer dass `deriveKey()` ein [`CryptoKey`](/de/docs/Web/API/CryptoKey)-Objekt anstelle eines `ArrayBuffer` zurückgibt. Im Wesentlichen besteht `deriveKey()` aus `deriveBits()`, gefolgt von [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

Diese Funktion unterstützt dieselben Ableitungsalgorithmen wie `deriveKey()`: ECDH, HKDF, PBKDF2 und X25519. Siehe [Unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) für weitere Details zu diesen Algorithmen.

## Syntax

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### Parameter

- `algorithm`
  - : Ein Objekt, das den zu verwendenden [Ableitungsalgorithmus](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms) definiert.
    - Um [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt, wobei die Zeichenfolge `ECDH` als `name`-Eigenschaft angegeben wird.
    - Um [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf) zu verwenden, übergeben Sie ein [`HkdfParams`](/de/docs/Web/API/HkdfParams)-Objekt.
    - Um [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) zu verwenden, übergeben Sie ein [`Pbkdf2Params`](/de/docs/Web/API/Pbkdf2Params)-Objekt.
    - Um [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) zu verwenden, übergeben Sie ein [`EcdhKeyDeriveParams`](/de/docs/Web/API/EcdhKeyDeriveParams)-Objekt, wobei die Zeichenfolge `X25519` als `name`-Eigenschaft angegeben wird.
- `baseKey`
  - : Ein {{domxref("CryptoKey")}}, der die Eingabe für den Ableitungsalgorithmus darstellt. Wenn `algorithm` ECDH ist, wird dies der ECDH-Private-Schlüssel sein. Andernfalls wird es das initiale Schlüsselmateriel für die Ableitungsfunktion sein: Zum Beispiel kann es bei PBKDF2 ein Passwort sein, das als `CryptoKey` importiert wird, indem [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) verwendet wird.
- `length`
  - : Eine Zahl, die die Anzahl der abzuleitenden Bits darstellt. Um mit allen Browsern kompatibel zu sein, sollte die Zahl ein Vielfaches von 8 sein.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) erfüllt wird, der die abgeleiteten Bits enthält.

### Ausnahmen

Das Promise wird abgelehnt, wenn eine der folgenden Ausnahmen auftritt:

- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der _length_-Parameter des `deriveBits()`-Aufrufs null ist und auch in einigen Fällen, wenn der _length_-Parameter kein Vielfaches von 8 ist.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Basisschlüssel nicht der Schlüssel für den angeforderten Ableitungsalgorithmus ist oder wenn der [`CryptoKey.usages`](/de/docs/Web/API/CryptoKey)-Wert dieses Schlüssels nicht `deriveBits` enthält.
- `NotSupported` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, einen Algorithmus zu verwenden, der entweder unbekannt ist oder sich nicht für Ableitung eignet.

## Unterstützte Algorithmen

Siehe den Abschnitt über [Unterstützte Algorithmen in der `deriveKey()`-Dokumentation](/de/docs/Web/API/SubtleCrypto/deriveKey#supported_algorithms).

## Beispiele

> [!NOTE]
> Sie können [die funktionierenden Beispiele auf GitHub](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html) ausprobieren.

### ECDH

In diesem Beispiel erzeugen Alice und Bob jeweils ein ECDH-Schlüsselpaar.

Wir verwenden dann Alices privaten Schlüssel und Bobs öffentlichen Schlüssel, um ein gemeinsames Geheimnis abzuleiten. [Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)

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

// Erzeugen Sie 2 ECDH-Schlüsselpaare: eines für Alice und eines für Bob
// Im normalen Gebrauch würden sie ihre Schlüsselpaare separat erzeugen und öffentliche Schlüssel sicher austauschen
const generateAlicesKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

const generateBobsKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

Promise.all([generateAlicesKeyPair, generateBobsKeyPair]).then((values) => {
  const alicesKeyPair = values[0];
  const bobsKeyPair = values[1];

  const deriveBitsButton = document.querySelector(".ecdh .derive-bits-button");
  deriveBitsButton.addEventListener("click", () => {
    // Alice erzeugt dann ein Geheimnis mit ihrem privaten Schlüssel und Bobs öffentlichem Schlüssel.
    // Bob könnte dasselbe Geheimnis mit seinem privaten Schlüssel und Alices öffentlichem Schlüssel erzeugen.
    deriveSharedSecret(alicesKeyPair.privateKey, bobsKeyPair.publicKey);
  });
});
```

### X25519

In diesem Beispiel erzeugen Alice und Bob jeweils ein X25519-Schlüsselpaar. Wir verwenden dann Alices privaten Schlüssel und Bobs öffentlichen Schlüssel, um ein Geheimnis abzuleiten und vergleichen dies mit dem Geheimnis, das unter Verwendung von Bobs privatem Schlüssel und Alices öffentlichem Schlüssel erzeugt wurde, um zu zeigen, dass sie geteilt/identisch sind.

#### HTML

Das HTML definiert zwei Tasten. Die „Keys ändern“-Taste wird gedrückt, um neue Schlüsselpaare für Alice und Bob zu erzeugen. Die „Bits ableiten“-Taste wird gedrückt, um ein gemeinsames Geheimnis mit dem aktuellen Schlüsselpaar ableiten.

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

Die Funktion zur Erzeugung eines gemeinsamen Geheimnisses mit dem X25519-Algorithmus wird unten gezeigt. Diese nimmt einen privaten Schlüssel von einer Partei und den öffentlichen Schlüssel von einer anderen.

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

Der folgende Code fügt eine Funktion hinzu, um neue Schlüssel für Alice und Bob zu erzeugen. Dies wird beim ersten Laden des JavaScripts ausgeführt und immer wiederholt, wenn die „Keys ändern“-Taste gedrückt wird (dies ermöglicht es uns, die Auswirkung des Änderns der Schlüssel auf das gemeinsame Geheimnis zu sehen).

```js
let alicesKeyPair;
let bobsKeyPair;

async function changeKeys() {
  try {
    alicesKeyPair = await window.crypto.subtle.generateKey(
      {
        name: "X25519",
      },
      false,
      ["deriveBits"],
    );

    bobsKeyPair = await window.crypto.subtle.generateKey(
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

// Erzeugen Sie 2 X25519-Schlüsselpaare: eines für Alice und eines für Bob
// Im normalen Gebrauch würden sie ihre Schlüsselpaare separat erzeugen und öffentliche Schlüssel sicher austauschen
changeKeysButton.addEventListener("click", changeKeys);
```

Der folgende Code fügt einen Handler hinzu, der jedes Mal aufgerufen wird, wenn die „Bits ableiten“-Taste gedrückt wird. Der Handler erzeugt die gemeinsamen Geheimnisse für Alice und Bob unter Verwendung der oben definierten `deriveSharedSecret()`-Methode und protokolliert sie zwecks einfacher Vergleichbarkeit.

```js
const deriveBitsButton = document.querySelector("#buttonDeriveKeys");

deriveBitsButton.addEventListener("click", async () => {
  // Erzeugen Sie 2 X25519-Schlüsselpaare: eines für Alice und eines für Bob
  // Im normalen Gebrauch würden sie ihre Schlüsselpaare separat erzeugen und öffentliche Schlüssel sicher austauschen

  // Alice erzeugt dann ein Geheimnis mit ihrem privaten Schlüssel und Bobs öffentlichem Schlüssel.
  // Bob könnte dasselbe Geheimnis mit seinem privaten Schlüssel und Alices öffentlichem Schlüssel erzeugen.

  const sharedSecretAlice = await deriveSharedSecret(
    alicesKeyPair.privateKey,
    bobsKeyPair.publicKey,
  );

  let buffer = new Uint8Array(sharedSecretAlice, 0, 10);
  log(`${buffer}…[${sharedSecretAlice.byteLength} bytes total] (Alice secret)`);

  const sharedSecretBob = await deriveSharedSecret(
    bobsKeyPair.privateKey,
    alicesKeyPair.publicKey,
  );

  buffer = new Uint8Array(sharedSecretBob, 0, 10);
  log(`${buffer}…[${sharedSecretAlice.byteLength} bytes total] (Bob secret)`);
});
```

#### Ergebnis

Drücken Sie die „Derive bits“-Taste, um ein gemeinsames Geheimnis von Bobs und Alices Schlüsseln zu erzeugen und zu protokollieren. Drücken Sie die „Change keys“-Taste, um die von beiden Parteien verwendeten X25519-Schlüssel zu ändern.

{{EmbedLiveSample("X25519", "100%", "340px")}}

### PBKDF2

In diesem Beispiel fragen wir den Benutzer nach einem Passwort und verwenden es dann, um einige Bits mit PBKDF2 abzuleiten. [Sehen Sie sich den vollständigen Code auf GitHub an.](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)

```js
let salt;

/*
Holen Sie sich etwas Schlüsselmateriel, das als Eingabe für die deriveBits-Methode verwendet werden soll.
Das Schlüsselmateriel ist ein vom Benutzer bereitgestelltes Passwort.
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
Leiten Sie einige Bits von einem vom Benutzer bereitgestellten Passwort ab.
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
- [NIST-Richtlinien für passwortbasierte Schlüsselderivation](https://csrc.nist.gov/pubs/sp/800/132/final).
- [Cheat Sheet zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Empfehlung zur Auswahl einer Iterationszahl für PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
