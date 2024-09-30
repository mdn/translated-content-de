---
title: Bitweises UND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der Operator **bitweises UND (`&`)** gibt eine Zahl oder BigInt zurück, deren binäre Darstellung in jeder Bitposition, für die die entsprechenden Bits beider Operanden `1` sind, eine `1` hat.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html", "shorter")}}

## Syntax

```js-nolint
x & y
```

## Beschreibung

Der `&`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator einen BigInt zurück. Er [zwingt beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt ein BigInt UND aus, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden zu [32-Bit-Integern](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt ein zahlmäßiges bitweises UND aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere zu einer Zahl.

Der Operator arbeitet auf den Bit-Darstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise zusammengestellt.

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

Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Abschneidung. Konzeptuell verstehen Sie positive BigInts als eine unendliche Anzahl führender `0`-Bits, und negative BigInts als eine unendliche Anzahl führender `1`-Bits.

Bitweises UND mit jeder Zahl `x` mit `-1` gibt `x` als 32-Bit-Ganzzahl zurück. Verwenden Sie `& -1` nicht, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung des bitweisen UND

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
