---
title: Bitweises XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise XOR-Operator (`^`)** gibt eine Zahl oder BigInt zurück, deren binäre Darstellung an jeder Bitposition ein `1` hat, für die die entsprechenden Bits entweder, aber nicht beide Operanden, `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor.html", "shorter")}}

## Syntax

```js-nolint
x ^ y
```

## Beschreibung

Der `^`-Operator ist für zwei Arten von Operanden überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt ein BigInt-XOR durch, wenn beide Operanden BigInts werden; andernfalls wandelt er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt ein bitweises XOR bei Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet an den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die XOR-Operation ist:

| x   | y   | x XOR y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

```plain
     9 (Basis 10) = 00000000000000000000000000001001 (Basis 2)
    14 (Basis 10) = 00000000000000000000000000001110 (Basis 2)
                   --------------------------------
14 ^ 9 (Basis 10) = 00000000000000000000000000000111 (Basis 2) = 7 (Basis 10)
```

Zahlen mit mehr als 32 Bits haben ihre höchstwertigen Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Vorher: 11100110111110100000000000000110000000000001
Nachher:              10100000000000000110000000000001
```

Für BigInts gibt es keine Trunkierung. Konzeptuell verstehen Sie positive BigInts als mit einer unendlichen Anzahl führender `0`-Bits und negative BigInts als mit einer unendlichen Anzahl führender `1`-Bits.

Ein bitweises XOR mit einer Zahl `x` mit `0` gibt `x` konvertiert in eine 32-Bit-Ganzzahl zurück. Verwenden Sie nicht `^ 0` um Zahlen auf Ganzzahlen zu verkürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
- [Bitweise XOR-Zuweisung (`^=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
