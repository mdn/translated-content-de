---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`findLastIndex()`**-Methode von {{jsxref("Array")}}-Instanzen durchläuft das Array in umgekehrter Reihenfolge und gibt den Index des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben.

Siehe auch die {{jsxref("Array/findLast", "findLast()")}}-Methode, die den Wert des letzten Elements zurückgibt, das die Testfunktion erfüllt (statt dessen Index).

{{EmbedInteractiveExample("pages/js/array-findlastindex.html", "shorter")}}

## Syntax

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und andernfalls einen [falsy](/de/docs/Glossary/Falsy)-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `findLastIndex()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet werden soll. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des letzten (höchstindexierten) Elements im Array, das den Test besteht. Ansonsten `-1`, wenn kein übereinstimmendes Element gefunden wird.

## Beschreibung

Die `findLastIndex()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element eines Arrays in absteigender Indexreihenfolge auf, bis `callbackFn` einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgibt. `findLastIndex()` gibt dann den Index dieses Elements zurück und stoppt das Durchlaufen des Arrays. Wenn `callbackFn` nie einen truthy-Wert zurückgibt, gibt `findLastIndex()` `-1` zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`callbackFn` wird für _jeden_ Index des Arrays aufgerufen, nicht nur für die mit zugewiesenen Werten. Leere Slots in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) verhalten sich wie `undefined`.

Die `findLastIndex()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integerbezogene Eigenschaften hat.

## Beispiele

### Den Index der letzten Primzahl in einem Array finden

Das folgende Beispiel gibt den Index des letzten Elements im Array zurück, das eine Primzahl ist, oder `-1`, wenn es keine Primzahl gibt.

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, nicht gefunden
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
```

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und dann `findLastIndex()`, um das letzte Element zu finden, das kleiner als seine Nachbarn ist.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLastIndex((num, idx, arr) => {
    // Ohne das arr-Argument gibt es keinen einfachen Weg, auf das
    // Zwischenarray zuzugreifen, ohne es in einer Variable zu speichern.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 6
```

### Verwendung von findLastIndex() auf dünn besetzten Arrays

Sie können in einem dünn besetzten Array nach `undefined` suchen und den Index eines leeren Slots erhalten.

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### Aufrufe von findLastIndex() auf nicht-Array-Objekten

Die `findLastIndex()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // wird von findLastIndex() ignoriert, da length 3 ist
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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
