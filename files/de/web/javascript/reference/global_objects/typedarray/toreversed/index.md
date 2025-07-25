---
title: TypedArray.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toReversed()`** Methode von {{jsxref("TypedArray")}} Instanzen ist das [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Gegenstück zur {{jsxref("TypedArray/reverse", "reverse()")}} Methode. Sie gibt ein neues typisiertes Array mit umgekehrter Reihenfolge der Elemente zurück. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.toReversed()")}}.

## Syntax

```js-nolint
toReversed()
```

### Parameter

Keine.

### Rückgabewert

Ein neues typisiertes Array, das die Elemente in umgekehrter Reihenfolge enthält.

## Beschreibung

Siehe {{jsxref("Array.prototype.toReversed()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

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

- [Polyfill von `TypedArray.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toReversed()")}}
