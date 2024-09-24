---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die **`includes()`**-Methode von {{jsxref("TypedArray")}} Instanzen bestimmt, ob ein typisiertes Array einen bestimmten Wert unter seinen Einträgen enthält und gibt entsprechend `true` oder `false` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.includes()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der Wert, nach dem gesucht wird.
- `fromIndex` {{optional_inline}}
  - : Null-basierter Index, bei dem die Suche gestartet werden soll, [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn der Wert `searchElement` innerhalb des typisierten Arrays gefunden wird (oder der Teil des typisierten Arrays, der durch den Index `fromIndex` angegeben wird, falls angegeben).

## Beschreibung

Siehe {{jsxref("Array.prototype.includes()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen angewendet werden.

## Beispiele

### Verwendung von includes()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN-Behandlung (nur relevant für Gleitkomma-Arrays)
new Uint8Array([NaN]).includes(NaN); // false, da das NaN, das an den Konstruktor übergeben wird, in 0 umgewandelt wird
new Float32Array([NaN]).includes(NaN); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Leitfaden zu [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
