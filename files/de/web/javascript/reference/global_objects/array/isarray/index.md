---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die statische Methode **`Array.isArray()`** bestimmt, ob der übergebene Wert ein {{jsxref("Array")}} ist.

{{EmbedInteractiveExample("pages/js/array-isarray.html")}}

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

`Array.isArray()` überprüft, ob der übergebene Wert ein {{jsxref("Array")}} ist. Es prüft nicht die Prototypenkette des Wertes und ist nicht auf den `Array`-Konstruktor angewiesen, an den es angehängt ist. Es gibt `true` für jeden Wert zurück, der mit der Array-Literalsyntax oder dem `Array`-Konstruktor erstellt wurde. Dies macht es sicher, es mit Objekten über verschiedene Realms hinweg zu verwenden, wo die Identität des `Array`-Konstruktors unterschiedlich ist und daher [`instanceof Array`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) fehlschlagen würde.

Lesen Sie den Artikel ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) für weitere Details.

`Array.isArray()` lehnt auch Objekte mit `Array.prototype` in seiner Prototypenkette ab, die keine tatsächlichen Arrays sind, welche `instanceof Array` akzeptieren würde.

## Beispiele

### Verwenden von Array.isArray()

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
