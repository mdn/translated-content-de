---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 6e8ca9ecc4bfd14ea5c46d4817f189eecacb8296
---

{{JSRef}}

Die **`copyWithin()`**-Methode von {{jsxref("Array")}}-Instanzen kopiert seicht einen Teil dieses Arrays an eine andere Stelle im gleichen Array und gibt dieses Array zurück, ohne seine Länge zu ändern.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Nullbasierter Index, an dem die Sequenz kopiert wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht der Stelle, an die das Element von `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an nachfolgende Indizes kopiert.
    - Negative Indizes zählen vom Ende des Arrays zurück — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung hinter `start` positioniert ist, wird nur bis zum Ende von `array.length` kopiert (mit anderen Worten, `copyWithin()` erweitert das Array nie).
- `start`
  - : Nullbasierter Index, von dem begonnen wird, Elemente zu kopieren, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative Indizes zählen vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren der Elemente endet, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Negative Indizes zählen vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen wird, wird `array.length` verwendet, wodurch alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` eine Position vor oder an der Position impliziert, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die `copyWithin()`-Methode funktioniert ähnlich wie C und C++'s `memmove` und ist eine hochperformante Methode, um die Daten eines {{jsxref("Array")}} zu verschieben. Dies gilt besonders für die Methode {{jsxref("TypedArray/copyWithin", "TypedArray")}} mit dem gleichen Namen. Die Sequenz wird als ein Vorgang kopiert und eingefügt; die eingefügte Sequenz hat die kopierten Werte auch dann, wenn der Kopier- und Einfügebereich überlappen.

Da `undefined` beim Konvertieren in eine Ganzzahl zu `0` wird, hat das Weglassen des `start`-Parameters denselben Effekt, als würde `0` übergeben, was das gesamte Array an die Zielposition kopiert, was einem Rechtsschieben entspricht, bei dem die rechte Grenze abgeschnitten und die linke Grenze dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, daher sollten Sie explizit `0` als `start` übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die `copyWithin()`-Methode ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie verändert nicht die Länge von `this`, aber sie wird den Inhalt von `this` ändern und bei Bedarf neue Eigenschaften erstellen oder vorhandene löschen.

Die `copyWithin()`-Methode bewahrt leere Stellen. Wenn der zu kopierende Bereich [lückenhaft](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Stellen [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden ebenfalls leere Stellen.

Die `copyWithin()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlenschlüsselbasierte Eigenschaften hat. Obwohl Strings auch array-ähnlich sind, ist diese Methode nicht geeignet, um auf ihnen angewendet zu werden, da Strings unveränderlich sind.

## Beispiele

### Verwenden von copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### Verwenden von copyWithin() auf lückenhaften Arrays

`copyWithin()` wird leere Stellen propagieren.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufrufen von copyWithin() auf Nicht-Array-Objekten

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
