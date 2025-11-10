---
title: TypedArray.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`** Methode von {{jsxref("TypedArray")}}-Instanzen gibt einen String zurück, der das angegebene `typed array` und seine Elemente repräsentiert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toString()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.toString()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

const uint8String = uint8.toString();

console.log(uint8String.startsWith("10"));
// Expected output: true
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die Elemente des `typed array` repräsentiert.

## Beschreibung

Weitere Details finden Sie bei {{jsxref("Array.prototype.toString()")}}. Diese Methode ist nicht generisch und kann nur auf `typed array`-Instanzen aufgerufen werden.

## Beispiele

### Konvertierung eines `typed array` in einen String

```js
const uint8 = new Uint8Array([1, 2, 3]);
// Explicit conversion
console.log(uint8.toString()); // 1,2,3
// Implicit conversion
console.log(`${uint8}`); // 1,2,3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript `typed arrays`](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
