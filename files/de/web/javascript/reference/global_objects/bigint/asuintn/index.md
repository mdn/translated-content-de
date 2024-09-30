---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die statische Methode **`BigInt.asUintN()`** kürzt einen `BigInt`-Wert auf die angegebene Anzahl signifikanter Bits und gibt diesen Wert als nicht signierte Ganzzahl zurück.

{{EmbedInteractiveExample("pages/js/bigint-asuintn.html", "taller")}}

## Syntax

```js-nolint
BigInt.asUintN(bits, bigint)
```

### Parameter

- `bits`
  - : Die Anzahl der Bits, die für den zurückgegebenen BigInt zur Verfügung stehen. Sollte eine ganze Zahl zwischen 0 und 2<sup>53</sup> - 1 sein, einschließlich.
- `bigint`
  - : Der BigInt-Wert, der gekürzt werden soll, um in die angegebenen Bits zu passen.

### Rückgabewert

Der Wert von `bigint` Modul 2^`bits`, als nicht signierte Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ ist oder größer als 2<sup>53</sup> - 1.

## Beschreibung

Die Methode `BigInt.asUintN` kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als nicht signierte Ganzzahl. Nicht signierte Ganzzahlen haben keine Vorzeichenbits und sind immer nicht negativ. Zum Beispiel wird bei `BigInt.asUintN(4, 25n)` der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (base 2)
         ^==== Use only the four remaining bits
===>      1001 (base 2) = 9n
```

> **Note:** `BigInt`-Werte werden immer als Zweierkomplement in Binärform kodiert.

Anders als ähnliche Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}, sodass Sie es immer als `BigInt.asUintN()` verwenden und nicht als Methode eines BigInt-Wertes. Das Bereitstellen von `asUintN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

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
