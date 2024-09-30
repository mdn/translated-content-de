---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 5d04af83938fd973e499718ae5420000451447d9
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("Array")}} Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen möglich sind. Negative Ganzzahlen zählen vom letzten Element im Array rückwärts.

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des Array-Elements, das zurückgegeben werden soll, [in einen Ganzzah](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) konvertiert. Ein negativer Index zählt vom Ende des Arrays zurück — wenn `index < 0`, wird `index + array.length` aufgerufen.

### Rückgabewert

Das Element im Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length` ist, ohne zu versuchen, die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die `at()` Methode ist gleichwertig zur Klammernotation, wenn `index` eine nicht-negative Ganzzahl ist. Zum Beispiel, `array[0]` und `array.at(0)` geben beide das erste Element zurück. Wenn Sie jedoch Elemente vom Ende des Arrays zählen wollen, können Sie `array[-1]` nicht verwenden, wie es in Python oder R möglich ist, da alle Werte innerhalb der eckigen Klammern wortwörtlich als Zeichenfolge behandelt werden. Sie würden schließlich `array["-1"]` lesen, was einfach eine normale Zeichenfolgeneigenschaft statt eines Array-Index ist.

Die übliche Praxis ist es, auf {{jsxref("Array/length", "length")}} zuzugreifen und den Index daraus zu berechnen — zum Beispiel, `array[array.length - 1]`. Die `at()` Methode ermöglicht relative Indizierung, sodass dies zu `array.at(-1)` verkürzt werden kann.

Indem Sie `at()` mit {{jsxref("Array/with", "with()")}} kombinieren, können Sie sowohl (jeweils) ein Array mit negativen Indizes lesen als auch schreiben.

Die `at()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat.

## Beispiele

### Das letzte Element eines Arrays zurückgeben

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

Dieses Beispiel vergleicht verschiedene Methoden, um das vorletzte Element eines {{jsxref("Array")}} auszuwählen. Während alle unten gezeigten Methoden gültig sind, hebt dieses Beispiel die Kürze und Lesbarkeit der `at()` Methode hervor.

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

### Aufrufe von at() bei Nicht-Array-Objekten

Die `at()` Methode liest die `length` Eigenschaft von `this` und berechnet den Index, auf den zugegriffen werden soll.

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
