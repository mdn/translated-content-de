---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

Die **`lastIndexOf()`**-Methode von {{jsxref("Array")}}-Instanzen gibt den letzten Index zurück, an dem ein gegebenes Element im Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Das Array wird rückwärts durchsucht, beginnend bei `fromIndex`.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Element, das im Array zu lokalisieren ist.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Suche rückwärts beginnen soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet.
    - Wenn `fromIndex < -array.length`, wird das Array nicht durchsucht und `-1` zurückgegeben. Sie können sich das konzeptuell vorstellen, als begänne man an einer nicht existenten Position vor dem Anfang des Arrays und ginge von dort rückwärts. Es gibt keine Array-Elemente auf dem Weg, so dass `searchElement` niemals gefunden wird.
    - Wenn `fromIndex >= array.length` oder `fromIndex` ausgelassen wird, wird `array.length - 1` verwendet, wodurch das gesamte Array durchsucht wird. Sie können sich das konzeptuell vorstellen, als begänne man an einer nicht existenten Position jenseits des Endes des Arrays und ginge von dort rückwärts. Schließlich erreicht es die reale Endposition des Arrays, an welchem Punkt es beginnt, rückwärts durch die tatsächlichen Array-Elemente zu suchen.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1`, wenn nicht gefunden.

## Beschreibung

Die `lastIndexOf()`-Methode vergleicht `searchElement` mit Elementen des Arrays unter Verwendung von [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dem gleichen Algorithmus, den der `===`-Operator verwendet). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)-Werte werden nie als gleich verglichen, daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die `lastIndexOf()`-Methode überspringt leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die `lastIndexOf()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integerindizierte Eigenschaften hat.

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

### Alle Vorkommen eines Elements finden

Das folgende Beispiel verwendet `lastIndexOf`, um alle Indizes eines
Elements in einem bestimmten Array zu finden, wobei {{jsxref("Array/push", "push()")}} verwendet wird, um diese
hinzuzufügen, wenn sie gefunden werden, in ein anderes Array.

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

Beachten Sie, dass wir den Fall `idx === 0` hier separat behandeln müssen, da das
Element immer gefunden wird, unabhängig vom `fromIndex`-Parameter, wenn es sich um das
erste Element des Arrays handelt. Dies unterscheidet sich von der
{{jsxref("Array/indexOf", "indexOf()")}}-Methode.

### Verwendung von lastIndexOf() auf spärlichen Arrays

Sie können `lastIndexOf()` nicht verwenden, um nach leeren Slots in spärlichen Arrays zu suchen.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Aufrufen von lastIndexOf() für Nicht-Array Objekte

Die `lastIndexOf()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl kleiner als `length` ist.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
