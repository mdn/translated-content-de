---
title: Uint8Array.prototype.toBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`toBase64()`**-Methode von {{jsxref("Uint8Array")}}-Instanzen gibt einen {{Glossary("Base64", "base64")}}-kodierten String zurück, basierend auf den Daten in diesem `Uint8Array`-Objekt.

Diese Methode sollte gegenüber [`Window.btoa()`](/de/docs/Web/API/Window/btoa) bevorzugt werden, besonders wenn Sie bereits ein `Uint8Array` mit dem Objekt haben, da Sie es nicht erst in einen String umwandeln müssen.

## Syntax

```js-nolint
toBase64()
toBase64(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Format des base64-Strings anpasst. Es kann die folgenden Eigenschaften enthalten:
    - `alphabet` {{optional_inline}}
      - : Ein String, der das zu verwendende base64-Alphabet angibt. Es kann eines der folgenden sein:
        - `"base64"` (Standard)
          - : Kodiert Eingaben mit dem standardmäßigen base64-Alphabet, das `+` und `/` verwendet.
        - `"base64url"`
          - : Kodiert Eingaben mit dem URL-sicheren base64-Alphabet, das `-` und `_` verwendet.
    - `omitPadding` {{optional_inline}}
      - : Ein Boolean, der angibt, ob Auffüllungszeichen (`=`) am Ende des base64-Strings weggelassen werden sollen. Standardmäßig ist dies `false`.

### Rückgabewert

Ein base64-kodierter String, der die Daten im `Uint8Array` darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `options`-Objekt ist kein Objekt oder `undefined`.
    - Das `options.alphabet` entspricht nicht den erwarteten Werten oder ist `undefined`.

## Beispiele

### Kodierung von Binärdaten

Dieses Beispiel verwendet die standardmäßigen Optionen für `alphabet` und `omitPadding`, um Daten aus einem `Uint8Array` in einen base64-String zu kodieren.

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64()); // "HelloQ=="
```

### Kodierung von Daten ohne Auffüllung

```js
const uint8Array = new Uint8Array([29, 233, 101, 161]);
console.log(uint8Array.toBase64({ omitPadding: true })); // "HelloQ"
```

### Kodierung von Daten mit URL-sicherem Alphabet

Dieses Beispiel befüllt ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-Objekt mit einem base64-kodierten String unter Verwendung des URL-sicheren Alphabets.

```js
const uint8Array = new Uint8Array([46, 139, 222, 255, 42, 46]);
const base64 = uint8Array.toBase64({ alphabet: "base64url" });
const params = new URLSearchParams();
params.set("data", base64);
console.log(params.toString()); // "data=Love_you"
```

### Stream-Kodierung

Dieses Beispiel ist von dem [ursprünglichen Vorschlag](https://github.com/tc39/proposal-arraybuffer-base64/blob/main/stream.mjs) adaptiert und zeigt, wie man Streaming im Userland implementiert. Es imitiert die [`TextEncoder`](/de/docs/Web/API/TextEncoder)-API mit der `stream`-Option.

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

- [Polyfill von `Uint8Array.prototype.toBase64` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims Polyfill von `Uint8Array.prototype.toBase64`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromBase64()")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
