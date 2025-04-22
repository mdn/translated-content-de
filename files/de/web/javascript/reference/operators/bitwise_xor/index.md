---
title: Bitweises XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: cd45b5f9ac2d4badfb27970fe55b11d491eb2591
---

{{jsSidebar("Operators")}}

Der **bitweise XOR (`^`)** Operator gibt eine Zahl oder BigInt zurück, deren binäre Darstellung eine `1` in jeder Bitposition hat, für die die entsprechenden Bits eines, aber nicht beider Operanden `1` sind.

{{InteractiveExample("JavaScript Demo: Bitweises XOR (^) operator", "shorter")}}

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

Der `^` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst [konvertiert er beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Er führt BigInt XOR aus, wenn beide Operanden BigInts werden; andernfalls konvertiert er beide Operanden zu [32-Bit-Integern](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt einen bitweisen XOR für Zahlen aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet mit den Bitdarstellungen der Operanden im [Zweistellenkomplement](https://de.wikipedia.org/wiki/Zweistellenkomplement). Jedes Bit des ersten Operanden wird mit dem entsprechenden Bit des zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Paar von Bits angewendet, und das Ergebnis wird bitweise konstruiert.

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

Zahlen mit mehr als 32 Bits lassen ihre höchstwertigen Bits fallen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in einen 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Vielleicht sehen Sie Leute, die `^ 0` verwenden, um Zahlen auf Ganzzahlen zu kürzen. Bitweises XOR mit einer Zahl `x` und `0` gibt `x` konvertiert in einen 32-Bit-Integer zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptuell können Sie positive BigInts als eine unendliche Anzahl von führenden `0`-Bits und negative BigInts als eine unendliche Anzahl von führenden `1`-Bits verstehen.

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
