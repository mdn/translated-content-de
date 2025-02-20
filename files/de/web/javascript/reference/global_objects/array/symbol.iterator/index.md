---
title: Array.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`[Symbol.iterator]()`**-Methode von {{jsxref("Array")}}-Instanzen implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es Arrays, von den meisten Syntaxen, die Iterables erwarten, verwendet zu werden, wie z. B. der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Werte jedes Indexes im Array liefert.

Der anfängliche Wert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der anfängliche Wert von {{jsxref("Array.prototype.values")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype[Symbol.iterator]()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
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

Der gleiche Rückgabewert wie {{jsxref("Array.prototype.values()")}}: ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Werte jedes Indexes im Array liefert.

## Beispiele

### Iteration mit der for...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Das Vorhandensein der `[Symbol.iterator]()`-Methode macht Arrays [iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und Iterations-Syntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, mit dem iteriert wird.

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

Sie können die `next()`-Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu haben.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### Umgang mit Strings und String-Arrays mit derselben Funktion

Da sowohl [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) als auch Arrays das iterable Protokoll implementieren, kann eine generische Funktion entworfen werden, die beide Eingaben auf dieselbe Weise behandelt. Dies ist besser, als {{jsxref("Array.prototype.values()")}} direkt aufzurufen, was erfordert, dass die Eingabe ein Array ist oder mindestens ein Objekt mit einer solchen Methode.

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
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
