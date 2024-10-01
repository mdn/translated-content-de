---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: 4074fc09b07902a560b9b321c1f966452b5afc7c
---

{{JSRef}}

Die **`findIndex()`**-Methode von {{jsxref("Array")}}-Instanzen gibt den Index des ersten Elements in einem Array zurück, das die bereitgestellte Testfunktion erfüllt.
Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben.

Siehe auch die {{jsxref("Array/find", "find()")}}-Methode, die das erste Element zurückgibt, das die Testfunktion erfüllt (anstatt dessen Index).

{{EmbedInteractiveExample("pages/js/array-findindex.html", "shorter")}}

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `findIndex()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des ersten Elements im Array, das den Test besteht. Andernfalls `-1`.

## Beschreibung

`findIndex()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft für jedes Element in einem Array in aufsteigender Index-Reihenfolge die bereitgestellte `callbackFn`-Funktion auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. `findIndex()` gibt dann den Index dieses Elements zurück und stoppt die Iteration durch das Array. Wenn `callbackFn` niemals einen truthy-Wert zurückgibt, gibt `findIndex()` `-1` zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden allgemein funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für diejenigen mit zugewiesenen Werten. Leere Plätze in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich genauso wie `undefined`.

Die `findIndex()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und integer-wertige Eigenschaften hat.

## Beispiele

### Den Index einer Primzahl in einem Array finden

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

### Verwendung von findIndex() auf spärliche Arrays

Sie können `undefined` in einem spärlichen Array suchen und den Index eines leeren Platzes erhalten.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### Aufrufen von findIndex() auf Objekten, die keine Arrays sind

Die `findIndex()`-Methode liest die `length`-Eigenschaft von `this` und greift auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative Ganzzahl kleiner als `length` ist.

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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
