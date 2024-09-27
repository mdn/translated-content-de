---
title: Bitwise OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise OR (`|`)** Operator liefert eine Zahl oder einen BigInt, dessen binäre Darstellung in jeder Bit-Position eine `1` aufweist, wenn die entsprechenden Bits eines oder beider Operanden `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or.html", "shorter")}}

## Syntax

```js-nolint
x | y
```

## Beschreibung

Der `|` Operator ist überladen für zwei Typen von Operanden: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen liefert der Operator einen 32-Bit-Integer. Für BigInts liefert der Operator einen BigInt. Er [erzwingt zunächst beide Operanden auf numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft deren Typen. Es wird ein BigInt OR durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und ein nummerisches bitweises OR ausgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl wird.

Der Operator arbeitet an den Bitdarstellungen der Operanden im [Zweier-Komplement](https://de.wikipedia.org/wiki/Zweierkomplement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ usw. Der Operator wird auf jedes Bit-Paar angewendet, und das Ergebnis wird bitweise konstruiert.

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

Zahlen mit mehr als 32 Bits verlieren ihre höchstwertigen Bits. Ein Beispiel: Der folgende Integer mit mehr als 32 Bits wird in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Verkürzung. Positiv BigInts kann man sich konzeptionell als mit einer unendlichen Anzahl von führenden `0` Bits verstehen, und negative BigInts als mit einer unendlichen Anzahl von führenden `1` Bits.

Bitweises ORing einer beliebigen Zahl `x` mit `0` liefert `x` konvertiert in einen 32-Bit-Integer. Verwenden Sie nicht `| 0`, um Zahlen auf ganze Zahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung des bitweisen OR

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
- [Bitwise OR-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
