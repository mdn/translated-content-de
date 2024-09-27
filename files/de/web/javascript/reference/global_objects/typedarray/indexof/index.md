---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`indexOf()`**-Methode von {{jsxref("TypedArray")}} Instanzen gibt den ersten Index zurück, an dem ein gegebenes Element im typisierten Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.indexOf()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}

## Syntax

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Element, das im typisierten Array gefunden werden soll.
- `fromIndex` {{optional_inline}}
  - : Index (beginnend von Null), ab dem die Suche starten soll, [umgewandelt in einen ganzzahligen Wert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Der erste Index von `searchElement` im typisierten Array; `-1`, wenn nicht gefunden.

## Beschreibung

Siehe {{jsxref("Array.prototype.indexOf()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays angewendet werden.

## Beispiele

### Verwendung von indexOf()

```js
const uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2); // 0
uint8.indexOf(7); // -1
uint8.indexOf(9, 2); // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
