---
title: BigInt.asIntN()
short-title: asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

Die statische Methode **`BigInt.asIntN()`** kürzt einen `BigInt`-Wert auf die gegebene Anzahl an niederwertigen Bits und gibt diesen Wert als vorzeichenbehaftete ganze Zahl zurück.

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
  - : Die Anzahl der für den zurückgegebenen `BigInt` verfügbaren Bits. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1, einschließlich, sein.
- `bigint`
  - : Der `BigInt`-Wert, der gekürzt werden soll, um in die bereitgestellten Bits zu passen.

### Rückgabewert

Ein `BigInt`, das die Bitdarstellung von `bigint`, gekürzt auf `bits` Bits, als vorzeichenbehaftete ganze Zahl enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asIntN` kürzt einen `BigInt`-Wert auf die gegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenbehaftete ganze Zahl. Zum Beispiel wird bei `BigInt.asIntN(3, 25n)` der Wert `25n` auf `1n` gekürzt:

```plain
25n = 00011001 (base 2)
          ^=== Use only the three remaining bits
===>       001 (base 2) = 1n
```

Wenn das führende Bit der verbleibenden Zahl `1` ist, ist das Ergebnis negativ. Zum Beispiel ergibt `BigInt.asIntN(4, 25n)` `-7n`, weil `1001` die Kodierung von `-7` im Zweierkomplement ist:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = -7n
```

> [!NOTE]
> `BigInt`-Werte werden immer als Zweierkomplement in Binärform kodiert.

Im Gegensatz zu ähnlichen Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asIntN` eine statische Eigenschaft von {{jsxref("BigInt")}}, daher verwenden Sie sie stets als `BigInt.asIntN()`, anstatt als Methode eines `BigInt`-Wertes. Das Bereitstellen von `asIntN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

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
