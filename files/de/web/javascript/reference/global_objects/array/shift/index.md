---
title: Array.prototype.shift()
short-title: shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`shift()`**-Methode von {{jsxref("Array")}} Instanzen entfernt das **erste** Element aus einem Array und gibt dieses entfernte Element zurück. Diese Methode ändert die Länge des Arrays.

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

Das entfernte Element aus dem Array; {{jsxref("undefined")}} wenn das Array leer ist.

## Beschreibung

Die `shift()`-Methode verschiebt alle Werte um 1 nach links und verringert die Länge um 1, was dazu führt, dass das erste Element entfernt wird. Wenn die {{jsxref("Array/length", "length")}}-Eigenschaft 0 ist, wird {{jsxref("undefined")}} zurückgegeben.

Die {{jsxref("Array/pop", "pop()")}}-Methode hat ein ähnliches Verhalten wie `shift()`, wird aber auf das letzte Element eines Arrays angewendet.

Die `shift()`-Methode ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge und den Inhalt von `this`. Falls Sie möchten, dass der Wert von `this` gleich bleibt, aber ein neues Array mit dem entfernten ersten Element zurückgegeben wird, können Sie stattdessen [`arr.slice(1)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) verwenden.

Die `shift()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-indexierte Eigenschaften besitzt. Obwohl Strings ebenfalls Array-ähnlich sind, eignet sich diese Methode nicht zur Anwendung auf ihnen, da Strings unveränderlich sind.

## Beispiele

### Entfernen eines Elements aus einem Array

Der folgende Code zeigt das `myFish` Array vor und nach dem Entfernen seines ersten Elements. Es zeigt auch das entfernte Element an:

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

Die shift()-Methode wird häufig in Bedingungen innerhalb von while-Schleifen verwendet. Im folgenden Beispiel wird bei jeder Iteration das nächste Element aus einem Array entfernt, bis es leer ist:

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### Aufrufen von shift() auf Nicht-Array-Objekten

Die `shift()`-Methode liest die `length`-Eigenschaft von `this`. Wenn die [normalisierte Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) 0 ist, wird `length` wieder auf `0` gesetzt (obwohl es vorher negativ oder `undefined` sein kann). Andernfalls wird die Eigenschaft bei `0` zurückgegeben, und die restlichen Eigenschaften werden um eins nach links verschoben. Die Eigenschaft bei `length - 1` wird [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), und die `length`-Eigenschaft wird um eins verringert.

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

- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
