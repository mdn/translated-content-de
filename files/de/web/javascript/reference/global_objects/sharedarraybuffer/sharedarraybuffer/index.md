---
title: SharedArrayBuffer() Konstruktor
short-title: SharedArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

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

> [!NOTE]
> `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe des zu erstellenden Array-Puffers in Byte.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Byte, auf die der shared array buffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer` Objekt der angegebenen Größe, mit der {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf den angegebenen `maxByteLength` gesetzt, falls einer angegeben wurde. Der Inhalt wird auf 0 initialisiert.

## Beispiele

### Verwenden Sie immer den new-Operator, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer` Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}} Operator konstruiert werden. Der Aufruf eines `SharedArrayBuffer` Konstruktors als Funktion ohne `new` führt zu einem {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Wachstum eines wachstumsfähigen SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes wachsen kann, und vergrößern ihn dann mit {{jsxref("SharedArrayBuffer/grow", "grow()")}} auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall zu setzen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherüberlauf-Fehlern zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [Leitfaden zu JavaScript getypten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
