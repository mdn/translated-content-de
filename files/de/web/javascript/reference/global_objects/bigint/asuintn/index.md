---
title: BigInt.asUintN()
short-title: asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`BigInt.asUintN()`** statische Methode schneidet einen `BigInt`-Wert auf die gegebene Anzahl der am wenigsten signifikanten Bits und gibt diesen Wert als vorzeichenlose Ganzzahl zurück.

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
  - : Die Anzahl der verfügbaren Bits für den zurückgegebenen BigInt. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1 (einschließlich) sein.
- `bigint`
  - : Der BigInt-Wert, der so gekürzt wird, dass er in die angegebenen Bits passt.

### Rückgabewert

Der Wert von `bigint` modulo `2 ** bits`, als vorzeichenlose Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ ist oder größer als 2<sup>53</sup> - 1.

## Beschreibung

Die `BigInt.asUintN`-Methode schneidet einen `BigInt`-Wert auf die gegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenlose Ganzzahl. Vorzeichenlose Ganzzahlen haben keine Vorzeichenbits und sind immer nicht-negativ. Zum Beispiel wird bei `BigInt.asUintN(4, 25n)` der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> [!NOTE] > `BigInt`-Werte werden immer im Binärsystem als Zweierkomplement kodiert.

Im Gegensatz zu ähnlichen Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}, sodass Sie immer `BigInt.asUintN()` anstelle einer Methode eines BigInt-Werts verwenden. Die Bereitstellung von `asUintN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im Bereich von 64-Bit bleiben

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
