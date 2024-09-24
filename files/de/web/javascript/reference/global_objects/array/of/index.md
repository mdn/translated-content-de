---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Array.of()`** erstellt eine neue `Array`-Instanz aus einer variablen Anzahl von Argumenten, unabhängig von Anzahl oder Typ der Argumente.

{{EmbedInteractiveExample("pages/js/array-of.html", "shorter")}}

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

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Der Unterschied zwischen `Array.of()` und dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor besteht in der Behandlung einzelner Argumente: `Array.of(7)` erstellt ein Array mit einem einzigen Element, `7`, wohingegen `Array(7)` ein leeres Array mit einer `length`-Eigenschaft von `7` erstellt. (Das bedeutet ein Array mit 7 leeren Plätzen, nicht Plätzen mit tatsächlichen {{jsxref("undefined")}} Werten.)

```js
Array.of(7); // [7]
Array(7); // Array mit 7 leeren Plätzen

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

Die `Array.of()`-Methode ist eine generische Fabrikmethode. Wenn beispielsweise eine Unterklasse von `Array` die `of()`-Methode erbt, wird die geerbte `of()`-Methode neue Instanzen der Unterklasse anstelle von `Array`-Instanzen zurückgeben. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt, und der Konstruktor wird mit der Anzahl der Argumente aufgerufen, die an `of()` übergeben werden. Die endgültige `length` wird erneut festgelegt, wenn alle Elemente zugewiesen sind. Wenn der `this`-Wert keine Konstruktorfunktion ist, wird stattdessen der einfache `Array`-Konstruktor verwendet.

## Beispiele

### Verwendung von Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Aufruf von of() bei Konstruktoren, die keine Arrays sind

Die `of()`-Methode kann bei jeder Konstruktorfunktion aufgerufen werden, die ein einziges Argument akzeptiert, das die Länge des neuen Arrays darstellt.

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
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
