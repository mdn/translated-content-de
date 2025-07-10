---
title: Array.prototype.at()
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`at()`**-Methode von {{jsxref("Array")}}-Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen unterstützt werden. Negative Ganzzahlen zählen rückwärts vom letzten Element im Array.

{{InteractiveExample("JavaScript Demo: Array.prototype.at()")}}

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
  - : Null-basierter Index des zurückzugebenden Array-Elements, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt rückwärts vom Ende des Arrays — falls `index < 0`, wird `index + array.length` aufgerufen.

### Rückgabewert

Das Element im Array, das dem gegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, die entsprechende Eigenschaft aufzurufen.

## Beschreibung

Die `at()`-Methode ist äquivalent zur Klammernotation, wenn `index` eine nichtnegative Ganzzahl ist. Zum Beispiel geben sowohl `array[0]` als auch `array.at(0)` das erste Element zurück. Wenn Sie jedoch Elemente vom Ende des Arrays zählen, können Sie nicht `array[-1]` wie in Python oder R verwenden, da alle Werte innerhalb der eckigen Klammern als String-Eigenschaften behandelt werden. Sie würden daher `array["-1"]` lesen, was eine normale String-Eigenschaft anstelle eines Array-Index ist.

Die übliche Praxis ist es, {{jsxref("Array/length", "length")}} zu verwenden und den Index daraus zu berechnen — beispielsweise `array[array.length - 1]`. Die `at()`-Methode ermöglicht relatives Indexieren, sodass dies auf `array.at(-1)` verkürzt werden kann.

Indem Sie `at()` mit {{jsxref("Array/with", "with()")}} kombinieren, können Sie sowohl ein Array mit negativen Indizes lesen als auch schreiben (jeweils).

Die `at()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüsseleigenschaften hat.

## Beispiele

### Rückgabe des letzten Werts eines Arrays

Im folgenden Beispiel wird eine Funktion bereitgestellt, die das letzte Element in einem angegebenen Array zurückgibt.

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

Dieses Beispiel vergleicht verschiedene Möglichkeiten, das vorletzte (letztes, aber eins) Element eines {{jsxref("Array")}} auszuwählen. Während alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Kürze und Lesbarkeit der `at()`-Methode hervor.

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

### Aufrufen von at() auf Nicht-Array-Objekten

Die `at()`-Methode liest die `length`-Eigenschaft von `this` und berechnet den Index, der aufgerufen werden soll.

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
