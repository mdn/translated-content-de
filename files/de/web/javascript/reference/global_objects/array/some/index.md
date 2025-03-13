---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`some()`** Methode von {{jsxref("Array")}}-Instanzen prüft, ob mindestens ein Element im Array den Test besteht, der von der bereitgestellten Funktion implementiert wird. Sie gibt `true` zurück, wenn sie ein Element findet, für das die bereitgestellte Funktion `true` zurückgibt; andernfalls gibt sie `false` zurück. Sie verändert das Array nicht.

{{InteractiveExample("JavaScript Demo: Array.prototype.some()")}}

```js interactive-example
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

## Syntax

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im Array ausgeführt werden soll. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array`
      - : Das Array, auf das `some()` angewendet wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt einen {{Glossary("truthy", "truthy")}} Wert für ein Array-Element zurück, in diesem Fall wird sofort `true` zurückgegeben.

## Beschreibung

Die `some()`-Methode ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Array auf, bis die `callbackFn`-Funktion einen {{Glossary("Truthy", "truthy")}} Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `some()` sofort `true` zurück und beendet die Iteration durch das Array. Andernfalls gibt `some()` `false` zurück, wenn `callbackFn` für alle Elemente einen {{Glossary("Falsy", "falsy")}} Wert zurückgibt. Lesen Sie den Abschnitt [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) für weitere Informationen darüber, wie diese Methoden im Allgemeinen funktionieren.

`some()` verhält sich wie der "es existiert"-Quantor in der Mathematik. Insbesondere gibt es für ein leeres Array `false` für jede Bedingung zurück.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen sind. Es wird nicht für leere Stellen in [sparse arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) aufgerufen.

`some()` verändert das Array, auf dem es aufgerufen wird, nicht, aber die als `callbackFn` bereitgestellte Funktion kann es. Beachten Sie jedoch, dass die Länge des Arrays _vor_ dem ersten Aufruf von `callbackFn` gespeichert wird. Daher:

- `callbackFn` wird keine Elemente besuchen, die über die ursprüngliche Länge des Arrays hinaus hinzugefügt wurden, wenn der Aufruf von `some()` begann.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` erneut aufgerufen wird.
- Wenn ein vorhandenes, noch nicht besuchtes Element des Arrays von `callbackFn` geändert wird, wird sein Wert, der an `callbackFn` übergeben wird, der Wert zu dem Zeitpunkt sein, an dem das Element besucht wird. [Gelöschte](/de/docs/Web/JavaScript/Reference/Operators/delete) Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitige Modifikationen der oben beschriebenen Art führen häufig zu schwer verständlichem Code und sollten in der Regel vermieden werden (außer in speziellen Fällen).

Die `some()`-Methode ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie erwartet nur, dass der `this`-Wert eine `length`-Eigenschaft und ganzzahlig indizierte Eigenschaften hat.

## Beispiele

### Testen von Werten von Array-Elementen

Das folgende Beispiel testet, ob eines der Elemente im Array größer als 10 ist.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Testen von Array-Elementen mit Pfeilfunktionen

[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) bieten eine kürzere Syntax für denselben Test.

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### Überprüfen, ob ein Wert in einem Array existiert

Um die Funktion der `includes()`-Methode zu imitieren, gibt diese benutzerdefinierte Funktion `true` zurück, wenn das Element im Array existiert:

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "grapefruit"); // false
checkAvailability(fruits, "banana"); // true
```

### Konvertieren eines Wertes in Boolean

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### Verwendung des dritten Arguments von callbackFn

Das `array`-Argument ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn Sie keine vorhandene Variable haben, die auf das Array verweist. Das folgende Beispiel verwendet zuerst `filter()`, um die positiven Werte zu extrahieren, und dann `some()`, um zu überprüfen, ob das Array streng zunehmend ist.

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .some((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });
console.log(isIncreasing); // false
```

### Verwendung von some() bei sparse arrays

`some()` wird sein Prädikat nicht auf leere Stellen anwenden.

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### Aufrufen von some() auf Nicht-Array-Objekten

Die `some()`-Methode liest die `length`-Eigenschaft von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist, bis alle aufgerufen wurden oder `callbackFn` `true` zurückgibt.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 3, // ignored by some() since length is 3
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.prototype.some`](https://www.npmjs.com/package/array.prototype.some)
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}
