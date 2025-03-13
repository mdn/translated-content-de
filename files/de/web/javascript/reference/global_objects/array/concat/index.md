---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("Array")}}-Instanzen wird verwendet, um zwei oder mehr Arrays zu verbinden. Diese Methode ändert die bestehenden Arrays nicht, sondern gibt stattdessen ein neues Array zurück.

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
  - : Arrays und/oder Werte, die zu einem neuen Array verbunden werden sollen. Wenn alle `valueN`-Parameter weggelassen werden, gibt `concat` eine {{Glossary("Shallow_copy", "flache Kopie")}} des bestehenden Arrays zurück, auf dem es aufgerufen wird. Siehe die Beschreibung unten für mehr Details.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Die `concat`-Methode erstellt ein neues Array. Das Array wird zuerst mit den Elementen des Objekts gefüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument dessen Wert in das Array integriert — für normale Objekte oder Primitive wird das Argument selbst zu einem Element des endgültigen Arrays; für Arrays oder array-ähnliche Objekte mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahrheitsgemäßen Wert gesetzt ist, wird jedes Element des Arguments unabhängig zum endgültigen Array hinzugefügt. Die `concat`-Methode durchläuft nicht rekursiv verschachtelte Array-Argumente.

Die `concat()`-Methode ist eine [Kopiermethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert weder `this` noch eines der als Argumente angegebenen Arrays, sondern gibt stattdessen eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie die der Original-Arrays enthält.

Die `concat()`-Methode bewahrt leere Plätze, wenn eines der Quell-Arrays [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die `concat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird in gleicher Weise behandelt wie die anderen Argumente (außer dass er zuerst in ein Objekt konvertiert wird), was bedeutet, dass einfache Objekte direkt an das resultierende Array vorangestellt werden, während array-ähnliche Objekte mit einem wahrheitsgemäßen `[Symbol.isConcatSpreadable]` in das resultierende Array übertragen werden.

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

### Werte zu einem Array hinzufügen

Der folgende Code fügt drei Werte zu einem Array hinzu:

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

`concat` behandelt nicht standardmäßig alle array-ähnlichen Objekte wie Arrays — nur wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgemäßen Wert (z.B. `true`) gesetzt ist.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Verwendung von concat() auf spärlichen Arrays

Wenn eines der Quell-Arrays spärlich ist, wird das resultierende Array ebenfalls spärlich sein:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### Aufruf von concat() auf Nicht-Array-Objekten

Wenn der `this`-Wert kein Array ist, wird er in ein Objekt umgewandelt und dann in gleicher Weise behandelt wie die Argumente für `concat()`. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

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

- [Polyfill von `Array.prototype.concat` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie `Symbol.isConcatSpreadable`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.concat`](https://www.npmjs.com/package/array.prototype.concat)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
