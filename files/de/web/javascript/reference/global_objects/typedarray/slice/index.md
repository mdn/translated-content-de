---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt eine Kopie eines Abschnitts eines typisierten Arrays in ein neues typisiertes Array-Objekt zurück, das von `start` bis `end` (wobei `end` nicht eingeschlossen ist) ausgewählt wird. `start` und `end` repräsentieren die Indizes von Elementen in diesem typisierten Array. Das ursprüngliche typisierte Array wird nicht modifiziert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.slice()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.slice()", "shorter")}}

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
  - : Nullbasierter Index, bei dem die Extraktion beginnt, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Extraktion endet, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extrahiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Ein neues typisiertes Array, das die extrahierten Elemente enthält.

## Beschreibung

Siehe {{jsxref("Array.prototype.slice()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Einen Abschnitt eines bestehenden typisierten Arrays zurückgeben

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
- [es-shims Polyfill von `TypedArray.prototype.slice`](https://www.npmjs.com/package/typedarray.prototype.slice)
- [Leitfaden zu JavaScript-Typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
