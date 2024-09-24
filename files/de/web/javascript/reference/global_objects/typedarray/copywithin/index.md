---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`copyWithin()`** Methode von {{jsxref("TypedArray")}} Instanzen kopiert flach einen Teil dieses typisierten Arrays an eine andere Stelle im selben typisierten Array und gibt dieses typisierte Array zurück, ohne seine Länge zu ändern. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.copyWithin()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Nullbasierter Index, an den die Sequenz kopiert werden soll, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht der Position, an die das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden auf die nachfolgenden Indizes kopiert.
- `start`
  - : Nullbasierter Index, ab dem das Kopieren der Elemente beginnt, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren der Elemente endet, [in eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Das modifizierte typisierte Array.

## Beschreibung

Siehe {{jsxref("Array.prototype.copyWithin()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur bei typisierten Array-Instanzen aufgerufen werden.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
