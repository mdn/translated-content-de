---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`find()`**-Methode von {{jsxref("Array")}}-Instanzen gibt das erste Element im angegebenen Array zurück, das die angegebene Testfunktion erfüllt.
Wenn kein Wert die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

- Wenn Sie den **Index** des gefundenen Elements im Array benötigen, verwenden Sie {{jsxref("Array/findIndex", "findIndex()")}}.
- Wenn Sie den **Index eines Werts** suchen müssen, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Es ist ähnlich wie {{jsxref("Array/findIndex", "findIndex()")}}, prüft jedoch jedes Element auf Gleichheit mit dem Wert anstelle einer Testfunktion.)
- Wenn Sie prüfen möchten, ob ein Wert **existiert** in einem Array, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert geprüft anstelle einer Testfunktion.
- Wenn Sie prüfen möchten, ob irgendein Element die angegebene Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.
- Wenn Sie alle Elemente finden möchten, die die angegebene Testfunktion erfüllen, verwenden Sie {{jsxref("Array/filter", "filter()")}}.

{{InteractiveExample("JavaScript Demo: Array.find()", "shorter")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}}-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet werden soll. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im Array, das die angegebene Testfunktion erfüllt.
Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Die `find()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine angegebene `callbackFn`-Funktion einmal für jedes Element in einem Array in aufsteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. `find()` gibt dann dieses Element zurück und hört auf, das Array weiter zu durchlaufen. Gibt `callbackFn` nie einen truthy-Wert zurück, gibt `find()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden generell funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für Werte, die zugewiesen wurden. Leere Stellen in [sparsely gepackten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die `find()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert über eine `length`-Eigenschaft und ganzzahlige Schlüssel-Eigenschaften verfügt.

## Beispiele

### Finden eines Objekts in einem Array anhand einer seiner Eigenschaften

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### Verwenden von Arrow-Funktionen und Destructuring

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### Finden der ersten Primzahl in einem Array

Das folgende Beispiel gibt das erste Element im Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn keine Primzahl vorhanden ist.

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist hilfreich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Im folgenden Beispiel wird zuerst `filter()` verwendet, um die positiven Werte zu extrahieren, und dann `find()`, um das erste Element zu finden, das kleiner als seine Nachbarn ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### Verwendung von find() auf sparsely gepackten Arrays

Leere Stellen in sparsely gepackten Arrays _werden_ durchlaufen und genauso behandelt wie `undefined`.

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.find((value, index) => {
  console.log("Visited index", index, "with value", value);
});
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

// Shows all indexes, including deleted
array.find((value, index) => {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log("Deleting array[5] with value", array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index", index, "with value", value);
});
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

### Aufrufen von find() bei Objekten, die keine Arrays sind

Die `find()`-Methode liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // ignored by find() since -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Leitfaden zu [Indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
