---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 5d04af83938fd973e499718ae5420000451447d9
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("Array")}} Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen zulässig sind. Negative Ganzzahlen zählen rückwärts ab dem letzten Element im Array.

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Null-basierter Index des Array-Elements, das zurückgegeben werden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt rückwärts ab dem Ende des Arrays — wenn `index < 0`, wird `index + array.length` zugegriffen.

### Rückgabewert

Das Element im Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()` Methode ist äquivalent zur Klammernotation, wenn `index` eine nicht-negative Ganzzahl ist. Zum Beispiel geben sowohl `array[0]` als auch `array.at(0)` das erste Element zurück. Wenn Sie jedoch Elemente vom Ende des Arrays zählen, können Sie nicht `array[-1]` verwenden wie in Python oder R, weil alle Werte innerhalb der eckigen Klammern wörtlich als Zeichenfolgeneigenschaften behandelt werden. Sie würden also `array["-1"]` lesen, was einfach eine normale Zeichenfolgeneigenschaft und kein Array-Index ist.

Die übliche Praxis besteht darin, auf {{jsxref("Array/length", "length")}} zuzugreifen und den Index davon zu berechnen — zum Beispiel `array[array.length - 1]`. Die `at()` Methode ermöglicht relatives Indexing, sodass dies auf `array.at(-1)` verkürzt werden kann.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie sowohl ein Array mit negativen Indizes lesen als auch beschreiben (bzw. schreiben).

Die `at()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### Den letzten Wert eines Arrays zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte gefundene Element in einem angegebenen Array zurückgibt.

```js
// Unser Array mit Elementen
const cart = ["apple", "banana", "pear"];

// Eine Funktion, die das letzte Element eines gegebenen Arrays zurückgibt
function returnLast(arr) {
  return arr.at(-1);
}

// Holen Sie sich das letzte Element unseres 'cart'-Arrays
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Fügen Sie ein Element zu unserem 'cart'-Array hinzu
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'
```

### Methoden vergleichen

Dieses Beispiel vergleicht verschiedene Möglichkeiten, das vorletzte Element eines {{jsxref("Array")}} auszuwählen. Alle aufgezeigten Methoden sind gültig, dieses Beispiel hebt jedoch die Kürze und Lesbarkeit der `at()` Methode hervor.

```js
// Unser Array mit Elementen
const colors = ["red", "green", "blue"];

// Verwenden der length Eigenschaft
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Verwenden der slice() Methode. Es wird ein Array zurückgegeben.
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Verwenden der at() Methode
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

### Aufrufen von at() auf Nicht-Array-Objekten

Die `at()` Methode liest die `length` Eigenschaft von `this` und berechnet den Index, auf den zugegriffen werden soll.

```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // wird von at() ignoriert, da length 2 ist
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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
