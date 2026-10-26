---
title: TypedArray.prototype.indexOf()
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`indexOf()`** von {{jsxref("TypedArray")}}-Instanzen gibt den ersten Index zurück, an dem ein bestimmtes Element im typisierten Array gefunden wird, oder `-1`, wenn es nicht vorhanden ist. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.indexOf()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.indexOf()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.indexOf(50));
// Expected output: 4

// From position 3
console.log(uint8.indexOf(20, 3));
// Expected output: -1

console.log(uint8.indexOf(51));
// Expected output: -1
```

## Syntax

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Das Element, nach dem im typisierten Array gesucht wird.
- `fromIndex` {{optional_inline}}
  - : Der nullbasierte Index, ab dem die Suche beginnt, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Der erste Index von `searchElement` im typisierten Array; `-1`, falls es nicht gefunden wird.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.indexOf()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### indexOf() verwenden

```js
const uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2); // 0
uint8.indexOf(7); // -1
uint8.indexOf(9, 2); // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.indexOf` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
