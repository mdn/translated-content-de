---
title: TypedArray.prototype.fill()
short-title: fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`fill()`** von {{jsxref("TypedArray")}}-Instanzen setzt alle Elemente innerhalb eines Indexbereichs in einem typisierten Array auf einen festen Wert. Sie gibt das veränderte typisierte Array zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.fill()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.fill()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([0, 0, 0, 0]);
// Value, start position, end position
uint8.fill(4, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [0, 4, 4, 0]
```

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameter

- `value`
  - : Der Wert, mit dem das typisierte Array gefüllt werden soll.
- `start` {{optional_inline}}
  - : Der nullbasierte Index, ab dem gefüllt wird; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Der nullbasierte Index, bis zu dem gefüllt wird; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis zu diesem Index, jedoch ohne `end` einzuschließen.

### Rückgabewert

Das veränderte typisierte Array, das mit `value` gefüllt wurde.

## Beschreibung

Weitere Informationen finden Sie unter {{jsxref("Array.prototype.fill()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### fill() verwenden

```js
new Uint8Array([1, 2, 3]).fill(4); // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1); // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2); // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1); // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.fill` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.fill()")}}
