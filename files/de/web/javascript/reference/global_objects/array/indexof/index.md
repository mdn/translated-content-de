---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`indexOf()`** Methode von {{jsxref("Array")}} Instanzen gibt den ersten Index zurück, an dem ein bestimmtes Element im Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist.

{{InteractiveExample("JavaScript Demo: Array.prototype.indexOf()")}}

```js interactive-example
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1
```

## Syntax

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Das Element, das im Array gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Der Index, bei dem begonnen werden soll zu suchen, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück — wenn `-array.length <= fromIndex < 0`, wird `fromIndex + array.length` verwendet. Beachten Sie, dass das Array in diesem Fall dennoch von vorne nach hinten durchsucht wird.
    - Wenn `fromIndex < -array.length` ist oder `fromIndex` weggelassen wird, wird `0` verwendet, wodurch das gesamte Array durchsucht wird.
    - Wenn `fromIndex >= array.length` ist, wird das Array nicht durchsucht und `-1` zurückgegeben.

### Rückgabewert

Der erste Index von `searchElement` im Array; `-1`, wenn nicht gefunden.

## Beschreibung

Die `indexOf()` Methode vergleicht `searchElement` mit den Elementen des Arrays unter Verwendung der [strikten Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (dasselbe Algorithmus, der vom `===` Operator verwendet wird). [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) Werte werden niemals als gleich verglichen, daher gibt `indexOf()` immer `-1` zurück, wenn `searchElement` `NaN` ist.

Die `indexOf()` Methode überspringt leere Stellen in [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die `indexOf()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und ganzzahlige Schlüssel-Eigenschaften hat.

## Beispiele

### Verwendung von indexOf()

Das folgende Beispiel verwendet `indexOf()`, um Werte in einem Array zu finden.

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

Sie können `indexOf()` nicht verwenden, um nach `NaN` zu suchen.

```js
const array = [NaN];
array.indexOf(NaN); // -1
```

### Alle Vorkommen eines Elements finden

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Überprüfung, ob ein Element im Array existiert, und das Array aktualisieren

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.
```

### Verwendung von indexOf() auf sparsamen Arrays

Sie können `indexOf()` nicht verwenden, um nach leeren Stellen in sparsamen Arrays zu suchen.

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### Aufrufen von indexOf() auf Nicht-Array-Objekten

Die `indexOf()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nicht-negativer Integer kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by indexOf() since length is 3
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.indexOf`](https://www.npmjs.com/package/array.prototype.indexof)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
