---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`find()`**-Methode von {{jsxref("Array")}}-Instanzen gibt das erste Element im bereitgestellten Array zurück, das die bereitgestellte Testfunktion erfüllt.
Wenn kein Wert die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

- Wenn Sie den **Index** des gefundenen Elements im Array benötigen, verwenden Sie {{jsxref("Array/findIndex", "findIndex()")}}.
- Wenn Sie den **Index eines Wertes** finden müssen, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Es ist ähnlich wie {{jsxref("Array/findIndex", "findIndex()")}}, überprüft jedoch jedes Element auf Gleichheit mit dem Wert, anstatt eine Testfunktion zu verwenden.)
- Wenn Sie feststellen müssen, ob ein Wert **in einem Array existiert**, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert überprüft, anstatt eine Testfunktion zu verwenden.
- Wenn Sie feststellen müssen, ob irgendein Element die bereitgestellte Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.
- Wenn Sie alle Elemente finden müssen, die die bereitgestellte Testfunktion erfüllen, verwenden Sie {{jsxref("Array/filter", "filter()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.find()", "shorter")}}

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
      - : Das aktuell im Array verarbeitete Element.
    - `index`
      - : Der Index des aktuell im Array verarbeiteten Elements.
    - `array`
      - : Das Array, auf dem `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im Array, das die bereitgestellte Testfunktion erfüllt.
Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Die `find()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft für jedes Element in einem Array in aufsteigender Indexreihenfolge eine bereitgestellte `callbackFn`-Funktion einmal auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. `find()` gibt dann dieses Element zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` nie einen truthy Wert zurückgibt, gibt `find()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden allgemein funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für die mit zugewiesenen Werten. Leere Stellen in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die `find()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### Ein Objekt in einem Array anhand einer seiner Eigenschaften finden

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

#### Verwenden von Pfeilfunktionen und Destrukturierung

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### Die erste Primzahl in einem Array finden

Das folgende Beispiel gibt das erste Element im Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn es keine Primzahl gibt.

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

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und dann `find()`, um das erste Element zu finden, das kleiner ist als seine Nachbarn.

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

### Verwenden von find() auf spärlichen Arrays

Leere Stellen in spärlichen Arrays _werden_ besucht und werden wie `undefined` behandelt.

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.find((value, index) => {
  console.log("Visited index", index, "with value", value);
  return false;
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
  return false;
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

### Aufrufen von find() bei Nicht-Array-Objekten

Die `find()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist.

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
- [Es-shims polyfill von `Array.prototype.find`](https://www.npmjs.com/package/array.prototype.find)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
