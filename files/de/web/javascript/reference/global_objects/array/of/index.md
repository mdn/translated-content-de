---
title: Array.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Array.of()`** erstellt aus einer variablen Anzahl von Argumenten eine neue `Array`-Instanz, unabhängig von der Anzahl oder dem Typ der Argumente.

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
  - : Elemente, aus denen das Array erstellt wird.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz.

## Beschreibung

Der Unterschied zwischen `Array.of()` und dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor liegt im Umgang mit einem einzelnen Argument: `Array.of(7)` erstellt ein Array mit einem einzigen Element, `7`, während `Array(7)` ein leeres Array mit einer `length`-Eigenschaft von `7` erstellt. (Das bedeutet, dass das Array 7 leere Plätze enthält, nicht Plätze mit tatsächlichen {{jsxref("undefined")}}-Werten.)

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```

Die Methode `Array.of()` ist eine generische Factory-Methode. Wenn beispielsweise eine Unterklasse von `Array` die Methode `of()` erbt, gibt die geerbte Methode `of()` neue Instanzen der Unterklasse statt `Array`-Instanzen zurück. Tatsächlich kann der `this`-Wert jede Konstruktorfunktion sein, die ein einzelnes Argument für die Länge des neuen Arrays akzeptiert. Der Konstruktor wird dann mit der Anzahl der an `of()` übergebenen Argumente aufgerufen. Nachdem alle Elemente zugewiesen wurden, wird die endgültige `length` erneut gesetzt. Ist der `this`-Wert keine Konstruktorfunktion, wird stattdessen der reguläre `Array`-Konstruktor verwendet.

## Beispiele

### Array.of() verwenden

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### of() auf Konstruktoren aufrufen, die keine Array-Konstruktoren sind

Die Methode `of()` kann auf jeder Konstruktorfunktion aufgerufen werden, die ein einzelnes Argument für die Länge des neuen Arrays akzeptiert.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

Wenn der `this`-Wert kein Konstruktor ist, wird ein reguläres `Array`-Objekt zurückgegeben.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Array.of` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.of` von es-shims](https://www.npmjs.com/package/array.of)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
