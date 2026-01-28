---
title: Array.prototype.findLast()
short-title: findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: f9fe909466736b335491bdd866701e4b023057d0
---

Die **`findLast()`** Methode von {{jsxref("Array")}} Instanzen durchläuft das Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

Wenn Sie Folgendes finden müssen:

- das _erste_ Element, das übereinstimmt, verwenden Sie {{jsxref("Array/find", "find()")}}.
- den _Index_ des letzten übereinstimmenden Elements im Array, verwenden Sie {{jsxref("Array/findLastIndex", "findLastIndex()")}}.
- den _Index eines Wertes_, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Es ist ähnlich wie {{jsxref("Array/findIndex", "findIndex()")}}, überprüft jedoch jedes Element auf Gleichheit mit dem Wert anstatt eine Testfunktion zu verwenden.)
- ob ein Wert _in einem Array existiert_, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert geprüft, anstatt eine Testfunktion zu verwenden.
- ob irgendein Element die bereitgestellte Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzugeben, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `findLast()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchster Index) Element im Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}} wenn kein übereinstimmendes Element gefunden wird.

## Beschreibung

Die `findLast()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array in absteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. `findLast()` gibt dann dieses Element zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` niemals einen truthy Wert zurückgibt, gibt `findLast()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für zugewiesene Werte. Leere Stellen in [sparsely besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die `findLast()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-basierte Eigenschaften hat.

## Beispiele

### Finden des letzten Objekts in einem Array anhand von Element-Eigenschaften

Dieses Beispiel zeigt, wie Sie einen Test basierend auf den Eigenschaften von Array-Elementen erstellen könnten.

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

#### Verwendung von Pfeilfunktion und Destrukturierung

Das vorherige Beispiel könnte mit einer Pfeilfunktion und [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring) geschrieben werden:

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

### Finden der letzten Primzahl in einem Array

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
> Die `isPrime()` Implementierung dient nur zur Veranschaulichung. Für eine Anwendung in der realen Welt sollten Sie einen stark memoisierten Algorithmus wie das [Sieb des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

### Finden der zuletzt abgeschlossenen Aufgabe

Dieses Beispiel zeigt eine praktische Anwendung für `findLast()`, wenn Sie mit zeitlich geordneten Daten arbeiten. Es findet die zuletzt abgeschlossene Aufgabe aus einer bereits nach `timestamp` sortierten Liste.

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

Dies ist effizienter als die Verwendung von `find()` mit einem umgekehrten Array, da es die Erstellung eines neuen Arrays vermeidet.

### Verwendung des dritten Arguments von callbackFn

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die sich auf das Array bezieht. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren und dann `findLast()`, um das letzte Element zu finden, das kleiner als seine Nachbarn ist.

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

### Verwendung von findLast() auf lückenhaften Arrays

Leere Stellen in lückenhaften Arrays _werden_ besucht und werden genauso behandelt wie `undefined`.

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

### Aufrufen von findLast() auf Nicht-Array-Objekten

Die `findLast()` Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative Ganzzahl kleiner als `length` ist.

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
- [es-shims polyfill von `Array.prototype.findLast`](https://www.npmjs.com/package/array.prototype.findlast)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
