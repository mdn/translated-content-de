---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`fill()`** Methode von {{jsxref("TypedArray")}} Instanzen ändert alle Elemente innerhalb eines Indexbereichs in einem typisierten Array zu einem statischen Wert. Sie gibt das modifizierte typisierte Array zurück. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.fill()")}}.

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
  - : Wert, mit dem das typisierte Array gefüllt wird.
- `start` {{optional_inline}}
  - : Nullbasierter Index, ab dem das Füllen beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Füllen endet, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis, aber nicht einschließlich `end`.

### Rückgabewert

Das modifizierte typisierte Array, gefüllt mit `value`.

## Beschreibung

Siehe {{jsxref("Array.prototype.fill()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur bei instanziierten typisierten Arrays aufgerufen werden.

## Beispiele

### Verwendung von fill()

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

- [Polyfill von `TypedArray.prototype.fill` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Anleitung zu JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.fill()")}}
