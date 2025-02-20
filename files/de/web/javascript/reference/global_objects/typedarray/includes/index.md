---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`includes()`**-Methode von {{jsxref("TypedArray")}}-Instanzen bestimmt, ob ein Typed Array einen bestimmten Wert unter seinen Einträgen enthält, und gibt entsprechend `true` oder `false` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.includes()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.includes()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.includes(20));
// Expected output: true

// Check from position 3
console.log(uint8.includes(20, 3));
// Expected output: false
```

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der Wert, nach dem gesucht wird.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem die Suche beginnt, [zu einer Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Ein booleanes Wert, der `true` ist, wenn der Wert `searchElement` im Typed Array gefunden wird (oder im Teil des Typed Arrays, der durch den Index `fromIndex` angegeben ist, falls spezifisch).

## Beschreibung

Für weitere Details siehe {{jsxref("Array.prototype.includes()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typed Arrays aufgerufen werden.

## Beispiele

### Verwendung von includes()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN handling (only relevant for floating point arrays)
new Uint8Array([NaN]).includes(NaN); // false, since the NaN passed to the constructor gets converted to 0
new Float32Array([NaN]).includes(NaN); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
