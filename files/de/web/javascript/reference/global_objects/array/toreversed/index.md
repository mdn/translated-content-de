---
title: Array.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toReversed()`** Methode von {{jsxref("Array")}} Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück der {{jsxref("Array/reverse", "reverse()")}} Methode. Sie gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Array, das die Elemente in umgekehrter Reihenfolge enthält.

## Beschreibung

Die Methode `toReversed()` transponiert die Elemente des aufrufenden Array-Objekts in umgekehrter Reihenfolge und gibt ein neues Array zurück.

Bei Verwendung auf [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) durchläuft die Methode `toReversed()` leere Stellen, als ob sie den Wert `undefined` hätten.

Die Methode `toReversed()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-indizierte Eigenschaften hat.

## Beispiele

### Umkehren der Elemente in einem Array

Das folgende Beispiel erstellt ein Array `items` mit drei Elementen und dann ein neues Array, das die umgekehrte Version von `items` ist. Das `items`-Array bleibt unverändert.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Verwendung von toReversed() auf sparse arrays

Der Rückgabewert von `toReversed()` ist niemals sparse. Leere Stellen werden im zurückgegebenen Array zu `undefined`.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Aufruf von toReversed() auf Nicht-Array-Objekten

Die `toReversed()` Methode liest die `length`-Eigenschaft von `this`. Sie besucht dann jede Eigenschaft mit einem integer-indexierten Schlüssel zwischen `length - 1` und `0` in absteigender Reihenfolge und fügt den Wert der aktuellen Eigenschaft am Ende des zurückzugebenden Arrays hinzu.

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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
