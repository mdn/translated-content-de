---
title: Array.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Array.of()`** erstellt eine neue `Array`-Instanz aus einer variablen Anzahl von Argumenten, unabhängig von Anzahl oder Typ der Argumente.

{{InteractiveExample("JavaScript Demo: Array.of()", "shorter")}}

```js interactive-example
console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []
```

## Syntax

```js-nolint
Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)
```

### Parameter

- `element1`, …, `elementN`
  - : Elemente, die zur Erstellung des Arrays verwendet werden.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Der Unterschied zwischen `Array.of()` und dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor liegt in der Behandlung einzelner Argumente: `Array.of(7)` erstellt ein Array mit einem einzigen Element, `7`, während `Array(7)` ein leeres Array mit einer `length`-Eigenschaft von `7` erstellt. (Das bedeutet ein Array mit 7 leeren Slots, nicht mit tatsächlichen {{jsxref("undefined")}}-Werten.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

Die Methode `Array.of()` ist eine generische Fabrikmethode. Wenn zum Beispiel eine Unterklasse von `Array` die `of()`-Methode erbt, wird die geerbte `of()`-Methode neue Instanzen der Unterklasse statt `Array`-Instanzen zurückgeben. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt, und der Konstruktor wird mit der Anzahl der an `of()` übergebenen Argumente aufgerufen. Die endgültige `length` wird erneut festgelegt, wenn alle Elemente zugewiesen sind. Wenn der `this`-Wert keine Konstruktorfunktion ist, wird stattdessen der einfache `Array`-Konstruktor verwendet.

## Beispiele

### Verwendung von Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Aufrufen von of() auf Nicht-Array-Konstruktoren

Die `of()`-Methode kann auf jede Konstruktorfunktion aufgerufen werden, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

Wenn der `this`-Wert kein Konstruktor ist, wird ein einfacher `Array`-Datentyp zurückgegeben.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims Polyfill von `Array.of`](https://www.npmjs.com/package/array.of)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
