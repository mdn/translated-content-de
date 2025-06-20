---
title: Array.prototype.flat()
short-title: flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`flat()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, in das alle Unter-Array-Elemente bis zur angegebenen Tiefe rekursiv zusammengeführt werden.

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
  - : Die Ebenentiefe, die angibt, wie tief eine verschachtelte Array-Struktur abgeflacht werden soll.
    Standardmäßig 1.

### Rückgabewert

Ein neues Array, in das die Unter-Array-Elemente zusammengeführt werden.

## Beschreibung

Die `flat()`-Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht `this`, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie das Original-Array enthält.

Die `flat()`-Methode entfernt leere Stellen, wenn das Array, das abgeflacht wird, [sparsam](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist. Wenn zum Beispiel `depth` 1 ist, werden sowohl leere Stellen im Hauptarray als auch im ersten Niveau der verschachtelten Arrays ignoriert, aber leere Stellen in weiter verschachtelten Arrays bleiben mit den Arrays selbst erhalten.

Die `flat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-basierte Eigenschaften hat. Allerdings müssen ihre Elemente Arrays sein, wenn sie abgeflacht werden sollen.

## Beispiele

### Abflachen von verschachtelten Arrays

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

Die `flat()`-Methode entfernt [leere Stellen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) in Arrays:

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

Die `flat()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist. Wenn das Element kein Array ist, wird es direkt dem Ergebnis hinzugefügt. Wenn das Element ein Array ist, wird es entsprechend dem `depth`-Parameter abgeflacht.

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
- [Polyfill von `Array.prototype.flat` in es-shims](https://www.npmjs.com/package/array.prototype.flat)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
