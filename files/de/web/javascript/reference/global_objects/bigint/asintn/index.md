---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die statische Methode **`BigInt.asIntN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl der am wenigsten signifikanten Bits und gibt diesen Wert als vorzeichenbehaftete Ganzzahl zurück.

{{EmbedInteractiveExample("pages/js/bigint-asintn.html")}}

## Syntax

```js-nolint
BigInt.asIntN(bits, bigint)
```

### Parameter

- `bits`
  - : Die Anzahl der Bits, die für den zurückgegebenen BigInt verfügbar sind. Sollte eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1 sein, einschließlich.
- `bigint`
  - : Der `BigInt`-Wert, der gekürzt werden soll, um in die angegebenen Bits zu passen.

### Rückgabewert

Der Wert von `bigint` modulo 2^`bits`, als vorzeichenbehaftete Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asIntN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenbehaftete Ganzzahl. Zum Beispiel, für `BigInt.asIntN(3, 25n)`, wird der Wert `25n` auf `1n` gekürzt:

```plain
25n = 00011001 (Basis 2)
          ^=== Verwende nur die drei verbleibenden Bits
===>       001 (Basis 2) = 1n
```

Wenn das führende Bit der verbleibenden Zahl `1` ist, ist das Ergebnis negativ. Zum Beispiel ergibt `BigInt.asIntN(4, 25n)` `-7n`, weil `1001` die Codierung von `-7` im Zweierkomplement ist:

```plain
25n = 00011001 (Basis 2)
         ^==== Verwende nur die vier verbleibenden Bits
===>      1001 (Basis 2) = -7n
```

> **Note:** `BigInt`-Werte werden immer als Zweierkomplement in Binär codiert.

Im Gegensatz zu ähnlichen Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asIntN` eine statische Eigenschaft von {{jsxref("BigInt")}}, sodass Sie sie immer als `BigInt.asIntN()` verwenden, anstatt als Methode eines BigInt-Wertes. Das Bereitstellen von `asIntN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im 64-Bit-Bereich bleiben

Die Methode `BigInt.asIntN()` kann nützlich sein, um im Bereich der 64-Bit-Arithmetik zu bleiben.

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max); // 9223372036854775807n

BigInt.asIntN(64, max + 1n); // -9223372036854775808n
// negativ, weil das 64. Bit von 2^63 1 ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asUintN()")}}
