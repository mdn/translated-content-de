---
title: Array.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toReversed()`**-Methode von {{jsxref("Array")}} Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück zur {{jsxref("Array/reverse", "reverse()")}}-Methode. Sie gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Array, das die Elemente in umgekehrter Reihenfolge enthält.

## Beschreibung

Die `toReversed()`-Methode transponiert die Elemente des aufrufenden Array-Objekts in umgekehrter Reihenfolge und gibt ein neues Array zurück.

Wenn sie auf [lückenhafte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, durchläuft die `toReversed()`-Methode leere Plätze, als ob sie den Wert `undefined` hätten.

Die `toReversed()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerindizierte Eigenschaften hat.

## Beispiele

### Umkehren der Elemente in einem Array

Im folgenden Beispiel wird ein Array `items` erstellt, das drei Elemente enthält, und dann ein neues Array, das die Umkehrung von `items` darstellt. Das `items`-Array bleibt unverändert.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Verwenden von toReversed() bei lückenhaften Arrays

Der Rückgabewert von `toReversed()` ist niemals lückenhaft. Leere Plätze werden zu `undefined` im zurückgegebenen Array.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Aufrufen von toReversed() auf Nicht-Array-Objekten

Die `toReversed()`-Methode liest die `length`-Eigenschaft von `this`. Sie besucht dann jede Eigenschaft mit einem Integer-Schlüssel zwischen `length - 1` und `0` in absteigender Reihenfolge und fügt den Wert der aktuellen Eigenschaft am Ende des zurückzugebenden Arrays hinzu.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// The '0' and '1' indices are not present so they become undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [es-shims Polyfill von `Array.prototype.toReversed`](https://www.npmjs.com/package/array.prototype.toreversed)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
