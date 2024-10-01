---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`findLast()`**-Methode von {{jsxref("Array")}}-Instanzen iteriert das Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

Wenn Sie Folgendes finden müssen:

- das _erste_ passende Element, verwenden Sie {{jsxref("Array/find", "find()")}}.
- den _Index_ des letzten passenden Elements im Array, verwenden Sie {{jsxref("Array/findLastIndex", "findLastIndex()")}}.
- den _Index eines Werts_, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Es ist ähnlich wie {{jsxref("Array/findIndex", "findIndex()")}}, prüft aber jedes Element auf Gleichheit mit dem Wert anstelle einer Testfunktion.)
- ob ein Wert im Array _existiert_, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert geprüft, anstatt eine Testfunktion zu verwenden.
- ob irgendein Element die bereitgestellte Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.

{{EmbedInteractiveExample("pages/js/array-findlast.html", "shorter")}}

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet werden soll. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchste Index) Element im Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}}, wenn kein passendes Element gefunden wird.

## Beschreibung

Die `findLast()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array in absteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. `findLast()` gibt dann dieses Element zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` niemals einen truthy Wert zurückgibt, gibt `findLast()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für mehr Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für die mit zugewiesenen Werten. Leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die `findLast()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert über eine `length`-Eigenschaft und integer-beschriftete Eigenschaften verfügt.

## Beispiele

### Letztes Objekt in einem Array finden, das auf Elementeigenschaften basiert

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

#### Verwendung einer Pfeilfunktion und Destrukturierung

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

Das folgende Beispiel gibt das letzte Element im Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn keine Primzahl vorhanden ist.

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

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine vorhandene Variable auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und dann `findLast()`, um das letzte Element zu finden, das kleiner als seine Nachbarn ist.

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

### Verwendung von findLast() auf spärlichen Arrays

Leere Slots in spärlichen Arrays _werden_ besucht und werden genauso behandelt wie `undefined`.

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

### Aufrufen von findLast() auf nicht-Array-Objekten

Die `findLast()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

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
- [Leitfaden](/de/docs/Web/JavaScript/Guide/Indexed_collections) zu indizierten Sammlungen
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
