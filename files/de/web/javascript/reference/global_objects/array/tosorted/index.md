---
title: Array.prototype.toSorted()
short-title: toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toSorted()`** von {{jsxref("Array")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Variante der Methode {{jsxref("Array/sort", "sort()")}}. Sie gibt ein neues Array zurück, dessen Elemente in aufsteigender Reihenfolge sortiert sind.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}
  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Wird sie weggelassen, werden die Array-Elemente in Zeichenfolgen umgewandelt und anschließend nach den Unicode-Codepunktwerten ihrer Zeichen sortiert. Weitere Informationen finden Sie unter {{jsxref("Array/sort", "sort()")}}.

### Rückgabewert

Ein neues Array mit den Elementen in aufsteigender Reihenfolge.

## Beschreibung

Weitere Informationen zum Parameter `compareFn` finden Sie unter {{jsxref("Array/sort", "sort()")}}.

Bei der Verwendung mit [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behandelt die Methode `toSorted()` leere Positionen beim Durchlaufen so, als hätten sie den Wert `undefined`.

Die Methode `toSorted()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt beim Wert von `this` lediglich eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln voraus.

## Beispiele

### Ein Array sortieren

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

Weitere Anwendungsbeispiele finden Sie unter {{jsxref("Array/sort", "sort()")}}.

### toSorted() mit Arrays mit Lücken verwenden

Leere Positionen werden so sortiert, als hätten sie den Wert `undefined`. Sie werden immer an das Ende des Arrays sortiert, und `compareFn` wird für sie nicht aufgerufen.

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### toSorted() für Objekte aufrufen, die keine Arrays sind

Die Methode `toSorted()` liest die `length`-Eigenschaft von `this`. Anschließend erfasst sie alle vorhandenen Eigenschaften mit ganzzahligen Schlüsseln im Bereich von `0` bis `length - 1`, sortiert sie und schreibt sie in ein neues Array.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // ignored by toSorted() since length is 3
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.toSorted` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.toSorted` von es-shims](https://www.npmjs.com/package/array.prototype.tosorted)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
