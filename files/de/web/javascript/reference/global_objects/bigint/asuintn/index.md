---
title: BigInt.asUintN()
short-title: asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

Die statische Methode **`BigInt.asUintN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl der niederwertigsten Bits und gibt diesen Wert als vorzeichenlose Ganzzahl zurück.

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
  - : Die Anzahl der Bits, die für den zurückgegebenen BigInt verfügbar sind. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1, einschließlich, sein.
- `bigint`
  - : Der BigInt-Wert, der gekürzt wird, um in die angegebenen Bits zu passen.

### Rückgabewert

Ein BigInt, das die Bitdarstellung von `bigint` enthält, gekürzt auf `bits` Bits, interpretiert als vorzeichenlose Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asUintN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenlose Ganzzahl. Vorzeichenlose Ganzzahlen haben keine Vorzeichenbits und sind immer nicht negativ. Zum Beispiel wird für `BigInt.asUintN(4, 25n)` der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> [!NOTE]
> `BigInt`-Werte werden immer im Zweierkomplement in Binärform kodiert.

Im Gegensatz zu ähnlichen Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}, daher wird sie immer als `BigInt.asUintN()` verwendet und nicht als Methode eines BigInt-Werts. Die Bereitstellung von `asUintN()` als "Standardbibliotheksfunktion" ermöglicht [Interoperabilität mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im 64-Bit-Bereich bleiben

Die Methode `BigInt.asUintN()` kann nützlich sein, um im Bereich der 64-Bit-Arithmetik zu bleiben.

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
