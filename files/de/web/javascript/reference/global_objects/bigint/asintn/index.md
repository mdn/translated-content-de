---
title: BigInt.asIntN()
short-title: asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die statische Methode **`BigInt.asIntN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl der niederwertigsten Bits und gibt diesen Wert als vorzeichenbehaftete Ganzzahl zurück.

{{InteractiveExample("JavaScript Demo: BigInt.asIntN()")}}

```js interactive-example
const I64_CEIL = 2n ** 63n;

console.log(BigInt.asIntN(64, I64_CEIL - 1n));
// 9223372036854775807n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asIntN(64, I64_CEIL));
// -9223372036854775808n (wraps to min value)
console.log(BigInt.asIntN(64, I64_CEIL + 1n));
// -9223372036854775807n (min value + 1n)
console.log(BigInt.asIntN(64, I64_CEIL * 2n));
// 0n (wrapped around to zero)
console.log(BigInt.asIntN(64, -I64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## Syntax

```js-nolint
BigInt.asIntN(bits, bigint)
```

### Parameter

- `bits`
  - : Die Anzahl der verfügbaren Bits für den zurückgegebenen BigInt. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1 sein, einschließlich.
- `bigint`
  - : Der `BigInt`-Wert, der gekürzt werden soll, um in die angegebenen Bits zu passen.

### Rückgabewert

Der Wert von `bigint` modulo `2 ** bits`, als vorzeichenbehaftete Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asIntN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenbehaftete Ganzzahl. Zum Beispiel wird bei `BigInt.asIntN(3, 25n)` der Wert `25n` auf `1n` gekürzt:

```plain
25n = 00011001 (base 2)
          ^=== Use only the three remaining bits
===>       001 (base 2) = 1n
```

Wenn das führende Bit der verbleibenden Zahl `1` ist, ist das Ergebnis negativ. Zum Beispiel liefert `BigInt.asIntN(4, 25n)` `-7n`, da `1001` die Codierung von `-7` im Zweierkomplement ist:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = -7n
```

> [!NOTE] > `BigInt`-Werte werden in binärer Form immer als Zweierkomplement kodiert.

Im Gegensatz zu ähnlichen Sprach-APIs, wie {{jsxref("Number.prototype.toExponential()")}}, ist `asIntN` eine statische Eigenschaft von {{jsxref("BigInt")}}, daher wird sie immer als `BigInt.asIntN()` verwendet und nicht als Methode eines BigInt-Wertes. Die Bereitstellung von `asIntN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im Bereich von 64-Bit bleiben

Die Methode `BigInt.asIntN()` kann nützlich sein, um im Bereich der 64-Bit-Arithmetik zu bleiben.

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max); // 9223372036854775807n

BigInt.asIntN(64, max + 1n); // -9223372036854775808n
// negative because the 64th bit of 2^63 is 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asUintN()")}}
