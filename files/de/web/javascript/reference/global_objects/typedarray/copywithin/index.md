---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`copyWithin()`** Methode von {{jsxref("TypedArray")}} Instanzen kopiert flach einen Teil dieses typisierten Arrays an eine andere Stelle im selben typisierten Array und gibt dieses zurück, ohne seine Länge zu ändern. Diese Methode verwendet den gleichen Algorithmus wie {{jsxref("Array.prototype.copyWithin()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.copyWithin()")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);

// Insert position, start position, end position
uint8.copyWithin(3, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [1, 2, 3, 2, 3, 6, 7, 8]
```

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Nullbasierter Index, an den die Sequenz kopiert werden soll, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht dem Ort, an den das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden auf die nachfolgenden Indizes kopiert.
- `start`
  - : Nullbasierter Index, ab dem begonnen wird, Elemente zu kopieren, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren der Elemente endet, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis zu, aber nicht einschließlich `end`.

### Rückgabewert

Das modifizierte typisierte Array.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.copyWithin()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von copyWithin()

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
