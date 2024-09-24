---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`filter()`** Methode von {{jsxref("Array")}} Instanzen erstellt eine [flache Kopie](/de/docs/Glossary/Shallow_copy) eines Teils eines gegebenen Arrays, reduziert auf nur die Elemente aus dem gegebenen Array, die den durch die bereitgestellte Funktion implementierten Test bestehen.

{{EmbedInteractiveExample("pages/js/array-filter.html", "shorter")}}

## Syntax

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um das Element im resultierenden Array zu behalten, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `filter()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine [flache Kopie](/de/docs/Glossary/Shallow_copy) des gegebenen Arrays, die nur die Elemente enthält, die den Test bestehen. Wenn keine Elemente den Test bestehen, wird ein leeres Array zurückgegeben.

## Beschreibung

Die `filter()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array auf und konstruiert ein neues Array aller Werte, für die `callbackFn` einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgibt. Array-Elemente, die den `callbackFn` Test nicht bestehen, werden im neuen Array nicht aufgenommen. Lesen Sie den Abschnitt zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für mehr Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Sie wird nicht für leere Plätze in [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `filter()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-indizierte Eigenschaften hat.

## Beispiele

### Herausfiltern aller kleinen Werte

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes Array zu erstellen, das alle Elemente mit Werten unter 10 entfernt hat.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered ist [12, 130, 44]
```

### Alle Primzahlen in einem Array finden

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

### Ungültige Einträge aus JSON herausfiltern

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes JSON aller Elemente mit nicht-Null, numerischen `id` zu erstellen.

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

console.log("Gefiltertes Array\n", arrByID);
// Gefiltertes Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Anzahl der ungültigen Einträge =", invalidEntries);
// Anzahl der ungültigen Einträge = 5
```

### Suche im Array

Das folgende Beispiel verwendet `filter()`, um den Array-Inhalt basierend auf Suchkriterien zu filtern.

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filtere Array-Elemente basierend auf Suchkriterien (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### Verwendung des dritten Arguments von callbackFn

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `map()`, um die numerische ID aus jedem Namen zu extrahieren und verwendet dann `filter()`, um diejenigen auszuwählen, die größer als ihre Nachbarn sind.

```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // Ohne das arr-Argument gibt es keinen einfachen Weg,
    // auf das Zwischenarray zuzugreifen, ohne es in einer Variable zu speichern.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```

Das `array` Argument ist _nicht_ das Array, das gerade gebaut wird — es gibt keinen Weg, auf das Array, das gebaut wird, von der Callback-Funktion aus zuzugreifen.

### Verwenden von filter() auf sparsamen Arrays

`filter()` überspringt leere Plätze.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### Aufrufen von filter() auf Nicht-Array-Objekten

Die `filter()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ignoriert von filter() da length 3 ist
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
- Leitfaden zu [Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
