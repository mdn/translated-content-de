---
title: Array.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`some()`** von {{jsxref("Array")}}-Instanzen gibt `true` zurück, wenn sie im Array ein Element findet, das die bereitgestellte Prüffunktion erfüllt. Andernfalls gibt sie `false` zurück.

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
  - : Eine Funktion, die für jedes Element im Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn das Element die Prüfung besteht, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element im Array.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Array.
    - `array`
      - : Das Array, für das `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt für ein Array-Element einen {{Glossary("truthy", "truthy")}}-Wert zurück. In diesem Fall wird sofort `true` zurückgegeben.

## Beschreibung

Die Methode `some()` ist eine [iterative Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). Sie ruft die bereitgestellte Funktion `callbackFn` einmal für jedes Element eines Arrays auf, bis `callbackFn` einen {{Glossary("Truthy", "truthy")}}-Wert zurückgibt. Wird ein solches Element gefunden, gibt `some()` sofort `true` zurück und beendet die Iteration durch das Array. Gibt `callbackFn` hingegen für alle Elemente einen {{Glossary("Falsy", "falsy")}}-Wert zurück, gibt `some()` `false` zurück. Weitere Informationen zur allgemeinen Funktionsweise dieser Methoden finden Sie im Abschnitt über [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

`some()` verhält sich wie der Existenzquantor („es gibt“) in der Mathematik. Insbesondere gibt die Methode für ein leeres Array unabhängig von der Bedingung `false` zurück.

`callbackFn` wird nur für Array-Indizes aufgerufen, denen Werte zugewiesen wurden. Für leere Einträge in [Sparse Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird die Funktion nicht aufgerufen.

`some()` verändert das Array, für das die Methode aufgerufen wird, nicht. Die als `callbackFn` bereitgestellte Funktion kann das Array jedoch verändern. Beachten Sie allerdings, dass die Länge des Arrays _vor_ dem ersten Aufruf von `callbackFn` gespeichert wird. Daher gilt:

- `callbackFn` verarbeitet keine Elemente, die nach Beginn des Aufrufs von `some()` über die ursprüngliche Länge des Arrays hinaus hinzugefügt werden.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` für diese erneut aufgerufen wird.
- Wenn `callbackFn` ein vorhandenes, aber noch nicht besuchtes Element des Arrays verändert, wird der Wert an `callbackFn` übergeben, den das Element zum Zeitpunkt des Besuchs hat. [Gelöschte](/de/docs/Web/JavaScript/Reference/Operators/delete) Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitige Änderungen der oben beschriebenen Art führen häufig zu schwer verständlichem Code und sollten im Allgemeinen vermieden werden (außer in Sonderfällen).

Die Methode `some()` ist [generisch](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Sie setzt lediglich voraus, dass der Wert von `this` eine `length`-Eigenschaft und Eigenschaften mit ganzzahligen Schlüsseln besitzt.

## Beispiele

### Werte von Array-Elementen prüfen

Das folgende Beispiel prüft, ob ein Element im Array größer als 10 ist.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Array-Elemente mit Arrow Functions prüfen

[Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) bieten eine kürzere Syntax für dieselbe Prüfung.

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### Prüfen, ob ein Wert in einem Array vorhanden ist

Die folgende benutzerdefinierte Funktion ahmt die Funktionalität der Methode `includes()` nach und gibt `true` zurück, wenn das Element im Array vorhanden ist:

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "grapefruit"); // false
checkAvailability(fruits, "banana"); // true
```

### Einen beliebigen Wert in einen Boolean-Wert umwandeln

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

### Das dritte Argument von callbackFn verwenden

Das Argument `array` ist nützlich, wenn Sie auf ein anderes Element im Array zugreifen möchten, insbesondere wenn keine Variable vorhanden ist, die auf das Array verweist. Im folgenden Beispiel werden zunächst mit `filter()` die positiven Werte extrahiert. Anschließend wird mit `some()` geprüft, ob das Array streng monoton steigend ist.

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

### some() auf Sparse Arrays anwenden

`some()` führt die Prüffunktion nicht für leere Einträge aus.

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### some() für Objekte aufrufen, die keine Arrays sind

Die Methode `some()` liest die Eigenschaft `length` von `this` und greift dann auf jede Eigenschaft zu, deren Schlüssel eine nicht negative ganze Zahl kleiner als `length` ist, bis auf alle diese Eigenschaften zugegriffen wurde oder `callbackFn` `true` zurückgibt.

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

- [Polyfill für `Array.prototype.some` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.prototype.some` von es-shims](https://www.npmjs.com/package/array.prototype.some)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}
