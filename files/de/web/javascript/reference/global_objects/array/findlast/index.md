---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`findLast()`**-Methode von {{jsxref("Array")}} Instanzen durchläuft das Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt.
Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

Wenn Sie benötigen:

- das _erste_ Element, das übereinstimmt, verwenden Sie {{jsxref("Array/find", "find()")}}.
- den _Index_ des letzten übereinstimmenden Elements im Array, verwenden Sie {{jsxref("Array/findLastIndex", "findLastIndex()")}}.
- den _Index eines Wertes_, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Es ähnelt {{jsxref("Array/findIndex", "findIndex()")}}, prüft jedoch jedes Element auf Gleichheit mit dem Wert, anstatt eine Testfunktion zu verwenden.)
- ob ein Wert im Array _existiert_, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert überprüft, anstatt eine Testfunktion zu verwenden.
- ob irgendein Element die bereitgestellte Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.

{{EmbedInteractiveExample("pages/js/array-findlast.html", "shorter")}}

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt werden soll. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchst indexierte) Element im Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}} falls kein übereinstimmendes Element gefunden wird.

## Beschreibung

Die `findLast()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array in absteigender Indexreihenfolge auf, bis `callbackFn` einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgibt. `findLast()` gibt dann dieses Element zurück und stoppt das Durchlaufen des Arrays. Wenn `callbackFn` niemals einen truthy Wert zurückgibt, gibt `findLast()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für diejenigen mit zugewiesenen Werten. Leere Slots in [sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die `findLast()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlige Schlüssel besitzt.

## Beispiele

### Das letzte Objekt in einem Array finden, das auf Elementeigenschaften basiert

Dieses Beispiel zeigt, wie Sie einen Test basierend auf den Eigenschaften von Array-Elementen erstellen können.

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// return true inventory stock is low
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### Verwenden einer Pfeilfunktion und Destrukturierung

Das vorherige Beispiel könnte unter Verwendung einer Pfeilfunktion und [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) geschrieben werden:

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2);

console.log(result);
// { name: "fish", quantity: 1 }
```

### Die letzte Primzahl in einem Array finden

Das folgende Beispiel gibt das letzte Element im Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, falls keine Primzahl vorhanden ist.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `findLast()`, um das letzte Element zu finden, das geringer ist als seine Nachbarn.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLast((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 2
```

### Verwendung von findLast() bei spärlichen Arrays

Leere Slots in spärlichen Arrays _werden_ besucht und genauso behandelt wie `undefined`.

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0

// Shows all indexes, including deleted
array.findLast((value, index) => {
  // Delete element 5 on first iteration
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log(`Visited index ${index} with value ${value}`);
});
// Deleting array[5] with value 5
// Visited index 6 with value 6
// Visited index 5 with value undefined
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0
```

### Aufrufen von findLast() auf Nicht-Array-Objekten

Die `findLast()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // ignored by findLast() since length is 3
};
console.log(
  Array.prototype.findLast.call(arrayLike, (x) => Number.isInteger(x)),
); // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.findLast` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [Anleitung zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
