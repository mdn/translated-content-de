---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt eine Kopie eines Teils eines typisierten Arrays als neues typisiertes Array-Objekt zurück, das von `start` bis `end` (ohne `end`) ausgewählt wird, wobei `start` und `end` den Index der Elemente in diesem typisierten Array darstellen. Das ursprüngliche typisierte Array wird nicht verändert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.slice()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-slice.html", "shorter")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion beginnt, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Ein neues typisiertes Array, das die extrahierten Elemente enthält.

## Beschreibung

Siehe {{jsxref("Array.prototype.slice()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Einen Teil eines vorhandenen typisierten Arrays zurückgeben

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
