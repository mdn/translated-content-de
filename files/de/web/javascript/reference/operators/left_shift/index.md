---
title: Linksschiebeoperator (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **Linksschiebeoperator (`<<`)** gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung der ersten Operand ist, der um die angegebene Anzahl von Bits nach links verschoben wurde. Überzählige Bits, die nach links verschoben werden, werden verworfen, und Null-Bits werden von rechts eingefügt.

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html", "shorter")}}

## Syntax

```js-nolint
x << y
```

## Beschreibung

Der `<<`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Bei BigInts gibt der Operator ein BigInt zurück. Er [wandelt beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft deren Typen. Ein Linksshift mit BigInt wird durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und ein Linksschiebeoperator mit Zahlen wird durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitweises Verschieben einer 32-Bit-Ganzzahl `x` um `y` Bits nach links ergibt `x * 2 ** y`. Beispielsweise ist `9 << 3` äquivalent zu `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl konvertiert und dann modulo 32 genommen, sodass der tatsächliche Verschiebeversatz immer eine positive Ganzzahl zwischen 0 und 31, einschließlich, ist. Zum Beispiel ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Bei BigInts gibt es keine Kürzung. Konzeptionell verstehen Sie positive BigInts als unendliche Anzahl führender `0`-Bits und negative BigInts als unendliche Anzahl führender `1`-Bits.

Das Linksverschieben einer beliebigen Zahl `x` um `0` ergibt `x` konvertiert in eine 32-Bit-Ganzzahl. Verwenden Sie nicht `<< 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung des Linksschiebeoperators

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72

9n << 3n; // 72n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Zugewiesener Linksschiebeoperator (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
