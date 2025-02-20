---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Array.isArray()`** statische Methode bestimmt, ob der übergebene Wert ein {{jsxref("Array")}} ist.

{{InteractiveExample("JavaScript Demo: Array.isArray()")}}

```js interactive-example
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false
```

## Syntax

```js-nolint
Array.isArray(value)
```

### Parameter

- `value`
  - : Der zu überprüfende Wert.

### Rückgabewert

`true`, wenn `value` ein {{jsxref("Array")}} ist; andernfalls `false`. `false` wird immer zurückgegeben, wenn `value` eine Instanz von {{jsxref("TypedArray")}} ist.

## Beschreibung

`Array.isArray()` prüft, ob der übergebene Wert ein {{jsxref("Array")}} ist. Es überprüft nicht die Prototypenkette des Werts und ist auch nicht von dem `Array`-Konstruktor abhängig, an den es gebunden ist. Es gibt für alle Werte `true` zurück, die mit der Array-Literal-Syntax oder dem `Array`-Konstruktor erstellt wurden. Das macht es sicher, es mit Objekten aus verschiedenen Realms zu verwenden, bei denen die Identität des `Array`-Konstruktors unterschiedlich ist und daher ein [`instanceof Array`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) fehlschlagen würde.

Weitere Details finden Sie im Artikel ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html).

`Array.isArray()` lehnt auch Objekte mit `Array.prototype` in ihrer Prototypenkette ab, die keine tatsächlichen Arrays sind, welche jedoch von `instanceof Array` akzeptiert würden.

## Beispiele

### Verwendung von Array.isArray()

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });
```

### instanceof vs. Array.isArray()

Beim Überprüfen von `Array`-Instanzen wird `Array.isArray()` gegenüber `instanceof` bevorzugt, da es über verschiedene Realms hinweg funktioniert.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// Correctly checking for Array
Array.isArray(arr); // true
// The prototype of arr is xArray.prototype, which is a
// different object from Array.prototype
arr instanceof Array; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.isArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
