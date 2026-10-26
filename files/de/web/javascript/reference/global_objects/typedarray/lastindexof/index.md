---
title: TypedArray.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`lastIndexOf()`** von {{jsxref("TypedArray")}}-Instanzen gibt den letzten Index zurück, an dem ein bestimmtes Element im Typed Array vorkommt, oder `-1`, wenn es nicht vorhanden ist. Das Typed Array wird ab `fromIndex` rückwärts durchsucht. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.lastIndexOf()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.lastIndexOf()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 50, 50, 50, 60]);

console.log(uint8.lastIndexOf(50, 5));
// Expected output: 4

console.log(uint8.lastIndexOf(50, 3));
// Expected output: 3
```

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Das Element, nach dem im Typed Array gesucht wird.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem rückwärts gesucht wird; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Der letzte Index von `searchElement` im Typed Array; `-1`, wenn das Element nicht gefunden wird.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.lastIndexOf()")}}. Diese Methode ist nicht generisch und kann nur für Typed-Array-Instanzen aufgerufen werden.

## Beispiele

### lastIndexOf() verwenden

```js
const uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.lastIndexOf` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
