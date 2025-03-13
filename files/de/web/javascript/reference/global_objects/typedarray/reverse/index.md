---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`reverse()`**-Methode von {{jsxref("TypedArray")}}-Instanzen kehrt ein typisiertes Array _[vor Ort](https://en.wikipedia.org/wiki/In-place_algorithm)_ um und gibt die Referenz auf dasselbe typisierte Array zurück, wobei das erste Element des typisierten Arrays nun das letzte wird und das letzte Element das erste. Anders ausgedrückt wird die Reihenfolge der Elemente im typisierten Array in die entgegengesetzte Richtung gedreht. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reverse()")}}.

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

Die Referenz auf das ursprüngliche, nun umgekehrte typisierte Array. Beachten Sie, dass das typisierte Array _[vor Ort](https://en.wikipedia.org/wiki/In-place_algorithm)_ umgekehrt wird und keine Kopie erstellt wird.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.reverse()")}}. Diese Methode ist nicht generisch und kann nur auf typisierte Array-Instanzen angewendet werden.

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
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("Array.prototype.reverse()")}}
