---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("TypedArray")}} Instanzen erstellt und gibt einen neuen String zurück, indem alle Elemente in diesem typisierten Array concatenated werden, getrennt durch Kommata oder einem angegebenen Trennzeichen-String. Wenn das typisierte Array nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.join()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, um jedes Paar benachbarter Elemente des typisierten Arrays zu trennen. Wenn dieser weggelassen wird, werden die Elemente des typisierten Arrays mit einem Komma (",") getrennt.

### Rückgabewert

Ein String mit allen verbundenen Elementen des typisierten Arrays. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.join()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von join()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
