---
title: TypedArray.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`with()`**-Methode von {{jsxref("TypedArray")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), um den Wert eines bestimmten Index zu ändern. Sie gibt ein neues typisiertes Array zurück, bei dem das Element an dem angegebenen Index durch den angegebenen Wert ersetzt wird. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.with()")}}.

## Syntax

```js-nolint
arrayInstance.with(index, value)
```

### Parameter

- `index`
  - : Nullbasierter Index, an dem das typisierte Array geändert wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `value`
  - : Jeder Wert, der dem angegebenen Index zugewiesen werden soll.

### Rückgabewert

Ein neues typisiertes Array, bei dem das Element an `index` durch `value` ersetzt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index >= array.length` oder `index < -array.length`.

## Beschreibung

Siehe {{jsxref("Array.prototype.with()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von with()

```js
const arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.with(2, 6)); // Uint8Array [1, 2, 6, 4, 5]
console.log(arr); // Uint8Array [1, 2, 3, 4, 5]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("Array.prototype.with()")}}
