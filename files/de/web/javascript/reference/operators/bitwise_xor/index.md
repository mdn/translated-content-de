---
title: Bitweises XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **bitweise XOR (`^`)**-Operator gibt eine Zahl oder ein BigInt zurück, dessen Binärdarstellung in jeder Bitposition `1` hat, für die die entsprechenden Bits entweder des einen, aber nicht beider Operanden, `1` sind.

{{InteractiveExample("JavaScript Demo: Bitwise XOR (^) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// Expected output: 6
```

## Syntax

```js-nolint
x ^ y
```

## Beschreibung

Der `^`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt zuerst beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft ihre Typen. Er führt ein BigInt-XOR aus, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt ein bitweises XOR der Zahlen aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt, der andere jedoch zu einer Zahl wird.

Der Operator arbeitet auf den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operand wird mit dem entsprechenden Bit im zweiten Operand gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die XOR-Operation ist:

| x   | y   | x XOR y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
```

Zahlen mit mehr als 32 Bit haben ihre höchstwertigen Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Sie können sehen, dass Leute `^ 0` verwenden, um Zahlen auf Ganzzahlen zu kürzen. Bitweises XOR einer beliebigen Zahl `x` mit `0` gibt `x` als 32-Bit-Ganzzahl zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptionell können Sie positive BigInts als mit einer unendlichen Anzahl führender `0`-Bits und negative BigInts als mit einer unendlichen Anzahl führender `1`-Bits verstehen.

## Beispiele

### Verwendung von bitweisem XOR

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 ^ 9;
// 7  (00000000000000000000000000000111)

14n ^ 9n; // 7n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Bitweises XOR-Zuweisung (`^=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
