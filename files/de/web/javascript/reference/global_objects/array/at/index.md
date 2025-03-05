---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("Array")}} Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei positive und negative Ganzzahlen erlaubt sind. Negative Ganzzahlen zählen vom letzten Element des Arrays rückwärts.

{{InteractiveExample("JavaScript Demo: Array.at()")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
```

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Null-basierter Index des Array-Elements, das zurückgegeben werden soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Negative Indizes zählen vom Ende des Arrays zurück — wenn `index < 0`, wird `index + array.length` aufgerufen.

### Rückgabewert

Das Element im Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()` Methode ist äquivalent zur Klammernotation, wenn `index` eine nicht negative Ganzzahl ist. Zum Beispiel geben sowohl `array[0]` als auch `array.at(0)` das erste Element zurück. Wenn Sie jedoch Elemente vom Ende des Arrays zählen, können Sie nicht `array[-1]` wie in Python oder R verwenden, da alle Werte innerhalb der eckigen Klammern buchstäblich als String-Eigenschaften behandelt werden. Somit würde `array["-1"]` lediglich eine normale String-Eigenschaft auslesen, anstatt eines Array-Indexes.

Die übliche Praxis besteht darin, auf {{jsxref("Array/length", "length")}} zuzugreifen und den Index davon zu berechnen — zum Beispiel `array[array.length - 1]`. Die `at()` Methode ermöglicht relatives Indizieren, sodass dies auf `array.at(-1)` verkürzt werden kann.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie ein Array sowohl lesen als auch schreiben (jeweils) unter Verwendung von negativen Indizes.

Die `at()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length` Eigenschaft und integer-indizierte Eigenschaften besitzt.

## Beispiele

### Den letzten Wert eines Arrays zurückgeben

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

### Vergleich von Methoden

Dieses Beispiel vergleicht verschiedene Möglichkeiten, um das vorletzte (letztes, aber eins) Element eines {{jsxref("Array")}} auszuwählen. Obwohl alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Prägnanz und Lesbarkeit der `at()` Methode hervor.

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

### Aufruf von at() auf Nicht-Array-Objekten

Die `at()` Methode liest die `length` Eigenschaft von `this` und berechnet den zuzugreifenden Index.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
