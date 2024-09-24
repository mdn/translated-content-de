---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 6e8ca9ecc4bfd14ea5c46d4817f189eecacb8296
---

{{JSRef}}

Die **`copyWithin()`** Methode von {{jsxref("Array")}} Instanzen kopiert flach einen Teil dieses Arrays an eine andere Position im selben Array und gibt dieses Array zurück, ohne seine Länge zu ändern.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Nullbasierter Index, an den die Sequenz kopiert werden soll, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht dem Ort, an den das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an die folgenden Indizes kopiert.
    - Negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung nach `start` positioniert ist, wird nur bis zum Ende von `array.length` kopiert (mit anderen Worten, `copyWithin()` erweitert das Array nie).
- `start`
  - : Nullbasierter Index, ab dem die Elemente kopiert werden sollen, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Kopieren der Elemente endet, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die `copyWithin()` Methode funktioniert wie C und C++'s `memmove` und ist eine Hochleistungsmethode zum Verschieben der Daten eines {{jsxref("Array")}}. Dies gilt insbesondere für die {{jsxref("TypedArray/copyWithin", "TypedArray")}} Methode gleichen Namens. Die Sequenz wird als eine Operation kopiert und eingefügt; die eingefügte Sequenz hat die kopierten Werte, auch wenn sich die Kopier- und Einfügebereiche überlappen.

Da `undefined` zu `0` wird, wenn es in eine ganze Zahl konvertiert wird, hat das Weglassen des `start` Parameters denselben Effekt wie das Übergeben von `0`, was das gesamte Array an die Zielposition kopiert, gleichbedeutend mit einer Rechtsverschiebung, bei der der rechte Rand abgeschnitten und der linke Rand dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, daher sollten Sie `0` als `start` ausdrücklich übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; verschiebt alle Elemente um 2 Positionen nach rechts
```

Die `copyWithin()` Methode ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert nicht die Länge von `this`, aber sie ändert den Inhalt von `this` und erstellt neue Eigenschaften oder löscht bei Bedarf vorhandene Eigenschaften.

Die `copyWithin()` Methode erhält leere Plätze. Wenn der zu kopierende Bereich [dünn besiedelt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Plätze [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden ebenfalls zu leeren Plätzen.

Die `copyWithin()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length` Eigenschaft und ganzzahlig indizierte Eigenschaften hat. Obwohl Zeichenketten ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Zeichenketten unveränderlich sind.

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

### Verwendung von copyWithin() auf unregelmäßigen Arrays

`copyWithin()` wird leere Plätze weitergeben.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufruf von copyWithin() auf nicht-Array Objekten

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
// Die '3' Eigenschaft wird gelöscht, da die kopierte Quelle ein leerer Platz ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Anleitung
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
