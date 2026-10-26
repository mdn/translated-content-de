---
title: TypedArray.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toReversed()`** von {{jsxref("TypedArray")}}-Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück zur Methode {{jsxref("TypedArray/reverse", "reverse()")}}. Sie gibt ein neues Typed Array zurück, dessen Elemente in umgekehrter Reihenfolge angeordnet sind. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toReversed()")}}.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Typed Array mit den Elementen in umgekehrter Reihenfolge.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.toReversed()")}}. Diese Methode ist nicht generisch und kann nur für Typed-Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von toReversed()

```js
const uint8 = new Uint8Array([1, 2, 3]);
const reversedUint8 = uint8.toReversed();
console.log(reversedUint8); // Uint8Array [3, 2, 1]
console.log(uint8); // Uint8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.toReversed` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toReversed()")}}
