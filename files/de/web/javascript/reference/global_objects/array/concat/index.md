---
title: Array.prototype.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`concat()`**-Methode von {{jsxref("Array")}}-Instanzen wird verwendet, um zwei oder mehr Arrays zu verknüpfen.
Diese Methode ändert die bestehenden Arrays nicht, sondern gibt stattdessen ein neues Array zurück.

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
  - : Arrays und/oder Werte, die zu einem neuen Array verkettet werden sollen. Wenn alle
    `valueN` Parameter weggelassen werden, gibt `concat` eine
    {{Glossary("Shallow_copy", "flache Kopie")}} des bestehenden Arrays zurück, auf dem sie aufgerufen wird. Siehe die Beschreibung unten
    für weitere Details.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Die `concat`-Methode erstellt ein neues Array. Das Array wird zuerst mit den Elementen des Objekts gefüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument der entsprechende Wert dem Array verkettet – für normale Objekte oder Primitive wird das Argument selbst ein Element des endgültigen Arrays; für Arrays oder array-ähnliche Objekte mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahrheitsgemäßen Wert gesetzt ist, wird jedes Element des Arguments unabhängig dem endgültigen Array hinzugefügt. Die `concat`-Methode rekursiert nicht in verschachtelten Array-Argumenten.

Die `concat()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert weder `this` noch eines der übergebenen Arrays, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die die gleichen Elemente wie die der ursprünglichen Arrays enthält.

Die `concat()`-Methode bewahrt leere Stellen, wenn eines der Quellarrays [spärlich](/de/docs/Web/JavaScript/Leitfaden/Indexed_collections#spärliche_arrays) ist.

Die `concat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird auf die gleiche Weise wie die anderen Argumente behandelt (außer dass er zuerst in ein Objekt konvertiert wird), was bedeutet, dass einfache Objekte direkt vor das resultierende Array gestellt werden, während array-ähnliche Objekte mit wahrheitsgemäßem `[Symbol.isConcatSpreadable]` in das resultierende Array verteilt werden.

## Beispiele

### Verketten von zwei Arrays

Der folgende Code verkettet zwei Arrays:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Verketten von drei Arrays

Der folgende Code verkettet drei Arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Verketten von Werten zu einem Array

Der folgende Code verkettet drei Werte zu einem Array:

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Verketten von verschachtelten Arrays

Der folgende Code verkettet verschachtelte Arrays und demonstriert die Beibehaltung von Referenzen:

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

### Verketten von array-ähnlichen Objekten mit Symbol.isConcatSpreadable

`concat` behandelt nicht standardmäßig alle array-ähnlichen Objekte als Arrays – nur wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgemäßen Wert (z.B. `true`) gesetzt ist.

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

### Aufrufen von concat() auf Nicht-Array-Objekten

Wenn der `this`-Wert kein Array ist, wird er in ein Objekt konvertiert und dann genauso behandelt wie die Argumente für `concat()`. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

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
- [Indexed Sammlungen](/de/docs/Web/JavaScript/Leitfaden/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
