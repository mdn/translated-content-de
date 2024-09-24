---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`reverse()`**-Methode von {{jsxref("Array")}}-Instanzen kehrt ein Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt die Referenz zu demselben Array zurück, wobei das erste Array-Element nun das letzte und das letzte Element das erste wird. Mit anderen Worten, die Reihenfolge der Elemente im Array wird in die entgegengesetzte Richtung umgedreht.

Um die Elemente in einem Array umzukehren, ohne das ursprüngliche Array zu verändern, verwenden Sie {{jsxref("Array/toReversed", "toReversed()")}}.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Die Referenz auf das ursprüngliche, nun umgekehrte Array. Beachten Sie, dass das Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ umgekehrt wird und keine Kopie erstellt wird.

## Beschreibung

Die `reverse()`-Methode transponiert die Elemente des aufrufenden Array-Objekts in place, verändert das Array und gibt eine Referenz auf das Array zurück.

Die `reverse()`-Methode bewahrt leere Plätze. Wenn das Quell-Array [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die neuen Indizes der leeren Plätze [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und bleiben leere Plätze.

Die `reverse()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-basierte Eigenschaftsschlüssel hat. Obwohl Zeichenfolgen auch array-ähnlich sind, eignet sich diese Methode nicht zur Anwendung auf sie, da Zeichenfolgen unveränderlich sind.

## Beispiele

### Die Elemente in einem Array umkehren

Das folgende Beispiel erstellt ein Array `items`, das drei Elemente enthält, und kehrt dann das Array um. Der Aufruf von `reverse()` gibt eine Referenz auf das umgekehrte Array `items` zurück.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Die reverse()-Methode gibt die Referenz auf dasselbe Array zurück

Die `reverse()`-Methode gibt die Referenz auf das ursprüngliche Array zurück, sodass eine Veränderung des zurückgegebenen Arrays auch das ursprüngliche Array verändert.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers und reversed sind beide in umgekehrter Reihenfolge [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

Falls Sie möchten, dass `reverse()` das ursprüngliche Array nicht verändert, sondern ein [shallow-copied](/de/docs/Glossary/Shallow_copy) Array wie andere Array-Methoden (z.B. [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) zurückgibt, verwenden Sie die {{jsxref("Array/toReversed", "toReversed()")}}-Methode. Alternativ können Sie eine flache Kopie vor dem Aufruf von `reverse()` erstellen, indem Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden.

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] erstellt eine flache Kopie, sodass reverse() das ursprüngliche nicht verändert
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### Verwendung von reverse() auf sparse Arrays

Sparse Arrays bleiben sparse, nachdem `reverse()` aufgerufen wurde. Leere Plätze werden an ihren entsprechenden neuen Indizes als leere Plätze kopiert.

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### reverse() bei Nicht-Array-Objekten aufrufen

Die `reverse()`-Methode liest die `length`-Eigenschaft von `this`. Sie besucht dann jede Eigenschaft mit einem integer-basierten Schlüssel zwischen `0` und `length / 2` und vertauscht die zwei entsprechenden Indizes an beiden Enden, wobei jegliche Zieleigenschaften [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) werden, für die die Quell-Eigenschaft nicht existierte.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
  3: 33, // von reverse() ignoriert, da length 3 ist
};
console.log(Array.prototype.reverse.call(arrayLike));
// { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
// Der Index 2 wird gelöscht, weil ursprünglich kein Index 0 vorhanden war
// Der Index 3 bleibt unverändert, da die Länge 3 ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.reverse` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Anleitung zu [Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
