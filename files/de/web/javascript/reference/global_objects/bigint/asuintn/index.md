---
title: BigInt.asUintN()
short-title: asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: e142519e137b3a2ce99d5820c3f2049b6d83113d
---

Die statische Methode **`BigInt.asUintN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl der am wenigsten signifikanten Bits und gibt diesen Wert als vorzeichenlose Ganzzahl zurück.

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
  - : Die Anzahl der Bits, die für das zurückgegebene BigInt zur Verfügung stehen. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1 (einschließlich) sein.
- `bigint`
  - : Der BigInt-Wert, der so gekürzt wird, dass er in die angegebenen Bits passt.

### Rückgabewert

Ein BigInt, das die Bitdarstellung von `bigint`, gekürzt auf `bits` Bits, enthält und als vorzeichenlose Ganzzahl interpretiert wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asUintN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenlose Ganzzahl. Vorzeichenlose Ganzzahlen haben keine Vorzeichenbits und sind immer nicht negativ. Zum Beispiel wird bei `BigInt.asUintN(4, 25n)` der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> [!NOTE]
> `BigInt`-Werte werden immer als Zweierkomplement im Binärformat codiert.

Im Gegensatz zu ähnlichen API-Funktionen in anderen Sprachen, wie {{jsxref("Number.prototype.toExponential()")}}, ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}, daher wird sie immer als `BigInt.asUintN()` verwendet und nicht als Methode eines BigInt-Werts. Die Bereitstellung von `asUintN()` als "Funktion der Standardbibliothek" ermöglicht die [Interoperabilität mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

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
