---
title: "SubtleCrypto: digest()-Methode"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

Die **`digest()`**-Methode der {{domxref("SubtleCrypto")}}-Schnittstelle erzeugt einen {{Glossary("digest")}} der gegebenen Daten. Ein Digest ist ein kurzer, festlängiger Wert, der aus einer variablen Eingabe abgeleitet wird. Krypto-Digests sollten Kollisionsresistenz aufweisen, was bedeutet, dass es schwierig ist, zwei verschiedene Eingaben zu finden, die denselben Digest-Wert haben.

Sie nimmt als Argumente einen Bezeichner für den zu verwendenden Digest-Algorithmus und die zu verdauenden Daten. Sie gibt ein {{jsxref("Promise")}} zurück, das mit dem Digest erfüllt wird.

Beachten Sie, dass diese API keine Streaming-Eingabe unterstützt: Sie müssen die gesamte Eingabe in den Speicher lesen, bevor Sie sie in die Digest-Funktion übergeben.

## Syntax

```js-nolint
digest(algorithm, data)
```

### Parameter

- `algorithm`
  - : Dies kann ein String oder ein Objekt mit einer einzigen Eigenschaft `name` sein, die ein String ist. Der String benennt die zu verwendende Hash-Funktion. Unterstützte Werte sind:
    - `"SHA-1"` (sollte jedoch nicht in kryptografischen Anwendungen verwendet werden)
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die zu verdauenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Digest enthält.

## Unterstützte Algorithmen

Digest-Algorithmen, auch bekannt als [kryptografische Hash-Funktionen](/de/docs/Glossary/Cryptographic_hash_function),
transformieren einen beliebig großen Datenblock in eine feste, im Allgemeinen viel kürzere Ausgabegröße. Sie haben eine Vielzahl von Anwendungen in der Kryptografie.

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
> SHA-1 wird mittlerweile als anfällig betrachtet und sollte nicht
> für kryptografische Anwendungen verwendet werden.

> [!NOTE]
> Wenn Sie nach Möglichkeiten suchen, wie man einen HMAC (Keyed-Hash Message Authentication Code) erstellt, sollten Sie stattdessen [SubtleCrypto.sign()](/de/docs/Web/API/SubtleCrypto/sign#hmac) verwenden.

## Beispiele

Für weitere Beispiele zur Verwendung der `digest()`-API, siehe [Nicht- kryptografische Anwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

### Einfaches Beispiel

Dieses Beispiel kodiert eine Nachricht, berechnet dann ihren SHA-256-Digest und protokolliert die Digest-Länge:

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

### Umwandlung eines Digests in einen Hex-String

Der Digest wird als `ArrayBuffer` zurückgegeben, doch zum Vergleich und zur Anzeige
werden Digests oft als Hex-Strings dargestellt. Dieses Beispiel berechnet einen Digest und
konvertiert dann den `ArrayBuffer` in einen Hex-String:

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

- [Nicht-kryptografische Anwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium secure origins specification](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spezifiziert die SHA-Familie von Digest-Algorithmen.
