---
title: BigInt.asIntN()
short-title: asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: c7424294e2e85922c9af80b2b557ece47654604c
---

Die statische Methode **`BigInt.asIntN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl niederwertigster Bits und gibt das Ergebnis als vorzeichenbehaftete Ganzzahl zurück.

{{InteractiveExample("JavaScript Demo: BigInt.asIntN()")}}

```js interactive-example
const I64_CEIL = 2n ** 63n;

console.log(BigInt.asIntN(64, I64_CEIL - 1n));
// 9223372036854775807n (2n ** 63n - 1n, the maximum non-wrapping value)
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
  - : Die Anzahl der Bits, die für den zurückgegebenen BigInt zur Verfügung stehen. Muss eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1 einschließlich sein.
- `bigint`
  - : Der BigInt-Wert, der auf die angegebene Anzahl von Bits gekürzt werden soll.

### Rückgabewert

Ein BigInt, der die auf `bits` Bits gekürzte Bitdarstellung von `bigint` enthält, interpretiert als vorzeichenbehaftete Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asIntN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenbehaftete Ganzzahl. Beispielsweise wird bei `BigInt.asIntN(3, 25n)` der Wert `25n` auf `1n` gekürzt:

```plain
25n = 00011001 (base 2)
          ^=== Use only the three remaining bits
===>       001 (base 2) = 1n
```

Wenn das höchstwertige Bit der verbleibenden Zahl `1` ist, ist das Ergebnis negativ. Beispielsweise ergibt `BigInt.asIntN(4, 25n)` den Wert `-7n`, da `1001` die Darstellung von `-7` im Zweierkomplement ist:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = -7n
```

> [!NOTE]
> `BigInt`-Werte werden binär immer im Zweierkomplement dargestellt.

Anders als bei ähnlichen APIs der Sprache wie {{jsxref("Number.prototype.toExponential()")}} ist `asIntN` eine statische Eigenschaft von {{jsxref("BigInt")}}. Sie verwenden sie daher immer als `BigInt.asIntN()` und nicht als Methode eines BigInt-Werts. Die Bereitstellung von `asIntN()` als „Standardbibliotheksfunktion“ ermöglicht die [Interoperabilität mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im 64-Bit-Bereich bleiben

Die Methode `BigInt.asIntN()` kann nützlich sein, um im Wertebereich der 64-Bit-Arithmetik zu bleiben.

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
