---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`filter()`** Methode von {{jsxref("Array")}} Instanzen erstellt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) eines Teils eines gegebenen Arrays, gefiltert auf die Elemente des Arrays, die den durch die bereitgestellte Funktion implementierten Test bestehen.

{{EmbedInteractiveExample("pages/js/array-filter.html", "shorter")}}

## Syntax

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um das Element im resultierenden Array zu behalten, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `filter()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine [flache Kopie](/de/docs/Glossary/Shallow_copy) des gegebenen Arrays, die nur die Elemente enthält, die den Test bestehen. Wenn kein Element den Test besteht, wird ein leeres Array zurückgegeben.

## Beschreibung

Die `filter()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array auf und konstruiert ein neues Array mit allen Werten, für die `callbackFn` einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgibt. Array-Elemente, die den `callbackFn` Test nicht bestehen, werden nicht in das neue Array aufgenommen. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für mehr Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Es wird nicht für leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `filter()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integerbasierte Schlüssel-Eigenschaften hat.

## Beispiele

### Herausfiltern aller kleinen Werte

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes Array zu erstellen, bei dem alle Elemente mit Werten unter 10 entfernt sind.

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

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

### Filtern ungültiger Einträge aus JSON

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes JSON von allen Elementen mit nicht-null, numerischer `id` zu erstellen.

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

### Suchen im Array

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

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen wollen, insbesondere wenn Sie keine existierende Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zunächst `map()`, um die numerische ID aus jedem Namen zu extrahieren, und dann `filter()`, um diejenigen auszuwählen, die größer sind als ihre Nachbarn.

```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```

Das `array` Argument ist _nicht_ das Array, das aufgebaut wird — es gibt keine Möglichkeit, auf das Array, das aufgebaut wird, aus der Callback-Funktion zuzugreifen.

### Verwendung von filter() bei spärlichen Arrays

`filter()` überspringt leere Slots.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### Aufruf von filter() auf Nicht-Array-Objekten

Die `filter()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel ein nichtnegativer Ganzzahlwert ist, der kleiner als `length` ist.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
