---
title: TypedArray.prototype.reverse()
short-title: reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reverse()`** von {{jsxref("TypedArray")}}-Instanzen kehrt die Reihenfolge der Elemente eines typisierten Arrays _[direkt im Array](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt eine Referenz auf dasselbe typisierte Array zurück. Das erste Element wird dadurch zum letzten und das letzte zum ersten. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reverse()")}}.

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

Eine Referenz auf das ursprüngliche typisierte Array, dessen Elemente nun in umgekehrter Reihenfolge angeordnet sind. Die Umkehrung erfolgt _[direkt im Array](https://en.wikipedia.org/wiki/In-place_algorithm)_; es wird keine Kopie erstellt.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.reverse()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### `reverse()` verwenden

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

- [Polyfill für `TypedArray.prototype.reverse` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
