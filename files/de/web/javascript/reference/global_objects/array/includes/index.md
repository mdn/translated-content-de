---
title: Array.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`includes()`** von {{jsxref("Array")}}-Instanzen prüft, ob ein Array unter seinen Einträgen einen bestimmten Wert enthält, und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.includes()")}}

```js interactive-example
const array = [1, 2, 3];

console.log(array.includes(2));
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
  - : Nullbasierter Index, ab dem die Suche beginnt; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index wird vom Ende des Arrays aus gezählt. Wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet. Das Array wird dabei weiterhin von vorn nach hinten durchsucht.
    - Wenn `fromIndex < -array.length` gilt oder `fromIndex` weggelassen wird, wird `0` verwendet und das gesamte Array durchsucht.
    - Wenn `fromIndex >= array.length` gilt, wird das Array nicht durchsucht und `false` zurückgegeben.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `searchElement` im Array gefunden wird (oder, falls angegeben, in dem durch `fromIndex` bestimmten Teil des Arrays).

## Beschreibung

Die Methode `includes()` vergleicht `searchElement` mit den Elementen des Arrays anhand des [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus funktioniert wie die strikte Gleichheit `===` (bei der `-0` und `+0` als gleich gelten), mit der Ausnahme, dass {{jsxref("NaN")}} als gleich mit sich selbst gilt.

Bei [Arrays mit unbelegten Positionen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behandelt die Methode `includes()` leere Positionen so, als hätten sie den Wert `undefined`.

Die Methode `includes()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### includes() verwenden

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

### Der berechnete Index ist kleiner als 0

Wenn `fromIndex` negativ ist, wird daraus ein Index berechnet, der die Startposition für die Suche nach `searchElement` im Array angibt. Ist der berechnete Index kleiner oder gleich `0`, wird das gesamte Array durchsucht.

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

### includes() bei Arrays mit unbelegten Positionen verwenden

Sie können in einem Array mit unbelegten Positionen nach `undefined` suchen und `true` erhalten.

```js
console.log([1, , 3].includes(undefined)); // true
```

### includes() für Objekte aufrufen, die keine Arrays sind

Die Methode `includes()` liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.includes` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.includes` von es-shims](https://www.npmjs.com/package/array-includes)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
