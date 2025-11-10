---
title: TypedArray.prototype.reverse()
short-title: reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`reverse()`**-Methode von {{jsxref("TypedArray")}}-Instanzen kehrt ein typisiertes Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt die Referenz auf dasselbe typisierte Array zurück. Dabei wird das erste Element des typisierten Arrays zum letzten, und das letzte Element wird zum ersten. Mit anderen Worten: Die Reihenfolge der Elemente im typisierten Array wird in die entgegengesetzte Richtung geändert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reverse()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.reverse()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8);
// Expected output: Uint8Array [3, 2, 1]
```

## Syntax

```js-nolint
reverse()
```

### Parameter

Keine.

### Rückgabewert

Die Referenz auf das ursprüngliche, jetzt umgekehrte typisierte Array. Beachten Sie, dass das typisierte Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ umgekehrt wird und keine Kopie erstellt wird.

## Beschreibung

Weitere Details finden Sie bei {{jsxref("Array.prototype.reverse()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Verwendung von reverse()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.reverse` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
