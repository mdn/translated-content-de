---
title: Array.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`find()`** von {{jsxref("Array")}}-Instanzen gibt das erste Element des Arrays zurück, das die angegebene Prüffunktion erfüllt. Wenn kein Element die Prüffunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

- Wenn Sie den **Index** des gefundenen Elements im Array benötigen, verwenden Sie {{jsxref("Array/findIndex", "findIndex()")}}.
- Wenn Sie den **Index eines Werts** ermitteln möchten, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}. Die Methode ähnelt {{jsxref("Array/findIndex", "findIndex()")}}, prüft aber jedes Element auf Gleichheit mit dem Wert, statt eine Prüffunktion zu verwenden.
- Wenn Sie prüfen möchten, ob ein Wert in einem Array **vorhanden ist**, verwenden Sie {{jsxref("Array/includes", "includes()")}}. Auch diese Methode prüft jedes Element auf Gleichheit mit dem Wert, statt eine Prüffunktion zu verwenden.
- Wenn Sie prüfen möchten, ob irgendein Element die angegebene Prüffunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.
- Wenn Sie alle Elemente finden möchten, die die angegebene Prüffunktion erfüllen, verwenden Sie {{jsxref("Array/filter", "filter()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.find()", "shorter")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn ein passendes Element gefunden wurde, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell im Array verarbeitete Element.
    - `index`
      - : Der Index des aktuell im Array verarbeiteten Elements.
    - `array`
      - : Das Array, für das `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im Array, das die angegebene Prüffunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Die Methode `find()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die angegebene Funktion `callbackFn` für jedes Element eines Arrays einmal in aufsteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. Anschließend gibt `find()` dieses Element zurück und beendet die Iteration durch das Array. Wenn `callbackFn` nie einen truthy-Wert zurückgibt, gibt `find()` {{jsxref("undefined")}} zurück. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für Indizes mit zugewiesenen Werten. Leere Positionen in [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die Methode `find()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Ein Objekt anhand einer seiner Eigenschaften in einem Array finden

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

#### Pfeilfunktion und Destrukturierung verwenden

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

Das folgende Beispiel gibt das erste Element im Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn keine Primzahl vorhanden ist.

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

> [!NOTE]
> Die Implementierung von `isPrime()` dient nur zur Veranschaulichung. Für eine praktische Anwendung sollten Sie einen Algorithmus mit umfangreicher {{Glossary("Memoization", "Memoisierung")}} verwenden, beispielsweise das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), um wiederholte Berechnungen zu vermeiden.

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine Variable vorhanden ist, die auf das Array verweist. Im folgenden Beispiel werden zunächst mit `filter()` die positiven Werte ausgewählt. Anschließend wird mit `find()` das erste Element gefunden, das kleiner als seine Nachbarelemente ist.

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

### find() bei Arrays mit Lücken verwenden

Leere Positionen in Arrays mit Lücken werden _besucht_ und wie `undefined` behandelt.

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

### find() für Objekte aufrufen, die keine Arrays sind

Die Methode `find()` liest die `length`-Eigenschaft von `this` und greift anschließend auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.find` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.find` von es-shims](https://www.npmjs.com/package/array.prototype.find)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
