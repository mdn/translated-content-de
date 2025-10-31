---
title: ArrayBuffer()-Konstruktor
short-title: ArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der **`ArrayBuffer()`**-Konstruktor erstellt {{jsxref("ArrayBuffer")}}-Objekte.

{{InteractiveExample("JavaScript Demo: ArrayBuffer()-Konstruktor", "shorter")}}

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
> `ArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe in Bytes des zu erstellenden ArrayBuffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der ArrayBuffer vergrößert werden kann.

### Rückgabewert

Ein neues `ArrayBuffer`-Objekt der angegebenen Größe, dessen {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft, falls angegeben, auf den angegebenen `maxByteLength` gesetzt ist. Sein Inhalt wird auf 0 initialisiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - `length` oder `maxByteLength` ist größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) oder negativ.
    - `length` ist größer als `maxByteLength`.

## Beispiele

### Erstellen eines ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Pufferspeicher mit einer {{jsxref("Int32Array")}}-Sicht, die sich auf den Puffer bezieht:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Erstellen eines vergrößerbaren ArrayBuffers

In diesem Beispiel erstellen wir einen 8-Byte-Pufferspeicher, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und ändern dann seine Größe auf 12 Bytes mit {{jsxref("ArrayBuffer/resize", "resize()")}}:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall festzulegen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherausfällen zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("SharedArrayBuffer")}}
