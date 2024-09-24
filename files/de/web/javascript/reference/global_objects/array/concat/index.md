---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("Array")}} Instanzen wird verwendet, um zwei oder mehr Arrays zu verbinden.
Diese Methode verändert die bestehenden Arrays nicht, sondern gibt stattdessen ein neues Array zurück.

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
    `valueN`-Parameter ausgelassen werden, gibt `concat` eine
    [flache Kopie](/de/docs/Glossary/Shallow_copy) des bestehenden Arrays zurück, auf dem es aufgerufen wird. Siehe die Beschreibung unten für mehr Details.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Die `concat`-Methode erstellt ein neues Array. Das Array wird zuerst mit den Elementen des Objekts befüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument dessen Wert in das Array verkettet – für normale Objekte oder Primitive wird das Argument selbst ein Element des endgültigen Arrays; für Arrays oder array-ähnliche Objekte mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahrheitsgemäßen Wert gesetzt ist, wird jedes Element des Arguments unabhängig zu dem endgültigen Array hinzugefügt. Die `concat`-Methode geht nicht rekursiv in verschachtelte Array-Argumente.

Die `concat()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert weder `this` noch eines der als Argumente übergebenen Arrays, sondern gibt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die dieselben Elemente wie die der Originalarrays enthält.

Die `concat()`-Methode bewahrt leere Slots, wenn eines der Quellarrays [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die `concat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird genauso behandelt wie die anderen Argumente (außer dass er zuerst in ein Objekt umgewandelt wird), was bedeutet, dass einfache Objekte direkt an das resultierende Array vorangestellt werden, während array-ähnliche Objekte mit einem wahrheitsgemäßen `[Symbol.isConcatSpreadable]` in das resultierende Array verteilt werden.

## Beispiele

### Verbinden von zwei Arrays

Im folgenden Code werden zwei Arrays verbunden:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// ergibt ['a', 'b', 'c', 1, 2, 3]
```

### Verbinden von drei Arrays

Im folgenden Code werden drei Arrays verbunden:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// ergibt [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Werte zu einem Array hinzufügen

Im folgenden Code werden drei Werte zu einem Array hinzugefügt:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// ergibt ['a', 'b', 'c', 1, 2, 3]
```

### Verschachtelte Arrays verbinden

Der folgende Code fügt verschachtelte Arrays zusammen und demonstriert die Beibehaltung von Referenzen:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// ergibt [[1], 2, [3]]

// das erste Element von num1 ändern
num1[0].push(4);

console.log(numbers);
// ergibt [[1, 4], 2, [3]]
```

### Array-ähnliche Objekte mit Symbol.isConcatSpreadable hinzufügen

`concat` behandelt nicht alle array-ähnlichen Objekte standardmäßig als Arrays — nur wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgemäßen Wert (z.B. `true`) gesetzt ist.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Verwendung von concat() bei dünn besetzten Arrays

Wenn eines der Quellarrays dünn besetzt ist, wird das resultierende Array ebenfalls dünn besetzt sein:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### Aufrufen von concat() bei Nicht-Array-Objekten

Wenn der `this`-Wert kein Array ist, wird er in ein Objekt umgewandelt und dann in gleicher Weise wie die Argumente für `concat()` behandelt. In diesem Fall ist der Rückgabewert immer ein neues einfaches Array.

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // von concat() ignoriert, da die length 2 ist
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.concat` in `core-js` mit Korrekturen und Implementierung moderner Funktionen wie Unterstützung für `Symbol.isConcatSpreadable`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
