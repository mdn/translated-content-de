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

`Array.isArray()` überprüft, ob der übergebene Wert ein {{jsxref("Array")}} ist. Es überprüft nicht die Prototypenkette des Wertes und verlässt sich nicht auf den `Array`-Konstruktor, an den es gebunden ist. Es gibt `true` für jeden Wert zurück, der mit der Array-Literal-Syntax oder dem `Array`-Konstruktor erstellt wurde. Dies macht es sicher für die Verwendung mit Objekten aus verschiedenen Realms, bei denen die Identität des `Array`-Konstruktors unterschiedlich ist und [`instanceof Array`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) daher fehlschlagen würde.

Sehen Sie den Artikel ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) für mehr Details.

`Array.isArray()` lehnt auch Objekte mit `Array.prototype` in der Prototypenkette ab, die aber keine echten Arrays sind, was `instanceof Array` akzeptieren würde.

## Beispiele

### Verwendung von Array.isArray()

```js
// alle folgenden Aufrufe ergeben true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Wenig bekannt: Array.prototype ist selbst ein Array:
Array.isArray(Array.prototype);

// alle folgenden Aufrufe ergeben false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// Dies ist kein Array, da es nicht mit der
// Array-Literal-Syntax oder dem Array-Konstruktor erstellt wurde
Array.isArray({ __proto__: Array.prototype });
```

### instanceof vs. Array.isArray()

Beim Überprüfen auf eine `Array`-Instanz wird `Array.isArray()` gegenüber `instanceof` bevorzugt, da es über verschiedene Realms hinweg funktioniert.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// Korrekte Überprüfung auf Array
Array.isArray(arr); // true
// Der Prototyp von arr ist xArray.prototype, welches ein
// anderes Objekt als Array.prototype ist
arr instanceof Array; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.isArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Anleitung
- {{jsxref("Array")}}
