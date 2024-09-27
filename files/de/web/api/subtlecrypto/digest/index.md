---
title: "SubtleCrypto: digest()-Methode"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`digest()`**-Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle generiert einen [Digest](/de/docs/Glossary/digest) der angegebenen Daten. Ein Digest ist ein kurzer Festlängenwert, der aus einer variablen Eingabe abgeleitet wird. Kryptographische Digests sollten Kollisionsresistenz aufweisen, was bedeutet, dass es schwierig sein sollte, zwei verschiedene Eingaben mit demselben Digest-Wert zu finden.

Sie benötigt als Argumente einen Bezeichner für den zu verwendenden Digest-Algorithmus und die zu digestierenden Daten. Sie gibt ein {{jsxref("Promise")}} zurück, das mit dem Digest erfüllt wird.

Beachten Sie, dass diese API keine Streaming-Eingaben unterstützt: Sie müssen die gesamte Eingabe in den Speicher lesen, bevor Sie sie an die Digest-Funktion übergeben.

## Syntax

```js-nolint
digest(algorithm, data)
```

### Parameter

- `algorithm`
  - : Dies kann ein String oder ein Objekt mit einer einzigen Eigenschaft `name` sein, die ein String ist. Der String benennt die zu verwendende Hash-Funktion. Unterstützte Werte sind:
    - `"SHA-1"` (aber verwenden Sie dies nicht in kryptographischen Anwendungen)
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die zu digestierenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Digest enthält.

## Unterstützte Algorithmen

Digest-Algorithmen, auch bekannt als [kryptographische Hash-Funktionen](/de/docs/Glossary/Cryptographic_hash_function), wandeln einen beliebig großen Datenblock in eine Ausgabe fester Größe um, die in der Regel viel kürzer ist als die Eingabe. Sie haben eine Vielzahl von Anwendungen in der Kryptographie.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Algorithmus</th>
      <th scope="col">Ausgabelänge (Bits)</th>
      <th scope="col">Blockgröße (Bits)</th>
      <th scope="col">Spezifikation</th>
    </tr>
    <tr>
      <th scope="row">SHA-1</th>
      <td>160</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, Abschnitt 6.1
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-256</th>
      <td>256</td>
      <td>512</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, Abschnitt 6.2
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-384</th>
      <td>384</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, Abschnitt 6.5
      </td>
    </tr>
    <tr>
      <th scope="row">SHA-512</th>
      <td>512</td>
      <td>1024</td>
      <td>
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf"
          >FIPS 180-4</a
        >, Abschnitt 6.4
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> SHA-1 wird nun als anfällig angesehen und sollte nicht
> in kryptographischen Anwendungen verwendet werden.

> [!NOTE]
> Wenn Sie hier nach der Erstellung eines HMAC (Keyed-Hash Message Authentication Code) suchen,
> müssen Sie stattdessen [SubtleCrypto.sign()](/de/docs/Web/API/SubtleCrypto/sign#hmac) verwenden.

## Beispiele

Weitere Beispiele zur Verwendung der `digest()`-API finden Sie unter [Nicht-kryptographische Anwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

### Einfaches Beispiel

Dieses Beispiel kodiert eine Nachricht, berechnet dann deren SHA-256-Digest und protokolliert die Digest-Länge:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await window.crypto.subtle.digest("SHA-256", data);
  return hash;
}

digestMessage(text).then((digestBuffer) =>
  console.log(digestBuffer.byteLength),
);
```

### Konvertierung eines Digests in eine Hex-Zeichenkette

Der Digest wird als `ArrayBuffer` zurückgegeben, aber zum Vergleich und zur Anzeige
werden Digests oft als Hex-Zeichenketten dargestellt. Dieses Beispiel berechnet einen Digest und
konvertiert den `ArrayBuffer` dann in eine Hex-Zeichenkette:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nicht-kryptographische Anwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium-Spezifikation für sichere Ursprünge](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spezifiziert die SHA-Familie der Digest-Algorithmen.
