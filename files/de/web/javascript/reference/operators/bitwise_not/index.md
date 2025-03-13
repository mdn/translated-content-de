---
title: Bitweise NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **bitweise NICHT-Operator (`~`)** gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung ein `1` in jeder Bitposition hat, für die das entsprechende Bit des Operanden `0` ist, und ansonsten ein `0`.

{{InteractiveExample("JavaScript Demo: Bitwise NOT (~) operator")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

console.log(~b); // 00000000000000000000000000000010
// Expected output: 2
```

## Syntax

```js-nolint
~x
```

## Beschreibung

Der `~`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator einen BigInt zurück. Er [erzwingt zunächst, dass der Operand in einen numerischen Wert umgewandelt wird](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet den Typ davon. Er führt eine BigInt NICHT aus, wenn der Operand zu einem BigInt wird; andernfalls wird der Operand in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert und eine bitweise NICHT-Operation für Zahlen ausgeführt.

Der Operator operiert auf den Bit-Darstellungen der Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die NICHT-Operation ist:

| x   | NICHT x |
| --- | ------- |
| 0   | 1       |
| 1   | 0       |

```plain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Trunkierung. Konzeptionell kann man sich positive BigInts als mit einer unendlichen Anzahl von führenden `0`-Bits und negative BigInts als mit einer unendlichen Anzahl von führenden `1`-Bits vorstellen.

Ein bitweise NICHT jeder 32-Bit-Ganzzahl `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` den Wert `4`.

Ein bitweises NICHT einer beliebigen Zahl `x` zweimal ergibt `x` konvertiert in eine 32-Bit-Ganzzahl. Verwenden Sie nicht `~~x`, um Zahlen in Ganzzahlen zu trunkieren; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers). Da für Zahlen eine 32-Bit-Darstellung verwendet wird, resultieren sowohl `~-1` als auch `~4294967295` (2<sup>32</sup> - 1) in `0`.

## Beispiele

### Verwendung von bitweise NICHT

```js
~0; // -1
~-1; // 0
~1; // -2

~0n; // -1n
~4294967295n; // -4294967296n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
