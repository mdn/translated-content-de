---
title: Array.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Array.of()`** erstellt eine neue `Array`-Instanz aus einer variablen Anzahl von Argumenten, unabhängig von deren Anzahl oder Typ.

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
  - : Elemente, die zum Erstellen des Arrays verwendet werden.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Der Unterschied zwischen `Array.of()` und dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor liegt im Umgang mit einzelnen Argumenten: `Array.of(7)` erstellt ein Array mit einem einzelnen Element, `7`, während `Array(7)` ein leeres Array mit einer `length`-Eigenschaft von `7` erstellt. (Dies impliziert ein Array mit 7 leeren Slots, nicht mit tatsächlichen {{jsxref("undefined")}}-Werten gefüllten Slots.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

Die `Array.of()`-Methode ist eine generische Fabrikmethode. Wenn zum Beispiel eine Unterklasse von `Array` die `of()`-Methode erbt, wird die geerbte `of()`-Methode neue Instanzen der Unterklasse anstelle von `Array`-Instanzen zurückgeben. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt, und der Konstruktor wird mit der Anzahl der an `of()` übergebenen Argumente aufgerufen. Die endgültige `length` wird erneut gesetzt, wenn alle Elemente zugewiesen sind. Wenn der `this`-Wert keine Konstruktorfunktion ist, wird stattdessen der einfache `Array`-Konstruktor verwendet.

## Beispiele

### Verwendung von Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Aufrufen von of() bei Nicht-Array-Konstruktoren

Die `of()`-Methode kann auf jede Konstruktorfunktion aufgerufen werden, die ein einzelnes Argument akzeptiert, welches die Länge des neuen Arrays darstellt.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

Wenn der `this`-Wert kein Konstruktor ist, wird ein einfaches `Array`-Objekt zurückgegeben.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims polyfill von `Array.of`](https://www.npmjs.com/package/array.of)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
