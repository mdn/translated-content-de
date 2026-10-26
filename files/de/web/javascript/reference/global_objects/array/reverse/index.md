---
title: Array.prototype.reverse()
short-title: reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reverse()`** von {{jsxref("Array")}}-Instanzen kehrt die Reihenfolge eines Arrays _[an Ort und Stelle](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt eine Referenz auf dasselbe Array zurück. Dabei wird das erste Array-Element zum letzten und das letzte zum ersten.

Um die Reihenfolge der Elemente umzukehren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toReversed", "toReversed()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.reverse()")}}

```js interactive-example
const array = ["one", "two", "three"];
console.log("array:", array);
// Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array:", array);
// Expected output: "array:" Array ["three", "two", "one"]
```

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Eine Referenz auf das ursprüngliche Array, dessen Reihenfolge nun umgekehrt ist. Das Array wird _[an Ort und Stelle](https://en.wikipedia.org/wiki/In-place_algorithm)_ verändert; es wird keine Kopie erstellt.

## Beschreibung

Die Methode `reverse()` vertauscht die Elemente des aufrufenden Array-Objekts an Ort und Stelle. Sie verändert das Array und gibt eine Referenz darauf zurück.

Die Methode `reverse()` erhält leere Einträge. Wenn das Ausgangsarray [Lücken aufweist](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), werden die entsprechenden neuen Indizes der leeren Einträge [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und sind damit ebenfalls leer.

Die Methode `reverse()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt. Obwohl Strings ebenfalls Array-ähnlich sind, eignet sich diese Methode nicht für sie, da Strings unveränderlich sind.

## Beispiele

### Die Elemente eines Arrays umkehren

Das folgende Beispiel erstellt ein Array `items` mit drei Elementen und kehrt anschließend deren Reihenfolge um. Der Aufruf von `reverse()` gibt eine Referenz auf das umgekehrte Array `items` zurück.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Die Methode reverse() gibt eine Referenz auf dasselbe Array zurück

Die Methode `reverse()` gibt eine Referenz auf das ursprüngliche Array zurück. Wird das zurückgegebene Array verändert, ändert sich daher auch das ursprüngliche Array.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

Wenn `reverse()` das ursprüngliche Array nicht verändern, sondern wie andere Array-Methoden (z. B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) eine {{Glossary("Shallow_copy", "flache Kopie")}} zurückgeben soll, verwenden Sie die Methode {{jsxref("Array/toReversed", "toReversed()")}}. Alternativ können Sie vor dem Aufruf von `reverse()` mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) eine flache Kopie erstellen.

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### reverse() auf Arrays mit Lücken anwenden

Arrays mit Lücken behalten diese auch nach dem Aufruf von `reverse()`. Leere Einträge werden als leere Einträge an die entsprechenden neuen Indizes übertragen.

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### reverse() für Objekte aufrufen, die keine Arrays sind

Die Methode `reverse()` liest die `length`-Eigenschaft von `this`. Anschließend durchläuft sie jede Eigenschaft mit einem ganzzahligen Schlüssel zwischen `0` und `length / 2` und vertauscht die beiden entsprechenden Indizes an den gegenüberliegenden Enden. Dabei werden Zieleigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete), wenn die jeweilige Quelleigenschaft nicht vorhanden war.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
  3: 33, // ignored by reverse() since length is 3
};
console.log(Array.prototype.reverse.call(arrayLike));
// { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
// The index 2 is deleted because there was no index 0 present originally
// The index 3 is unchanged since the length is 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.reverse` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.reverse` von es-shims](https://www.npmjs.com/package/array.prototype.reverse)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
