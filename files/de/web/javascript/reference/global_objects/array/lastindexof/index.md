---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`lastIndexOf()`**-Methode von {{jsxref("Array")}}-Instanzen gibt den letzten Index zurück, an dem ein bestimmtes Element im Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Das Array wird rückwärts durchsucht, beginnend bei `fromIndex`.

{{InteractiveExample("JavaScript Demo: Array.lastIndexOf()")}}

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
  - : Element, das im Array gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, bei dem mit der rückwärtsgerichteten Suche begonnen wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet.
    - Wenn `fromIndex < -array.length`, wird das Array nicht durchsucht und `-1` zurückgegeben. Man kann sich dies konzeptionell so vorstellen: Es wird an einer nicht existierenden Position vor dem Beginn des Arrays gestartet und von dort aus rückwärts gegangen. Es gibt keine Array-Elemente auf dem Weg, daher wird `searchElement` nie gefunden.
    - Wenn `fromIndex >= array.length` ist oder `fromIndex` weggelassen wird, wird `array.length - 1` verwendet, sodass das gesamte Array durchsucht wird. Konzeptionell betrachtet beginnt die Suche an einer nicht existierenden Position hinter dem Ende des Arrays und geht von dort rückwärts. Schließlich wird die reale Endposition des Arrays erreicht, ab der rückwärts durch die tatsächlichen Array-Elemente gesucht wird.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1`, wenn nicht gefunden.

## Beschreibung

Die Methode `lastIndexOf()` vergleicht `searchElement` mithilfe von [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (derselbe Algorithmus wie bei dem `===`-Operator) mit den Elementen des Arrays. [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)-Werte werden niemals als gleich verglichen, daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die Methode `lastIndexOf()` überspringt leere Slots in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die Methode `lastIndexOf()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbasierte Schlüssel-Eigenschaften besitzt.

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

Das folgende Beispiel verwendet `lastIndexOf`, um alle Indizes eines Elements in einem gegebenen Array zu finden, wobei {{jsxref("Array/push", "push()")}} verwendet wird, um diese Indizes einem anderen Array hinzuzufügen.

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

Beachten Sie, dass der Fall `idx === 0` hier separat behandelt werden muss, da das Element unabhängig vom `fromIndex`-Parameter immer gefunden wird, wenn es sich um das erste Element des Arrays handelt. Dies unterscheidet sich von der {{jsxref("Array/indexOf", "indexOf()")}}-Methode.

### Verwendung von lastIndexOf() bei dünn besetzten Arrays

Sie können `lastIndexOf()` nicht verwenden, um leere Slots in dünn besetzten Arrays zu finden.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Aufruf von lastIndexOf() auf Nicht-Array-Objekten

Die Methode `lastIndexOf()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
