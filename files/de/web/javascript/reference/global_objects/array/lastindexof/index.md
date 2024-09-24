---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`lastIndexOf()`**-Methode von {{jsxref("Array")}} Instanzen gibt den letzten Index zurück, an dem ein bestimmtes Element im Array gefunden werden kann, oder `-1`, wenn es nicht vorhanden ist. Das Array wird rückwärts durchsucht, beginnend bei `fromIndex`.

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
  - : Nullbasierter Index, bei dem die Rückwärtssuche begonnen wird, [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet.
    - Falls `fromIndex < -array.length`, wird das Array nicht durchsucht und `-1` wird zurückgegeben. Konzeptionell können Sie sich vorstellen, dass Sie bei einer nicht vorhandenen Position vor dem Anfang des Arrays beginnen und rückwärts von dort gehen. Es gibt unterwegs keine Array-Elemente, also wird `searchElement` nie gefunden.
    - Wenn `fromIndex >= array.length` oder `fromIndex` ausgelassen wird, wird `array.length - 1` verwendet, wodurch das gesamte Array durchsucht wird. Konzeptionell können Sie sich vorstellen, dass Sie bei einer nicht vorhandenen Position jenseits des Endes des Arrays beginnen und rückwärts von dort gehen. Es erreicht schließlich die reale Endposition des Arrays, an dem Punkt beginnt es, rückwärts durch die tatsächlichen Array-Elemente zu suchen.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1`, falls nicht gefunden.

## Beschreibung

Die `lastIndexOf()`-Methode vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung der [strikten Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dasselbe Algorithmus, der vom `===` Operator verwendet wird). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) Werte werden niemals als gleich verglichen, daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die `lastIndexOf()`-Methode überspringt leere Slots in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die `lastIndexOf()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Eigenschaften hat.

## Beispiele

### Verwendung von lastIndexOf()

Das folgende Beispiel verwendet `lastIndexOf()`, um Werte in einem Array zu lokalisieren.

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
Elements in einem gegebenen Array zu finden, und nutzt {{jsxref("Array/push", "push()")}}, um sie
in ein anderes Array hinzuzufügen, sobald sie gefunden werden.

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

Beachten Sie, dass wir hier den Fall `idx === 0` separat behandeln müssen, weil das
Element immer gefunden wird, unabhängig vom `fromIndex`-Parameter, wenn es
das erste Element des Arrays ist. Dies unterscheidet sich von der
{{jsxref("Array/indexOf", "indexOf()")}}-Methode.

### Verwendung von lastIndexOf() bei dünn besetzten Arrays

Sie können `lastIndexOf()` nicht verwenden, um nach leeren Slots in dünn besetzten Arrays zu suchen.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Aufruf von lastIndexOf() bei Nicht-Array-Objekten

Die `lastIndexOf()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // von lastIndexOf() ignoriert, da length 3 ist
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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
