---
title: Bitweises OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **bitweise OR (`|`)** Operator gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung in jeder Bitposition eine `1` hat, für die die entsprechenden Bits eines oder beider Operanden `1` sind.

{{InteractiveExample("JavaScript Demo: Bitwise OR (|) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// Expected output: 7
```

## Syntax

```js-nolint
x | y
```

## Beschreibung

Der `|` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst werden [beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und deren Typen überprüft. Es wird eine BigInt-OR-Operation durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und eine bitweise OR-Operation für Zahlen durchgeführt. Eine {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, aber der andere eine Zahl.

Der Operator operiert auf den Bit-Darstellungen der Operanden im [Zweier-Komplement](https://de.wikipedia.org/wiki/Zweierkomplement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ usw. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die OR-Operation ist:

| x   | y   | x OR y |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

Zahlen mit mehr als 32 Bits werden bei den höchstwertigen Bits abgeschnitten. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Sie könnten sehen, dass Leute `| 0` verwenden, um Zahlen auf Ganzzahlen zu kürzen. Das bitweise OR einer beliebigen Zahl `x` mit `0` gibt `x` konvertiert zu einer 32-Bit-Ganzzahl zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Trunkierung. Konzeptionell verstehen Sie positive BigInts als mit einer unendlichen Anzahl von führenden `0`-Bits, und negative BigInts als mit einer unendlichen Anzahl von führenden `1`-Bits.

## Beispiele

### Verwendung von bitweisem OR

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)

14n | 9n; // 15n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Bitweises OR-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
