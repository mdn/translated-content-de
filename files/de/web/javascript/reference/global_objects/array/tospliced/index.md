---
title: Array.prototype.toSpliced()
short-title: toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`toSpliced()`**-Methode von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der {{jsxref("Array/splice", "splice()")}}-Methode. Sie gibt ein neues Array zurück, bei dem einige Elemente entfernt und/oder an einem bestimmten Index ersetzt wurden.

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

  - : Der nullbasierte Index, an dem das Ändern des Arrays beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length` oder `start` weggelassen wird, wird `0` verwendet.
    - Wenn `start >= array.length` ist, wird kein Element gelöscht, aber die Methode verhält sich wie eine Hinzufügemethode und fügt so viele Elemente hinzu, wie angegeben sind.

- `skipCount` {{optional_inline}}

  - : Eine ganze Zahl, die die Anzahl der zu entfernenden (oder zu überspringenden) Elemente im Array von `start` angibt.

    Wenn `skipCount` weggelassen wird oder wenn sein Wert größer oder gleich der Anzahl der Elemente nach der durch `start` angegebenen Position ist, werden alle Elemente von `start` bis zum Ende des Arrays gelöscht. Wenn Sie jedoch einen `itemN`-Parameter angeben möchten, sollten Sie `Infinity` als `skipCount` übergeben, um alle Elemente nach `start` zu löschen, da ein explizites `undefined` [in `0` umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

    Wenn `skipCount` `0` oder negativ ist, werden keine Elemente entfernt.
    In diesem Fall sollten Sie mindestens ein neues Element hinzufügen (siehe unten).

- `item1`, …, `itemN` {{optional_inline}}

  - : Die hinzuzufügenden Elemente im Array, beginnend ab `start`.

    Wenn Sie keine Elemente angeben, entfernt `toSpliced()` nur Elemente aus dem Array.

### Rückgabewert

Ein neues Array, das aus allen Elementen vor `start`, `item1`, `item2`, …, `itemN` und allen Elementen nach `start + skipCount` besteht.

## Beschreibung

Die `toSpliced()`-Methode, ähnlich wie `splice()`, erledigt mehrere Dinge gleichzeitig: Sie entfernt die angegebene Anzahl von Elementen aus dem Array, beginnend bei einem bestimmten Index, und fügt dann die angegebenen Elemente am selben Index ein. Sie gibt jedoch ein neues Array zurück, anstatt das ursprüngliche Array zu ändern. Die gelöschten Elemente werden daher nicht aus dieser Methode zurückgegeben, bleiben jedoch im ursprünglichen Array zugänglich.

Die `toSpliced()`-Methode erzeugt niemals ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quellarray dünn besetzt ist, werden die leeren Slots im neuen Array durch `undefined` ersetzt.

Die `toSpliced()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-gespeicherte Eigenschaften hat.

## Beispiele

### Löschen, Hinzufügen und Ersetzen von Elementen

Sie können `toSpliced()` verwenden, um Elemente in einem Array zu löschen, hinzuzufügen und zu ersetzen und ein neues Array effizienter zu erstellen als mit `slice()` und `concat()`.

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

### Verwendung von toSpliced() auf dünn besetzten Arrays

Die `toSpliced()`-Methode erzeugt immer ein dicht besetztes Array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### Aufrufen von toSpliced() auf Nicht-Array-Objekten

Die `toSpliced()`-Methode liest die `length`-Eigenschaft von `this`. Dann liest sie die benötigten integer-gespeicherten Eigenschaften und schreibt sie in das neue Array.

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

- [Polyfill von `Array.prototype.toSpliced` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [es-shims polyfill von `Array.prototype.toSpliced`](https://www.npmjs.com/package/array.prototype.tospliced)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}
