---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`flat()`**-Methode von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, in das alle Unter-Array-Elemente bis zu der angegebenen Tiefe rekursiv zusammengefügt werden.

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
  - : Gibt die Tiefe an, wie tief eine verschachtelte Array-Struktur abgeflacht werden soll.
    Standardwert ist 1.

### Rückgabewert

Ein neues Array, in das die Unter-Array-Elemente zusammengefügt werden.

## Beschreibung

Die `flat()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert nicht `this`, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie das Original-Array enthält.

Die `flat()`-Methode entfernt leere Stellen, wenn das abgeflachte Array [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist. Zum Beispiel, wenn `depth` 1 ist, werden sowohl leere Stellen im Haupt-Array als auch in der ersten Ebene der verschachtelten Arrays ignoriert, aber leere Stellen in weiter verschachtelten Arrays werden mit den Arrays selbst beibehalten.

Die `flat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indexierte Eigenschaften hat. Dennoch müssen die Elemente Arrays sein, wenn sie abgeflacht werden sollen.

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

### Verwendung von flat() auf dünn besetzten Arrays

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

Die `flat()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl ist, die kleiner als `length` ist. Ist das Element kein Array, wird es direkt zum Ergebnis hinzugefügt. Ist das Element ein Array, wird es entsprechend dem `depth`-Parameter abgeflacht.

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
- [es-shims Polyfill von `Array.prototype.flat`](https://www.npmjs.com/package/array.prototype.flat)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
