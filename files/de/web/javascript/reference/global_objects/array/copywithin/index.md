---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`copyWithin()`**-Methode von {{jsxref("Array")}}-Instanzen kopiert seicht einen Teil dieses Arrays an eine andere Position im gleichen Array und gibt dieses Array zurück, ohne dessen Länge zu ändern.

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
  - : Index (nullbasiert), an dem die Sequenz kopiert werden soll, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dieser Index gibt an, wo das Element von `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden in aufeinanderfolgende Indizes kopiert.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung hinter `start` positioniert ist, wird nur bis zum Ende von `array.length` kopiert (mit anderen Worten, `copyWithin()` erweitert das Array niemals).
- `start`
  - : Index (nullbasiert), an dem mit dem Kopieren von Elementen begonnen wird, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Index (nullbasiert), an dem das Kopieren von Elementen endet, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` nicht angegeben ist, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position angibt, die vor oder an der von `start` angegebenen Position liegt, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die Methode `copyWithin()` arbeitet ähnlich wie `memmove` in C und C++ und ist eine hochleistungsfähige Methode, um die Daten eines {{jsxref("Array")}} zu verschieben. Dies gilt besonders für die {{jsxref("TypedArray/copyWithin", "TypedArray")}}-Methode gleichen Namens. Die Sequenz wird als eine Operation kopiert und eingefügt; die eingefügte Sequenz hat die kopierten Werte, selbst wenn sich die Bereiche für Kopieren und Einfügen überlappen.

Da `undefined` bei der Konvertierung zu einer Ganzzahl `0` wird, hat das Weglassen des Parameters `start` denselben Effekt wie das Übergeben von `0`. Dies kopiert das gesamte Array an die Zielposition, was einer Rechtsverschiebung entspricht, bei der die rechte Grenze abgeschnitten und die linke Grenze dupliziert wird. Dieses Verhalten kann für Leser Ihres Codes verwirrend sein, daher sollten Sie `0` explizit als `start` übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die Methode `copyWithin()` ist eine [mutierende Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht die Länge des Arrays `this`, aber sie verändert den Inhalt von `this` und erstellt neue Eigenschaften oder entfernt bestehende, falls erforderlich.

Die Methode `copyWithin()` bewahrt leere Stellen. Falls der zu kopierende Bereich [lückenhaft](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Stellen [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und ebenfalls zu leeren Stellen.

Die Methode `copyWithin()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat. Obwohl Strings ebenfalls array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Strings unveränderlich sind.

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

### Verwendung von copyWithin() auf lückenhaften Arrays

`copyWithin()` propagiert leere Stellen.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufrufen von copyWithin() auf Nicht-Array-Objekten

Die Methode `copyWithin()` liest die Eigenschaft `length` von `this` und manipuliert die beteiligten ganzzahligen Indizes.

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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
