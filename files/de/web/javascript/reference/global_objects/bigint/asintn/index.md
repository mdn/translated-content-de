---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die statische Methode **`BigInt.asIntN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl von niederwertigen Bits und gibt diesen Wert als vorzeichenbehaftete ganze Zahl zurück.

{{EmbedInteractiveExample("pages/js/bigint-asintn.html")}}

## Syntax

```js-nolint
BigInt.asIntN(bits, bigint)
```

### Parameter

- `bits`
  - : Die Anzahl der Bits, die für das zurückgegebene BigInt zur Verfügung stehen. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1, einschließlich, sein.
- `bigint`
  - : Der `BigInt`-Wert, der gekürzt werden soll, um in die angegebenen Bits zu passen.

### Rückgabewert

Der Wert von `bigint` modulo 2^`bits`, als vorzeichenbehaftete ganze Zahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die Methode `BigInt.asIntN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenbehaftete ganze Zahl. Zum Beispiel wird bei `BigInt.asIntN(3, 25n)` der Wert `25n` auf `1n` gekürzt:

```plain
25n = 00011001 (base 2)
          ^=== Use only the three remaining bits
===>       001 (base 2) = 1n
```

Wenn das führende Bit der verbleibenden Zahl `1` ist, ist das Ergebnis negativ. Zum Beispiel ergibt `BigInt.asIntN(4, 25n)` `-7n`, da `1001` die Darstellung von `-7` im Zweierkomplement darstellt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = -7n
```

> **Note:** `BigInt`-Werte werden immer im Zweierkomplement in Binärform kodiert.

Im Gegensatz zu ähnlichen API-Funktionen wie {{jsxref("Number.prototype.toExponential()")}}, ist `asIntN` eine statische Eigenschaft von {{jsxref("BigInt")}}, also wird sie immer als `BigInt.asIntN()` verwendet, anstatt als Methode eines `BigInt`-Werts. Die Bereitstellung von `asIntN()` als "Bibliotheksfunktion" ermöglicht die [Interoperabilität mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im 64-Bit-Bereich bleiben

Die `BigInt.asIntN()`-Methode kann nützlich sein, um im Bereich der 64-Bit-Arithmetik zu bleiben.

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
