---
title: Array.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`every()`** von {{jsxref("Array")}}-Instanzen gibt `false` zurück, wenn sie im Array ein Element findet, das die bereitgestellte Prüffunktion nicht erfüllt. Andernfalls gibt sie `true` zurück.

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn das Element den Test besteht, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element im Array.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
    - `array`
      - : Das Array, für das `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, sofern `callbackFn` nicht für ein Array-Element einen {{Glossary("falsy", "falsy")}}-Wert zurückgibt. In diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Die Methode `every()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte Funktion `callbackFn` einmal für jedes Element eines Arrays auf, bis `callbackFn` einen {{Glossary("Falsy", "falsy")}}-Wert zurückgibt. Wird ein solches Element gefunden, gibt `every()` sofort `false` zurück und beendet die Iteration über das Array. Gibt `callbackFn` dagegen für alle Elemente einen {{Glossary("Truthy", "truthy")}}-Wert zurück, gibt `every()` `true` zurück. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`every` entspricht dem Allquantor in der Mathematik. Insbesondere gibt die Methode für ein leeres Array `true` zurück. (Dass alle Elemente der [leeren Menge](https://en.wikipedia.org/wiki/Empty_set#Properties) eine beliebige Bedingung erfüllen, ist [vakuumwahr](https://en.wikipedia.org/wiki/Vacuous_truth).)

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Für leere Einträge in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

Die Methode `every()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der `this`-Wert eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Größe aller Array-Elemente prüfen

Das folgende Beispiel prüft, ob alle Elemente im Array mindestens 10 sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Prüfen, ob ein Array eine Teilmenge eines anderen Arrays ist

Das folgende Beispiel prüft, ob alle Elemente eines Arrays auch in einem anderen Array enthalten sind.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten. Im folgenden Beispiel werden zunächst mit `filter()` die positiven Werte herausgefiltert. Anschließend wird mit `every()` geprüft, ob das Array streng monoton steigt.

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

### every() auf dünn besetzten Arrays verwenden

`every()` ruft die Prüffunktion nicht für leere Einträge auf.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### every() für Objekte aufrufen, die keine Arrays sind

Die Methode `every()` liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nichtnegative ganze Zahl kleiner als `length` ist, bis auf alle diese Eigenschaften zugegriffen wurde oder `callbackFn` `false` zurückgibt.

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

- [Polyfill für `Array.prototype.every` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.every` von es-shims](https://www.npmjs.com/package/array.prototype.every)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
