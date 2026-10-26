---
title: Array.prototype.toSpliced()
short-title: toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toSpliced()`** von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Variante der Methode {{jsxref("Array/splice", "splice()")}}. Sie gibt ein neues Array zurück, in dem an einem bestimmten Index einige Elemente entfernt und/oder ersetzt wurden.

## Syntax

```js-nolint
toSpliced(start)
toSpliced(start, skipCount)
toSpliced(start, skipCount, item1)
toSpliced(start, skipCount, item1, item2)
toSpliced(start, skipCount, item1, item2, /* …, */ itemN)
```

### Parameter

- `start`
  - : Nullbasierter Index, an dem die Änderung des Arrays beginnt; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück. Wenn `-array.length <= start < 0` gilt, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` gilt oder `start` nicht angegeben wird, wird `0` verwendet.
    - Wenn `start >= array.length` gilt, wird kein Element gelöscht. Die Methode fügt dann so viele Elemente hinzu, wie angegeben wurden.

- `skipCount` {{optional_inline}}
  - : Eine Ganzzahl, die angibt, wie viele Elemente des Arrays ab `start` entfernt (oder übersprungen) werden.

    Wenn `skipCount` nicht angegeben wird oder sein Wert größer oder gleich der Anzahl der Elemente nach der durch `start` angegebenen Position ist, werden alle Elemente von `start` bis zum Ende des Arrays gelöscht. Wenn Sie jedoch einen `itemN`-Parameter übergeben möchten, sollten Sie `Infinity` als `skipCount` übergeben, um alle Elemente nach `start` zu löschen. Ein ausdrücklich übergebenes `undefined` wird nämlich [in](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) `0` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

    Wenn `skipCount` `0` oder negativ ist, werden keine Elemente entfernt.
    In diesem Fall sollten Sie mindestens ein neues Element angeben (siehe unten).

- `item1`, …, `itemN` {{optional_inline}}
  - : Die Elemente, die ab `start` zum Array hinzugefügt werden.

    Wenn Sie keine Elemente angeben, entfernt `toSpliced()` lediglich Elemente aus dem Array.

### Rückgabewert

Ein neues Array, das aus allen Elementen vor `start`, `item1`, `item2`, …, `itemN` und allen Elementen nach `start + skipCount` besteht.

## Beschreibung

Die Methode `toSpliced()` führt wie `splice()` mehrere Schritte auf einmal aus: Sie entfernt ab einem bestimmten Index die angegebene Anzahl von Elementen aus dem Array und fügt anschließend an demselben Index die angegebenen Elemente ein. Statt das ursprüngliche Array zu ändern, gibt sie jedoch ein neues Array zurück. Die gelöschten Elemente werden daher nicht von dieser Methode zurückgegeben, bleiben aber im ursprünglichen Array zugänglich.

Die Methode `toSpliced()` erzeugt niemals ein [Array mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quell-Array Lücken enthält, werden die leeren Stellen im neuen Array durch `undefined` ersetzt.

Die Methode `toSpliced()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat.

## Beispiele

### Elemente löschen, hinzufügen und ersetzen

Mit `toSpliced()` können Sie Elemente in einem Array löschen, hinzufügen und ersetzen und dabei ein neues Array effizienter erstellen als mit `slice()` und `concat()`.

```js
const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### toSpliced() bei Arrays mit Lücken verwenden

Die Methode `toSpliced()` erstellt immer ein Array ohne Lücken.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### toSpliced() für Objekte aufrufen, die keine Arrays sind

Die Methode `toSpliced()` liest die `length`-Eigenschaft von `this`. Anschließend liest sie die benötigten Eigenschaften mit ganzzahligen Schlüsseln und schreibt deren Werte in das neue Array.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.toSpliced` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [es-shims-Polyfill für `Array.prototype.toSpliced`](https://www.npmjs.com/package/array.prototype.tospliced)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}
