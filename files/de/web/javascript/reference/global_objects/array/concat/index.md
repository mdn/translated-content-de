---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("Array")}}-Instanzen wird verwendet, um zwei oder mehr Arrays zu verbinden. Diese Methode ändert die bestehenden Arrays nicht, sondern gibt stattdessen ein neues Array zurück.

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
  - : Arrays und/oder Werte, die in ein neues Array zusammengeführt werden sollen. Wenn alle `valueN` Parameter weggelassen werden, gibt `concat` eine [flache Kopie](/de/docs/Glossary/Shallow_copy) des bestehenden Arrays zurück, auf dem die Methode aufgerufen wird. Siehe die untenstehende Beschreibung für weitere Details.

### Rückgabewert

Eine neue Instanz von {{jsxref("Array")}}.

## Beschreibung

Die `concat`-Methode erstellt ein neues Array. Das Array wird zuerst mit den Elementen des Objekts gefüllt, auf dem es aufgerufen wird. Dann wird für jedes Argument dessen Wert in das Array eingefügt — bei normalen Objekten oder primitiven Werten wird das Argument selbst zu einem Element des endgültigen Arrays; für Arrays oder array-ähnliche Objekte mit der Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable), die auf einen wahrheitsgemäßen Wert gesetzt ist, wird jedes Element des Arguments einzeln zum endgültigen Array hinzugefügt. Die `concat`-Methode geht nicht rekursiv in verschachtelte Array-Argumente.

Die `concat()`-Methode ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert weder `this` noch eines der als Argument übergebenen Arrays, sondern gibt stattdessen eine [flache Kopie](/de/docs/Glossary/Shallow_copy) zurück, die die gleichen Elemente wie die Original-Arrays enthält.

Die `concat()`-Methode bewahrt leere Plätze, wenn eines der Quell-Arrays [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die `concat()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird genauso wie die anderen Argumente behandelt (außer dass er zuerst in ein Objekt konvertiert wird), was bedeutet, dass einfache Objekte direkt dem resultierenden Array vorangestellt werden, während array-ähnliche Objekte mit wahrheitsgemäßem `[Symbol.isConcatSpreadable]` in das resultierende Array verteilt werden.

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

Der folgende Code fügt einem Array drei Werte hinzu:

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

`concat` behandelt nicht standardmäßig alle array-ähnlichen Objekte als Arrays — nur wenn `Symbol.isConcatSpreadable` auf einen wahrheitsgemäßen Wert (z.B. `true`) gesetzt ist.

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### concat() bei sparsamen Arrays verwenden

Wenn eines der Quell-Arrays sparsam ist, wird das resultierende Array ebenfalls sparsam sein:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### concat() bei Objekten verwenden, die keine Arrays sind

Wenn der `this` Wert kein Array ist, wird er in ein Objekt konvertiert und dann auf die gleiche Weise wie die Argumente für `concat()` behandelt. In diesem Fall ist der Rückgabewert immer ein einfaches neues Array.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
