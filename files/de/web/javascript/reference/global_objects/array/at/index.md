---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`at()`**-Methode von {{jsxref("Array")}}-Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wodurch positive und negative Ganzzahlen ermöglicht werden. Negative Ganzzahlen zählen rückwärts ab dem letzten Element im Array.

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
  - : Nullbasierter Index des zurückzugebenden Array-Elements, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Der negative Index zählt rückwärts vom Ende des Arrays — wenn `index < 0`, wird `index + array.length` aufgerufen.

### Rückgabewert

Das Element im Array, das mit dem angegebenen Index übereinstimmt. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length` ist, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()`-Methode ist gleichbedeutend mit der Klammernotation, wenn `index` eine nicht negative Ganzzahl ist. Zum Beispiel geben sowohl `array[0]` als auch `array.at(0)` das erste Element zurück. Wenn jedoch Elemente vom Ende des Arrays gezählt werden, können Sie `array[-1]` nicht wie in Python oder R verwenden, da alle Werte innerhalb der eckigen Klammern buchstäblich als String-Eigenschaften behandelt werden. Dadurch lesen Sie `array["-1"]`, was eine normale String-Eigenschaft anstelle eines Array-Index ist.

Die übliche Vorgehensweise ist, auf die {{jsxref("Array/length", "length")}} zuzugreifen und den Index daraus zu berechnen — zum Beispiel `array[array.length - 1]`. Die `at()`-Methode ermöglicht relatives Indexieren, sodass dies auf `array.at(-1)` verkürzt werden kann.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie sowohl lesen als auch schreiben (jeweils) eines Arrays mithilfe negativer Indizes.

Die `at()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indexierte Eigenschaften hat.

## Beispiele

### Den letzten Wert eines Arrays zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte Element eines angegebenen Arrays zurückgibt.

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

Dieses Beispiel vergleicht verschiedene Methoden, um das vorletzte Element eines {{jsxref("Array")}} auszuwählen. Während alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Kürze und Lesbarkeit der `at()`-Methode hervor.

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

### `at()` auf nicht-Array-Objekte anwenden

Die `at()`-Methode liest die `length`-Eigenschaft von `this` und berechnet den Index für den Zugriff.

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
- [es-shims polyfill von `Array.prototype.at`](https://www.npmjs.com/package/array.prototype.at)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
