---
title: Bitweises UND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **bitweise UND (`&`)**-Operator gibt eine Zahl oder ein BigInt zurück, dessen Binärdarstellung in jeder Bit-Position, für die die entsprechenden Bits beider Operanden `1` sind, eine `1` enthält.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise AND", "shorter")}}

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

Der `&`-Operator ist für zwei Operanden-Typen überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Zahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt ein BigInt UND aus, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und ein bitweises UND für Zahlen wird ausgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Der Operator arbeitet mit den Bit-Repräsentationen der Operanden in der [Zweierkomplement-Darstellung](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ mit _erstem Bit_, _zweites Bit_ mit _zweitem Bit_ usw. Der Operator wird auf jedes Bit-Paar angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die UND-Operation lautet:

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

Zahlen mit mehr als 32 Bit verlieren ihre höchstwertigen Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Zahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Abschneidung. Konzeptuell kann man sich positive BigInts mit einer unendlichen Anzahl führender `0`-Bits und negative BigInts mit einer unendlichen Anzahl führender `1`-Bits vorstellen.

Ein bitweises UND mit einer beliebigen Zahl `x` und `-1` gibt `x` als 32-Bit-Zahl zurück. Verwenden Sie nicht `& -1`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
