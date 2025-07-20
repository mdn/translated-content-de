---
title: Array.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die Methode **`[Symbol.iterator]()`** von {{jsxref("Array")}} Instanzen implementiert das [iterable Protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es Arrays, von den meisten Syntaxen konsumiert zu werden, die Iterables erwarten, wie zum Beispiel dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Indexes im Array liefert.

Der anfängliche Wert dieser Eigenschaft ist das gleiche Funktionsobjekt wie der anfängliche Wert der Eigenschaft {{jsxref("Array.prototype.values")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype[Symbol.iterator]()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Syntax

```js-nolint
array[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie {{jsxref("Array.prototype.values()")}}: ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das den Wert jedes Indexes im Array liefert.

## Beispiele

### Iteration mit der for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()` Methode macht Arrays [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und Iterations-Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, über den iteriert werden soll.

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### Ergebnis

{{EmbedLiveSample("Iteration_using_for...of_loop", "", "")}}

### Manuelles Erstellen des Iterators

Sie können die `next()` Methode des zurückgegebenen Iterator-Objekts dennoch manuell aufrufen, um die maximale Kontrolle über den Iterationsprozess zu erhalten.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### Handhabung von Zeichenfolgen und Zeichenfolgen-Arrays mit derselben Funktion

Da sowohl [Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) als auch Arrays das iterable Protocol implementieren, kann eine generische Funktion entworfen werden, um beide Eingaben auf die gleiche Weise zu behandeln. Dies ist besser, als {{jsxref("Array.prototype.values()")}} direkt aufzurufen, was erfordert, dass die Eingabe ein Array oder zumindest ein Objekt mit einer solchen Methode ist.

```js
function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "is not iterable.");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// Array
logIterable(["a", "b", "c"]);
// a
// b
// c

// String
logIterable("abc");
// a
// b
// c

// Number
logIterable(123);
// 123 is not iterable.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype[Symbol.iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- {{jsxref("Symbol.iterator")}}
- [Iteration Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
