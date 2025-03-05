---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`concat()`** Methode von {{jsxref("Array")}} Instanzen wird verwendet, um zwei oder mehr Arrays zusammenzuführen. Diese Methode ändert nicht die bestehenden Arrays, sondern gibt stattdessen ein neues Array zurück.

{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

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
  - : Arrays und/oder Werte, die in ein neues Array zusammengeführt werden sollen. Wenn alle `valueN` Parameter weggelassen werden, gibt `concat` eine {{Glossary("Shallow_copy", "flache Kopie")}} des bestehenden Arrays zurück, auf dem es aufgerufen wird. Siehe die Beschreibung unten für weitere Details.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Die `concat` Methode erstellt ein neues Array. Das Array wird zunächst mit den Elementen des Objekts gefüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument dessen Wert in das Array zusammengeführt — für normale Objekte oder Primitive wird das Argument selbst ein Element des endgültigen Arrays; für Arrays oder array-ähnliche Objekte mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahrheitsgemäßen Wert gesetzt ist, wird jedes Element des Arguments unabhängig zum endgültigen Array hinzugefügt. Die `concat` Methode rekursiert nicht in verschachtelte Array-Argumente.

Die `concat()` Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert weder `this` noch eines der als Argument übergebenen Arrays, sondern gibt stattdessen eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie die aus den Original-Arrays enthält.

Die `concat()` Methode erhält leere Plätze bei, wenn eines der Quell-Arrays [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die `concat()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this` Wert wird auf dieselbe Weise wie die anderen Argumente behandelt (außer dass es zuerst in ein Objekt umgewandelt wird), was bedeutet, dass einfache Objekte direkt dem resultierenden Array vorangestellt werden, während array-ähnliche Objekte mit einem wahrheitsgemäßen `[Symbol.isConcatSpreadable]` in das resultierende Array übertragen werden.

## Beispiele

### Zwei Arrays zusammenführen

Der folgende Code fügt zwei Arrays zusammen:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Drei Arrays zusammenführen

Der folgende Code fügt drei Arrays zusammen:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Werte zu einem Array zusammenführen

Der folgende Code fügt drei Werte zu einem Array zusammen:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Verschachtelte Arrays zusammenführen

Der folgende Code fügt verschachtelte Arrays zusammen und zeigt die Beibehaltung der Referenzen:

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

### Array-ähnliche Objekte mit Symbol.isConcatSpreadable zusammenführen

`concat` behandelt nicht alle array-ähnlichen Objekte standardmäßig als Arrays — nur wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgemäßen Wert (z.B. `true`) gesetzt ist.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Verwendung von concat() bei spärlichen Arrays

Wenn eines der Quell-Arrays spärlich ist, wird das resultierende Array ebenfalls spärlich sein:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### Aufruf von concat() auf Nicht-Array-Objekten

Wenn der `this` Wert kein Array ist, wird es in ein Objekt umgewandelt und dann auf die gleiche Weise wie die Argumente für `concat()` behandelt. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

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

- [Polyfill von `Array.prototype.concat` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie `Symbol.isConcatSpreadable` Unterstützung](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims polyfill von `Array.prototype.concat`](https://www.npmjs.com/package/array.prototype.concat)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
