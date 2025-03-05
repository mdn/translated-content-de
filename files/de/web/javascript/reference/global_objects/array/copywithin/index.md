---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`copyWithin()`**-Methode von {{jsxref("Array")}}-Instanzen kopiert oberflächlich einen Teil dieses Arrays an eine andere Stelle im selben Array und gibt dieses Array ohne Änderung seiner Länge zurück.

{{InteractiveExample("JavaScript Demo: Array.copyWithin()")}}

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
  - : Nullbasierter Index, an dem die Sequenz hin kopiert werden soll, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht dem Ort, an den das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an nachfolgende Indizes kopiert.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung hinter `start` positioniert ist, erfolgt das Kopieren nur bis zum Ende von `array.length` (mit anderen Worten, `copyWithin()` erweitert das Array niemals).
- `start`
  - : Nullbasierter Index, ab dem Elemente kopiert werden sollen, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bis zu dem Elemente kopiert werden sollen, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die `copyWithin()`-Methode funktioniert wie C und C++'s `memmove` und ist eine leistungsstarke Methode, um die Daten eines {{jsxref("Array")}} zu verschieben. Dies gilt insbesondere für die {{jsxref("TypedArray/copyWithin", "TypedArray")}}-Methode gleichen Namens. Die Sequenz wird als eine Operation kopiert und eingefügt; die eingefügte Sequenz wird die kopierten Werte haben, auch wenn sich die Kopier- und Einfügeregion überlappen.

Da `undefined` zu `0` wird, wenn es in eine Ganzzahl konvertiert wird, hat das Weglassen des `start`-Parameters die gleiche Wirkung wie das Übergeben von `0`, was das gesamte Array an die Zielposition kopiert, was einem Rechtsschieben entspricht, bei dem die rechte Grenze abgeschnitten wird und die linke Grenze dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, daher sollten Sie `0` ausdrücklich als `start` übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die `copyWithin()`-Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert nicht die Länge von `this`, aber sie wird den Inhalt von `this` ändern und neue Eigenschaften erstellen oder vorhandene Eigenschaften löschen, falls erforderlich.

Die `copyWithin()`-Methode bewahrt leere Slots. Wenn der Bereich, aus dem kopiert werden soll, [spärlich](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Slots [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden auch zu leeren Slots.

Die `copyWithin()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlenschlüsselbasierte Eigenschaften hat. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Strings unveränderlich sind.

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

`copyWithin()` wird leere Slots verbreiten.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufruf von copyWithin() auf Nicht-Array-Objekten

Die `copyWithin()`-Methode liest die `length`-Eigenschaft von `this` und manipuliert dann die beinhalteten ganzzahligen Indizes.

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
- Leitfaden zu [Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
