---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("Array")}}-Instanzen wird verwendet, um zwei oder mehr Arrays zu verbinden. Diese Methode verändert die bestehenden Arrays nicht, sondern gibt stattdessen ein neues Array zurück.

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
  - : Arrays und/oder Werte, die in ein neues Array zusammengefügt werden sollen. Wenn alle
    `valueN`-Parameter weggelassen werden, gibt `concat` eine
    {{Glossary("Shallow_copy", "flache Kopie")}} des bestehenden Arrays zurück, auf dem es aufgerufen wurde. Weitere Details finden Sie in der Beschreibung unten.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Die `concat`-Methode erstellt ein neues Array. Das Array wird zunächst mit den Elementen des Objekts gefüllt, auf dem sie aufgerufen wurde. Dann wird für jedes Argument sein Wert in das Array eingefügt — bei normalen Objekten oder Primitivelementen wird das Argument selbst ein Element des endgültigen Arrays; bei Arrays oder array-ähnlichen Objekten mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahren Wert gesetzt ist, wird jedes Element des Arguments einzeln dem endgültigen Array hinzugefügt. Die `concat`-Methode ruft keine rekursive Verknüpfung von verschachtelten Array-Argumenten auf.

Die `concat()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert weder `this` noch eines der als Argumente angegebenen Arrays, sondern gibt stattdessen eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die die gleichen Elemente wie die der ursprünglichen Arrays enthält.

Die `concat()`-Methode bewahrt leere Stellen, falls eines der Quell-Arrays [lückenhaft](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die `concat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird auf die gleiche Weise behandelt wie die anderen Argumente (außer dass er zuerst in ein Objekt konvertiert wird). Das bedeutet, dass einfache Objekte direkt dem resultierenden Array vorangestellt werden, während array-ähnliche Objekte mit einem wahren `[Symbol.isConcatSpreadable]`-Wert in das resultierende Array verteilt werden.

## Beispiele

### Zwei Arrays verbinden

Der folgende Code verbindet zwei Arrays:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Drei Arrays verbinden

Der folgende Code verbindet drei Arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Werte an ein Array anhängen

Der folgende Code hängt drei Werte an ein Array an:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Verschachtelte Arrays verbinden

Der folgende Code verbindet verschachtelte Arrays und zeigt die Beibehaltung von Referenzen:

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

### Array-ähnliche Objekte mit Symbol.isConcatSpreadable verbinden

`concat` behandelt standardmäßig nicht alle array-ähnlichen Objekte wie Arrays — nur wenn `Symbol.isConcatSpreadable` auf einen wahren Wert (z. B. `true`) gesetzt ist.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Verwendung von concat() mit lückenhaften Arrays

Wenn eines der Quell-Arrays lückenhaft ist, wird das resultierende Array ebenfalls lückenhaft sein:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### concat() auf Nicht-Array-Objekte aufrufen

Wenn der `this`-Wert kein Array ist, wird er in ein Objekt umgewandelt und dann wie die Argumente für `concat()` behandelt. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

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

- [Polyfill von `Array.prototype.concat` in `core-js` mit Fixes und Implementierung von modernem Verhalten wie Unterstützung für `Symbol.isConcatSpreadable`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
