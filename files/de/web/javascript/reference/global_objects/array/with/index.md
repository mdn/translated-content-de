---
title: Array.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`with()`**-Methode von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der Verwendung der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), um den Wert eines bestimmten Indexes zu ändern. Sie gibt ein neues Array zurück, bei dem das Element an dem angegebenen Index durch den angegebenen Wert ersetzt wird.

## Syntax

```js-nolint
arrayInstance.with(index, value)
```

### Parameter

- `index`
  - : Nullbasierter Index, an dem das Array geändert werden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= index < 0`, wird `index + array.length` verwendet.
    - Wenn der Index nach der Normalisierung außerhalb der Grenzen liegt, wird ein {{jsxref("RangeError")}} ausgelöst.
- `value`
  - : Jeder Wert, der dem angegebenen Index zugewiesen werden soll.

### Rückgabewert

Ein neues Array mit dem Element an `index`, das durch `value` ersetzt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index >= array.length` oder `index < -array.length`.

## Beschreibung

Die `with()`-Methode ändert den Wert eines bestimmten Indexes im Array und gibt ein neues Array zurück, bei dem das Element an dem angegebenen Index durch den angegebenen Wert ersetzt wird. Das ursprüngliche Array wird nicht verändert. Dies ermöglicht es, Array-Methoden beim Manipulieren zu verketten.

Durch die Kombination von `with()` mit {{jsxref("Array/at", "at()")}} können Sie ein Array mit negativen Indizes sowohl schreiben als auch lesen (jeweils).

Die `with()`-Methode erzeugt niemals ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quellarray dünn besetzt ist, werden die leeren Plätze im neuen Array durch `undefined` ersetzt.

Die `with()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat.

## Beispiele

### Erstellen eines neuen Arrays mit einem einzigen geänderten Element

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### Verkettung von Array-Methoden

Mit der `with()`-Methode können Sie ein einzelnes Element in einem Array aktualisieren und dann andere Array-Methoden anwenden.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### Verwendung von with() bei dünn besetzten Arrays

Die `with()`-Methode erstellt immer ein dicht besetztes Array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### Aufruf von with() bei Nicht-Array-Objekten

Die `with()`-Methode erstellt und gibt ein neues Array zurück. Sie liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist. Wie auf jede Eigenschaft von `this` zugegriffen wird, wird das Array-Element mit einem Index gleich dem Schlüssel der Eigenschaft auf den Wert der Eigenschaft gesetzt. Schließlich wird der Array-Wert an `index` auf `value` gesetzt.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // ignored by with() since length is 3
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("TypedArray.prototype.with()")}}
