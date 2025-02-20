---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`copyWithin()`** von {{jsxref("TypedArray")}}-Instanzen kopiert oberflächlich einen Teil dieses typisierten Arrays an eine andere Position innerhalb desselben Arrays und gibt dieses typisierte Array zurück, ohne dessen Länge zu verändern. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.copyWithin()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.copyWithin()")}}

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
  - : Nullbasierter Index, an den die Sequenz kopiert wird, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht der Position, an die das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an aufeinanderfolgenden Indizes kopiert.
- `start`
  - : Nullbasierter Index, ab dem die Elemente kopiert werden, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, bis zu dem die Elemente kopiert werden, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Das modifizierte typisierte Array.

## Beschreibung

Siehe {{jsxref("Array.prototype.copyWithin()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays angewendet werden.

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
- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
