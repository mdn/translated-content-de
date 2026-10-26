---
title: Array.isArray()
short-title: isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

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
  - : Der zu prüfende Wert.

### Rückgabewert

`true`, wenn `value` ein {{jsxref("Array")}} ist; andernfalls `false`. Wenn `value` eine Instanz von {{jsxref("TypedArray")}} ist, wird immer `false` zurückgegeben.

## Beschreibung

`Array.isArray()` prüft, ob der übergebene Wert ein {{jsxref("Array")}} ist. Dazu führt die Methode eine _Markenprüfung_ durch, ähnlich wie der Operator [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) bei einem privaten Feld, das vom Konstruktor {{jsxref("Array/Array", "Array()")}} initialisiert wurde.

Die Methode ist eine zuverlässigere Alternative zu [`instanceof Array`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da sie falsch positive und falsch negative Ergebnisse vermeidet:

- `Array.isArray()` weist Werte zurück, die keine tatsächlichen `Array`-Instanzen sind, selbst wenn sich `Array.prototype` in ihrer Prototypenkette befindet. `instanceof Array` würde diese Werte akzeptieren, da es die Prototypenkette prüft.
- `Array.isArray()` akzeptiert `Array`-Objekte, die in einem anderen Realm erstellt wurden. `instanceof Array` gibt für diese `false` zurück, weil der `Array`-Konstruktor in jedem Realm eine andere Identität hat.

Weitere Informationen finden Sie im Artikel [„Determining with absolute accuracy whether or not a JavaScript object is an array“](https://web.mit.edu/jwalden/www/isArray.html).

## Beispiele

### Array.isArray() verwenden

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

### instanceof im Vergleich zu Array.isArray()

Bei der Prüfung, ob ein Wert eine `Array`-Instanz ist, sollten Sie `Array.isArray()` gegenüber `instanceof` bevorzugen, da es auch über Realm-Grenzen hinweg funktioniert.

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

- [Polyfill für `Array.isArray` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Polyfill für `Array.isArray` von es-shims](https://www.npmjs.com/package/array.isarray)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
