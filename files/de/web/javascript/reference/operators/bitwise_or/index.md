---
title: Bitwise OR (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: cd45b5f9ac2d4badfb27970fe55b11d491eb2591
---

{{jsSidebar("Operators")}}

Der **Bitweise-OR-Operator (`|`)** gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung eine `1` in jeder Bitposition hat, für die die entsprechenden Bits eines oder beider Operanden `1` sind.

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

Der `|`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt der Operator einen 32-Bit-Integer zurück. Bei BigInts gibt der Operator ein BigInt zurück. Er [zwingt zunächst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft ihre Typen. Er führt BigInt-OR aus, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden zu [32-Bit-Integern](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt bitweise OR für Zahlen aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator operiert auf den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die ODER-Operation ist:

| x   | y   | x ODER y |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

Zahlen mit mehr als 32 Bits lassen ihre höchstwertigen Bits wegfallen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Sie werden möglicherweise Menschen sehen, die `| 0` verwenden, um Zahlen zu Ganzzahlen zu kürzen. Bitweises ORen einer beliebigen Zahl `x` mit `0` gibt `x` als 32-Bit-Integer zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptuell sind positive BigInts als mit einer unendlichen Anzahl von führenden `0`-Bits und negative BigInts als mit einer unendlichen Anzahl von führenden `1`-Bits zu verstehen.

## Beispiele

### Verwendung von bitwise OR

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
