---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`every()`**-Methode von {{jsxref("Array")}}-Instanzen prüft, ob alle Elemente im Array den Test bestehen, der von der bereitgestellten Funktion implementiert wurde. Sie gibt einen Boolean-Wert zurück.

{{InteractiveExample("JavaScript Demo: Array.every()", "shorter")}}

```js interactive-example
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Diese sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}}-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element im Array.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
    - `array`
      - : Das Array, auf dem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt einen {{Glossary("Falsy", "falsy")}}-Wert für ein Array-Element zurück. In diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Die `every()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte Funktion `callbackFn` einmal für jedes Element in einem Array auf, bis `callbackFn` einen {{Glossary("Falsy", "falsy")}}-Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `every()` sofort `false` zurück und hört auf, das Array zu durchsuchen. Andernfalls gibt `every()` `true` zurück, wenn `callbackFn` für alle Elemente einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. Lesen Sie den Abschnitt zu [iterativen Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), um weitere Informationen darüber zu erhalten, wie diese Methoden im Allgemeinen funktionieren.

`every` funktioniert wie der "für alle"-Quantor in der Mathematik. Insbesondere gibt es bei einem leeren Array `true` zurück. (Es ist [trivialerweise wahr](https://en.wikipedia.org/wiki/Vacuous_truth), dass alle Elemente der [leeren Menge](https://en.wikipedia.org/wiki/Empty_set#Properties) eine beliebige Bedingung erfüllen.)

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Felder in [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `every()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet lediglich, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften besitzt.

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

### Prüfung, ob ein Array ein Teilmengen-Array eines anderen ist

Das folgende Beispiel prüft, ob alle Elemente eines Arrays in einem anderen Array vorhanden sind.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Nutzung des dritten Arguments von callbackFn

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten. Im folgenden Beispiel wird zuerst `filter()` verwendet, um die positiven Werte zu extrahieren, und anschließend `every()`, um zu prüfen, ob das Array streng monoton steigend ist.

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

### Verwendung von every() auf sparsamen Arrays

`every()` wird das Prädikat für leere Felder nicht ausführen.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Aufruf von every() auf Nicht-Array-Objekten

Die `every()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft mit einem nichtnegativen ganzzahligen Schlüssel zu, der kleiner als `length` ist, bis sie alle verarbeitet wurden oder `callbackFn` `false` zurückgibt.

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
