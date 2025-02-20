---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt eine Kopie eines Teils eines Typed Arrays in ein neues Typed Array-Objekt zurück, das von `start` bis `end` (`end` nicht eingeschlossen) ausgewählt wurde. Dabei repräsentieren `start` und `end` den Index der Elemente in diesem Typed Array. Das ursprüngliche Typed Array wird nicht modifiziert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.slice()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.slice()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const array1 = uint8.slice(1, 3);

console.log(array1);
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
  - : Nullbasierter Index, bei dem die Extraktion beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich, `end`.

### Rückgabewert

Ein neues Typed Array, das die extrahierten Elemente enthält.

## Beschreibung

Weitere Informationen finden Sie unter {{jsxref("Array.prototype.slice()")}}. Diese Methode ist nicht generisch und kann nur auf Typed Array-Instanzen angewendet werden.

## Beispiele

### Einen Teil eines bestehenden Typed Arrays zurückgeben

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
