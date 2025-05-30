---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{JSRef}}

Die **`BigInt.asUintN()`** statische Methode kürzt einen `BigInt` Wert auf die angegebene Anzahl der niederwertigsten Bits und gibt diesen Wert als vorzeichenlose Ganzzahl zurück.

{{InteractiveExample("JavaScript Demo: BigInt.asUintN()", "taller")}}

```js interactive-example
const U64_CEIL = 2n ** 64n;

console.log(BigInt.asUintN(64, U64_CEIL - 1n));
// 18446744073709551615n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asUintN(64, U64_CEIL));
// 0n (wraps to zero)
console.log(BigInt.asUintN(64, U64_CEIL + 1n));
// 1n
console.log(BigInt.asUintN(64, U64_CEIL * 2n));
// 0n (wraps on multiples)
console.log(BigInt.asUintN(64, U64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## Syntax

```js-nolint
BigInt.asUintN(bits, bigint)
```

### Parameter

- `bits`
  - : Die Anzahl der Bits, die für den zurückgegebenen BigInt verfügbar sind. Sollte eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1 (einschließlich) sein.
- `bigint`
  - : Der BigInt-Wert, der gekürzt werden soll, um in die angegebenen Bits zu passen.

### Rückgabewert

Der Wert von `bigint` modulo `2 ** bits`, als vorzeichenlose Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die `BigInt.asUintN` Methode kürzt einen `BigInt` Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenlose Ganzzahl. Vorzeichenlose Ganzzahlen haben keine Vorzeichenbits und sind immer nicht-negativ. Zum Beispiel wird bei `BigInt.asUintN(4, 25n)` der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> **Note:** `BigInt` Werte sind in binärer Zwei-Komplement-Darstellung immer codiert.

Im Gegensatz zu ähnlichen Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}, sodass Sie es immer als `BigInt.asUintN()` verwenden und nicht als Methode eines BigInt-Werts. Das Bereitstellen von `asUintN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im Bereich von 64-Bit bleiben

Die `BigInt.asUintN()` Methode kann nützlich sein, um im Bereich der 64-Bit-Arithmetik zu bleiben.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max); // 18446744073709551615n

BigInt.asUintN(64, max + 1n); // 0n
// zero because of overflow: the lowest 64 bits are all zeros
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asIntN()")}}
