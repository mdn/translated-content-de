---
title: Uint8Array.prototype.toBase64()
short-title: toBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toBase64()`** von {{jsxref("Uint8Array")}}-Instanzen gibt einen {{Glossary("Base64", "base64")}}-kodierten String zurück, der auf den Daten in diesem `Uint8Array`-Objekt basiert.

Diese Methode ist [`Window.btoa()`](/de/docs/Web/API/Window/btoa) vorzuziehen, insbesondere wenn die Daten bereits in einem `Uint8Array` vorliegen, da Sie sie nicht zuerst in einen String umwandeln müssen.

## Syntax

```js-nolint
toBase64()
toBase64(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, mit dem sich das Format des base64-Strings anpassen lässt. Es kann die folgenden Eigenschaften enthalten:
    - `alphabet` {{optional_inline}}
      - : Ein String, der das zu verwendende base64-Alphabet angibt. Einer der folgenden Werte ist möglich:
        - `"base64"` (Standardwert)
          - : Kodiert die Eingabe mit dem Standard-base64-Alphabet, das `+` und `/` verwendet.
        - `"base64url"`
          - : Kodiert die Eingabe mit dem URL-sicheren base64-Alphabet, das `-` und `_` verwendet.
    - `omitPadding` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob Auffüllzeichen (`=`) am Ende des base64-Strings weggelassen werden sollen. Der Standardwert ist `false`.

### Rückgabewert

Ein base64-kodierter String, der die Daten im `Uint8Array` darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das Argument `options` ist weder ein Objekt noch `undefined`.
    - `options.alphabet` hat keinen der erwarteten Werte und ist auch nicht `undefined`.

## Beispiele

### Binärdaten kodieren

Dieses Beispiel verwendet die Standardwerte für `alphabet` und `omitPadding`, um Daten aus einem `Uint8Array` in einen base64-String zu kodieren.

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64()); // "HelloQ=="
```

### Daten ohne Auffüllzeichen kodieren

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64({ omitPadding: true })); // "HelloQ"
```

### Daten mit URL-sicherem Alphabet kodieren

Dieses Beispiel befüllt ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt mit einem base64-kodierten String unter Verwendung des URL-sicheren Alphabets.

```js
const uint8Array = new Uint8Array([46, 139, 222, 255, 42, 46]);
const base64 = uint8Array.toBase64({ alphabet: "base64url" });
const params = new URLSearchParams();
params.set("data", base64);
console.log(params.toString()); // "data=Love_you"
```

### Stream-Kodierung

Dieses Beispiel wurde aus dem [ursprünglichen Vorschlag](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs) übernommen und zeigt, wie Streaming im Anwendungscode implementiert werden kann. Es ahmt die [`TextEncoder`](/de/docs/Web/API/TextEncoder)-API mit der Option `stream` nach.

```js
class Base64Encoder {
  #extra;
  #extraLength;
  constructor() {
    this.#extra = new Uint8Array(3);
    this.#extraLength = 0;
  }

  // Partly derived from https://github.com/lucacasonato/base64_streams/blob/main/src/iterator/encoder.ts
  encode(chunk = Uint8Array.of(), options = {}) {
    const stream = options.stream ?? false;

    if (this.#extraLength > 0) {
      const bytesNeeded = 3 - this.#extraLength;
      const bytesAvailable = Math.min(bytesNeeded, chunk.length);
      this.#extra.set(chunk.subarray(0, bytesAvailable), this.#extraLength);
      chunk = chunk.subarray(bytesAvailable);
      this.#extraLength += bytesAvailable;
    }

    if (!stream) {
      // assert: this.#extraLength.length === 0 || this.#extraLength === 3 || chunk.length === 0
      const prefix = this.#extra.subarray(0, this.#extraLength).toBase64();
      this.#extraLength = 0;
      return prefix + chunk.toBase64();
    }

    let extraReturn = "";

    if (this.#extraLength === 3) {
      extraReturn = this.#extra.toBase64();
      this.#extraLength = 0;
    }

    const remainder = chunk.length % 3;
    if (remainder > 0) {
      this.#extra.set(chunk.subarray(chunk.length - remainder));
      this.#extraLength = remainder;
      chunk = chunk.subarray(0, chunk.length - remainder);
    }

    return extraReturn + chunk.toBase64();
  }
}

const encoder = new Base64Encoder();

console.log(
  encoder.encode(Uint8Array.of(72, 101, 108, 108, 111), { stream: true }),
);
// "SGVs"
console.log(
  encoder.encode(Uint8Array.of(32, 87, 111, 114, 108, 100), { stream: true }),
);
// "bG8gV29y"
console.log(encoder.encode());
// "bGQ="
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint8Array.prototype.toBase64` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Polyfill für `Uint8Array.prototype.toBase64` von es-shims](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
