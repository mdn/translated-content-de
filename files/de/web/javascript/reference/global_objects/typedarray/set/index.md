---
title: TypedArray.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`set()`** Methode von {{jsxref("TypedArray")}} Instanzen speichert mehrere Werte im typisierten Array, indem sie Eingabewerte aus einem angegebenen Array liest.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.set()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

// Copy the values into the array starting at index 3
uint8.set([1, 2, 3], 3);

console.log(uint8);
// Expected output: Uint8Array [0, 0, 0, 1, 2, 3, 0, 0]
```

## Syntax

```js-nolint
set(array)
set(array, targetOffset)

set(typedarray)
set(typedarray, targetOffset)
```

### Parameter

- `array`
  - : Das Array, aus dem die Werte kopiert werden. Alle Werte aus dem Quell-Array werden in das Ziel-Array kopiert, es sei denn, die Länge des Quell-Arrays plus der Zielversatz übersteigt die Länge des Ziel-Arrays. In diesem Fall wird eine Ausnahme ausgelöst.
- `typedarray`
  - : Wenn das Quell-Array ein typisiertes Array ist, können die beiden Arrays denselben zugrunde liegenden {{jsxref("ArrayBuffer")}} teilen; die JavaScript-Engine wird den Quellbereich des Buffers intelligent in den Zielbereich **kopieren**.
- `targetOffset` {{optional_inline}}
  - : Der Versatz in das Ziel-Array, an dem mit dem Schreiben von Werten aus dem Quell-Array begonnen wird. Wenn dieser Wert weggelassen wird, wird 0 angenommen (das bedeutet, dass das Quell-Array die Werte im Ziel-Array beginnend bei Index 0 überschreibt).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein Element wird über das Ende des typisierten Arrays hinaus gespeichert, entweder weil `targetOffset` zu groß ist oder weil `array` oder `typedarray` zu groß sind.
    - `targetOffset` ist negativ.

## Beispiele

### Verwendung von set()

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.set` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
