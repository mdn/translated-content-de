---
title: ArrayBuffer() Konstruktor
short-title: ArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`ArrayBuffer()`**-Konstruktor erstellt {{jsxref("ArrayBuffer")}} Objekte.

{{InteractiveExample("JavaScript Demo: ArrayBuffer() Konstruktor", "shorter")}}

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

> [!NOTE] > `ArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe in Bytes des zu erstellenden Arraypuffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der Arraypuffer erweitert werden kann.

### Rückgabewert

Ein neues `ArrayBuffer`-Objekt der angegebenen Größe, dessen {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf den angegebenen `maxByteLength` gesetzt ist, falls angegeben. Sein Inhalt ist auf 0 initialisiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `length` oder `maxByteLength` ist größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) oder negativ.
    - `length` ist größer als `maxByteLength`.

## Beispiele

### Erstellen eines ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}}-Ansicht, die auf den Puffer verweist:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Erstellen eines veränderbaren ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes veränderbar ist, und dann wird er mit {{jsxref("ArrayBuffer/resize", "resize()")}} auf 12 Bytes geändert:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall festzulegen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherplatzfehlern zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- JavaScript typisierte Arrays [Leitfaden](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
