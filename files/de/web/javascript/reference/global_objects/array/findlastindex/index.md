---
title: Array.prototype.findLastIndex()
short-title: findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`findLastIndex()`** von {{jsxref("Array")}}-Instanzen durchläuft das Array in umgekehrter Reihenfolge und gibt den Index des ersten Elements zurück, das die angegebene Prüffunktion erfüllt.
Wenn kein Element die Prüffunktion erfüllt, wird `-1` zurückgegeben.

Siehe auch die Methode {{jsxref("Array/findLast", "findLast()")}}, die den Wert des letzten Elements zurückgibt, das die Prüffunktion erfüllt (statt dessen Index).

{{InteractiveExample("JavaScript Demo: Array.prototype.findLastIndex()", "shorter")}}

```js interactive-example
const array = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130
```

## Syntax

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, wenn ein passendes Element gefunden wurde, andernfalls einen {{Glossary("Falsy", "falsy")}} Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell im Array verarbeitete Element.
    - `index`
      - : Der Index des aktuell im Array verarbeiteten Elements.
    - `array`
      - : Das Array, für das `findLastIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des letzten Elements (mit dem höchsten Index) im Array, das die Prüfung besteht.
Andernfalls `-1`, wenn kein passendes Element gefunden wird.

## Beschreibung

Die Methode `findLastIndex()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte Funktion `callbackFn` für jedes Element eines Arrays einmal in absteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. `findLastIndex()` gibt dann den Index dieses Elements zurück und beendet die Iteration über das Array. Wenn `callbackFn` nie einen truthy Wert zurückgibt, gibt `findLastIndex()` `-1` zurück. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für Indizes mit zugewiesenen Werten. Leere Stellen in [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die Methode `findLastIndex()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Den Index der letzten Primzahl in einem Array finden

Das folgende Beispiel gibt den Index des letzten Elements im Array zurück, das eine Primzahl ist, oder `-1`, wenn keine Primzahl vorhanden ist.

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
```

> [!NOTE]
> Die Implementierung von `isPrime()` dient nur zur Veranschaulichung. Für eine reale Anwendung sollten Sie einen Algorithmus mit umfassender {{Glossary("Memoization", "Memoisierung")}} wie das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine Variable vorhanden ist, die auf das Array verweist. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren, und anschließend `findLastIndex()`, um das letzte Element zu finden, das kleiner als seine Nachbarelemente ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLastIndex((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 6
```

### findLastIndex() bei Arrays mit Lücken verwenden

Sie können in einem Array mit Lücken nach `undefined` suchen und den Index einer leeren Stelle erhalten.

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### findLastIndex() für Objekte aufrufen, die keine Arrays sind

Die Methode `findLastIndex()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // ignored by findLastIndex() since length is 3
};
console.log(
  Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x)),
); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.prototype.findLastIndex` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [es-shims-Polyfill für `Array.prototype.findLastIndex`](https://www.npmjs.com/package/array.prototype.findlastindex)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) – Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
