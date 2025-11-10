---
title: TypedArray.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`slice()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt eine Kopie eines Abschnitts eines typisierten Arrays in ein neues typisiertes Array-Objekt zurück, das von `start` bis `end` (wobei `end` nicht eingeschlossen ist) ausgewählt wurde. `start` und `end` repräsentieren den Index der Elemente in diesem typisierten Array. Das ursprüngliche typisierte Array wird nicht modifiziert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.slice()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.slice()", "shorter")}}

```js interactive-example
const bytes = new Uint8Array([10, 20, 30, 40, 50]);
const byteSlice = bytes.slice(1, 3);

console.log(byteSlice);
// Expected output: Uint8Array [20, 30]
```

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Extraktion beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Der nullbasierte Index, an dem die Extraktion endet, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Ein neues typisiertes Array, das die extrahierten Elemente enthält.

## Beschreibung

Siehe {{jsxref("Array.prototype.slice()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Einen Abschnitt eines vorhandenen typisierten Arrays zurückgeben

```js
const bytes = new Uint8Array([1, 2, 3]);
bytes.slice(1); // Uint8Array [ 2, 3 ]
bytes.slice(2); // Uint8Array [ 3 ]
bytes.slice(-2); // Uint8Array [ 2, 3 ]
bytes.slice(0, 1); // Uint8Array [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [es-shims Polyfill von `TypedArray.prototype.slice`](https://www.npmjs.com/package/typedarray.prototype.slice)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
