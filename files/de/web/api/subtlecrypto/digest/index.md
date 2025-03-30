---
title: "SubtleCrypto: digest() Methode"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`digest()`** Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Schnittstelle erzeugt einen _Digest_ der gegebenen Daten, unter Verwendung der spezifizierten {{Glossary("hash_function", "Hash-Funktion")}}.
Ein Digest ist ein kurzer, festgelegter Wert, der aus einer variablen Länge der Eingabe abgeleitet wird.
Kryptografische Digests sollten Kollisionsresistenz aufweisen, was bedeutet, dass es schwierig ist, zwei verschiedene Eingaben zu finden, die denselben Digest-Wert haben.

Sie nimmt als Argumente eine Kennung für den zu verwendenden Digest-Algorithmus und die zu digestenden Daten. Sie gibt ein {{jsxref("Promise")}} zurück, das mit dem Digest erfüllt wird.

Beachten Sie, dass diese API keinen Streaming-Input unterstützt: Sie müssen die gesamte Eingabe in den Speicher laden, bevor Sie sie in die Digest-Funktion übergeben.

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
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} Objekt, das die zu digestenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Digest enthält.

## Unterstützte Algorithmen

Digest-Algorithmen, auch bekannt als {{Glossary("Hash_function", "Hash-Funktionen")}}, wandeln einen beliebig großen Datenblock in eine Ausgabe fester Größe um, die üblicherweise viel kürzer ist als die Eingabe. Sie haben eine Vielzahl von Anwendungen in der Kryptografie.

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
> SHA-1 wird jetzt als unsicher angesehen und sollte nicht für kryptografische Anwendungen verwendet werden.

> [!NOTE]
> Wenn Sie hier nach einer Anleitung zur Erstellung eines Keyed-Hash Message Authentication Code ({{Glossary("HMAC", "HMAC")}}) suchen, müssen Sie stattdessen [SubtleCrypto.sign()](/de/docs/Web/API/SubtleCrypto/sign#hmac) verwenden.

## Beispiele

Für mehr Beispiele zur Verwendung der `digest()` API, siehe [Nicht-kryptografische Anwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

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

Der Digest wird als `ArrayBuffer` zurückgegeben, aber für den Vergleich und die Anzeige werden Digests oft als Hex-Strings dargestellt. Dieses Beispiel berechnet einen Digest und wandelt dann den `ArrayBuffer` in einen Hex-String um:

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
- [Chromium sicherer Ursprungsspezifikation](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spezifiziert die SHA-Familie der Digest-Algorithmen.
