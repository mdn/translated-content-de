---
title: Array.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`includes()`**-Methode von {{jsxref("Array")}}-Instanzen bestimmt, ob ein Array einen bestimmten Wert unter seinen Einträgen enthält und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.includes()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der zu suchende Wert.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem mit der Suche begonnen wird, [in einen Integer umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet. Das Array wird jedoch immer noch von vorne nach hinten durchsucht.
    - Ist `fromIndex < -array.length` oder wird `fromIndex` weggelassen, wird `0` verwendet, sodass das gesamte Array durchsucht wird.
    - Ist `fromIndex >= array.length`, wird das Array nicht durchsucht und es wird `false` zurückgegeben.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` im Array gefunden wird (oder in dem durch den Index `fromIndex` angegebenen Teil des Arrays, falls angegeben).

## Beschreibung

Die `includes()`-Methode vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung des [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. Werte von Null werden unabhängig von ihrem Vorzeichen als gleich betrachtet (d.h. `-0` ist gleich `0`), aber `false` wird _nicht_ als gleich `0` angesehen. [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) kann korrekt gesucht werden.

Wenn sie auf [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, iteriert die `includes()`-Methode leere Slots, als ob sie den Wert `undefined` hätten.

Die `includes()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und Integer-indizierte Eigenschaften hat.

## Beispiele

### Verwendung von includes()

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### fromIndex ist größer oder gleich der Array-Länge

Wenn `fromIndex` größer oder gleich der Länge des Arrays ist, wird `false` zurückgegeben. Das Array wird nicht durchsucht.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Berechneter Index ist kleiner als 0

Wenn `fromIndex` negativ ist, wird der berechnete Index verwendet, um die Position im Array zu ermitteln, an der die Suche nach `searchElement` beginnt. Ist der berechnete Index kleiner oder gleich `0`, wird das gesamte Array durchsucht.

```js
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### Nutzung von includes() auf dünn besetzten Arrays

Sie können `undefined` in einem dünn besetzten Array suchen und `true` zurückbekommen.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Aufruf von includes() auf Nicht-Array-Objekten

Die `includes()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl ist, die kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ignored by includes() since length is 3
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.includes`](https://www.npmjs.com/package/array-includes)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
