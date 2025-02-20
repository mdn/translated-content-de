---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`reverse()`** von {{jsxref("TypedArray")}}-Instanzen kehrt ein TypedArray _[an Ort und Stelle](https://de.wikipedia.org/wiki/In-place-Algorithmus)_ um und gibt die Referenz auf dasselbe TypedArray zurück, wobei das erste Element des TypedArrays jetzt das letzte wird und das letzte Element des TypedArrays das erste wird. Mit anderen Worten: Die Reihenfolge der Elemente im TypedArray wird in die entgegengesetzte Richtung gedreht. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reverse()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.reverse()", "shorter")}}

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

Die Referenz auf das ursprüngliche TypedArray, das nun umgekehrt wurde. Beachten Sie, dass das TypedArray _[an Ort und Stelle](https://de.wikipedia.org/wiki/In-place-Algorithmus)_ umgekehrt wird und keine Kopie angefertigt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.reverse()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen angewendet werden.

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
- [JavaScript TypedArrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
