---
title: ArrayBuffer()-Konstruktor
short-title: ArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

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

> [!NOTE]
> `ArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `length`
  - : Die Größe des zu erstellenden Array-Buffers in Bytes.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der Array-Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `ArrayBuffer`-Objekt der angegebenen Größe. Falls `maxByteLength` angegeben wurde, wird seine Eigenschaft {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} auf diesen Wert gesetzt. Sein Inhalt wird mit 0 initialisiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `length` oder `maxByteLength` ist größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) oder negativ.
    - `length` ist größer als `maxByteLength`.

## Beispiele

### Einen ArrayBuffer erstellen

In diesem Beispiel erstellen wir einen 8-Byte-Buffer mit einer {{jsxref("Int32Array")}}-Ansicht, die auf den Buffer verweist:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Einen größenveränderbaren ArrayBuffer erstellen

In diesem Beispiel erstellen wir einen 8-Byte-Buffer, der auf maximal 16 Bytes vergrößert werden kann, und ändern seine Größe anschließend mit {{jsxref("ArrayBuffer/resize", "resize()")}} auf 12 Bytes:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall zu setzen. Der Wert sollte `1073741824` (1 GB) niemals überschreiten, um das Risiko von Fehlern aufgrund unzureichenden Arbeitsspeichers zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `ArrayBuffer` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
