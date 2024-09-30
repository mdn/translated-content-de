---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`concat()`** Methode von {{jsxref("Array")}} Instanzen wird verwendet, um zwei oder mehr Arrays zu verketten.
Diese Methode ändert nicht die bestehenden Arrays, sondern gibt stattdessen ein neues Array zurück.

{{EmbedInteractiveExample("pages/js/array-concat.html", "shorter")}}

## Syntax

```js-nolint
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```

### Parameter

- `value1`, …, `valueN` {{optional_inline}}
  - : Arrays und/oder Werte, die in ein neues Array verkettet werden sollen. Wenn alle
    `valueN` Parameter ausgelassen werden, gibt `concat` eine
    [flache Kopie](/de/docs/Glossary/Shallow_copy) des bestehenden Arrays zurück, auf dem es aufgerufen wird. Siehe die Beschreibung unten
    für weitere Details.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Die Methode `concat` erstellt ein neues Array. Das Array wird zuerst mit den Elementen des Objekts gefüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument sein Wert in das Array verkettet — bei normalen Objekten oder primitiven Typen wird das Argument selbst zu einem Element des endgültigen Arrays; bei Arrays oder array-ähnlichen Objekten mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) auf einen wahrheitsgetreuen Wert gesetzt, wird jedes Element des Arguments unabhängig zum endgültigen Array hinzugefügt. Die Methode `concat` rekursiert nicht in geschachtelte Array-Argumente.

Die Methode `concat()` ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert weder `this` noch eines der als Argumente bereitgestellten Arrays, sondern gibt stattdessen eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die dieselben Elemente wie die der ursprünglichen Arrays enthält.

Die Methode `concat()` bewahrt leere Slots, falls eines der Quellarrays [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die Methode `concat()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird auf die gleiche Weise behandelt wie die anderen Argumente (außer dass er zuerst in ein Objekt umgewandelt wird), was bedeutet, dass einfache Objekte direkt dem resultierenden Array vorangestellt werden, während array-ähnliche Objekte mit wahrheitsgetreuem `[Symbol.isConcatSpreadable]` in das resultierende Array aufgelöst werden.

## Beispiele

### Zwei Arrays verketten

Der folgende Code verknüpft zwei Arrays:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Drei Arrays verketten

Der folgende Code verknüpft drei Arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Werte zu einem Array verketten

Der folgende Code verknüpft drei Werte mit einem Array:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Verschachtelte Arrays verketten

Der folgende Code verknüpft verschachtelte Arrays und demonstriert die Beibehaltung von Referenzen:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

### Array-artige Objekte mit Symbol.isConcatSpreadable verketten

`concat` behandelt nicht alle array-artigen Objekte standardmäßig als Arrays — nur, wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgetreuen Wert (z.B. `true`) gesetzt ist.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Verwendung von concat() auf spärlichen Arrays

Wenn eines der Quellarrays spärlich ist, wird das resultierende Array ebenfalls spärlich sein:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### Aufruf von concat() auf Nicht-Array-Objekten

Wenn der `this`-Wert kein Array ist, wird er in ein Objekt umgewandelt und dann auf dieselbe Weise wie die Argumente für `concat()` behandelt. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.concat` in `core-js` mit Fixes und Implementierung von modernem Verhalten wie `Symbol.isConcatSpreadable` Unterstützung](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
