---
title: Array.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`** Methode von {{jsxref("Array")}} Instanzen implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es Arrays, von den meisten Syntaxen konsumiert zu werden, die Iterables erwarten, wie z.B. die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Indexes im Array liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der {{jsxref("Array.prototype.values")}} Eigenschaft.

{{EmbedInteractiveExample("pages/js/array-prototype-@@iterator.html")}}

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

Beachten Sie, dass es selten notwendig ist, diese Methode direkt aufzurufen. Die Existenz der `[Symbol.iterator]()` Methode macht Arrays [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

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

### Manueller Zugriff auf den Iterator

Sie können die `next()` Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu erreichen.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### Bearbeitung von Strings und String-Arrays mit derselben Funktion

Da sowohl [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) als auch Arrays das iterable Protokoll implementieren, kann eine generische Funktion entworfen werden, um beide Eingabetypen gleich zu behandeln. Dies ist besser als die direkte Verwendung von {{jsxref("Array.prototype.values()")}}, die erfordert, dass die Eingabe ein Array ist oder zumindest ein Objekt mit einer solchen Methode.

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
- [Leitfaden zu Indexsammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- {{jsxref("Symbol.iterator")}}
- [Iteration Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
