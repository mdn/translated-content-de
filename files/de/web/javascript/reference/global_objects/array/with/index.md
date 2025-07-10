---
title: Array.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`with()`**-Methode von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der Verwendung der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), um den Wert eines gegebenen Index zu ändern. Sie gibt ein neues Array zurück, bei dem das Element am gegebenen Index durch den angegebenen Wert ersetzt wird.

## Syntax

```js-nolint
arrayInstance.with(index, value)
```

### Parameter

- `index`
  - : Nullbasierter Index, an dem das Array geändert wird, [umgewandelt zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= index < 0`, wird `index + array.length` verwendet.
    - Wenn der Index nach der Normalisierung außerhalb der Grenzen liegt, wird ein {{jsxref("RangeError")}} ausgelöst.
- `value`
  - : Jeder Wert, der dem angegebenen Index zugewiesen werden soll.

### Rückgabewert

Ein neues Array mit dem Element an `index`, das durch `value` ersetzt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `index >= array.length` oder `index < -array.length`.

## Beschreibung

Die `with()`-Methode ändert den Wert eines angegebenen Index im Array und gibt ein neues Array zurück, bei dem das Element am gegebenen Index durch den angegebenen Wert ersetzt wird. Das ursprüngliche Array wird nicht verändert. Dies ermöglicht es Ihnen, Array-Methoden zu verketten, während Sie Manipulationen vornehmen.

Durch die Kombination von `with()` mit {{jsxref("Array/at", "at()")}} können Sie ein Array sowohl mit negativen Indizes schreiben als auch lesen (beziehungsweise).

Die `with()`-Methode erzeugt niemals ein [sparses Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quell-Array sparse ist, werden die leeren Slots im neuen Array durch `undefined` ersetzt.

Die `with()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften besitzt.

## Beispiele

### Ein neues Array mit einem einzelnen geänderten Element erstellen

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

### Verwendung von with() auf sparsen Arrays

Die `with()`-Methode erstellt immer ein dichtes Array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### Aufruf von with() auf Nicht-Array-Objekten

Die `with()`-Methode erstellt und gibt ein neues Array zurück. Sie liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist. Während auf jede Eigenschaft von `this` zugegriffen wird, wird das Array-Element mit einem Index, der dem Schlüssel der Eigenschaft entspricht, auf den Wert der Eigenschaft gesetzt. Schließlich wird der Array-Wert bei `index` auf `value` gesetzt.

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
- [es-shims Polyfill von `Array.prototype.with`](https://www.npmjs.com/package/array.prototype.with)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("TypedArray.prototype.with()")}}
