---
title: TypedArray.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`set()`**-Methode von {{jsxref("TypedArray")}}-Instanzen speichert mehrere Werte im typisierten Array, indem sie Eingabewerte aus einem angegebenen Array liest.

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
  - : Das Array, aus dem Werte kopiert werden. Alle Werte aus dem Quellarray werden in das Zielarray kopiert, es sei denn, die Länge des Quellarrays plus der Zieloffset überschreitet die Länge des Zielarrays, in diesem Fall wird eine Ausnahme ausgelöst.
- `typedarray`
  - : Wenn das Quellarray ein typisiertes Array ist, können die beiden Arrays den gleichen zugrunde liegenden {{jsxref("ArrayBuffer")}} teilen; die JavaScript-Engine kopiert intelligent den Quellbereich des Puffers in den Zielbereich.
- `targetOffset` {{optional_inline}}
  - : Der Offset im Zielarray, bei dem mit dem Schreiben von Werten aus dem Quellarray begonnen werden soll. Wenn dieser Wert weggelassen wird, wird 0 angenommen (das heißt, das Quellarray überschreibt Werte im Zielarray beginnend bei Index 0).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein Element wird über das Ende des typisierten Arrays hinaus gespeichert, entweder weil `targetOffset` zu groß ist oder weil `array` oder `typedarray` zu groß ist.
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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
