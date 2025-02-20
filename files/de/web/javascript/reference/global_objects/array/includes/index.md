---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`includes()`**-Methode von {{jsxref("Array")}}-Instanzen bestimmt, ob ein Array einen bestimmten Wert unter seinen Einträgen enthält und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: Array.includes()")}}

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
  - : Nullbasierter Index, ab dem die Suche gestartet wird, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet. Das Array wird jedoch trotzdem von vorne nach hinten durchsucht.
    - Wenn `fromIndex < -array.length` ist oder `fromIndex` weggelassen wird, wird `0` verwendet, wodurch das gesamte Array durchsucht wird.
    - Wenn `fromIndex >= array.length`, wird das Array nicht durchsucht und `false` zurückgegeben.

### Rückgabewert

Ein Boolean-Wert, der `true` ist, wenn der Wert `searchElement` im Array (oder im durch den Index `fromIndex`, falls angegeben, festgelegten Teil des Arrays) gefunden wird.

## Beschreibung

Die Methode `includes()` vergleicht `searchElement` mit den Elementen des Arrays mithilfe des [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. Werte von Null werden unabhängig vom Vorzeichen als gleich betrachtet (d. h., `-0` ist gleich `0`), aber `false` wird _nicht_ als dasselbe wie `0` betrachtet. [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) kann korrekt gesucht werden.

Bei Verwendung mit [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) iteriert die Methode `includes()` leere Slots, als ob sie den Wert `undefined` hätten.

Die Methode `includes()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und Integer-Keys als Eigenschaften hat.

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

### Wenn fromIndex größer oder gleich der Array-Länge ist

Wenn `fromIndex` größer oder gleich der Länge des Arrays ist, wird `false` zurückgegeben. Das Array wird nicht durchsucht.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Berechneter Index ist kleiner als 0

Wenn `fromIndex` negativ ist, wird der berechnete Index als Position im Array verwendet, ab der die Suche nach `searchElement` beginnt. Wenn der berechnete Index kleiner oder gleich `0` ist, wird das gesamte Array durchsucht.

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

### Verwendung von includes() bei lückenhaften Arrays

Sie können in einem lückenhaften Array nach `undefined` suchen und erhalten `true`.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Aufruf von includes() auf Nicht-Array-Objekten

Die Methode `includes()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
