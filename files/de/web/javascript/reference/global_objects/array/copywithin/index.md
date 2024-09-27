---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 6e8ca9ecc4bfd14ea5c46d4817f189eecacb8296
---

{{JSRef}}

Die **`copyWithin()`**-Methode von {{jsxref("Array")}}-Instanzen kopiert flach einen Teil dieses Arrays an eine andere Stelle innerhalb desselben Arrays und gibt dieses Array zurück, ohne dessen Länge zu verändern.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Index, bei dem die Sequenz hin kopiert wird, nullbasiert, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht der Position, an die das Element am `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an nachfolgende Indizes kopiert.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach Normalisierung hinter `start` liegt, wird nur bis zum Ende von `array.length` kopiert (mit anderen Worten, `copyWithin()` verlängert das Array niemals).
- `start`
  - : Index, an dem das Kopieren von Elementen beginnen soll, nullbasiert, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Index, an dem das Kopieren von Elementen enden soll, nullbasiert, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis zu, aber nicht einschließlich `end`.
    - Ein negativer Index zählt rückwärts vom Ende des Arrays — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, was dazu führt, dass alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position impliziert, die vor oder an der Position liegt, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die Methode `copyWithin()` funktioniert wie `memmove` in C und C++ und ist eine leistungsstarke Methode zum Verschieben von Daten innerhalb eines {{jsxref("Array")}}. Dies gilt besonders für die {{jsxref("TypedArray/copyWithin", "TypedArray")}}-Methode gleichen Namens. Die Sequenz wird in einem Schritt kopiert und eingefügt; die eingefügte Sequenz wird die kopierten Werte enthalten, auch wenn sich Kopier- und Einfügebereich überlappen.

Da `undefined` beim Konvertieren in eine ganze Zahl zu `0` wird, hat das Weglassen des Parameters `start` denselben Effekt wie das Übergeben von `0`, was das gesamte Array an die Zielposition kopiert, was einem Rechtsverschieben entspricht, bei dem die rechte Grenze abgeschnitten und die linke Grenze dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, daher sollten Sie `start` explizit als `0` übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die Methode `copyWithin()` ist eine [modifizierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert die Länge von `this` nicht, aber sie wird den Inhalt von `this` ändern und neue Eigenschaften erstellen oder vorhandene Eigenschaften löschen, wenn nötig.

Die Methode `copyWithin()` erhält leere Plätze. Wenn der zu kopierende Bereich [sparse](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Plätze [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden ebenfalls zu leeren Plätzen.

Die Methode `copyWithin()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Eigenschaften hat. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, auf ihnen angewendet zu werden, da Strings unveränderlich sind.

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

### Verwendung von copyWithin() bei sparsamen Arrays

`copyWithin()` wird leere Plätze propagieren.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufrufen von copyWithin() bei Nicht-Array-Objekten

Die Methode `copyWithin()` liest die `length`-Eigenschaft von `this` und manipuliert dann die involvierten ganzzahligen Indizes.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
