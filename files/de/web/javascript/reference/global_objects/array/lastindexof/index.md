---
title: Array.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`lastIndexOf()`**-Methode von {{jsxref("Array")}}-Instanzen gibt den letzten Index zurück, an dem ein bestimmtes Element im Array gefunden werden kann, oder -1, falls es nicht vorhanden ist. Das Array wird rückwärts durchsucht, beginnend bei `fromIndex`.

{{InteractiveExample("JavaScript Demo: Array.prototype.lastIndexOf()")}}

```js interactive-example
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1
```

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Element, das im Array gefunden werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem rückwärts gesucht wird, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet.
    - Wenn `fromIndex < -array.length`, wird das Array nicht durchsucht und `-1` zurückgegeben. Man kann sich dies konzeptionell so vorstellen, als würde man an einer nicht existierenden Position vor dem Anfang des Arrays beginnen und von dort rückwärts gehen. Es gibt keine Array-Elemente auf dem Weg, daher wird `searchElement` nie gefunden.
    - Wenn `fromIndex >= array.length` oder `fromIndex` weggelassen oder `undefined` ist, wird `array.length - 1` verwendet, wodurch das gesamte Array durchsucht wird. Man kann sich dies konzeptionell so vorstellen, als würde man an einer nicht existierenden Position über dem Ende des Arrays beginnen und von dort rückwärts gehen. Schließlich erreicht es die reale Endposition des Arrays und beginnt dort, rückwärts durch die tatsächlichen Array-Elemente zu suchen.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1` falls nicht gefunden.

## Beschreibung

Die `lastIndexOf()`-Methode vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung von [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (der gleiche Algorithmus, der vom `===`-Operator verwendet wird). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)-Werte werden niemals als gleich verglichen, daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die `lastIndexOf()`-Methode überspringt leere Plätze in [sparsely Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die `lastIndexOf()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige, schlüsselbasierte Eigenschaften hat.

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

Das folgende Beispiel verwendet `lastIndexOf`, um alle Indizes eines Elements in einem gegebenen Array zu finden, indem {{jsxref("Array/push", "push()")}} genutzt wird, um sie zu einem anderen Array hinzuzufügen, sobald sie gefunden werden.

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

Beachten Sie, dass wir hier den Fall `idx === 0` separat behandeln müssen, da das Element immer gefunden wird, unabhängig vom `fromIndex`-Parameter, wenn es das erste Element des Arrays ist. Dies unterscheidet sich von der {{jsxref("Array/indexOf", "indexOf()")}}-Methode.

### Verwendung von lastIndexOf() in dünn besetzten Arrays

Sie können `lastIndexOf()` nicht verwenden, um nach leeren Plätzen in dünn besetzten Arrays zu suchen.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Aufrufen von lastIndexOf() bei Nicht-Array-Objekten

Die `lastIndexOf()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nicht-negativer Integer kleiner als `length` ist.

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
- [es-shims Polyfill von `Array.prototype.lastIndexOf`](https://www.npmjs.com/package/array.prototype.lastindexof)
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
