---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`includes()`** Methode von {{jsxref("Array")}} Instanzen bestimmt, ob ein Array einen bestimmten Wert unter seinen Einträgen enthält und gibt entsprechend `true` oder `false` zurück.

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
  - : Der Wert, nach dem gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Der nullbasierte Index, bei dem die Suche beginnen soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet. In diesem Fall wird das Array jedoch trotzdem von vorne nach hinten durchsucht.
    - Wenn `fromIndex < -array.length` oder `fromIndex` weggelassen wird, wird `0` verwendet, wodurch das gesamte Array durchsucht wird.
    - Wenn `fromIndex >= array.length` ist, wird das Array nicht durchsucht und `false` wird zurückgegeben.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` im Array (oder im angegebenen Teil des Arrays durch den Index `fromIndex`) gefunden wird.

## Beschreibung

Die `includes()` Methode vergleicht `searchElement` mit Elementen des Arrays anhand des [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) Algorithmus. Werte von Null werden alle als gleich angesehen, unabhängig vom Vorzeichen. (Das heißt, `-0` ist gleich `0`), aber `false` wird _nicht_ als dasselbe wie `0` angesehen. [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) kann korrekt gesucht werden.

Bei Verwendung für [dünn besetzte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) durchläuft die `includes()` Methode leere Stellen, als hätten sie den Wert `undefined`.

Die `includes()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-beschriftete Eigenschaften hat.

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

### fromIndex ist größer oder gleich der Länge des Arrays

Wenn `fromIndex` größer oder gleich der Länge des Arrays ist, wird `false` zurückgegeben. Das Array wird nicht durchsucht.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Berechneter Index ist kleiner als 0

Wenn `fromIndex` negativ ist, wird der berechnete Index verwendet, um eine Position im Array zu bestimmen, an der die Suche nach `searchElement` begonnen werden soll. Wenn der berechnete Index kleiner oder gleich `0` ist, wird das gesamte Array durchsucht.

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

### Verwendung von includes() bei dünn besetzten Arrays

Sie können nach `undefined` in einem dünn besetzten Array suchen und erhalten `true`.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Aufrufen von includes() bei Nicht-Array-Objekten

Die `includes()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl ist, die kleiner als `length` ist.

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
- [Leitfaden für indizierte Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
