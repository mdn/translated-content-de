---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`BigInt.asUintN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl der niederwertigsten Bits und gibt diesen Wert als unsigned Integer zurück.

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
  - : Die Anzahl der Bits, die für den zurückgegebenen `BigInt` verfügbar sind. Sollte eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1 (einschließlich) sein.
- `bigint`
  - : Der `BigInt`-Wert, der gekürzt werden soll, um in die bereitgestellten Bits zu passen.

### Rückgabewert

Der Wert von `bigint` modulo 2^`bits`, als unsigned Integer.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asUintN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl an Bits und interpretiert das Ergebnis als unsigned Integer. Unsigned Integer haben keine Vorzeichenbits und sind immer nicht-negativ. Zum Beispiel wird bei `BigInt.asUintN(4, 25n)` der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> **Note:** `BigInt`-Werte werden im Binärformat immer als Zweierkomplement kodiert.

Im Gegensatz zu ähnlichen APIs in anderen Sprachen, wie {{jsxref("Number.prototype.toExponential()")}}, ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}. Deshalb wird sie immer als `BigInt.asUintN()` und nicht als Methode eines `BigInt`-Werts verwendet. Die Bereitstellung von `asUintN()` als „Standardbibliotheksfunktion“ ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Innerhalb eines 64-Bit-Bereichs bleiben

Die Methode `BigInt.asUintN()` kann nützlich sein, um innerhalb des Bereichs arithmetischer 64-Bit-Operationen zu bleiben.

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
