---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

Die **`every()`**-Methode von {{jsxref("Array")}} Instanzen überprüft, ob alle Elemente im Array den Test bestehen, der von der bereitgestellten Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

{{EmbedInteractiveExample("pages/js/array-every.html", "shorter")}}

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen [wahrhaften](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, andernfalls einen [falschen](/de/docs/Glossary/Falsy) Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `every()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt einen [falschen](/de/docs/Glossary/falsy) Wert für ein Array-Element zurück, in diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Die `every()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array auf, bis `callbackFn` einen [falschen](/de/docs/Glossary/Falsy) Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `every()` sofort `false` zurück und stoppt die Iteration durch das Array. Ansonsten, wenn `callbackFn` für alle Elemente einen [wahrhaften](/de/docs/Glossary/Truthy) Wert zurückgibt, gibt `every()` `true` zurück. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`every` wirkt wie der "für alle"-Quantor in der Mathematik. Insbesondere bei einem leeren Array gibt es `true` zurück. (Es ist [vakuos wahr](https://en.wikipedia.org/wiki/Vacuous_truth), dass alle Elemente der [leeren Menge](https://en.wikipedia.org/wiki/Empty_set#Properties) jede gegebene Bedingung erfüllen.)

`callbackFn` wird nur für Array-Indizes aufgerufen, die zugewiesene Werte haben. Es wird nicht für leere Slots in [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

Die `every()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### Überprüfung der Größe aller Array-Elemente

Im folgenden Beispiel wird getestet, ob alle Elemente im Array 10 oder größer sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Überprüfen, ob ein Array ein Teilmengenbereich eines anderen Arrays ist

Das folgende Beispiel prüft, ob alle Elemente eines Arrays in einem anderen Array vorhanden sind.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Verwenden des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten. Das folgende Beispiel verwendet zunächst `filter()`, um die positiven Werte zu extrahieren und dann `every()`, um zu überprüfen, ob das Array streng ansteigend ist.

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

`every()` wird seinen Prädikat nicht auf leere Slots anwenden.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### Aufruf von every() bei Nicht-Array-Objekten

Die `every()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft mit einem nicht-negativen ganzzahligen Schlüssel zu, der kleiner als `length` ist, bis alle zugegriffen wurden oder `callbackFn` `false` zurückgibt.

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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
