---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: c79069d8db86aa443a1b673ddaeb4f8bb53798fc
---

{{JSRef}}

Die **`flat()`** Methode für {{jsxref("Array")}} Instanzen erstellt ein neues Array, in das alle Unter-Array-Elemente bis zur angegebenen Tiefe rekursiv eingefügt werden.

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## Syntax

```js-nolint
flat()
flat(depth)
```

### Parameter

- `depth` {{optional_inline}}
  - : Die Tiefe, die angibt, wie tief eine verschachtelte Array-Struktur abgeflacht werden soll.
    Standardmäßig 1.

### Rückgabewert

Ein neues Array, in das die Unter-Array-Elemente eingefügt wurden.

## Beschreibung

Die `flat()` Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert `this` nicht, sondern gibt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die dieselben Elemente wie das ursprüngliche Array enthält.

Die `flat()` Methode entfernt leere Stellen, wenn das Array, das abgeflacht wird, [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist. Zum Beispiel, wenn `depth` 1 ist, werden sowohl leere Stellen im Haupt-Array als auch im ersten Level der verschachtelten Arrays ignoriert, aber leere Stellen in tiefer verschachtelten Arrays werden mit den Arrays selbst beibehalten.

Die `flat()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-beschriftete Eigenschaften hat. Allerdings müssen ihre Elemente Arrays sein, wenn sie abgeflacht werden sollen.

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

### Verwenden von flat() bei spärlichen Arrays

Die `flat()` Methode entfernt [leere Stellen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) in Arrays:

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", empty, "e"], null ]
console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]
```

### Aufrufen von flat() bei Nicht-Array-Objekten

Die `flat()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nicht-negativer Ganzzahlwert kleiner als `length` ist. Wenn das Element kein Array ist, wird es direkt an das Ergebnis angefügt. Wenn das Element ein Array ist, wird es entsprechend dem `depth` Parameter abgeflacht.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
