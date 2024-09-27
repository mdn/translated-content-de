---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt eine Kopie eines Abschnitts eines TypedArrays in einem neuen TypedArray-Objekt zurück, der von `start` bis `end` (ohne `end`) ausgewählt wird, wobei `start` und `end` den Index der Elemente in diesem TypedArray darstellen. Das ursprüngliche TypedArray wird nicht verändert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.slice()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-slice.html", "shorter")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Index, bei dem die Extraktion beginnen soll, [umgewandelt in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Index, bei dem die Extraktion enden soll, [umgewandelt in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Ein neues TypedArray, das die extrahierten Elemente enthält.

## Beschreibung

Siehe {{jsxref("Array.prototype.slice()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen aufgerufen werden.

## Beispiele

### Einen Abschnitt eines bestehenden TypedArrays zurückgeben

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
- [JavaScript TypedArrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
