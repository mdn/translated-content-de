---
title: Array.prototype.findLastIndex()
short-title: findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`findLastIndex()`** Methode von {{jsxref("Array")}} Instanzen iteriert das Array in umgekehrter Reihenfolge und gibt den Index des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt.
Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben.

Siehe auch die {{jsxref("Array/findLast", "findLast()")}} Methode, die den Wert des letzten Elements zurückgibt, das die Testfunktion erfüllt (statt des Index).

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `findLastIndex()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des letzten (höchste Index) Elements im Array, das den Test besteht.
Andernfalls `-1`, wenn kein übereinstimmendes Element gefunden wird.

## Beschreibung

Die `findLastIndex()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte `callbackFn` Funktion einmal für jedes Element eines Arrays in absteigender Index-Reihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. `findLastIndex()` gibt dann den Index dieses Elements zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` niemals einen truthy Wert zurückgibt, gibt `findLastIndex()` `-1` zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um mehr darüber zu erfahren, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für diejenigen mit zugewiesenen Werten. Leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die `findLastIndex()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this` Wert eine `length` Eigenschaft und integer-basierte Eigenschaften hat.

## Beispiele

### Finden Sie den Index der letzten Primzahl in einem Array

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
> Die `isPrime()` Implementierung dient nur zu Demonstrationszwecken. Für eine Anwendung in der realen Welt sollten Sie einen stark memoisierten Algorithmus wie den [Sieb des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

### Verwendung des dritten Arguments von callbackFn

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `findLastIndex()`, um das letzte Element zu finden, das kleiner als seine Nachbarn ist.

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

### Verwendung von findLastIndex() auf spärlichen Arrays

Sie können in einem spärlichen Array nach `undefined` suchen und den Index eines leeren Slots erhalten.

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### Aufrufen von findLastIndex() auf Nicht-Array-Objekten

Die `findLastIndex()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

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

- [Polyfill von `Array.prototype.findLastIndex` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [es-shims Polyfill von `Array.prototype.findLastIndex`](https://www.npmjs.com/package/array.prototype.findlastindex)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
