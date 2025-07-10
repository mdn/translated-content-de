---
title: Array.prototype.flat()
short-title: flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`flat()`** von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, in dem alle Unter-Array-Elemente rekursiv bis zur angegebenen Tiefe verkettet werden.

{{InteractiveExample("JavaScript Demo: Array.prototype.flat()")}}

```js interactive-example
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
```

## Syntax

```js-nolint
flat()
flat(depth)
```

### Parameter

- `depth` {{optional_inline}}
  - : Die Tiefenebene, die angibt, bis zu welcher Tiefe eine verschachtelte Array-Struktur abgeflacht werden soll. Standardmäßig 1.

### Rückgabewert

Ein neues Array mit den verketteten Unter-Array-Elementen.

## Beschreibung

Die Methode `flat()` ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie das ursprüngliche Array enthält.

Die Methode `flat()` entfernt leere Plätze, wenn das Array, das abgeflacht wird, [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist. Wenn beispielsweise `depth` 1 ist, werden sowohl leere Plätze im Stamm-Array als auch in der ersten Ebene der verschachtelten Arrays ignoriert, aber leere Plätze in weiter verschachtelten Arrays bleiben mit den Arrays selbst erhalten.

Die Methode `flat()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-beschriftete Eigenschaften hat. Die Elemente müssen jedoch Arrays sein, um abgeflacht zu werden.

## Beispiele

### Verschachtelte Arrays abflachen

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Verwenden von flat() auf spärlichen Arrays

Die Methode `flat()` entfernt [leere Plätze](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) in Arrays:

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", empty, "e"], null ]
console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]
```

### Aufrufen von flat() auf Nicht-Array-Objekten

Die Methode `flat()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist. Wenn das Element kein Array ist, wird es direkt an das Ergebnis angehängt. Wenn das Element ein Array ist, wird es entsprechend dem `depth`-Parameter abgeflacht.

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // Array-like objects aren't flattened
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // ignored by flat() since length is 3
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.flat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims polyfill von `Array.prototype.flat`](https://www.npmjs.com/package/array.prototype.flat)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
