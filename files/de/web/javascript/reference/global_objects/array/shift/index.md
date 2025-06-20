---
title: Array.prototype.shift()
short-title: shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`shift()`** Methode von {{jsxref("Array")}} Instanzen entfernt das **erste**
Element aus einem Array und gibt dieses entfernte Element zurück. Diese Methode ändert die Länge des Arrays.

{{InteractiveExample("JavaScript Demo: Array.prototype.shift()")}}

```js interactive-example
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
```

## Syntax

```js-nolint
shift()
```

### Parameter

Keine.

### Rückgabewert

Das entfernte Element aus dem Array; {{jsxref("undefined")}}, wenn das Array leer ist.

## Beschreibung

Die `shift()`-Methode verschiebt alle Werte um 1 nach links und verringert die Länge um 1, was dazu führt, dass das erste Element entfernt wird. Wenn die {{jsxref("Array/length", "length")}}-Eigenschaft 0 ist, wird {{jsxref("undefined")}} zurückgegeben.

Die {{jsxref("Array/pop", "pop()")}} Methode hat ähnliches Verhalten wie `shift()`, wird aber auf das letzte Element in einem Array angewendet.

Die `shift()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array zurückgegeben wird, bei dem das erste Element entfernt ist, können Sie stattdessen [`arr.slice(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) verwenden.

Die `shift()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Zeichenketten ebenfalls Array-ähnlich sind, ist diese Methode nicht geeignet, da Zeichenketten unveränderlich sind.

## Beispiele

### Entfernen eines Elements aus einem Array

Der folgende Code zeigt das `myFish`-Array vor und nach dem Entfernen seines ersten Elements. Es zeigt auch das entfernte Element:

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel
```

### Verwendung der shift() Methode in einer While-Schleife

Die `shift()`-Methode wird oft in der Bedingung einer While-Schleife verwendet. Im folgenden Beispiel wird bei jeder Iteration das nächste Element aus einem Array entfernt, bis es leer ist:

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### Aufruf von shift() auf Nicht-Array-Objekten

Die `shift()`-Methode liest die `length`-Eigenschaft von `this`. Wenn die [normalisierte Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) 0 ist, wird `length` wieder auf `0` gesetzt (während sie vorher möglicherweise negativ oder `undefined` war). Andernfalls wird die Eigenschaft bei `0` zurückgegeben, und der Rest der Eigenschaften wird um eins nach links verschoben. Die Eigenschaft bei `length - 1` wird [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), und die `length`-Eigenschaft wird um eins verringert.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined, because it is an empty slot
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
