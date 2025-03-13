---
title: ArrayBuffer()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`ArrayBuffer()`**-Konstruktor erstellt {{jsxref("ArrayBuffer")}}-Objekte.

{{InteractiveExample("JavaScript Demo: ArrayBuffer() constructor", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Syntax

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> **Hinweis:** `ArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe in Bytes des zu erstellenden Array-Buffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der Array-Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `ArrayBuffer`-Objekt der angegebenen Größe, wobei seine {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf den angegebenen `maxByteLength` gesetzt ist, falls einer angegeben wurde. Sein Inhalt wird auf 0 initialisiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `length` oder `maxByteLength` ist größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) oder negativ.
    - `length` ist größer als `maxByteLength`.

## Beispiele

### Erstellen eines ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Sicht, die sich auf den Puffer bezieht:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Erstellen eines anpassbaren ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und {{jsxref("ArrayBuffer/resize", "resize()")}} ihn dann auf 12 Bytes:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> Es wird empfohlen, dass `maxByteLength` auf den kleinsten möglichen Wert für Ihren Anwendungsfall festgelegt wird. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherüberlauffehlern zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("SharedArrayBuffer")}}
