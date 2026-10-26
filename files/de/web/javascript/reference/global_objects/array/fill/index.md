---
title: Array.prototype.fill()
short-title: fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`fill()`** von {{jsxref("Array")}}-Instanzen ändert alle Elemente innerhalb eines Indexbereichs in einem Array auf einen festen Wert. Sie gibt das geänderte Array zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.fill()")}}

```js interactive-example
const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameter

- `value`
  - : Wert, mit dem das Array gefüllt wird. Beachten Sie, dass alle Elemente im Array genau diesen Wert erhalten: Wenn `value` ein Objekt ist, verweist jede Position im Array auf dieses Objekt.
- `start` {{optional_inline}}
  - : Nullbasierter Index, ab dem das Array gefüllt wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück – wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` gilt oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length` gilt, wird kein Index gefüllt.
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Füllen endet, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis zum Index `end`, aber nicht einschließlich dieses Index.
    - Ein negativer Index zählt vom Ende des Arrays zurück – wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length` gilt, wird `0` verwendet.
    - Wenn `end >= array.length` gilt oder `end` weggelassen wird oder `undefined` ist, wird `array.length` verwendet. Dadurch werden alle Indizes bis zum Ende gefüllt.
    - Wenn `end` eine Position vor oder an der durch `start` bestimmten Position bezeichnet, wird nichts gefüllt.

### Rückgabewert

Das geänderte, mit `value` gefüllte Array.

## Beschreibung

Die Methode `fill()` ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge von `this` nicht, verändert aber dessen Inhalt.

Die Methode `fill()` füllt auch leere Positionen in [dünn besetzten](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) Arrays mit `value`.

Die Methode `fill()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft besitzt. Obwohl Strings ebenfalls arrayähnlich sind, eignet sich diese Methode nicht für sie, da Strings unveränderlich sind.

> [!NOTE]
> Die Verwendung von `Array.prototype.fill()` auf einem leeren Array (`length = 0`) verändert es nicht, da das Array keine Elemente enthält, die verändert werden könnten.
> Wenn Sie `Array.prototype.fill()` beim Deklarieren eines Arrays verwenden möchten, stellen Sie sicher, dass das Array eine `length` größer als `0` hat.
> [Siehe Beispiel](#using_fill_to_populate_an_empty_array).

## Beispiele

### fill() verwenden

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Mit fill() eine Matrix aus Einsen erstellen

Dieses Beispiel zeigt, wie Sie eine Matrix erstellen, deren Werte alle `1` sind, ähnlich der Funktion `ones()` in Octave oder MATLAB.

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### Mit fill() ein leeres Array befüllen

Dieses Beispiel zeigt, wie Sie ein Array befüllen, indem Sie alle Elemente auf einen bestimmten Wert setzen.
Der Parameter `end` muss nicht angegeben werden.

```js
const tempGirls = Array(5).fill("girl", 0);
```

Beachten Sie, dass das Array anfangs ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ohne belegte Indizes war. `fill()` kann dieses Array dennoch füllen.

### fill() für Objekte aufrufen, die keine Arrays sind

Die Methode `fill()` liest die `length`-Eigenschaft von `this` und setzt den Wert jeder Eigenschaft mit einem ganzzahligen Schlüssel von `start` bis `end`.

```js
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.fill` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
