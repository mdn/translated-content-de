---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`at()`**-Methode von {{jsxref("Array")}}-Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück. Dabei ermöglicht sie sowohl positive als auch negative Ganzzahlen. Negative Ganzzahlen zählen vom letzten Element des Arrays rückwärts.

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
  - : Der nullbasierte Index des Array-Elements, das zurückgegeben werden soll, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `index < 0` gilt, wird auf `index + array.length` zugegriffen.

### Rückgabewert

Das Element im Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length` gilt, ohne dabei zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()`-Methode entspricht der Klammernotation, wenn `index` eine nicht negative Ganzzahl ist. Zum Beispiel geben sowohl `array[0]` als auch `array.at(0)` das erste Element zurück. Wenn jedoch Elemente vom Ende des Arrays gezählt werden, können Sie nicht wie in Python oder R `array[-1]` verwenden, da alle Werte innerhalb der eckigen Klammern buchstäblich als Zeichenketten-Eigenschaften behandelt werden. Dadurch würde `array["-1"]` ausgelesen werden, was lediglich eine normale Zeichenketten-Eigenschaft und kein Array-Index ist.

Die übliche Praxis besteht darin, auf die {{jsxref("Array/length", "length")}}-Eigenschaft zuzugreifen und den Index daraus zu berechnen — zum Beispiel `array[array.length - 1]`. Mit der `at()`-Methode kann die relative Indizierung verwendet werden, sodass dies verkürzt zu `array.at(-1)` werden kann.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie sowohl lesen als auch schreiben (bzw. aktualisieren) und dabei negative Indizes verwenden.

Die `at()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der Wert von `this` eine `length`-Eigenschaft und Integer-Indexeigenschaften hat.

## Beispiele

### Den letzten Wert eines Arrays zurückgeben

Das folgende Beispiel stellt eine Funktion bereit, die das letzte Element eines angegebenen Arrays zurückgibt.

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

### Vergleich verschiedener Methoden

In diesem Beispiel werden verschiedene Methoden verglichen, um das vorletzte (letzte, aber ein Element davor) Element eines {{jsxref("Array")}} auszuwählen. Während alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Prägnanz und Lesbarkeit der `at()`-Methode hervor.

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

### Aufruf von at() bei Nicht-Array-Objekten

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
