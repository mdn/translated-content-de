---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`every()`** Methode von {{jsxref("Array")}} Instanzen prüft, ob alle Elemente im Array den Test bestehen, der durch die bereitgestellte Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

{{EmbedInteractiveExample("pages/js/array-every.html", "shorter")}}

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf welchem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn `callbackFn` gibt einen {{Glossary("falsy", "falsy")}} Wert für ein Array-Element zurück, in diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Die `every()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array auf, bis die `callbackFn` Funktion einen {{Glossary("Falsy", "falsy")}} Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `every()` sofort `false` zurück und stoppt das Durchlaufen des Arrays. Andernfalls, wenn `callbackFn` einen {{Glossary("Truthy", "truthy")}} Wert für alle Elemente zurückgibt, gibt `every()` `true` zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für mehr Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`every` wirkt wie der "für alle"-Quantifizierer in der Mathematik. Insbesondere für ein leeres Array gibt es `true` zurück. (Es ist [trivially true](https://en.wikipedia.org/wiki/Vacuous_truth), dass alle Elemente der [leeren Menge](https://en.wikipedia.org/wiki/Empty_set#Properties) jede gegebene Bedingung erfüllen.)

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Es wird nicht für leere Slots in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `every()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this` Wert eine `length` Eigenschaft und Ganzzahlen als Schlüssel hat.

## Beispiele

### Prüfung der Größe aller Array-Elemente

Das folgende Beispiel prüft, ob alle Elemente im Array 10 oder größer sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Überprüfen, ob ein Array ein Teilmengen eines anderen ist

Das folgende Beispiel prüft, ob alle Elemente eines Arrays in einem anderen Array vorhanden sind.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Verwenden des dritten Arguments von callbackFn

Das `array` Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren und dann `every()`, um zu prüfen, ob das Array streng zunehmend ist.

```js
const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(isIncreasing); // true
```

### Verwendung von every() auf spärlichen Arrays

`every()` wird seinen Prädikat nicht auf leere Slots anwenden.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Aufruf von every() auf Objekten, die keine Arrays sind

Die `every()` Methode liest die `length` Eigenschaft von `this` und greift dann auf jede Eigenschaft mit einem nicht-negativen ganzzahligen Schlüssel zu, die kleiner als `length` ist, bis sie alle zugegriffen wurden oder `callbackFn` `false` zurückgibt.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // ignored by every() since length is 3
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
