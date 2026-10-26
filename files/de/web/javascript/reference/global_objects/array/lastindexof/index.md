---
title: Array.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`lastIndexOf()`** von {{jsxref("Array")}}-Instanzen gibt den letzten Index zurück, an dem ein bestimmtes Element im Array gefunden wird, oder `-1`, wenn es nicht vorhanden ist. Das Array wird ab `fromIndex` rückwärts durchsucht.

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
  - : Das Element, das im Array gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, an dem die Rückwärtssuche beginnt; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück. Wenn `-array.length <= fromIndex < 0` gilt, wird `fromIndex + array.length` verwendet.
    - Wenn `fromIndex < -array.length` gilt, wird das Array nicht durchsucht und `-1` zurückgegeben. Anschaulich beginnt die Suche dann an einer nicht vorhandenen Position vor dem Anfang des Arrays und läuft von dort rückwärts. Auf diesem Weg liegen keine Array-Elemente, daher wird `searchElement` nie gefunden.
    - Wenn `fromIndex >= array.length` gilt oder `fromIndex` weggelassen wird oder `undefined` ist, wird `array.length - 1` verwendet. Dadurch wird das gesamte Array durchsucht. Anschaulich beginnt die Suche dann an einer nicht vorhandenen Position hinter dem Ende des Arrays und läuft von dort rückwärts. Schließlich erreicht sie das tatsächliche Ende des Arrays und durchsucht ab dort die vorhandenen Array-Elemente rückwärts.

### Rückgabewert

Der letzte Index von `searchElement` im Array; `-1`, wenn das Element nicht gefunden wird.

## Beschreibung

Die Methode `lastIndexOf()` vergleicht `searchElement` mit den Elementen des Arrays mittels [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (demselben Algorithmus, den der Operator `===` verwendet). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)-Werte werden nie als gleich betrachtet. Daher gibt `lastIndexOf()` immer `-1` zurück, wenn `searchElement` den Wert `NaN` hat.

Die Methode `lastIndexOf()` überspringt leere Stellen in [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die Methode `lastIndexOf()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### lastIndexOf() verwenden

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

Mit `lastIndexOf()` können Sie nicht nach `NaN` suchen.

```js
const array = [NaN];
array.lastIndexOf(NaN); // -1
```

### Alle Vorkommen eines Elements finden

Das folgende Beispiel verwendet `lastIndexOf`, um alle Indizes eines Elements in einem bestimmten Array zu finden. Dabei werden die gefundenen Indizes mit {{jsxref("Array/push", "push()")}} zu einem anderen Array hinzugefügt.

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

Beachten Sie, dass der Fall `idx === 0` hier gesondert behandelt werden muss: Wenn das gesuchte Element das erste Element des Arrays ist, wird es unabhängig vom Parameter `fromIndex` immer gefunden. Dies unterscheidet sich von der Methode {{jsxref("Array/indexOf", "indexOf()")}}.

### lastIndexOf() bei Arrays mit Lücken verwenden

Mit `lastIndexOf()` können Sie nicht nach leeren Stellen in Arrays mit Lücken suchen.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### lastIndexOf() für Objekte aufrufen, die keine Arrays sind

Die Methode `lastIndexOf()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.lastIndexOf` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.lastIndexOf` von es-shims](https://www.npmjs.com/package/array.prototype.lastindexof)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
