---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`toReversed()`** Methode von {{jsxref("Array")}} Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück zur {{jsxref("Array/reverse", "reverse()")}} Methode. Sie gibt ein neues Array zurück, dessen Elemente in umgekehrter Reihenfolge angeordnet sind.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Array, das die Elemente in umgekehrter Reihenfolge enthält.

## Beschreibung

Die `toReversed()` Methode transponiert die Elemente des aufrufenden Array-Objekts in umgekehrter Reihenfolge und gibt ein neues Array zurück.

Wenn sie auf [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verwendet wird, durchläuft die `toReversed()` Methode leere Plätze, als hätten sie den Wert `undefined`.

Die `toReversed()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length` Eigenschaft und integer-schlüsselbasierten Eigenschaften besitzt.

## Beispiele

### Umkehren der Elemente in einem Array

Im folgenden Beispiel wird ein Array `items` erstellt, das drei Elemente enthält, und dann ein neues Array erstellt, das die umgekehrte Reihenfolge von `items` ist. Das `items` Array bleibt unverändert.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Verwendung von toReversed() auf dünn besetzten Arrays

Der Rückgabewert von `toReversed()` ist niemals dünn besetzt. Leere Plätze werden im zurückgegebenen Array zu `undefined`.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Aufruf von toReversed() bei Objekten, die keine Arrays sind

Die `toReversed()` Methode liest die `length` Eigenschaft von `this`. Sie besucht dann jede Eigenschaft mit einem ganzzahligen Schlüssel zwischen `length - 1` und `0` in absteigender Reihenfolge und fügt den Wert der aktuellen Eigenschaft dem zu zurückgebenden Array hinzu.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// Die Indizes '0' und '1' sind nicht vorhanden, also werden sie zu undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- Leitfaden zu [Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
