---
title: SharedArrayBuffer() Konstruktor
short-title: SharedArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

> [!NOTE]
> Der `SharedArrayBuffer` Konstruktor ist möglicherweise nicht immer global verfügbar, es sei denn, bestimmte [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

Der **`SharedArrayBuffer()`** Konstruktor erstellt {{jsxref("SharedArrayBuffer")}} Objekte.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer() constructor", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Syntax

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> **Hinweis:** `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe, in Bytes, des zu erstellenden Array-Buffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe, in Bytes, auf die der gemeinsame Array-Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer` Objekt der angegebenen Größe, wobei seine {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} Eigenschaft auf den angegebenen `maxByteLength` gesetzt ist, falls einer angegeben wurde. Sein Inhalt wird auf 0 initialisiert.

## Beispiele

### Verwenden Sie immer den neuen Operator, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer` Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}} Operator konstruiert werden. Ein `SharedArrayBuffer` Konstruktoraufruf als Funktion ohne `new` wird einen {{jsxref("TypeError")}} auslösen.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Wachstum eines erweiterbaren SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Buffer, der auf eine maximale Länge von 16 Bytes erweitert werden kann, und dann wird er mit {{jsxref("SharedArrayBuffer/grow", "grow()")}} auf 12 Bytes vergrößert:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, dass `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall gesetzt wird. Er sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherplatzfehlern zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
