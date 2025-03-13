---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`copyWithin()`**-Methode von Instanzen des {{jsxref("Array")}} kopiert einen Teil dieses Arrays oberflächlich an eine andere Stelle im gleichen Array und gibt dieses Array zurück, ohne seine Länge zu ändern.

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
  - : Nullbasierter Index, an dem die Sequenz kopiert werden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht dem Ort, an den das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden auf nachfolgende Indizes kopiert.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung hinter `start` positioniert ist, wird nur bis zum Ende von `array.length` kopiert (mit anderen Worten, `copyWithin()` erweitert niemals das Array).
- `start`
  - : Nullbasierter Index, ab dem die Elemente kopiert werden sollen, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren der Elemente beendet wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die `copyWithin()`-Methode funktioniert wie `memmove` in C und C++ und ist eine leistungsfähige Methode, um die Daten eines {{jsxref("Array")}} zu verschieben. Dies gilt insbesondere für die {{jsxref("TypedArray/copyWithin", "TypedArray")}} Methode mit demselben Namen. Die Sequenz wird als eine Operation kopiert und eingefügt; die eingefügte Sequenz hat die kopierten Werte, selbst wenn sich die Kopier- und Einfügebereiche überschneiden.

Da `undefined` beim Konvertieren in eine Ganzzahl zu `0` wird, hat das Weglassen des `start`-Parameters denselben Effekt wie die Übergabe von `0`, was das gesamte Array an die Zielposition kopiert, was einem Rechtsshift entspricht, bei dem der rechte Rand abgeschnitten und der linke Rand dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, daher sollten Sie explizit `0` als `start` übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die `copyWithin()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht die Länge von `this`, aber sie ändert den Inhalt von `this` und erzeugt neue Eigenschaften oder löscht vorhandene Eigenschaften, wenn notwendig.

Die `copyWithin()`-Methode bewahrt leere Felder. Wenn der zu kopierende Bereich [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Felder [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und bleiben ebenfalls leere Felder.

Die `copyWithin()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Es wird nur vorausgesetzt, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlbezogene Eigenschaften hat. Obwohl Zeichenfolgen ebenfalls array-ähnlich sind, ist diese Methode für die Anwendung auf diese ungeeignet, da Zeichenfolgen unveränderlich sind.

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

### Verwendung von copyWithin() bei spärlichen Arrays

`copyWithin()` propagiert leere Felder.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufruf von copyWithin() bei Nicht-Array-Objekten

Die `copyWithin()`-Methode liest die `length`-Eigenschaft von `this` und manipuliert dann die beteiligten ganzzahligen Indizes.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
