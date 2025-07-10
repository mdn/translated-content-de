---
title: Array.prototype.copyWithin()
short-title: copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`copyWithin()`** Methode von {{jsxref("Array")}} Instanzen kopiert einen Teil dieses Arrays oberflächlich an einen anderen Ort innerhalb desselben Arrays und gibt dieses Array zurück, ohne seine Länge zu verändern.

{{InteractiveExample("JavaScript Demo: Array.prototype.copyWithin()")}}

```js interactive-example
const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
```

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Nullbasierter Index, an dem die Sequenz kopiert werden soll, [zu einem ganzzahligen Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht dem Ort, an den das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden auf nachfolgende Indizes kopiert.
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung hinter `start` liegt, wird nur bis zum Ende von `array.length` kopiert (mit anderen Worten: `copyWithin()` verlängert nie das Array).
- `start`
  - : Nullbasierter Index, von dem aus mit dem Kopieren der Elemente begonnen werden soll, [zu einem ganzzahligen Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bis zu dem die Elemente kopiert werden sollen, [zu einem ganzzahligen Wert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays rückwärts — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen oder `undefined` ist, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die `copyWithin()` Methode funktioniert ähnlich wie `memmove` in C und C++ und ist eine leistungsstarke Methode, um die Daten eines {{jsxref("Array")}} zu verschieben. Dies gilt insbesondere für die {{jsxref("TypedArray/copyWithin", "TypedArray")}} Methode mit demselben Namen. Die Sequenz wird als eine Operation kopiert und eingefügt; die eingefügte Sequenz wird die kopierten Werte haben, selbst wenn sich die Kopier- und Einfügeregion überlappen.

Da `undefined` zu `0` wird, wenn es in einen ganzzahligen Wert umgewandelt wird, hat das Auslassen des `start`-Parameters denselben Effekt wie die Übergabe von `0`, was das gesamte Array an die Zielposition kopiert, ähnlich einer Rechtsverschiebung, bei der die rechte Grenze abgeschnitten und die linke Grenze dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, deshalb sollten Sie `0` explizit als `start` übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die `copyWithin()` Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert nicht die Länge von `this`, aber sie ändert den Inhalt von `this` und erstellt neue Eigenschaften oder löscht bestehende Eigenschaften, falls notwendig.

Die `copyWithin()` Methode bewahrt leere Slots. Wenn der zu kopierende Bereich [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die leeren Slots in den entsprechenden neuen Indizes [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden ebenfalls leere Slots.

Die `copyWithin()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-basierten Schlüssel hat. Obwohl Zeichenketten auch array-ähnlich sind, ist diese Methode nicht geeignet, auf ihnen angewendet zu werden, da Zeichenketten unveränderlich sind.

## Beispiele

### Verwendung von copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### Verwendung von copyWithin() auf spärlichen Arrays

`copyWithin()` wird leere Slots weiterleiten.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufrufen von copyWithin() auf Nicht-Array-Objekte

Die `copyWithin()` Methode liest die `length` Eigenschaft von `this` und manipuliert dann die beteiligten ganzzahligen Indizes.

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

- [Polyfill von `Array.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.copyWithin`](https://www.npmjs.com/package/array.prototype.copywithin)
- [Leitfaden zu Indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
