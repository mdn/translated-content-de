---
title: Bitwise OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **bitweise OR (`|`)** Operator gibt eine Zahl oder BigInt zurück, deren binäre Darstellung eine `1` in jedem Bitposition hat, für die die entsprechenden Bits eines oder beider Operanden `1` sind.

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

Der `|` Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für numbers gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft deren Typen. Es wird BigInt OR durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert und ein bitweises OR durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer number.

Der Operator arbeitet an den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ usw. Der Operator wird auf jedes Bitpaar angewandt, und das Ergebnis wird bitweise konstruiert.

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

Zahlen mit mehr als 32 Bits werden zu einem 32-Bit-Integer gekürzt. Beispielsweise wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Bei BigInts gibt es keine Kürzung. Konzeptionell sind positive BigInts als unendliche Anzahl führender `0`-Bits zu verstehen und negative BigInts als unendliche Anzahl führender `1`-Bits.

Ein bitweises OR einer beliebigen Zahl `x` mit `0` gibt `x` als 32-Bit-Integer konvertiert zurück. Verwenden Sie nicht `| 0`, um Zahlen auf ganze Zahlen zu kürzen; nutzen Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung von Bitwise OR

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
- [Bitweise OR-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
