---
title: Array.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`with()`**-Methode von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), um den Wert eines bestimmten Indexes zu ändern. Sie gibt ein neues Array zurück, bei dem das Element an dem angegebenen Index durch den gegebenen Wert ersetzt wurde.

## Syntax

```js-nolint
arrayInstance.with(index, value)
```

### Parameter

- `index`
  - : Nullbasierter Index, an dem das Array geändert wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= index < 0`, wird `index + array.length` verwendet.
    - Wenn der Index nach der Normalisierung außerhalb der Grenzen liegt, wird ein {{jsxref("RangeError")}} ausgelöst.
- `value`
  - : Beliebiger Wert, der dem angegebenen Index zugewiesen wird.

### Rückgabewert

Ein neues Array, bei dem das Element an `index` durch `value` ersetzt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index >= array.length` oder `index < -array.length`.

## Beschreibung

Die `with()`-Methode ändert den Wert eines bestimmten Indexes im Array und gibt ein neues Array zurück, bei dem das Element an dem angegebenen Index durch den gegebenen Wert ersetzt wurde. Das ursprüngliche Array wird nicht modifiziert. Dies ermöglicht es Ihnen, Array-Methoden während der Manipulation zu verketten.

Durch die Kombination von `with()` mit {{jsxref("Array/at", "at()")}} können Sie sowohl mit negativen Indizes schreiben als auch lesen.

Die `with()`-Methode erzeugt niemals ein [sparses Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quellarray sparsed ist, werden die leeren Stellen im neuen Array mit `undefined` ersetzt.

Die `with()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass `this` eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### Erstellen eines neuen Arrays mit einem einzigen geänderten Element

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### Verkettung von Array-Methoden

Mit der `with()`-Methode können Sie ein einzelnes Element in einem Array aktualisieren und anschließend andere Array-Methoden anwenden.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### Verwendung von with() bei sparsen Arrays

Die `with()`-Methode erzeugt immer ein dichtes Array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### Aufrufen von with() bei Nicht-Array-Objekten

Die `with()`-Methode erstellt und gibt ein neues Array zurück. Sie liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist. Während jede Eigenschaft von `this` abgerufen wird, wird das Array-Element mit einem Index, der dem Schlüssel der Eigenschaft entspricht, auf den Wert der Eigenschaft gesetzt. Schließlich wird der Array-Wert bei `index` auf `value` gesetzt.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // ignoriert von with(), da die Länge 3 ist
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("TypedArray.prototype.with()")}}
