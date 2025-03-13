---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`indexOf()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt den ersten Index zurück, an dem ein gegebenes Element im Typed Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.indexOf()")}}.

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
  - : Element, das im Typed Array gefunden werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem die Suche beginnen soll, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Der erste Index von `searchElement` im Typed Array; `-1`, wenn nicht gefunden.

## Beschreibung

Siehe {{jsxref("Array.prototype.indexOf()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typed Arrays aufgerufen werden.

## Beispiele

### Verwendung von indexOf()

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

- [Polyfill von `TypedArray.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
