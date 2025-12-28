---
title: "SubtleCrypto: digest() Methode"
short-title: digest()
slug: Web/API/SubtleCrypto/digest
l10n:
  sourceCommit: 326c137fe1044491fc1f647eea18b4c6b5aed855
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

Die **`digest()`**-Methode der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Schnittstelle erzeugt einen _Digest_ der angegebenen Daten, unter Verwendung der angegebenen {{Glossary("hash_function", "Hash-Funktion")}}. Ein Digest ist ein kurzer, festlängiger Wert, der aus einem variabellängigen Input abgeleitet wird. Kryptografische Digests sollten Kollisionsresistenz aufweisen, was bedeutet, dass es schwierig sein sollte, zwei verschiedene Eingaben zu finden, die denselben Digest-Wert haben.

Die Methode benötigt als Argumente einen Bezeichner für den zu verwendenden Digest-Algorithmus und die zu verarbeitenden Daten. Sie gibt ein {{jsxref("Promise")}} zurück, welches mit dem Digest erfüllt wird.

Beachten Sie, dass diese API keinen Streaming-Input unterstützt: Sie müssen den gesamten Input in den Speicher lesen, bevor Sie ihn der Digest-Funktion übergeben.

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
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die zu verarbeitenden Daten enthält.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den Digest enthält.

## Unterstützte Algorithmen

Digest-Algorithmen, auch bekannt als {{Glossary("Hash_function", "Hash-Funktionen")}}, transformieren einen beliebig großen Datenblock in eine feste Ausgabegröße, die normalerweise viel kürzer ist als der Input. Sie haben verschiedene Anwendungen in der Kryptografie.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Algorithmus</th>
      <th scope="col">Länge der Ausgabe (Bits)</th>
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
> SHA-1 gilt inzwischen als anfällig und sollte nicht für kryptografische Anwendungen verwendet werden.

> [!NOTE]
> Wenn Sie hier nach einer Anleitung zur Erstellung eines Keyed-Hash-Message-Authentication-Codes ({{Glossary("HMAC", "HMAC")}}) suchen, müssen Sie stattdessen [SubtleCrypto.sign()](/de/docs/Web/API/SubtleCrypto/sign#hmac) verwenden.

## Beispiele

Für weitere Beispiele zur Verwendung der `digest()`-API siehe [Nicht-kryptografische Verwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto).

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

### Konvertierung eines Digests in einen Hex-String

Der Digest wird als `ArrayBuffer` zurückgegeben, aber zur Vergleichs- und Anzeigezwecken werden Digests häufig als Hex-Strings dargestellt. Dieses Beispiel berechnet einen Digest und konvertiert dann den `ArrayBuffer` in einen Hex-String:

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

Das obige Beispiel verwendet {{jsxref("Uint8Array.toHex()")}}, das 2025 verfügbar wurde. Um ältere Browser zu unterstützen, kann stattdessen die folgende Alternative verwendet werden:

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

- [Nicht-kryptografische Verwendungen von SubtleCrypto](/de/docs/Web/API/Web_Crypto_API/Non-cryptographic_uses_of_subtle_crypto)
- [Chromium-Spezifikation für sichere Ursprünge](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/)
- [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spezifiziert die SHA-Familie der Digest-Algorithmen.
- {{jsxref("Uint8Array.toHex()")}}
