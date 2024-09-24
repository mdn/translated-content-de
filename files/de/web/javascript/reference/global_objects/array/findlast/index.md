---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`findLast()`**-Methode von {{jsxref("Array")}} Instanzen durchläuft das Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt.
Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

Wenn Sie suchen müssen:

- das _erste_ passende Element, verwenden Sie {{jsxref("Array/find", "find()")}}.
- den _Index_ des letzten passenden Elements im Array, verwenden Sie {{jsxref("Array/findLastIndex", "findLastIndex()")}}.
- den _Index eines Werts_, verwenden Sie {{jsxref("Array/indexOf", "indexOf()")}}.
  (Dies ist ähnlich wie bei {{jsxref("Array/findIndex", "findIndex()")}}, prüft jedoch jedes Element auf Gleichheit mit dem Wert anstelle der Verwendung einer Testfunktion.)
- ob ein Wert _in einem Array existiert_, verwenden Sie {{jsxref("Array/includes", "includes()")}}.
  Auch hier wird jedes Element auf Gleichheit mit dem Wert geprüft, anstatt eine Testfunktion zu verwenden.
- ob ein beliebiges Element die bereitgestellte Testfunktion erfüllt, verwenden Sie {{jsxref("Array/some", "some()")}}.

{{EmbedInteractiveExample("pages/js/array-findlast.html", "shorter")}}

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und ansonsten einen [falsy](/de/docs/Glossary/Falsy) Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `findLast()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchstindexierte) Element im Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}} wenn kein passendes Element gefunden wird.

## Beschreibung

Die `findLast()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array in absteigender Indexreihenfolge auf, bis `callbackFn` einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgibt. `findLast()` gibt dann dieses Element zurück und stoppt das Durchlaufen des Arrays. Wenn `callbackFn` niemals einen truthy Wert zurückgibt, gibt `findLast()` {{jsxref("undefined")}} zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen über die Funktionsweise dieser Methoden im Allgemeinen.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für diejenigen mit zugewiesenen Werten. Leere Felder in [sparsely arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die `findLast()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Letztes Objekt in einem Array finden, das den Elementeigenschaften entspricht

Dieses Beispiel zeigt, wie Sie einen Test basierend auf den Eigenschaften von Array-Elementen erstellen können.

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// gibt true zurück, wenn der Lagerbestand niedrig ist
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### Verwendung von Pfeilfunktion und Destrukturierung

Das vorherige Beispiel könnte mit einer Pfeilfunktion und [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) geschrieben werden:

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

Das folgende Beispiel gibt das letzte Element im Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn es keine Primzahl gibt.

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

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, nicht gefunden
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die sich auf das Array bezieht. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren, und dann `findLast()`, um das letzte Element zu finden, das kleiner als seine Nachbarn ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLast((num, idx, arr) => {
    // Ohne das arr-Argument gibt es keine Möglichkeit, auf das
    // Zwischen-Array einfach zuzugreifen, ohne es in einer Variable zu speichern.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 2
```

### Verwendung von findLast() auf sparsely arrays

Leere Felder in sparsely arrays _werden_ besucht und werden wie `undefined` behandelt.

```js
// Deklariert Array ohne Elemente an den Indizes 2, 3 und 4
const array = [0, 1, , , , 5, 6];

// Zeigt alle Indizes, nicht nur diejenigen mit zugewiesenen Werten
array.findLast((value, index) => {
  console.log(`Besuchter Index ${index} mit Wert ${value}`);
});
// Besuchter Index 6 mit Wert 6
// Besuchter Index 5 mit Wert 5
// Besuchter Index 4 mit Wert undefined
// Besuchter Index 3 mit Wert undefined
// Besuchter Index 2 mit Wert undefined
// Besuchter Index 1 mit Wert 1
// Besuchter Index 0 mit Wert 0

// Zeigt alle Indizes, einschließlich gelöschter
array.findLast((value, index) => {
  // Löscht Element 5 bei der ersten Iteration
  if (index === 6) {
    console.log(`Löschen von array[5] mit Wert ${array[5]}`);
    delete array[5];
  }
  // Element 5 wird weiterhin besucht, auch wenn gelöscht
  console.log(`Besuchter Index ${index} mit Wert ${value}`);
});
// Löschen von array[5] mit Wert 5
// Besuchter Index 6 mit Wert 6
// Besuchter Index 5 mit Wert undefined
// Besuchter Index 4 mit Wert undefined
// Besuchter Index 3 mit Wert undefined
// Besuchter Index 2 mit Wert undefined
// Besuchter Index 1 mit Wert 1
// Besuchter Index 0 mit Wert 0
```

### Aufruf von findLast() auf Nicht-Array-Objekten

Die `findLast()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht-negative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // wird von findLast() ignoriert, da Länge 3 ist
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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
