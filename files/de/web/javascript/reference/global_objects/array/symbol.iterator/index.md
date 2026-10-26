---
title: Array.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.iterator]()`** von {{jsxref("Array")}}-Instanzen implementiert das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Dadurch können Arrays mit den meisten Syntaxformen verwendet werden, die Iterables erwarten, etwa mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und in {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das den Wert jedes Index im Array liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der Eigenschaft {{jsxref("Array.prototype.values")}}.

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

Derselbe Rückgabewert wie bei {{jsxref("Array.prototype.values()")}}: ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das den Wert jedes Index im Array liefert.

## Beispiele

### Iteration mit einer for...of-Schleife

Sie müssen diese Methode nur selten direkt aufrufen. Durch die Methode `[Symbol.iterator]()` sind Arrays [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Syntaxformen zur Iteration wie die `for...of`-Schleife rufen die Methode automatisch auf, um den Iterator für die Schleife zu erhalten.

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

### Den Iterator manuell verwenden

Sie können die Methode `next()` des zurückgegebenen Iterator-Objekts auch manuell aufrufen, um den Iterationsablauf vollständig zu steuern.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### Strings und String-Arrays mit derselben Funktion verarbeiten

Da sowohl [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) als auch Arrays das Iterable-Protokoll implementieren, lässt sich eine generische Funktion entwerfen, die beide Eingaben auf dieselbe Weise verarbeitet. Das ist besser, als {{jsxref("Array.prototype.values()")}} direkt aufzurufen, denn dafür muss die Eingabe ein Array oder zumindest ein Objekt mit einer solchen Methode sein.

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

- [Polyfill für `Array.prototype[Symbol.iterator]` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) – Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
