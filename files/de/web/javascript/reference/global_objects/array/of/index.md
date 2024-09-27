---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Array.of()`** erstellt eine neue `Array`-Instanz aus einer variablen Anzahl von Argumenten, unabhängig von der Anzahl oder dem Typ der Argumente.

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
  - : Elemente, die zum Erstellen des Arrays verwendet werden.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Der Unterschied zwischen `Array.of()` und dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor liegt im Umgang mit Einzelargumenten: `Array.of(7)` erstellt ein Array mit einem Element, `7`, während `Array(7)` ein leeres Array mit einer `length`-Eigenschaft von `7` erstellt. (Das impliziert ein Array von 7 leeren Plätzen, nicht von Plätzen mit tatsächlichen {{jsxref("undefined")}}-Werten.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

Die `Array.of()`-Methode ist eine generische Fabrikmethode. Wenn zum Beispiel eine Unterklasse von `Array` die `of()`-Methode erbt, wird die geerbte `of()`-Methode neue Instanzen der Unterklasse anstelle von `Array`-Instanzen zurückgeben. Tatsächlich kann der `this`-Wert jede Konstrukturfunktion sein, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt, und der Konstruktor wird mit der Anzahl der an `of()` übergebenen Argumente aufgerufen. Die endgültige `length` wird erneut festgelegt, wenn alle Elemente zugewiesen sind. Wenn der `this`-Wert keine Konstrukturfunktion ist, wird stattdessen der normale `Array`-Konstruktor verwendet.

## Beispiele

### Verwendung von Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Aufrufen von of() auf Nicht-Array-Konstruktoren

Die `of()`-Methode kann auf jede Konstrukturfunktion angewendet werden, die ein einzelnes Argument akzeptiert, das die Länge des neuen Arrays darstellt.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

Wenn der `this`-Wert kein Konstruktor ist, wird ein einfacher `Array`-Objekt zurückgegeben.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- Leitfaden zu [Indexierten Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
