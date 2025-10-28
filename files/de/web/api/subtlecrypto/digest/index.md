---
title: "SubtleCrypto: digest() Methode"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: c6dea04bccd3a505edad2c42111a3974516f134f
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`digest()`** Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle erzeugt einen _Digest_ der angegebenen Daten unter Verwendung der spezifizierten {{Glossary("hash_function", "Hash-Funktion")}}.
Ein Digest ist ein kurzer, fester Wert, der aus einem variablen Eingangswert abgeleitet wird.
Kryptografische Digests sollten kollisionsresistent sein, was bedeutet, dass es schwierig ist, zwei verschiedene Eingaben zu finden, die denselben Digest-Wert haben.

Die Methode nimmt als Argumente einen Identifikator für den zu verwendenden Digest-Algorithmus und die zu verdauenden Daten entgegen.
Sie gibt ein {{jsxref("Promise")}} zurück, das mit dem Digest erfüllt wird.

Beachten Sie, dass diese API keinen Streaming-Eingang unterstützt: Sie müssen die gesamte Eingabe in den Speicher einlesen, bevor Sie sie in die Digest-Funktion übergeben.

## Syntax

```js-nolint
digest(algorithm, data)
```

### Parameter

- `algorithm`
  - : Dies kann ein String oder ein Objekt mit einer einzigen Eigenschaft `name` sein, die ein String ist. Der String benennt die zu verwendende Hash-Funktion. Unterstützte Werte sind:
    - `"SHA-1"` (aber verwenden Sie dies nicht in kryptografischen Anwendungen)
    - `"SHA-256"`
    - `"SHA-384"`
    - `"SHA-512"`.
- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} Objekt, das die zu verdauenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Digest enthält.

## Unterstützte Algorithmen

Digest-Algorithmen, auch bekannt als {{Glossary("Hash_function", "Hash-Funktionen")}}, transformieren einen beliebig großen Datenblock in eine feste Ausgabemenge, die in der Regel viel kürzer ist als die Eingabe.
Sie haben verschiedene Anwendungen in der Kryptografie.

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
> SHA-1 wird nun als anfällig angesehen und sollte nicht für kryptografische Anwendungen verwendet werden.

> [!NOTE]
> Wenn Sie hier nach einer Methode suchen, um einen keyed-hash Nachrichtenauthentifizierungscode ({{Glossary("HMAC", "HMAC")}}) zu erstellen, sollten Sie stattdessen [SubtleCrypto.sign()](/de/docs/Web/API/SubtleCrypto/sign#hmac) verwenden.

## Beispiele

Für weitere Beispiele zur Verwendung der `digest()` API siehe [Nicht-kryptografische Anwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

### Einfaches Beispiel

Dieses Beispiel kodiert eine Nachricht, berechnet dann deren SHA-256 Digest und protokolliert die Digest-Länge:

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

Der Digest wird als `ArrayBuffer` zurückgegeben, aber für den Vergleich und die Darstellung werden Digests oft als Hex-Strings repräsentiert.
Dieses Beispiel berechnet einen Digest und konvertiert dann den `ArrayBuffer` in einen Hex-String:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashHex = new Uint8Array(hashBuffer).toHex(); // Convert ArrayBuffer to hex string.
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));
```

Das obige Beispiel verwendet {{jsxref("Uint8Array.fromHex()")}}, das ab 2025 verfügbar ist.
Um ältere Browser zu unterstützen, kann stattdessen das folgende alternative Beispiel verwendet werden:

```js
const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  if (Uint8Array.prototype.toHex) {
    // Use toHex if supported.
    return new Uint8Array(hashBuffer).toHex(); // Convert ArrayBuffer to hex string.
  }
  // If toHex() is not supported, fall back to an alternative implementation.
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
- [Chromium-Spezifikation für sichere Ursprünge](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spezifiziert die SHA-Familie von Digest-Algorithmen.
- {{jsxref("Uint8Array.toHex()")}}
