---
title: Array.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toReversed()`** von {{jsxref("Array")}}-Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück zur Methode {{jsxref("Array/reverse", "reverse()")}}. Sie gibt ein neues Array zurück, dessen Elemente in umgekehrter Reihenfolge angeordnet sind.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Array mit den Elementen in umgekehrter Reihenfolge.

## Beschreibung

Die Methode `toReversed()` ordnet die Elemente des aufrufenden Array-Objekts in umgekehrter Reihenfolge an und gibt ein neues Array zurück.

Bei [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behandelt die Methode `toReversed()` leere Positionen so, als hätten sie den Wert `undefined`.

Die Methode `toReversed()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Elemente eines Arrays umkehren

Das folgende Beispiel erstellt ein Array `items` mit drei Elementen und anschließend ein neues Array, dessen Elemente gegenüber `items` in umgekehrter Reihenfolge angeordnet sind. Das Array `items` bleibt unverändert.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### toReversed() bei Arrays mit Lücken verwenden

Der Rückgabewert von `toReversed()` enthält niemals Lücken. Leere Positionen werden im zurückgegebenen Array zu `undefined`.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### toReversed() für Objekte aufrufen, die keine Arrays sind

Die Methode `toReversed()` liest die `length`-Eigenschaft von `this`. Anschließend besucht sie in absteigender Reihenfolge jede Eigenschaft mit einem ganzzahligen Schlüssel zwischen `length - 1` und `0` und fügt deren Wert am Ende des zurückzugebenden Arrays hinzu.

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

- [Polyfill für `Array.prototype.toReversed` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [es-shims-Polyfill für `Array.prototype.toReversed`](https://www.npmjs.com/package/array.prototype.toreversed)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
