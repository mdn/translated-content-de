---
title: Array.prototype.at()
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`at()`**-Methode von {{jsxref("Array")}}-Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen verwendet werden können. Negative Ganzzahlen zählen vom letzten Element des Arrays rückwärts.

{{InteractiveExample("JavaScript Demo: Array.prototype.at()")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array.at(index)}`);
// Expected output: "An index of -2 returns 130"
```

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des Array-Elements, das zurückgegeben werden soll, [konvertiert in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `index < 0`, wird `index + array.length` abgerufen.

### Rückgabewert

Das Element im Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length` ist, ohne zu versuchen, die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()`-Methode entspricht der Klammernotation, wenn `index` eine nicht-negative Ganzzahl ist. Zum Beispiel geben `array[0]` und `array.at(0)` beide das erste Element zurück. Wenn jedoch Elemente vom Ende des Arrays gezählt werden, können Sie `array[-1]` nicht wie in Python oder R verwenden, da alle Werte in den eckigen Klammern wörtlich als Zeichenfolgeneigenschaften behandelt werden. So würden Sie `array["-1"]` lesen, was einfach eine normale Zeichenfolgeneigenschaft statt eines Array-Indexes ist.

Die übliche Methode besteht darin, auf {{jsxref("Array/length", "length")}} zuzugreifen und den Index daraus zu berechnen — zum Beispiel `array[array.length - 1]`. Die `at()`-Methode ermöglicht relatives Indizieren, sodass dies auf `array.at(-1)` verkürzt werden kann.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie ein Array sowohl mit lesenden als auch mit schreibenden Zugriffsoperationen unter Verwendung negativer Indizes nutzen.

Die `at()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### Rückgabe des letzten Werts eines Arrays

Das folgende Beispiel bietet eine Funktion, die das letzte Element in einem angegebenen Array zurückgibt.

```js
// Our array with items
const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Add an item to our 'cart' array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'
```

### Vergleichen von Methoden

Dieses Beispiel vergleicht verschiedene Methoden, um das vorletzte (vor dem letzten) Element eines {{jsxref("Array")}} auszuwählen. Während alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Kürze und Lesbarkeit der `at()`-Methode hervor.

```js
// Our array with items
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

### Aufrufen von at() bei Nicht-Array-Objekten

Die `at()`-Methode liest die `length`-Eigenschaft von `this` und berechnet den zuzugreifenden Index.

```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // ignored by at() since length is 2
};
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [es-shims Polyfill von `Array.prototype.at`](https://www.npmjs.com/package/array.prototype.at)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
