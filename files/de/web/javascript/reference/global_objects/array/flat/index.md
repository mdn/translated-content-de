---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die Methode **`flat()`** von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, in das alle Elemente der Unterarrays bis zur angegebenen Tiefe rekursiv eingefügt werden.

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## Syntax

```js-nolint
flat()
flat(depth)
```

### Parameter

- `depth` {{optional_inline}}
  - : Die Tiefe, die angibt, wie tief eine verschachtelte Array-Struktur aufgelöst werden soll. Standardmäßig ist dies 1.

### Rückgabewert

Ein neues Array mit den eingegliederten Elementen der Unterarrays.

## Beschreibung

Die `flat()`-Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die die gleichen Elemente wie das Original-Array enthält.

Die `flat()`-Methode ignoriert leere Felder, wenn das Array, das abgeflacht wird, [lückenhaft](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist. Wenn zum Beispiel `depth` 1 ist, werden leere Felder im Stammarray und in der ersten Ebene der verschachtelten Arrays ignoriert, aber leere Felder in weiter verschachtelten Arrays werden einschließlich der Arrays selbst beibehalten.

Die `flat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat. Ihre Elemente müssen jedoch Arrays sein, wenn sie abgeflacht werden sollen.

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

### Verwendung von flat() bei lückenhaften Arrays

Die `flat()`-Methode entfernt leere Slots in Arrays:

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
```

### Aufrufen von flat() bei Nicht-Array-Objekten

Die `flat()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist. Wenn das Element kein Array ist, wird es direkt an das Ergebnis angehängt. Wenn das Element ein Array ist, wird es entsprechend dem `depth`-Parameter abgeflacht.

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // Objetke mit Array-ähnlicher Struktur werden nicht abgeflacht
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // von flat() ignoriert, da Länge 3 ist
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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Anleitung
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
