---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`fill()`** Methode von {{jsxref("Array")}} Instanzen ändert alle Elemente innerhalb eines Bereichs von Indizes in einem Array auf einen statischen Wert. Sie gibt das geänderte Array zurück.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameter

- `value`
  - : Wert, mit dem das Array gefüllt werden soll. Beachten Sie, dass alle Elemente im Array genau diesen Wert haben werden: wenn `value` ein Objekt ist, wird jeder Slot im Array auf dieses Objekt verweisen.
- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Füllen beginnt, [in einen Integer umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` ausgelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird kein Index gefüllt.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Füllen endet, [in einen Integer umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` ausgelassen wird, wird `array.length` verwendet, wodurch alle Indizes bis zum Ende gefüllt werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts gefüllt.

### Rückgabewert

Das geänderte Array, gefüllt mit `value`.

## Beschreibung

Die `fill()` Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht die Länge von `this`, aber sie wird den Inhalt von `this` ändern.

Die `fill()` Methode füllt auch leere Slots in [spärlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) Arrays mit `value`.

Die `fill()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft hat. Obwohl Strings ebenfalls array-artig sind, ist diese Methode nicht geeignet, auf ihnen angewendet zu werden, da Strings unveränderlich sind.

> [!NOTE]
> Die Verwendung von `Array.prototype.fill()` auf einem leeren Array (`length = 0`) würde es nicht verändern, da das Array nichts zu verändern hat.
> Um `Array.prototype.fill()` bei der Deklaration eines Arrays zu verwenden, stellen Sie sicher, dass das Array eine Länge ungleich Null hat.
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

// Ein einzelnes Objekt, auf das jeder Slot des Arrays verweist:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Verwendung von fill() zum Erstellen einer Matrix aus Einsen

Dieses Beispiel zeigt, wie man eine Matrix aus Einsen erstellt, ähnlich der `ones()`-Funktion von Octave oder MATLAB.

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Ein Array der Größe 4 erstellen und mit 1 füllen
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### Verwendung von fill() zum Füllen eines leeren Arrays

Dieses Beispiel zeigt, wie man ein Array füllt und alle Elemente auf einen bestimmten Wert setzt.
Der `end` Parameter muss nicht angegeben werden.

```js
const tempGirls = Array(5).fill("girl", 0);
```

Beachten Sie, dass das Array ursprünglich ein [spärliches Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ohne zugewiesene Indizes war. `fill()` kann dieses Array dennoch füllen.

### Verwendung von fill() auf nicht-Array-Objekten

Die `fill()` Methode liest die `length` Eigenschaft von `this` und setzt den Wert jeder ganzzahligen Eigenschaft von `start` bis `end`.

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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
