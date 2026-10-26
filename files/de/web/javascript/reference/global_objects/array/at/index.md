---
title: Array.prototype.at()
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`at()`** von {{jsxref("Array")}}-Instanzen nimmt einen ganzzahligen Wert entgegen und gibt das Element an diesem Index zurück. Dabei sind positive und negative Ganzzahlen zulässig. Negative Ganzzahlen zählen vom letzten Element des Arrays aus rückwärts.

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
  - : Nullbasierter Index des zurückzugebenden Array-Elements, der [in eine Ganzzahl umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt vom Ende des Arrays aus rückwärts – wenn `index < 0`, wird auf `index + array.length` zugegriffen.

### Rückgabewert

Das Element im Array am angegebenen Index. Wenn `index < -array.length` oder `index >= array.length`, wird immer {{jsxref("undefined")}} zurückgegeben, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Die Methode `at()` entspricht der Schreibweise mit eckigen Klammern, wenn `index` eine nicht negative Ganzzahl ist. Beispielsweise geben `array[0]` und `array.at(0)` beide das erste Element zurück. Wenn Sie jedoch Elemente vom Ende des Arrays aus zählen, können Sie nicht wie in Python oder R `array[-1]` verwenden: Werte innerhalb der eckigen Klammern werden als Namen von String-Eigenschaften interpretiert. Sie würden damit `array["-1"]` lesen – eine gewöhnliche String-Eigenschaft statt eines Array-Index.

Üblicherweise greift man auf {{jsxref("Array/length", "length")}} zu und berechnet daraus den Index, beispielsweise mit `array[array.length - 1]`. Die Methode `at()` ermöglicht eine relative Indizierung, sodass sich dies zu `array.at(-1)` verkürzen lässt.

Durch die Kombination von `at()` mit {{jsxref("Array/with", "with()")}} können Sie mit negativen Indizes Elemente eines Arrays lesen beziehungsweise schreiben.

Die Methode `at()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Den letzten Wert eines Arrays zurückgeben

Das folgende Beispiel zeigt eine Funktion, die das letzte Element eines angegebenen Arrays zurückgibt.

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

Dieses Beispiel vergleicht verschiedene Möglichkeiten, das vorletzte Element eines {{jsxref("Array")}} auszuwählen. Alle unten gezeigten Methoden sind gültig; das Beispiel verdeutlicht jedoch, wie knapp und gut lesbar die Methode `at()` ist.

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

### at() für Objekte aufrufen, die keine Arrays sind

Die Methode `at()` liest die `length`-Eigenschaft von `this` und berechnet den Index, auf den zugegriffen werden soll.

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

- [Polyfill für `Array.prototype.at` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.at` von es-shims](https://www.npmjs.com/package/array.prototype.at)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
