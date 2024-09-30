---
title: Bitweises XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise XOR (`^`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung eine `1` in jeder Bitposition hat, für die die entsprechenden Bits entweder des einen, aber nicht beider Operanden `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor.html", "shorter")}}

## Syntax

```js-nolint
x ^ y
```

## Beschreibung

Der `^` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt zunächst beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt BigInt-XOR aus, wenn beide Operanden BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und eine bitweise XOR-Verknüpfung durchgeführt. Es wird ein {{jsxref("TypeError")}} ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Der Operator arbeitet auf den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zum _ersten Bit_, _zweites Bit_ zum _zweiten Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

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

Zahlen mit mehr als 32 Bit haben ihre höchstwertigen Bits verworfen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bit in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Verkürzung. Man sollte sich positive BigInts konzeptionell als eine unendliche Anzahl führender `0` Bits und negative BigInts als eine unendliche Anzahl führender `1` Bits vorstellen.

Das bitweise X-OR-Verknüpfen einer beliebigen Zahl `x` mit `0` gibt `x` als 32-Bit-Integer zurück. Verwenden Sie nicht `^ 0`, um Zahlen auf ganze Zahlen zu kürzen; verwenden Sie stattdessen [Math.trunc()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
