---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`reverse()`** Methode von {{jsxref("Array")}} Instanzen kehrt ein Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt die Referenz auf dasselbe Array zurück, wobei das erste Array-Element jetzt das letzte wird und das letzte das erste. Mit anderen Worten, die Reihenfolge der Elemente im Array wird in die entgegengesetzte Richtung der vorher angegebenen umgekehrt.

Um die Elemente in einem Array zu invertieren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toReversed", "toReversed()")}}.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Die Referenz auf das ursprüngliche Array, das nun umgekehrt ist. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ umgekehrt wird und keine Kopie erstellt wird.

## Beschreibung

Die `reverse()` Methode transponiert die Elemente des aufrufenden Array-Objekts an Ort und Stelle, verändert das Array und gibt eine Referenz auf das Array zurück.

Die `reverse()` Methode bewahrt leere Slots. Wenn das Quell-Array [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Slots [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden ebenfalls zu leeren Slots.

Die `reverse()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length`-Eigenschaft und integer-schlüsselbasierte Eigenschaften hat. Obwohl Zeichenketten ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Zeichenketten unveränderlich sind.

## Beispiele

### Die Elemente in einem Array umkehren

Das folgende Beispiel erstellt ein Array `items`, das drei Elemente enthält und dann das Array umkehrt. Der Aufruf von `reverse()` gibt eine Referenz auf das umgekehrte Array `items` zurück.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Die reverse()-Methode gibt die Referenz auf dasselbe Array zurück

Die `reverse()` Methode gibt die Referenz auf das ursprüngliche Array zurück, wodurch das Bearbeiten des zurückgegebenen Arrays das ursprüngliche Array ebenfalls verändert.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

Falls Sie möchten, dass `reverse()` das ursprüngliche Array nicht verändert, sondern ein {{Glossary("Shallow_copy", "flach kopiertes")}} Array zurückgibt, wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), verwenden Sie die {{jsxref("Array/toReversed", "toReversed()")}} Methode. Alternativ können Sie eine flache Kopie erstellen, bevor Sie `reverse()` aufrufen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### Verwendung von reverse() bei spärlichen Arrays

Spärliche Arrays bleiben nach dem Aufruf von `reverse()` spärlich. Leere Slots werden als leere Slots auf ihre jeweiligen neuen Indizes kopiert.

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### Aufruf von reverse() bei Nicht-Array-Objekten

Die `reverse()` Methode liest die `length` Eigenschaft von `this`. Sie durchläuft dann jede Eigenschaft mit einem ganzzahligen Schlüssel zwischen `0` und `length / 2` und vertauscht die beiden entsprechenden Indizes an beiden Enden, wobei sie jede Zieleigenschaft [löscht](/de/docs/Web/JavaScript/Reference/Operators/delete), für die die Quell-Eigenschaft nicht existierte.

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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
