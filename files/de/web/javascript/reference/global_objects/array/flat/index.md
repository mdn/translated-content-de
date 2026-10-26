---
title: Array.prototype.flat()
short-title: flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`flat()`** von {{jsxref("Array")}}-Instanzen erstellt ein neues Array, in das alle Elemente verschachtelter Arrays rekursiv bis zur angegebenen Tiefe eingefügt werden.

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
  - : Die Tiefe, bis zu der eine verschachtelte Array-Struktur abgeflacht werden soll. Der Standardwert ist 1.

### Rückgabewert

Ein neues Array, in das die Elemente der verschachtelten Arrays eingefügt wurden.

## Beschreibung

Die Methode `flat()` ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert `this` nicht, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie das ursprüngliche Array enthält.

Die Methode `flat()` entfernt leere Positionen, wenn das abzuflachende Array [spärlich besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist. Wenn `depth` beispielsweise 1 ist, werden sowohl leere Positionen im äußeren Array als auch auf der ersten Ebene verschachtelter Arrays ignoriert. Leere Positionen in tiefer verschachtelten Arrays bleiben dagegen zusammen mit diesen Arrays erhalten.

Die Methode `flat()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt. Die Elemente müssen jedoch Arrays sein, damit sie abgeflacht werden können.

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

### flat() mit spärlich besetzten Arrays verwenden

Die Methode `flat()` entfernt [leere Positionen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) in Arrays:

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", empty, "e"], null ]
console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]
```

### flat() für Objekte aufrufen, die keine Arrays sind

Die Methode `flat()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist. Wenn das Element kein Array ist, wird es direkt an das Ergebnis angehängt. Wenn es ein Array ist, wird es entsprechend dem Parameter `depth` abgeflacht.

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

- [Polyfill für `Array.prototype.flat` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.flat` von es-shims](https://www.npmjs.com/package/array.prototype.flat)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
