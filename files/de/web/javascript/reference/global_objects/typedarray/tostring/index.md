---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt eine Zeichenkette zurück, die das angegebene Typed Array und dessen Elemente repräsentiert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toString()")}}.

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

Eine Zeichenkette, die die Elemente des Typed Arrays repräsentiert.

## Beschreibung

Siehe {{jsxref("Array.prototype.toString()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typed Array-Instanzen aufgerufen werden.

## Beispiele

### Konvertieren eines Typed Arrays in eine Zeichenkette

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

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
