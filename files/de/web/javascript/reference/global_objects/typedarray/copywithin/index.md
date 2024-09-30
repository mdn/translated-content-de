---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die Methode **`copyWithin()`** von {{jsxref("TypedArray")}}-Instanzen kopiert flach einen Teil dieses typisierten Arrays an eine andere Position im selben typisierten Array und gibt dieses typisierte Array zurück, ohne dessen Länge zu ändern. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.copyWithin()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameter

- `target`
  - : Der nullbasierte Index, an den die Sequenz kopiert wird, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Dies entspricht der Stelle, an die das Element bei `start` kopiert wird, und alle Elemente zwischen `start` und `end` werden an nachfolgende Indizes kopiert.
- `start`
  - : Der nullbasierte Index, ab dem die Elemente kopiert werden, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Der nullbasierte Index, bei dem das Kopieren der Elemente endet, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis, aber nicht einschließlich `end`.

### Rückgabewert

Das modifizierte typisierte Array.

## Beschreibung

Für weitere Details siehe {{jsxref("Array.prototype.copyWithin()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

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
