---
title: Bitweises UND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **bitweise UND (`&`)** Operator gibt eine Zahl oder BigInt zurück, deren binäre Darstellung an jeder Bitposition eine `1` hat, für die die entsprechenden Bits beider Operanden `1` sind.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html", "shorter")}}

## Syntax

```js-nolint
x & y
```

## Beschreibung

Der `&` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Er [erzwingt beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt BigInt-UND aus, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt ein bitweises UND auf Zahlen aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere aber zu einer Zahl.

Der Operator arbeitet an den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit des ersten Operanden wird mit dem entsprechenden Bit des zweiten Operanden gepaart: _erstes Bit_ zu _erstem Bit_, _zweites Bit_ zu _zweitem Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für den UND-Operator ist:

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

Zahlen mit mehr als 32 Bits verlieren ihre höchstwertigen Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Kürzung. Konzeptuell sind positive BigInts als unendlich viele führende `0`-Bits zu verstehen, und negative BigInts als unendlich viele führende `1`-Bits.

Bitweises UNDing einer beliebigen Zahl `x` mit `-1` gibt `x` als 32-Bit-Ganzzahl zurück. Verwenden Sie nicht `& -1` um Zahlen auf Ganzzahlen zu kürzen; nutzen Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung von bitweises UND

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
- [Bitweises UND-Zuweisungs-Operator (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
