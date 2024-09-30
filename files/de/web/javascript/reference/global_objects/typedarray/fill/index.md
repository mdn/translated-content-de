---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`fill()`**-Methode von {{jsxref("TypedArray")}} Instanzen ändert alle Elemente innerhalb eines Indexbereichs in einem typisierten Array zu einem statischen Wert. Sie gibt das modifizierte typisierte Array zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.fill()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-fill.html", "shorter")}}

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameter

- `value`
  - : Wert, mit dem das typisierte Array gefüllt werden soll.
- `start` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Füllen beginnt, [konvertiert zu einer ganzen Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, bei dem das Füllen endet, [konvertiert zu einer ganzen Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` füllt bis zu, aber nicht einschließlich `end`.

### Rückgabewert

Das modifizierte typisierte Array, gefüllt mit `value`.

## Beschreibung

Siehe {{jsxref("Array.prototype.fill()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf Instanzen eines typisierten Arrays aufgerufen werden.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.fill()")}}
