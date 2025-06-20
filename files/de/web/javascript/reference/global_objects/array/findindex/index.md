---
title: Array.prototype.findIndex()
short-title: findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`findIndex()`**-Methode von {{jsxref("Array")}} Instanzen gibt den Index des ersten Elements in einem Array zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben.

Siehe auch die {{jsxref("Array/find", "find()")}} Methode, die das erste Element zurückgibt, das die Testfunktion erfüllt (anstatt dessen Index).

{{InteractiveExample("JavaScript Demo: Array.prototype.findIndex()", "shorter")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, andernfalls ein {{Glossary("Falsy", "falsy")}} Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf dem `findIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des ersten Elements im Array, das den Test besteht. Andernfalls `-1`.

## Beschreibung

`findIndex()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array in aufsteigender Indexreihenfolge auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. `findIndex()` gibt dann den Index dieses Elements zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` niemals einen truthy Wert zurückgibt, gibt `findIndex()` `-1` zurück. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden allgemein funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für die mit zugewiesenen Werten. Leere Stellen in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die `findIndex()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-beschriftete Eigenschaften hat.

## Beispiele

### Finden des Indexes der ersten Primzahl in einem Array

Das folgende Beispiel gibt den Index des ersten Elements im Array zurück, das eine Primzahl ist, oder `-1`, wenn es keine Primzahl gibt.

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

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, besonders wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `findIndex()`, um das erste Element zu finden, das kleiner als seine Nachbarn ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .findIndex((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### Verwendung von findIndex() bei dünn besetzten Arrays

Sie können nach `undefined` in einem dünn besetzten Array suchen und den Index eines leeren Slots erhalten.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### Aufrufen von findIndex() auf Nicht-Array-Objekten

Die `findIndex()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative Ganzzahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // ignored by findIndex() since -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.findIndex`](https://www.npmjs.com/package/array.prototype.findindex)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
