---
title: Array.prototype.filter()
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`filter()`** von {{jsxref("Array")}}-Instanzen erstellt eine {{Glossary("Shallow_copy", "flache Kopie")}} eines Teils eines Arrays. Diese enthält nur die Elemente des ursprünglichen Arrays, die den von der übergebenen Funktion implementierten Test bestehen.

{{InteractiveExample("JavaScript Demo: Array.prototype.filter()", "shorter")}}

```js interactive-example
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## Syntax

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn das Element im resultierenden Array enthalten sein soll, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element des Arrays.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
    - `array`
      - : Das Array, für das `filter()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Weitere Informationen finden Sie unter [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine {{Glossary("Shallow_copy", "flache Kopie")}} des ursprünglichen Arrays, die nur die Elemente enthält, die den Test bestehen. Besteht kein Element den Test, wird ein leeres Array zurückgegeben.

## Beschreibung

Die Methode `filter()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die übergebene Funktion `callbackFn` einmal für jedes Element eines Arrays auf und erstellt ein neues Array mit allen Werten, für die `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. Array-Elemente, die den Test von `callbackFn` nicht bestehen, werden nicht in das neue Array aufgenommen. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Für leere Positionen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

Die Methode `filter()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Alle kleinen Werte herausfiltern

Im folgenden Beispiel wird mit `filter()` ein Array erstellt, aus dem alle Elemente mit Werten kleiner als 10 entfernt wurden.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Alle Primzahlen in einem Array finden

Das folgende Beispiel gibt alle Primzahlen im Array zurück:

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

> [!NOTE]
> Die Implementierung von `isPrime()` dient nur zur Veranschaulichung. Für eine reale Anwendung empfiehlt sich ein Algorithmus mit umfassender {{Glossary("Memoization", "Memoisierung")}}, etwa das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), um wiederholte Berechnungen zu vermeiden.

### Ungültige Objekte aus einem Array von Objekten herausfiltern

Im folgenden Beispiel wird mit `filter()` ein Array erstellt, das alle Objekte mit einer numerischen `id` ungleich null enthält.

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5
```

### In einem Array suchen

Im folgenden Beispiel wird mit `filter()` der Inhalt eines Arrays anhand von Suchkriterien gefiltert.

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine vorhandene Variable auf das Array verweist. Im folgenden Beispiel wird zunächst mit `map()` die numerische ID aus jedem Namen extrahiert. Anschließend werden mit `filter()` diejenigen ausgewählt, die größer als ihre Nachbarn sind.

```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/\d+/)[0], 10))
  .filter((id, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```

Das Argument `array` ist _nicht_ das Array, das gerade erstellt wird. Auf dieses Array kann von der Callback-Funktion aus nicht zugegriffen werden.

### filter() bei dünn besetzten Arrays verwenden

`filter()` überspringt leere Positionen.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### filter() für Objekte aufrufen, die keine Arrays sind

Die Methode `filter()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.filter` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.filter` von es-shims](https://www.npmjs.com/package/array.prototype.filter)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
