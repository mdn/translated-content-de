---
title: Array.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`every()`**-Methode von {{jsxref("Array")}} Instanzen prüft, ob alle Elemente im Array den Test bestehen, der von der bereitgestellten Funktion implementiert wird. Sie gibt einen Boolean-Wert zurück.

{{InteractiveExample("JavaScript Demo: Array.prototype.every()", "shorter")}}

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert, wenn nicht. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das derzeit im Array verarbeitete Element.
    - `index`
      - : Der Index des derzeit verarbeiteten Elements im Array.
    - `array`
      - : Das Array, auf dem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt für ein Array-Element einen {{Glossary("Falsy", "falsy")}} Wert zurück, in welchem Fall sofort `false` zurückgegeben wird.

## Beschreibung

Die `every()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte `callbackFn`-Funktion für jedes Element in einem Array einmal auf, bis `callbackFn` einen {{Glossary("Falsy", "falsy")}} Wert zurückgibt. Wird ein solches Element gefunden, gibt `every()` sofort `false` zurück und stoppt die Iteration durch das Array. Andernfalls, wenn `callbackFn` für alle Elemente einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt, gibt `every()` `true` zurück. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für mehr Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`every` agiert wie der "für alle"-Quantor in der Mathematik. Insbesondere für ein leeres Array gibt es `true` zurück. (Es ist [trivialerweise wahr](https://de.wikipedia.org/wiki/Triviale_Wahrheit), dass alle Elemente der [leeren Menge](https://de.wikipedia.org/wiki/Leere_Menge#Eigenschaften) jede beliebige Bedingung erfüllen.)

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Es wird nicht für leere Stellen in [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `every()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert über eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften verfügt.

## Beispiele

### Testen der Größe aller Array-Elemente

Das folgende Beispiel prüft, ob alle Elemente im Array größer oder gleich 10 sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Überprüfen, ob ein Array ein Teilmengen eines anderen Arrays ist

Das folgende Beispiel prüft, ob alle Elemente eines Arrays in einem anderen Array vorhanden sind.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und dann `every()`, um zu überprüfen, ob das Array strikt ansteigend ist.

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

### Verwenden von every() auf lückenhaften Arrays

`every()` wird sein Prädikat nicht auf leere Stellen ausführen.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Aufrufen von every() auf Nicht-Array-Objekten

Die `every()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft mit einem nicht-negativen ganzzahligen Schlüssel kleiner als `length` zu, bis alle aufgerufen wurden oder `callbackFn` `false` zurückgibt.

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
- [es-shims Polyfill von `Array.prototype.every`](https://www.npmjs.com/package/array.prototype.every)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
