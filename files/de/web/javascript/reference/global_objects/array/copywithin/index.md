---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 8166ab356cccb30af5e0ad912815d19100249e17
---

{{JSRef}}

Die **`copyWithin()`**-Methode von {{jsxref("Array")}}-Instanzen kopiert flach einen Teil dieses Arrays an eine andere Position im gleichen Array und gibt dieses Array zurück, ohne seine Länge zu ändern.

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
  - : Nullbasierter Index, an dem die Sequenz kopiert werden soll, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht dem Ort, an den das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an nachfolgende Indizes kopiert.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= target < 0`, wird `target + array.length` verwendet.
    - Wenn `target < -array.length`, wird `0` verwendet.
    - Wenn `target >= array.length`, wird nichts kopiert.
    - Wenn `target` nach der Normalisierung nach `start` positioniert ist, erfolgt das Kopieren nur bis zum Ende von `array.length` (mit anderen Worten, `copyWithin()` verlängert das Array niemals).
- `start`
  - : Nullbasierter Index, ab dem das Kopieren von Elementen beginnen soll, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= start < 0`, wird `start + array.length` verwendet.
    - Wenn `start < -array.length`, wird `0` verwendet.
    - Wenn `start >= array.length`, wird nichts kopiert.
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren von Elementen enden soll, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= end < 0`, wird `end + array.length` verwendet.
    - Wenn `end < -array.length`, wird `0` verwendet.
    - Wenn `end >= array.length` oder `end` weggelassen oder `undefined` ist, wird `array.length` verwendet, sodass alle Elemente bis zum Ende kopiert werden.
    - Wenn `end` auf eine Position vor oder an der Position verweist, die `start` impliziert, wird nichts kopiert.

### Rückgabewert

Das modifizierte Array.

## Beschreibung

Die Methode `copyWithin()` funktioniert ähnlich wie `memmove` in C und C++ und ist eine leistungsstarke Methode, um die Daten eines {{jsxref("Array")}} zu verschieben. Dies gilt insbesondere für die Methode {{jsxref("TypedArray/copyWithin", "TypedArray")}} mit demselben Namen. Die Sequenz wird als eine Operation kopiert und eingefügt; die eingefügte Sequenz enthält die kopierten Werte, selbst wenn sich die Kopier- und Einfügebereiche überschneiden.

Da `undefined` bei der Umwandlung in eine ganze Zahl zu `0` wird, hat das Weglassen des `start`-Parameters den gleichen Effekt wie die Übergabe von `0`, wodurch das gesamte Array an die Zielposition kopiert wird, was einem Rechtsschieben entspricht, bei dem die rechte Grenze abgeschnitten und die linke Grenze dupliziert wird. Dieses Verhalten kann Leser Ihres Codes verwirren, daher sollten Sie `0` als `start` explizit übergeben.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

Die Methode `copyWithin()` ist eine [verändernde Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Sie ändert nicht die Länge von `this`, aber sie wird den Inhalt von `this` ändern und neue Eigenschaften erstellen oder vorhandene Eigenschaften bei Bedarf löschen.

Die Methode `copyWithin()` behält leere Slots bei. Wenn der zu kopierende Bereich [dünn besetzt](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) ist, werden die entsprechenden neuen Indizes der leeren Slots [gelöscht](/de/docs/Web/JavaScript/Reference/Operators/delete) und werden ebenfalls zu leeren Slots.

Die Methode `copyWithin()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat. Obwohl Zeichenfolgen auch array-ähnlich sind, ist diese Methode nicht geeignet, um auf sie angewendet zu werden, da Zeichenfolgen unveränderlich sind.

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

### Verwendung von copyWithin() bei dünn besetzten Arrays

`copyWithin()` wird leere Slots übertragen.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Aufruf von copyWithin() bei Nicht-Array-Objekten

Die Methode `copyWithin()` liest die `length`-Eigenschaft von `this` und manipuliert dann die beteiligten ganzzahligen Indizes.

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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
