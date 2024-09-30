---
title: Array.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.iterator]()`** von {{jsxref("Array")}}-Instanzen implementiert das [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es Arrays, von den meisten Syntaxen verwendet zu werden, die Iterables erwarten, wie zum Beispiel der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Indexes im Array liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der Eigenschaft {{jsxref("Array.prototype.values")}}.

{{EmbedInteractiveExample("pages/js/array-prototype-@@iterator.html")}}

## Syntax

```js-nolint
array[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie {{jsxref("Array.prototype.values()")}}: ein neuer [iterable Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), der den Wert jedes Indexes im Array liefert.

## Beispiele

### Iteration mit der for...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Das Vorhandensein der `[Symbol.iterator]()`-Methode macht Arrays [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator für die Schleife zu erhalten.

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

Sie können dennoch manuell die `next()`-Methode des zurückgegebenen Iterator-Objekts aufrufen, um maximale Kontrolle über den Iterationsprozess zu erzielen.

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

Da sowohl [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) als auch Arrays das Iterable-Protokoll implementieren, kann eine allgemeine Funktion entworfen werden, um beide Eingaben auf die gleiche Weise zu behandeln. Dies ist besser als direkt {{jsxref("Array.prototype.values()")}} aufzurufen, was erfordert, dass die Eingabe ein Array oder zumindest ein Objekt mit einer solchen Methode ist.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
