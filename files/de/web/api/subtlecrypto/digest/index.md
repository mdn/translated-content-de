---
title: "SubtleCrypto: digest() Methode"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`digest()`** Methode des [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Interfaces erzeugt einen [Digest](/de/docs/Glossary/digest) der gegebenen Daten. Ein Digest ist ein kurzer, fester Wert, der aus einer variablen Eingabe abgeleitet wird. Kryptografische Digests sollten kollisionsresistent sein, was bedeutet, dass es schwierig ist, zwei verschiedene Eingaben zu finden, die den gleichen Digest-Wert haben.

Sie nimmt als Argumente einen Bezeichner für den zu verwendenden Digest-Algorithmus und die zu verdauenden Daten. Sie gibt ein {{jsxref("Promise")}} zurück, das mit dem Digest erfüllt wird.

Beachten Sie, dass diese API kein Streaming von Eingaben unterstützt: Sie müssen die gesamte Eingabe in den Speicher laden, bevor Sie sie in die Digest-Funktion übergeben.

## Syntax

```js-nolint
digest(algorithm, data)
```

### Parameter

- `algorithm`
  - : Dies kann eine Zeichenfolge oder ein Objekt mit einer einzigen Eigenschaft `name` sein, die eine Zeichenfolge ist. Die Zeichenfolge benennt die zu verwendende Hash-Funktion. Unterstützte Werte sind:
    - `"SHA-1"` (aber verwenden Sie dies nicht in kryptografischen Anwendungen)
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die zu verdauenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Digest enthält.

## Unterstützte Algorithmen

Digest-Algorithmen, auch bekannt als [kryptografische Hash-Funktionen](/de/docs/Glossary/Cryptographic_hash_function),
verwandeln einen beliebig großen Datenblock in eine Ausgabe fester Größe,
die normalerweise viel kürzer als die Eingabe ist. Sie haben eine Vielzahl von Anwendungen in der
Kryptografie.

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
> SHA-1 gilt mittlerweile als unsicher und sollte nicht
> für kryptografische Anwendungen verwendet werden.

> [!NOTE]
> Wenn Sie wissen möchten, wie man einen Keyed-Hash-Message-Authentication-Code ([HMAC](/de/docs/Glossary/HMAC)) erstellt, müssen Sie stattdessen [SubtleCrypto.sign()](/de/docs/Web/API/SubtleCrypto/sign#hmac) verwenden.

## Beispiele

Für weitere Beispiele zur Verwendung der `digest()`-API, siehe [Nicht-kryptografische Verwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

### Einfaches Beispiel

Dieses Beispiel kodiert eine Nachricht, berechnet dann deren SHA-256 Digest und protokolliert die Länge des Digests:

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

### Konvertieren eines Digests in einen Hex-String

Der Digest wird als `ArrayBuffer` zurückgegeben, aber für den Vergleich und die Anzeige werden Digests oft als Hexstrings dargestellt. Dieses Beispiel berechnet einen Digest und konvertiert dann den `ArrayBuffer` in einen Hex-String:

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

- [Nicht-kryptografische Verwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium secure origins specification](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spezifiziert die SHA-Familie von Digest-Algorithmen.
