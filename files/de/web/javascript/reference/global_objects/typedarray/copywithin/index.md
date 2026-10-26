---
title: TypedArray.prototype.copyWithin()
short-title: copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`copyWithin()`** von {{jsxref("TypedArray")}}-Instanzen kopiert einen Teil dieses typisierten Arrays als flache Kopie an eine andere Position innerhalb desselben typisierten Arrays und gibt das typisierte Array zurück, ohne seine Länge zu ändern. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.copyWithin()")}}.

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
  - : Nullbasierter Index, an den die Sequenz kopiert werden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). An diese Position wird das Element bei `start` kopiert; alle Elemente zwischen `start` und `end` werden an die darauffolgenden Indizes kopiert.
- `start`
  - : Nullbasierter Index, ab dem Elemente kopiert werden sollen, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren von Elementen enden soll, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` kopiert bis zu diesem Index, jedoch nicht das Element bei `end`.

### Rückgabewert

Das veränderte typisierte Array.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.copyWithin()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

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

- [Polyfill für `TypedArray.prototype.copyWithin` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
