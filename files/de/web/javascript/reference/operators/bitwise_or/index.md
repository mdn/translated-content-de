---
title: Bitweises ODER (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise ODER (`|`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung an jeder Bitposition eine `1` hat, für die die entsprechenden Bits eines oder beider Operanden `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or.html", "shorter")}}

## Syntax

```js-nolint
x | y
```

## Beschreibung

Der `|` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Zahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Zunächst [werden beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und ihre Typen getestet. Es wird ein BigInt ODER ausgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und ein bitweises ODER für Zahlen ausgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, während der andere zu einer Zahl wird.

Der Operator arbeitet mit den Bit-Darstellungen der Operanden in [Zweierkomplementdarstellung](https://de.wikipedia.org/wiki/Zweierkomplement). Jedes Bit des ersten Operanden wird mit dem entsprechenden Bit des zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ usw. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die ODER-Operation ist:

| x   | y   | x ODER y |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

```plain
     9 (Basis 10) = 00000000000000000000000000001001 (Basis 2)
    14 (Basis 10) = 00000000000000000000000000001110 (Basis 2)
                    --------------------------------
14 | 9 (Basis 10) = 00000000000000000000000000001111 (Basis 2) = 15 (Basis 10)
```

Zahlen mit mehr als 32 Bits haben ihre bedeutendsten Bits abgeschnitten. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Zahl umgewandelt:

```plain
Vorher: 11100110111110100000000000000110000000000001
Nachher:             10100000000000000110000000000001
```

Für BigInts gibt es keine Abschneidung. Konzeptuell verstehen Sie positive BigInts als mit einer unendlichen Anzahl von führenden `0`-Bits und negative BigInts mit einer unendlichen Anzahl von führenden `1`-Bits.

Das bitweise ODER einer Zahl `x` mit `0` ergibt `x`, umgewandelt in eine 32-Bit-Zahl. Verwenden Sie nicht `| 0`, um Zahlen auf Ganzzahlen zu verkürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwenden des bitweisen ODER

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
- [Bitweises ODER-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
