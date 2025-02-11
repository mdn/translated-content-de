---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`reverse()`**-Methode von {{jsxref("Array")}}-Instanzen kehrt ein Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt die Referenz auf dasselbe Array zurück, wobei das erste Array-Element jetzt das letzte wird und das letzte das erste. Anders ausgedrückt wird die Reihenfolge der Elemente im Array umgekehrt.

Um die Elemente in einem Array umzukehren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toReversed", "toReversed()")}}.

{{InteractiveExample("JavaScript Demo: Array.reverse()")}}

```js interactive-example
const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
```

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, das jetzt umgekehrt ist. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ umgekehrt wird und keine Kopie erstellt wird.

## Beschreibung

Die `reverse()`-Methode vertauscht die Elemente des aufrufenden Array-Objekts an Ort und Stelle, verändert das Array und gibt eine Referenz auf das Array zurück.

Die `reverse()`-Methode bewahrt leere Plätze. Wenn das Quellarray [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Plätze der neuen entsprechenden Indizes [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und bleiben ebenfalls leere Plätze.

Die `reverse()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es wird nur erwartet, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Eigenschaften hat. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Die Elemente eines Arrays umkehren

Das folgende Beispiel erstellt ein Array `items`, das drei Elemente enthält, und kehrt dann das Array um. Der Aufruf von `reverse()` gibt eine Referenz auf das umgekehrte Array `items` zurück.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Die reverse()-Methode gibt die Referenz auf dasselbe Array zurück

Die `reverse()`-Methode gibt eine Referenz auf das ursprüngliche Array zurück. Das bedeutet, dass das Ändern des zurückgegebenen Arrays auch das ursprüngliche Array verändert.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

Falls Sie möchten, dass `reverse()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array zurückgibt, wie es andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) tun, verwenden Sie die {{jsxref("Array/toReversed", "toReversed()")}}-Methode. Alternativ können Sie eine flache Kopie vor dem Aufruf von `reverse()` erstellen, indem Sie den [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### Die Verwendung von reverse() bei sparse Arrays

Sparse Arrays bleiben sparse nach dem Aufruf von `reverse()`. Leere Plätze werden an ihren neuen entsprechenden Indizes als leere Plätze kopiert.

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### Den Aufruf von reverse() auf Nicht-Array-Objekten

Die `reverse()`-Methode liest die `length`-Eigenschaft von `this`. Anschließend besucht sie jede Eigenschaft mit einem Integer-Schlüssel zwischen `0` und `length / 2` und vertauscht die entsprechenden Indizes auf beiden Enden, wobei [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) wird, wenn die Quell-Eigenschaft nicht existierte.

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

- [Polyfill von `Array.prototype.reverse` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
