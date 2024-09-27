---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`lastIndexOf()`** Methode von {{jsxref("Array")}} Instanzen gibt den letzten Index zurück, an dem ein gegebenes Element im Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Das Array wird rückwärts durchsucht, beginnend bei `fromIndex`.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Element, das im Array gefunden werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Rückwärtssuche beginnt, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet.
    - Wenn `fromIndex < -array.length` ist, wird das Array nicht durchsucht und `-1` zurückgegeben. Sie können sich das konzeptionell so vorstellen, dass Sie an einer nicht existierenden Position vor dem Anfang des Arrays beginnen und von dort rückwärts gehen. Es gibt keine Array-Elemente auf dem Weg, daher wird `searchElement` nie gefunden.
    - Wenn `fromIndex >= array.length` oder `fromIndex` ausgelassen wird, wird `array.length - 1` verwendet, wodurch das gesamte Array durchsucht wird. Sie können sich das konzeptionell so vorstellen, dass Sie an einer nicht existierenden Position über das Ende des Arrays hinaus beginnen und von dort rückwärts gehen. Schließlich erreicht es die reale Endposition des Arrays, an der es beginnt, rückwärts durch die tatsächlichen Array-Elemente zu suchen.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1`, wenn nicht gefunden.

## Beschreibung

Die Methode `lastIndexOf()` vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung von [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (der gleiche Algorithmus, der vom `===`-Operator verwendet wird). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) Werte werden nie als gleich verglichen, daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die Methode `lastIndexOf()` überspringt leere Plätze in [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die Methode `lastIndexOf()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-gekeyte Eigenschaften hat.

## Beispiele

### Verwendung von lastIndexOf()

Das folgende Beispiel verwendet `lastIndexOf()`, um Werte in einem Array zu finden.

```js
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

Sie können `lastIndexOf()` nicht verwenden, um nach `NaN` zu suchen.

```js
const array = [NaN];
array.lastIndexOf(NaN); // -1
```

### Finden aller Vorkommen eines Elements

Das folgende Beispiel verwendet `lastIndexOf`, um alle Indizes eines
Elements in einem gegebenen Array zu finden, indem {{jsxref("Array/push", "push()")}} verwendet wird, um sie zu einem anderen Array hinzuzufügen, sobald sie gefunden werden.

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Beachten Sie, dass wir den Fall `idx === 0` hier separat behandeln müssen, weil das
Element immer gefunden wird, unabhängig vom `fromIndex`-Parameter, wenn es das
erste Element des Arrays ist. Dies ist anders als die Methode
{{jsxref("Array/indexOf", "indexOf()")}}.

### Verwendung von lastIndexOf() auf lückenhaften Arrays

Sie können `lastIndexOf()` nicht verwenden, um nach leeren Plätzen in lückenhaften Arrays zu suchen.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Aufrufen von lastIndexOf() auf Nicht-Array-Objekten

Die Methode `lastIndexOf()` liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // ignored by lastIndexOf() since length is 3
};
console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
// 2
console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));
// -1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.lastIndexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
