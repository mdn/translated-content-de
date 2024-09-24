---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Die **`BigInt.asUintN()`** statische Methode kürzt einen `BigInt`-Wert auf die angegebene Anzahl der niedrigstwertigen Bits und gibt diesen Wert als vorzeichenlose Ganzzahl zurück.

{{EmbedInteractiveExample("pages/js/bigint-asuintn.html", "taller")}}

## Syntax

```js-nolint
BigInt.asUintN(bits, bigint)
```

### Parameter

- `bits`
  - : Die Anzahl der Bits, die für den zurückgegebenen `BigInt` verfügbar sind. Es sollte eine Ganzzahl zwischen 0 und 2<sup>53</sup> - 1 inklusive sein.
- `bigint`
  - : Der `BigInt`-Wert, der auf die angegebenen Bits gekürzt werden soll.

### Rückgabewert

Der Wert von `bigint` modulo 2^`bits`, als vorzeichenlose Ganzzahl.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `bits` negativ oder größer als 2<sup>53</sup> - 1 ist.

## Beschreibung

Die `BigInt.asUintN`-Methode kürzt einen `BigInt`-Wert auf die angegebene Anzahl von Bits und interpretiert das Ergebnis als vorzeichenlose Ganzzahl. Vorzeichenlose Ganzzahlen haben keine Vorzeichenbits und sind immer nicht negativ. Zum Beispiel, bei `BigInt.asUintN(4, 25n)`, wird der Wert `25n` auf `9n` gekürzt:

```plain
25n = 00011001 (Basis 2)
         ^==== Verwenden Sie nur die vier verbleibenden Bits
===>      1001 (Basis 2) = 9n
```

> **Hinweis:** `BigInt`-Werte werden immer als Zweierkomplement in Binärkodierung dargestellt.

Im Gegensatz zu ähnlichen Sprach-APIs wie {{jsxref("Number.prototype.toExponential()")}} ist `asUintN` eine statische Eigenschaft von {{jsxref("BigInt")}}, sodass Sie es immer als `BigInt.asUintN()` und nicht als Methode eines `BigInt`-Werts verwenden. Das Bereitstellen von `asUintN()` als "Standardbibliotheksfunktion" ermöglicht [Interop mit asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Beispiele

### Im Bereich von 64-Bit bleiben

Die `BigInt.asUintN()`-Methode kann nützlich sein, um im Bereich der 64-Bit-Arithmetik zu bleiben.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max); // 18446744073709551615n

BigInt.asUintN(64, max + 1n); // 0n
// null wegen Überlauf: die niedrigsten 64 Bits sind alle Nullen
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asIntN()")}}
