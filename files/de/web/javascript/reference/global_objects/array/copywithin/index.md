---
title: Array.prototype.copyWithin()
short-title: copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`copyWithin()`** von {{jsxref("Array")}}-Instanzen kopiert einen Teil des Arrays als flache Kopie an eine andere Stelle desselben Arrays und gibt das Array zurück, ohne seine Länge zu ändern.

{{InteractiveExample("JavaScript Demo: Array.prototype.copyWithin()")}}

```js interactive-example
const array = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
```

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Nullbasierter Index, an den die Sequenz kopiert werden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). An diese Position wird das Element bei `start` kopiert; alle Elemente zwischen `start` und `end` werden an die folgenden Indizes kopiert.
    - Ein negativer Index zählt vom Ende des Arrays zurück – wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung hinter `start` liegt, wird nur bis zum Ende des Arrays kopiert (mit anderen Worten: `copyWithin()` verlängert das Array nie).
- `start`
  - : Nullbasierter Index, ab dem Elemente kopiert werden, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück – wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bis zu dem Elemente kopiert werden, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis unmittelbar vor `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück – wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` ausgelassen wird oder `undefined` ist, wird `array.length` verwendet. Dadurch werden alle Elemente bis zum Ende kopiert.
    - Wenn die durch `end` bezeichnete Position vor oder an der durch `start` bezeichneten Position liegt, wird nichts kopiert.

### Rückgabewert

Das veränderte Array.

## Beschreibung

Die Methode `copyWithin()` funktioniert ähnlich wie `memmove` in C und C++ und ermöglicht es, die Daten eines {{jsxref("Array")}} mit hoher Leistung zu verschieben. Dies gilt insbesondere für die gleichnamige Methode von {{jsxref("TypedArray/copyWithin", "TypedArray")}}. Die Sequenz wird in einem einzigen Vorgang kopiert und eingefügt. Die eingefügte Sequenz enthält auch dann die kopierten Werte, wenn sich Quell- und Zielbereich überschneiden.

Da `undefined` bei der Umwandlung in eine Ganzzahl zu `0` wird, hat das Weglassen des Parameters `start` dieselbe Wirkung wie die Übergabe von `0`: Das gesamte Array wird an die Zielposition kopiert. Dies entspricht einer Verschiebung nach rechts, bei der Elemente am rechten Rand wegfallen und die Elemente am linken Rand dupliziert werden. Dieses Verhalten kann Leser Ihres Codes verwirren. Übergeben Sie daher besser ausdrücklich `0` als `start`.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die Methode `copyWithin()` [verändert das Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge von `this` nicht, verändert aber dessen Inhalt und erstellt bei Bedarf neue Eigenschaften oder löscht vorhandene Eigenschaften.

Die Methode `copyWithin()` erhält leere Einträge. Wenn der Quellbereich [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Einträge [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und sind ebenfalls leer.

Die Methode `copyWithin()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat. Obwohl Strings ebenfalls Array-ähnlich sind, eignet sich diese Methode nicht für sie, da Strings unveränderlich sind.

## Beispiele

### copyWithin() verwenden

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### copyWithin() mit dünn besetzten Arrays verwenden

`copyWithin()` überträgt auch leere Einträge.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### copyWithin() für Objekte aufrufen, die keine Arrays sind

Die Methode `copyWithin()` liest die `length`-Eigenschaft von `this` und bearbeitet anschließend die betroffenen ganzzahligen Indizes.

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// The '3' property is deleted because the copied source is an empty slot
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.copyWithin` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.copyWithin` von es-shims](https://www.npmjs.com/package/array.prototype.copywithin)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
