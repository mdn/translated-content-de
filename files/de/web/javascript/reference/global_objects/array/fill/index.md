---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`fill()`**-Methode von {{jsxref("Array")}}-Instanzen ändert alle Elemente innerhalb eines Indexbereichs in einem Array zu einem statischen Wert. Sie gibt das modifizierte Array zurück.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameter

- `value`
  - : Wert, mit dem das Array gefüllt wird. Beachten Sie, dass alle Elemente im Array genau diesen Wert haben werden: Wenn `value` ein Objekt ist, wird jede Stelle im Array auf dieses Objekt verweisen.
- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Füllen beginnt, [konvertiert in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` ausgelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird kein Index gefüllt.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Füllen endet, [konvertiert in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis zu, aber nicht einschließlich `end`.
    - Negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` ausgelassen wird, wird `array.length` verwendet, wodurch alle Indizes bis zum Ende gefüllt werden.
    - Wenn `end` eine Position vor oder an der von `start` implizierten Position bedeutet, wird nichts gefüllt.

### Rückgabewert

Das modifizierte Array, gefüllt mit `value`.

## Beschreibung

Die `fill()`-Methode ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht die Länge von `this`, aber sie wird den Inhalt von `this` ändern.

Die `fill()`-Methode füllt auch leere Stellen in [dünn besetzten](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) Arrays mit `value`.

Die `fill()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft hat. Obwohl Zeichenfolgen ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Zeichenfolgen unveränderlich sind.

> [!NOTE]
> Die Verwendung von `Array.prototype.fill()` auf einem leeren Array (`length = 0`) würde es nicht ändern, da das Array nichts zu ändern hat.
> Um `Array.prototype.fill()` bei der Deklaration eines Arrays zu verwenden, stellen Sie sicher, dass das Array eine nicht null `length` hat.
> [Siehe Beispiel](#using_fill_to_populate_an_empty_array).

## Beispiele

### Verwendung von fill()

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

### Verwendung von fill(), um eine Matrix aus lauter 1en zu erstellen

Dieses Beispiel zeigt, wie man eine Matrix aus lauter 1en erstellt, ähnlich der `ones()`-Funktion von Octave oder MATLAB.

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

### Verwendung von fill(), um ein leeres Array zu füllen

Dieses Beispiel zeigt, wie man ein Array füllt, indem alle Elemente auf einen bestimmten Wert gesetzt werden.
Der `end`-Parameter muss nicht angegeben werden.

```js
const tempGirls = Array(5).fill("girl", 0);
```

Beachten Sie, dass das Array ursprünglich ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ohne zugewiesene Indizes war. `fill()` kann dieses Array dennoch füllen.

### Aufrufen von fill() auf Nicht-Array-Objekten

Die `fill()`-Methode liest die `length`-Eigenschaft von `this` und setzt den Wert jeder ganzzahlschlüsseligen Eigenschaft von `start` bis `end`.

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

- [Polyfill von `Array.prototype.fill` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
