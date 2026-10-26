---
title: Array.prototype.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`concat()`** von {{jsxref("Array")}}-Instanzen wird verwendet, um zwei oder mehr Arrays zusammenzuführen.
Sie verändert die bestehenden Arrays nicht, sondern gibt ein neues Array zurück.

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
  - : Arrays und/oder Werte, die zu einem neuen Array verkettet werden sollen. Wenn alle `valueN`-Parameter weggelassen werden, gibt `concat` eine {{Glossary("Shallow_copy", "flache Kopie")}} des bestehenden Arrays zurück, für das die Methode aufgerufen wird. Weitere Einzelheiten finden Sie in der folgenden Beschreibung.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Die Methode `concat` erstellt ein neues Array. Dieses wird zunächst mit den Elementen des Objekts gefüllt, für das die Methode aufgerufen wird. Anschließend wird der Wert jedes Arguments an das Array angehängt: Bei gewöhnlichen Objekten oder primitiven Werten wird das Argument selbst zu einem Element des resultierenden Arrays. Bei Arrays oder arrayähnlichen Objekten, deren Eigenschaft [`Symbol.isConcatSpreadable`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) einen truthy-Wert hat, wird jedes Element des Arguments einzeln zum resultierenden Array hinzugefügt. Die Methode `concat` verarbeitet verschachtelte Arrays nicht rekursiv.

Die Methode `concat()` ist eine [kopierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert weder `this` noch eines der als Argumente übergebenen Arrays, sondern gibt eine {{Glossary("Shallow_copy", "flache Kopie")}} zurück, die dieselben Elemente wie die ursprünglichen Arrays enthält.

Die Methode `concat()` erhält leere Positionen, wenn eines der Quell-Arrays [spärlich besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist.

Die Methode `concat()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Der `this`-Wert wird genauso behandelt wie die anderen Argumente, mit der Ausnahme, dass er zuerst in ein Objekt umgewandelt wird. Das bedeutet, dass gewöhnliche Objekte direkt an den Anfang des resultierenden Arrays gestellt werden, während die Elemente arrayähnlicher Objekte mit einem truthy-Wert für `[Symbol.isConcatSpreadable]` einzeln in das resultierende Array übernommen werden.

## Beispiele

### Zwei Arrays verketten

Der folgende Code verkettet zwei Arrays:

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Drei Arrays verketten

Der folgende Code verkettet drei Arrays:

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

### Verschachtelte Arrays verketten

Der folgende Code verkettet verschachtelte Arrays und zeigt, dass Referenzen erhalten bleiben:

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

### Arrayähnliche Objekte mit Symbol.isConcatSpreadable verketten

`concat` behandelt arrayähnliche Objekte standardmäßig nicht als Arrays – nur, wenn `Symbol.isConcatSpreadable` auf einen truthy-Wert gesetzt ist (z. B. `true`).

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### concat() mit spärlich besetzten Arrays verwenden

Wenn eines der Quell-Arrays spärlich besetzt ist, ist auch das resultierende Array spärlich besetzt:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### concat() für Objekte aufrufen, die keine Arrays sind

Wenn der `this`-Wert kein Array ist, wird er in ein Objekt umgewandelt und anschließend genauso behandelt wie die Argumente für `concat()`. In diesem Fall ist der Rückgabewert immer ein neues, gewöhnliches Array.

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

- [Polyfill für `Array.prototype.concat` in `core-js` mit Korrekturen und Implementierung modernen Verhaltens, etwa der Unterstützung von `Symbol.isConcatSpreadable`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.concat` von es-shims](https://www.npmjs.com/package/array.prototype.concat)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
