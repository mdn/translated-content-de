---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`fill()`** Methode von Instanzen des {{jsxref("Array")}} ändert alle Elemente innerhalb eines Indexbereichs in einem Array zu einem festen Wert. Sie gibt das modifizierte Array zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.fill()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
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
  - : Wert, mit dem das Array gefüllt wird. Beachten Sie, dass alle Elemente im Array genau diesen Wert haben werden: Wenn `value` ein Objekt ist, verweist jede Stelle im Array auf dieses Objekt.
- `start` {{optional_inline}}
  - : Index, bei dem mit dem Füllen begonnen wird (nullbasiert), [konvertiert zu einer ganzen Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length`, wird kein Index gefüllt.
- `end` {{optional_inline}}
  - : Index, bis zu dem das Füllen reicht (nullbasiert), [konvertiert zu einer ganzen Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, sodass alle Indizes bis zum Ende gefüllt werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts gefüllt.

### Rückgabewert

Das modifizierte Array, gefüllt mit `value`.

## Beschreibung

Die `fill()` Methode ist eine [ändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge von `this` nicht, aber sie wird den Inhalt von `this` ändern.

Die `fill()` Methode füllt auch leere Stellen in [sparsely populated](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) Arrays mit `value`.

Die `fill()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft hat. Obwohl Zeichenketten auch arrayähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Zeichenketten unveränderlich sind.

> [!NOTE]
> Die Verwendung von `Array.prototype.fill()` auf einem leeren Array (`length = 0`) würde es nicht ändern, da das Array nichts hat, was geändert werden könnte. Um `Array.prototype.fill()` beim Deklarieren eines Arrays zu verwenden, stellen Sie sicher, dass das Array eine Nicht-Null-Länge hat.
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

### Verwendung von fill(), um eine Matrix aus Einsen zu erstellen

Dieses Beispiel zeigt, wie eine Matrix aus Einsen erstellt wird, ähnlich der `ones()` Funktion von Octave oder MATLAB.

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

Dieses Beispiel zeigt, wie ein Array gefüllt wird, indem alle Elemente auf einen spezifischen Wert gesetzt werden. Der `end` Parameter muss nicht angegeben werden.

```js
const tempGirls = Array(5).fill("girl", 0);
```

Beachten Sie, dass das Array ursprünglich ein [sparses Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) mit nicht zugewiesenen Indizes war. `fill()` kann dieses Array trotzdem füllen.

### Aufrufen von fill() für Nicht-Array-Objekte

Die `fill()` Methode liest die `length` Eigenschaft von `this` und setzt den Wert für jede ganzzahlig indizierte Eigenschaft von `start` bis `end`.

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
