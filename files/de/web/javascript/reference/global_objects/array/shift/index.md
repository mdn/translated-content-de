---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: 2e6d901aaa8d1e5c99f92e7fb62d637e2f9899ec
---

{{JSRef}}

Die Methode **`shift()`** von {{jsxref("Array")}}-Instanzen entfernt das **erste** Element aus einem Array und gibt dieses entfernte Element zurück. Diese Methode verändert die Länge des Arrays.

{{InteractiveExample("JavaScript Demo: Array.shift()")}}

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

Das entfernte Element des Arrays; {{jsxref("undefined")}}, wenn das Array leer ist.

## Beschreibung

Die Methode `shift()` verschiebt alle Werte um 1 nach links und reduziert die Länge um 1, wodurch das erste Element entfernt wird. Falls die {{jsxref("Array/length", "length")}}-Eigenschaft 0 ist, wird {{jsxref("undefined")}} zurückgegeben.

Die Methode {{jsxref("Array/pop", "pop()")}} verhält sich ähnlich wie `shift()`, wird jedoch auf das letzte Element eines Arrays angewandt.

Die Methode `shift()` ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie den Wert von `this` beibehalten und stattdessen ein neues Array mit entferntem ersten Element zurückgeben möchten, können Sie [`arr.slice(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) verwenden.

Die Methode `shift()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der Wert von `this` eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat. Obwohl Zeichenketten ebenfalls array-ähnlich sind, ist diese Methode nicht dafür geeignet, auf sie angewandt zu werden, da Zeichenketten unveränderlich sind.

## Beispiele

### Entfernen eines Elements aus einem Array

Der folgende Code zeigt das `myFish`-Array vor und nach dem Entfernen seines ersten Elements. Außerdem zeigt es das entfernte Element:

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

### Verwendung der shift()-Methode in einer while-Schleife

Die Methode `shift()` wird häufig in der Bedingung innerhalb einer `while`-Schleife verwendet. Im folgenden Beispiel entfernt jede Iteration das nächste Element aus einem Array, bis es leer ist:

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### Aufruf von shift() auf Nicht-Array-Objekten

Die Methode `shift()` liest die `length`-Eigenschaft von `this`. Falls die [normalisierte Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) 0 ist, wird `length` erneut auf `0` gesetzt (während sie möglicherweise negativ oder `undefined` war). Andernfalls wird die Eigenschaft bei `0` zurückgegeben und der Rest der Eigenschaften um eins nach links verschoben. Die Eigenschaft bei `length - 1` wird [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), und die `length`-Eigenschaft wird um eins verringert.

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

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)-Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
