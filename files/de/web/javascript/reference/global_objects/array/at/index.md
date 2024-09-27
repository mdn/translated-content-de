---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 5d04af83938fd973e499718ae5420000451447d9
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("Array")}} Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei positive und negative Ganzzahlen verwendet werden können. Negative Ganzzahlen zählen vom letzten Element im Array aus rückwärts.

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Der nullbasierte Index des Array-Elements, das zurückgegeben werden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `index < 0`, wird `index + array.length` aufgerufen.

### Rückgabewert

Das Element im Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()`-Methode ist äquivalent zur Klammernotation, wenn `index` eine nicht negative Ganzzahl ist. Zum Beispiel geben sowohl `array[0]` als auch `array.at(0)` das erste Element zurück. Wenn jedoch Elemente vom Ende des Arrays aus gezählt werden, können Sie nicht `array[-1]` wie in Python oder R verwenden, da alle Werte in den eckigen Klammern wörtlich als Zeichenfolgeneigenschaften behandelt werden. Sie würden also `array["-1"]` lesen, was nur eine normale Zeichenfolgeneigenschaft und kein Array-Index ist.

Die übliche Praxis besteht darin, {{jsxref("Array/length", "length")}} zuzugreifen und den Index daraus zu berechnen — zum Beispiel `array[array.length - 1]`. Die `at()`-Methode ermöglicht relatives Indexieren, sodass dies zu `array.at(-1)` verkürzt werden kann.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie sowohl lesen als auch schreiben (jeweils) ein Array mit negativen Indizes.

Die `at()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat.

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

### Methoden vergleichen

Dieses Beispiel vergleicht verschiedene Möglichkeiten, das vorletzte (das letzte, aber eins) Element eines {{jsxref("Array")}} auszuwählen. Obwohl alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Prägnanz und Lesbarkeit der `at()`-Methode hervor.

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

### `at()` auf nicht-Array-Objekten aufrufen

Die `at()`-Methode liest die `length`-Eigenschaft von `this` und berechnet den zugreifenden Index.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
