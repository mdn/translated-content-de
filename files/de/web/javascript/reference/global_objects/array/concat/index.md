---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`concat()`** Methode von {{jsxref("Array")}} Instanzen wird verwendet, um zwei oder mehr Arrays zu verbinden. Diese Methode ändert die bestehenden Arrays nicht, sondern gibt stattdessen ein neues Array zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## Syntax

```js-nolint
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```

### Parameter

- `value1`, …, `valueN` {{optional_inline}}
  - : Arrays und/oder Werte, die in ein neues Array verkettet werden sollen. Wenn alle `valueN` Parameter weggelassen werden, gibt `concat` eine {{Glossary("Shallow_copy", "flache Kopie")}} des vorhandenen Arrays zurück, auf dem es aufgerufen wird. Weitere Details finden Sie in der untenstehenden Beschreibung.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Die `concat` Methode erstellt ein neues Array. Das Array wird zuerst mit den Elementen des Objekts gefüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument dessen Wert in das Array verkettet — für normale Objekte oder Primitive wird das Argument selbst zu einem Element des endgültigen Arrays; für Arrays oder array-ähnliche Objekte mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahrheitsgemäßen Wert gesetzt ist, wird jedes Element des Arguments unabhängig zum endgültigen Array hinzugefügt. Die `concat` Methode rekursiert nicht in verschachtelte Array-Argumente hinein.

Die `concat()` Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert weder `this` noch eines der als Argumente übergebenen Arrays, sondern gibt stattdessen eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie die der ursprünglichen Arrays enthält.

Die `concat()` Methode bewahrt leere Slots, falls eines der Quellarrays [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die `concat()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this` Wert wird in der gleichen Weise wie die anderen Argumente behandelt (außer dass er zuerst in ein Objekt umgewandelt wird), was bedeutet, dass einfache Objekte direkt vor das resultierende Array gesetzt werden, während array-ähnliche Objekte mit einem wahrheitsgemäßen `[Symbol.isConcatSpreadable]` in das resultierende Array verteilt werden.

## Beispiele

### Zwei Arrays verketteten

Der folgende Code verkettet zwei Arrays:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Drei Arrays verketteten

Der folgende Code verkettet drei Arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Werte an ein Array verketteten

Der folgende Code verkettet drei Werte an ein Array:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Verschachtelte Arrays verketteten

Der folgende Code verkettet verschachtelte Arrays und zeigt die Erhaltung von Referenzen:

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

### Array-ähnliche Objekte mit Symbol.isConcatSpreadable verketteten

`concat` behandelt nicht alle array-ähnlichen Objekte standardmäßig als Arrays — nur wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgemäßen Wert gesetzt ist (z.B. `true`).

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Verwenden von concat() auf spärlichen Arrays

Ist eines der Quellarrays spärlich, ist das resultierende Array ebenfalls spärlich:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### Aufrufen von concat() auf Nicht-Array-Objekten

Wenn der `this` Wert kein Array ist, wird er in ein Objekt umgewandelt und dann in gleicher Weise wie die Argumente für `concat()` behandelt. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

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

- [Polyfill von `Array.prototype.concat` in `core-js` mit Korrekturen und Implementierung von modernem Verhalten wie Unterstützung für `Symbol.isConcatSpreadable`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.concat`](https://www.npmjs.com/package/array.prototype.concat)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
