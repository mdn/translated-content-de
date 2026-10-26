---
title: Array.prototype.findLast()
short-title: findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`findLast()`** von {{jsxref("Array")}}-Instanzen durchläuft das Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die angegebene Testfunktion erfüllt.
Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

Wenn Sie Folgendes suchen:

- das _erste_ passende Element, verwenden Sie {{jsxref("Array/find", "find()")}}.
- den _Index_ des letzten passenden Elements im Array, verwenden Sie {{jsxref("Array/findLastIndex", "findLastIndex()")}}.
- den _Index eines Werts_, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Dies ähnelt {{jsxref("Array/findIndex", "findIndex()")}}, prüft aber jedes Element auf Gleichheit mit dem Wert, anstatt eine Testfunktion zu verwenden.)
- ob ein Wert in einem Array _vorhanden ist_, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert geprüft, anstatt eine Testfunktion zu verwenden.
- ob ein beliebiges Element die angegebene Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype.findLast()", "shorter")}}

```js interactive-example
const array = [5, 12, 50, 130, 44];

const found = array.findLast((element) => element > 45);

console.log(found);
// Expected output: 130
```

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn ein passendes Element gefunden wurde, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element im Array.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
    - `array`
      - : Das Array, für das `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte Element (mit dem höchsten Index) im Array, das die angegebene Testfunktion erfüllt; {{jsxref("undefined")}}, wenn kein passendes Element gefunden wird.

## Beschreibung

Die Methode `findLast()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die angegebene Funktion `callbackFn` einmal für jedes Element eines Arrays in absteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. Anschließend gibt `findLast()` dieses Element zurück und beendet die Iteration über das Array. Wenn `callbackFn` nie einen truthy-Wert zurückgibt, gibt `findLast()` {{jsxref("undefined")}} zurück. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für Indizes mit zugewiesenen Werten. Leere Stellen in [spärlich besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die Methode `findLast()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln hat.

## Beispiele

### Das letzte Objekt in einem Array anhand von Elementeigenschaften finden

Dieses Beispiel zeigt, wie Sie eine Prüfung anhand der Eigenschaften von Array-Elementen erstellen können.

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

#### Pfeilfunktion und Destrukturierung verwenden

Das vorherige Beispiel lässt sich mit einer Pfeilfunktion und [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring) schreiben:

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

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

> [!NOTE]
> Die Implementierung von `isPrime()` dient nur zur Veranschaulichung. Für eine praktische Anwendung sollten Sie einen stark {{Glossary("Memoization", "memoisierten")}} Algorithmus wie das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

### Die zuletzt abgeschlossene Aufgabe finden

Dieses Beispiel zeigt einen praktischen Anwendungsfall für `findLast()` bei der Arbeit mit zeitlich geordneten Daten. Es findet die zuletzt abgeschlossene Aufgabe in einer Liste, die bereits nach `timestamp` sortiert ist.

```js
const tasks = [
  { name: "Setup project", completed: true, timestamp: 1609459200000 },
  { name: "Write tests", completed: false, timestamp: 1609545600000 },
  { name: "Fix bug #42", completed: true, timestamp: 1609632000000 },
  { name: "Deploy to staging", completed: true, timestamp: 1609718400000 },
  { name: "Review PR", completed: false, timestamp: 1609804800000 },
];

const lastCompletedTask = tasks.findLast((task) => task.completed);

console.log(lastCompletedTask.name); // Deploy to staging
```

Das ist effizienter als die Verwendung von `find()` mit einem umgekehrten Array, da kein neues Array erstellt werden muss.

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine Variable vorhanden ist, die auf das Array verweist. Im folgenden Beispiel werden zunächst mit `filter()` die positiven Werte herausgefiltert. Anschließend wird mit `findLast()` das letzte Element gesucht, das kleiner als seine Nachbarn ist.

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

### findLast() bei spärlich besetzten Arrays verwenden

Leere Stellen in spärlich besetzten Arrays _werden_ besucht und genauso wie `undefined` behandelt.

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
  return false;
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
  return false;
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

### findLast() für Objekte aufrufen, die keine Arrays sind

Die Methode `findLast()` liest die Eigenschaft `length` von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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

- [Polyfill für `Array.prototype.findLast` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.findLast` von es-shims](https://www.npmjs.com/package/array.prototype.findlast)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
