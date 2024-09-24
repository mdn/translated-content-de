---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`every()`** Methode von {{jsxref("Array")}} Instanzen testet, ob alle Elemente im Array den Test bestehen, der durch die bereitgestellte Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

{{EmbedInteractiveExample("pages/js/array-every.html", "shorter")}}

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen [falsy](/de/docs/Glossary/Falsy) Wert ansonsten. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `every()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt einen {{Glossary("falsy")}} Wert für ein Array-Element zurück, in diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Die `every()` Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Array auf, bis `callbackFn` einen [falsy](/de/docs/Glossary/Falsy) Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `every()` sofort `false` zurück und stoppt die Iteration durch das Array. Andernfalls, wenn `callbackFn` für alle Elemente einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgibt, gibt `every()` `true` zurück. Lesen Sie den Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`every` agiert wie der "für alle"-Quantor in der Mathematik. Insbesondere gibt es für ein leeres Array `true` zurück. (Es ist [trivialerweise wahr](https://en.wikipedia.org/wiki/Vacuous_truth), dass alle Elemente der [leeren Menge](https://en.wikipedia.org/wiki/Empty_set#Properties) jede gegebene Bedingung erfüllen.)

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Es wird nicht für leere Slots in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `every()` Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und integer-nummerierte Eigenschaften hat.

## Beispiele

### Testen der Größe aller Array-Elemente

Das folgende Beispiel testet, ob alle Elemente im Array 10 oder größer sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Überprüfen, ob ein Array eine Teilmenge eines anderen Arrays ist

Das folgende Beispiel testet, ob alle Elemente eines Arrays in einem anderen Array vorhanden sind.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und verwendet dann `every()`, um zu überprüfen, ob das Array streng zunehmend ist.

```js
const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // Ohne das `arr`-Argument gibt es keine Möglichkeit, einfach
    // auf das Zwischenarray zuzugreifen, ohne es in einer Variablen zu speichern.
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(isIncreasing); // true
```

### Verwenden von every() auf spärlichen Arrays

`every()` wird seinen Prädikat nicht auf leere Slots ausführen.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Aufrufen von every() auf Nicht-Array-Objekten

Die `every()` Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft mit einem unnegativen ganzzahligen Schlüssel zu, der kleiner als `length` ist, bis sie alle abgerufen wurden oder `callbackFn` `false` zurückgibt.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // wird von every() ignoriert, da die Länge 3 ist
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
- Leitfaden zu [Indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
