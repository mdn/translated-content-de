---
title: Array.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`with()`** von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Variante der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zum Ändern des Werts an einem bestimmten Index. Sie gibt ein neues Array zurück, in dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wurde.

## Syntax

```js-nolint
arrayInstance.with(index, value)
```

### Parameter

- `index`
  - : Nullbasierter Index, an dem das Array geändert werden soll; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück. Wenn `-array.length <= index < 0` gilt, wird `index + array.length` verwendet.
    - Liegt der Index nach der Normalisierung außerhalb der Array-Grenzen, wird ein {{jsxref("RangeError")}} ausgelöst.
- `value`
  - : Beliebiger Wert, der dem angegebenen Index zugewiesen werden soll.

### Rückgabewert

Ein neues Array, in dem das Element an `index` durch `value` ersetzt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index >= array.length` oder `index < -array.length` gilt.

## Beschreibung

Die Methode `with()` ändert den Wert an einem bestimmten Index im Array und gibt ein neues Array zurück, in dem das Element an diesem Index durch den angegebenen Wert ersetzt wurde. Das ursprüngliche Array wird nicht verändert. Dadurch können Sie Array-Methoden verketten und dabei Änderungen vornehmen.

Wenn Sie `with()` mit {{jsxref("Array/at", "at()")}} kombinieren, können Sie mit negativen Indizes in ein Array schreiben beziehungsweise daraus lesen.

Die Methode `with()` erzeugt niemals ein [Array mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Wenn das Quell-Array Lücken enthält, werden die leeren Plätze im neuen Array durch `undefined` ersetzt.

Die Methode `with()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Ein neues Array mit einem geänderten Element erstellen

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### Array-Methoden verketten

Mit der Methode `with()` können Sie ein einzelnes Element in einem Array aktualisieren und anschließend weitere Array-Methoden anwenden.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### with() bei Arrays mit Lücken verwenden

Die Methode `with()` erstellt immer ein Array ohne Lücken.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### with() für Objekte aufrufen, die keine Arrays sind

Die Methode `with()` erstellt ein neues Array und gibt es zurück. Sie liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist. Bei jedem Zugriff auf eine Eigenschaft von `this` wird das Array-Element, dessen Index dem Eigenschaftsschlüssel entspricht, auf den Wert der Eigenschaft gesetzt. Abschließend wird der Wert des Arrays an `index` auf `value` gesetzt.

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

- [Polyfill für `Array.prototype.with` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.with` von es-shims](https://www.npmjs.com/package/array.prototype.with)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("TypedArray.prototype.with()")}}
