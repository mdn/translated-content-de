---
title: Array.isArray()
short-title: isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{JSRef}}

Die statische Methode **`Array.isArray()`** bestimmt, ob der übergebene Wert ein {{jsxref("Array")}} ist.

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

`Array.isArray()` prüft, ob der übergebene Wert ein {{jsxref("Array")}} ist. Es führt eine _gekennzeichnete Überprüfung_ durch, ähnlich wie der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator, für ein privates Feld, das vom {{jsxref("Array/Array", "Array()")}} Konstruktor initialisiert wird.

Es ist eine robustere Alternative zu [`instanceof Array`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da es falsche Positiv- und Negativmeldungen vermeidet:

- `Array.isArray()` lehnt Werte ab, die keine tatsächlichen `Array`-Instanzen sind, auch wenn sie `Array.prototype` in ihrer Prototypkette haben — `instanceof Array` würde diese akzeptieren, da es die Prototypkette prüft.
- `Array.isArray()` akzeptiert `Array`-Objekte, die in einem anderen Bereich erstellt wurden — `instanceof Array` gibt für diese `false` zurück, da die Identität des `Array`-Konstruktors in verschiedenen Bereichen unterschiedlich ist.

Lesen Sie den Artikel ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) für weitere Details.

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

Beim Überprüfen auf eine `Array`-Instanz wird `Array.isArray()` gegenüber `instanceof` bevorzugt, da es bereichsübergreifend funktioniert.

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
- [es-shims Polyfill von `Array.isArray`](https://www.npmjs.com/package/array.isarray)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
