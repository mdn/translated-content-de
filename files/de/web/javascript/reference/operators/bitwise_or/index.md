---
title: Bitweises Oder (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise Oder (`|`)** Operator gibt eine Zahl oder BigInt zurück, deren binäre Darstellung eine `1` in jedem Bit hat, für das die entsprechenden Bits eines oder beider Operanden `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or.html", "shorter")}}

## Syntax

```js-nolint
x | y
```

## Beschreibung

Der `|` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst werden [beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und deren Typen getestet. Er führt ein BigInt Oder durch, wenn beide Operanden zu BigInts werden; andernfalls wandelt er beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt ein numerisches bitweises Oder durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet an den Bit-Darstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operand wird mit dem entsprechenden Bit im zweiten Operand kombiniert: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_, usw. Der Operator wird auf jedes Paar von Bits angewendet und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die Oder-Operation ist:

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

Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits. Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Abschneidung. Konzeptionell sind positive BigInts als unendlich viele führende `0` Bits zu verstehen und negative BigInts als unendlich viele führende `1` Bits.

Ein beliebiges Zahl `x` zu `0` mit bitweisem Oder zu verbinden, gibt `x` als 32-Bit-Integer zurück. Verwenden Sie nicht `| 0`, um Zahlen zu Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung des bitweisen Oder

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
- [Bitweise Oder-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
