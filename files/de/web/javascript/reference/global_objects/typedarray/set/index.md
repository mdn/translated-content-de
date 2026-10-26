---
title: TypedArray.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`set()`** von {{jsxref("TypedArray")}}-Instanzen speichert mehrere Werte in einem typisierten Array. Die Eingabewerte werden aus einem angegebenen Array gelesen.

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
  - : Das Array, aus dem Werte kopiert werden. Alle Werte aus dem Quellarray werden in das Zielarray kopiert. Wenn die Länge des Quellarrays zuzüglich des Ziel-Offsets die Länge des Zielarrays überschreitet, wird eine Ausnahme ausgelöst.
- `typedarray`
  - : Wenn das Quellarray ein typisiertes Array ist, können die beiden Arrays denselben zugrunde liegenden {{jsxref("ArrayBuffer")}} verwenden. Die JavaScript-Engine **kopiert** den Quellbereich des Puffers in den Zielbereich.
- `targetOffset` {{optional_inline}}
  - : Der Offset im Zielarray, ab dem die Werte aus dem Quellarray geschrieben werden. Wird dieser Wert weggelassen, wird 0 angenommen. Das Quellarray überschreibt dann die Werte im Zielarray ab Index 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Ein Element würde über das Ende des typisierten Arrays hinaus gespeichert, weil `targetOffset` zu groß ist oder weil `array` oder `typedarray` zu groß ist.
    - `targetOffset` ist negativ.

## Beispiele

### set() verwenden

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

- [Polyfill für `TypedArray.prototype.set` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
