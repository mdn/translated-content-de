---
title: Array.prototype.filter()
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: b63d69fb2038d6c63718a74a9768d157423efce9
---

{{JSRef}}

Die **`filter()`** Methode von {{jsxref("Array")}} Instanzen erstellt eine {{Glossary("Shallow_copy", "flache Kopie")}} eines Teils eines gegebenen Arrays, gefiltert auf nur die Elemente des gegebenen Arrays, die den Test bestehen, der von der bereitgestellten Funktion implementiert wurde.

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt werden soll. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um das Element im resultierenden Array zu behalten, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `filter()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet werden soll. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine {{Glossary("Shallow_copy", "flache Kopie")}} des gegebenen Arrays, die nur die Elemente enthält, die den Test bestehen. Wenn keine Elemente den Test bestehen, wird ein leeres Array zurückgegeben.

## Beschreibung

Die `filter()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array auf und erstellt ein neues Array mit allen Werten, für die `callbackFn` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. Array-Elemente, die den `callbackFn` Test nicht bestehen, werden nicht in das neue Array aufgenommen. Lesen Sie den Abschnitt zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Stellen in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `filter()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length` Eigenschaft und Integer-gekennzeichnete Eigenschaften hat.

## Beispiele

### Herausfiltern aller kleinen Werte

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes Array zu erstellen, das alle Elemente mit Werten unter 10 entfernt.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Finden aller Primzahlen in einem Array

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
> Die `isPrime()` Implementierung dient nur zu Demonstrationszwecken. Für eine Anwendung in der realen Welt sollten Sie einen stark memoisierten Algorithmus wie den [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

### Herausfiltern ungültiger Einträge aus JSON

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes JSON aller Elemente mit einer nicht-null, numerischen `id` zu erstellen.

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

### Suche im Array

Das folgende Beispiel verwendet `filter()`, um den Array-Inhalt basierend auf Suchkriterien zu filtern.

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

### Verwendung des dritten Arguments von callbackFn

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `map()`, um die numerische ID aus jedem Namen zu extrahieren, und dann `filter()`, um diejenigen auszuwählen, die größer als ihre Nachbarn sind.

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

Das `array` Argument ist _nicht_ das Array, das gerade aufgebaut wird — es gibt keine Möglichkeit, aus der Callback-Funktion auf das Array zuzugreifen, das erstellt wird.

### Verwendung von filter() bei dünn besetzten Arrays

`filter()` überspringt leere Stellen.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### Aufrufen von filter() bei Nicht-Array-Objekten

Die `filter()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl ist, die kleiner als `length` ist.

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

- [Polyfill von `Array.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.filter`](https://www.npmjs.com/package/array.prototype.filter)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
