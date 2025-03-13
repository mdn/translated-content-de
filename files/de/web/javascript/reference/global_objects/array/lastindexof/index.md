---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`lastIndexOf()`** Methode von {{jsxref("Array")}} Instanzen gibt den letzten Index zurück, an dem ein bestimmtes Element im Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Das Array wird rückwärts durchsucht, beginnend bei `fromIndex`.

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
  - : Zu lokalisierendes Element im Array.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem rückwärts gesucht wird, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt rückwärts ab dem Ende des Arrays — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet.
    - Wenn `fromIndex < -array.length`, wird das Array nicht durchsucht und `-1` wird zurückgegeben. Sie können sich dies konzeptionell so vorstellen, dass bei einer nicht existierenden Position vor dem Anfang des Arrays begonnen und von dort rückwärts gegangen wird. Es gibt keine Array-Elemente auf dem Weg, sodass `searchElement` nie gefunden wird.
    - Wenn `fromIndex >= array.length` oder `fromIndex` weggelassen wird, wird `array.length - 1` verwendet, wodurch das gesamte Array durchsucht wird. Sie können sich dies konzeptionell so vorstellen, dass bei einer nicht existierenden Position über dem Ende des Arrays begonnen und von dort rückwärts gegangen wird. Es wird letztlich die reale Endposition des Arrays erreicht, woraufhin rückwärts durch die tatsächlichen Array-Elemente gesucht wird.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1`, wenn nicht gefunden.

## Beschreibung

Die `lastIndexOf()` Methode vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung der [strikten Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (derselbe Algorithmus wie der `===` Operator). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) Werte werden nie als gleich verglichen, daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die `lastIndexOf()` Methode überspringt leere Stellen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die `lastIndexOf()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und ganzzahlige, indizierte Eigenschaften hat.

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

Das folgende Beispiel verwendet `lastIndexOf`, um alle Indizes eines Elements in einem gegebenen Array zu finden, und nutzt {{jsxref("Array/push", "push()")}}, um sie zu einem anderen Array hinzuzufügen, sobald sie gefunden werden.

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

Beachten Sie, dass wir hier den Fall `idx === 0` separat behandeln müssen, da das Element unabhängig vom `fromIndex` Parameter immer gefunden wird, wenn es das erste Element des Arrays ist. Dies ist anders als bei der Methode {{jsxref("Array/indexOf", "indexOf()")}}.

### Verwendung von lastIndexOf() bei dünn besetzten Arrays

Sie können `lastIndexOf()` nicht verwenden, um nach leeren Stellen in dünn besetzten Arrays zu suchen.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Aufrufen von lastIndexOf() auf Nicht-Array-Objekten

Die `lastIndexOf()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
