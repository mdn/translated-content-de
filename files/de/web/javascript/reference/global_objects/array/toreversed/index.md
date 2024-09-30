---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`toReversed()`**-Methode von {{jsxref("Array")}}-Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück zur {{jsxref("Array/reverse", "reverse()")}}-Methode. Sie gibt ein neues Array mit in umgekehrter Reihenfolge angeordneten Elementen zurück.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Array, das die Elemente in umgekehrter Reihenfolge enthält.

## Beschreibung

Die `toReversed()`-Methode vertauscht die Elemente des aufrufenden Array-Objekts in umgekehrter Reihenfolge und gibt ein neues Array zurück.

Wenn die Methode auf [lückenhafte Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) angewendet wird, durchläuft die `toReversed()`-Methode leere Steckplätze, als ob sie den Wert `undefined` hätten.

Die `toReversed()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-basierte Eigenschaften hat.

## Beispiele

### Umkehren der Elemente in einem Array

Das folgende Beispiel erstellt ein Array `items`, das drei Elemente enthält, und erstellt dann ein neues Array, das die umgekehrte Reihenfolge von `items` ist. Das `items`-Array bleibt unverändert.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Nutzung von toReversed() auf lückenhaften Arrays

Der Rückgabewert von `toReversed()` ist niemals lückenhaft. Leere Steckplätze werden im zurückgegebenen Array zu `undefined`.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Aufrufen von toReversed() auf Nicht-Array-Objekten

Die `toReversed()`-Methode liest die `length`-Eigenschaft von `this`. Sie besucht dann jede Eigenschaft mit einem integer-basierten Schlüssel zwischen `length - 1` und `0` in absteigender Reihenfolge, wobei der Wert der aktuellen Eigenschaft am Ende des zurückzugebenden Arrays hinzugefügt wird.

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
