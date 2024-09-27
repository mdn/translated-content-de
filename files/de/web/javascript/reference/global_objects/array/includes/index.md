---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`includes()`** Methode von {{jsxref("Array")}} Instanzen bestimmt, ob ein Array einen bestimmten Wert unter seinen Einträgen enthält und gibt entsprechend `true` oder `false` zurück.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der Wert, nach dem gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem die Suche beginnen soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet. In diesem Fall wird das Array jedoch weiterhin von vorne nach hinten durchsucht.
    - Wenn `fromIndex < -array.length` ist oder `fromIndex` weggelassen wird, wird `0` verwendet, wodurch das gesamte Array durchsucht wird.
    - Wenn `fromIndex >= array.length` ist, wird das Array nicht durchsucht und `false` zurückgegeben.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` im Array gefunden wird (oder in dem Teil des Arrays, der durch den Index `fromIndex` angegeben ist, falls angegeben).

## Beschreibung

Die `includes()` Methode vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung des [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) Algorithmus. Nullwerte werden alle als gleich betrachtet, unabhängig vom Vorzeichen. (Das heißt, `-0` ist gleich `0`), aber `false` wird _nicht_ als gleich `0` betrachtet. [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) kann korrekt durchsucht werden.

Wenn sie auf [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, iteriert die `includes()` Methode leere Plätze, als ob sie den Wert `undefined` hätten.

Die `includes()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und ganzzahlschlüsselige Eigenschaften hat.

## Beispiele

### Verwenden von includes()

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### fromIndex ist größer oder gleich der Arraylänge

Wenn `fromIndex` größer oder gleich der Länge des Arrays ist, wird `false` zurückgegeben. Das Array wird nicht durchsucht.

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### Berechneter Index ist kleiner als 0

Wenn `fromIndex` negativ ist, wird der berechnete Index verwendet, um eine Position im Array zu berechnen, ab der die Suche nach `searchElement` beginnt. Wenn der berechnete Index kleiner oder gleich `0` ist, wird das gesamte Array durchsucht.

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

### Verwenden von includes() auf dünn besetzten Arrays

Sie können in einem dünn besetzten Array nach `undefined` suchen und `true` erhalten.

```js
console.log([1, , 3].includes(undefined)); // true
```

### Aufrufen von includes() auf Nicht-Array-Objekten

Die `includes()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
