---
title: Array.prototype.indexOf()
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`indexOf()`** von {{jsxref("Array")}}-Instanzen gibt den ersten Index zurück, an dem ein bestimmtes Element im Array gefunden wird, oder `-1`, wenn es nicht vorhanden ist.

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
  - : Der nullbasierte Index, ab dem die Suche beginnt, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Ein negativer Index zählt vom Ende des Arrays zurück. Wenn `-array.length <= fromIndex < 0` gilt, wird `fromIndex + array.length` verwendet. Das Array wird auch in diesem Fall von vorne nach hinten durchsucht.
    - Wenn `fromIndex < -array.length` gilt oder `fromIndex` weggelassen wird, wird `0` verwendet und damit das gesamte Array durchsucht.
    - Wenn `fromIndex >= array.length` gilt, wird das Array nicht durchsucht und `-1` zurückgegeben.

### Rückgabewert

Der erste Index von `searchElement` im Array; `-1`, wenn das Element nicht gefunden wird.

## Beschreibung

Die Methode `indexOf()` vergleicht `searchElement` mit den Elementen des Arrays anhand von [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (demselben Algorithmus, den der Operator `===` verwendet). Werte von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) werden niemals als gleich betrachtet. Daher gibt `indexOf()` immer `-1` zurück, wenn `searchElement` den Wert `NaN` hat.

Die Methode `indexOf()` überspringt leere Positionen in [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Die Methode `indexOf()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### indexOf() verwenden

Das folgende Beispiel verwendet `indexOf()`, um Werte in einem Array zu finden.

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

Mit `indexOf()` können Sie nicht nach `NaN` suchen.

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

### Prüfen, ob ein Element im Array vorhanden ist, und das Array aktualisieren

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

### indexOf() bei Arrays mit Lücken verwenden

Mit `indexOf()` können Sie nicht nach leeren Positionen in Arrays mit Lücken suchen.

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### indexOf() für Objekte aufrufen, die keine Arrays sind

Die Methode `indexOf()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.indexOf` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.indexOf` von es-shims](https://www.npmjs.com/package/array.prototype.indexof)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
