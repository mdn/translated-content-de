---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`lastIndexOf()`** Methode von Instanzen des {{jsxref("TypedArray")}} gibt den letzten Index zurück, an dem ein gegebenes Element im Typ-Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist. Das Typ-Array wird rückwärts durchsucht, beginnend bei `fromIndex`. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.lastIndexOf()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-lastindexof.html")}}

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Element, das im Typ-Array gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, bei dem die Rückwärtssuche beginnt, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Der letzte Index von `searchElement` im Typ-Array; `-1`, wenn nicht gefunden.

## Beschreibung

Siehe {{jsxref("Array.prototype.lastIndexOf()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typ-Arrays aufgerufen werden.

## Beispiele

### Verwendung von lastIndexOf()

```js
const uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.lastIndexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
