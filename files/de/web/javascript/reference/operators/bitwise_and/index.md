---
title: Bitweises UND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: cd45b5f9ac2d4badfb27970fe55b11d491eb2591
---

{{jsSidebar("Operators")}}

Der **bitweise UND-Operator (`&`)** gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung eine `1` an jeder Bitposition hat, für die die entsprechenden Bits beider Operanden `1` sind.

{{InteractiveExample("JavaScript Demo: Bitweises UND (&) Operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x & y
```

## Beschreibung

Der `&` Operator ist überladen für zwei Operandentypen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft deren Typen. Es wird BigInt UND durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und ein Zahlen-bitweises UND wird durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet an den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit des ersten Operanden wird mit dem entsprechenden Bit des zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die UND-Operation ist:

| x   | y   | x UND y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits zu einem 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Sie könnten sehen, dass Leute `& -1` verwenden, um Zahlen auf Integer zu begrenzen. Bitweises UND eines beliebigen Werts `x` mit `-1` gibt `x` als 32-Bit-Integer zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInts gibt es keine Kürzung. Konzeptionell können positive BigInts als unendlich viele führende `0`-Bits angesehen werden, und negative BigInts als unendlich viele führende `1`-Bits.

## Beispiele

### Verwendung von bitweisem UND

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 & 9;
// 8  (00000000000000000000000000001000)

14n & 9n; // 8n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Bitweises UND-Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
