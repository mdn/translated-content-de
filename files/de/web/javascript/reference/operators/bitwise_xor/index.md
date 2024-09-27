---
title: Bitweises XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise XOR (`^`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung in jeder Bitposition eine `1` hat, in der die entsprechenden Bits entweder, aber nicht beide, Operanden `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor.html", "shorter")}}

## Syntax

```js-nolint
x ^ y
```

## Beschreibung

Der `^` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [erzwingt zunächst beide Operanden als numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt BigInt XOR aus, wenn beide Operanden BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt ein bitweises XOR für Zahlen aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet mit den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zum _ersten Bit_, _zweites Bit_ zum _zweiten Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet und das Ergebnis bitweise konstruiert.

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

Zahlen mit mehr als 32 Bits lassen ihre am stärksten signifikanten Bits wegfallen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Trunkierung. Konzeptionell können Sie sich positive BigInts mit einer unendlichen Anzahl führender `0`-Bits und negative BigInts mit einer unendlichen Anzahl führender `1`-Bits vorstellen.

Ein bitweises XOR jeder Zahl `x` mit `0` gibt `x` als 32-Bit-Integer zurück. Verwenden Sie nicht `^ 0`, um Zahlen auf Integer zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung des bitweisen XOR

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
