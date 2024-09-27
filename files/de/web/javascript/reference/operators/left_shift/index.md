---
title: Linker Shift (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **Linke Verschiebungsoperator (`<<`)** gibt eine Zahl oder `BigInt` zurück, deren binäre Darstellung um die angegebene Anzahl von Bits nach links verschoben ist. Überschüssige Bits, die links hinausgeschoben werden, gehen verloren, und von rechts werden Nullen hereingeschoben.

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html", "shorter")}}

## Syntax

```js-nolint
x << y
```

## Beschreibung

Der `<<`-Operator ist für zwei Typen von Operanden überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zunächst [werden beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und deren Typ geprüft. Eine BigInt-Linksschiebung wird durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert und eine Zahl-Linksschiebung wird durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere zu einer Zahl.

Der Operator arbeitet mit der Bit-Darstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitweises Verschieben eines 32-Bit-Integers `x` nach links um `y` Bits ergibt `x * 2 ** y`. Zum Beispiel ist `9 << 3` gleich `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bit ist, werden die höchstwertigen Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bit in einen 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen vorzeichenlosen 32-Bit-Integer konvertiert und dann modulo 32 genommen, sodass der tatsächliche Verschiebungswert immer eine positive ganze Zahl zwischen 0 und 31, einschließlich, ist. Zum Beispiel ist `100 << 32` das gleiche wie `100 << 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Abschneidungen. Konzeptionell sollten positive BigInts so betrachtet werden, als hätten sie eine unendliche Anzahl führender `0`-Bits und negative BigInts eine unendliche Anzahl führender `1`-Bits.

Das linke Verschieben einer beliebigen Zahl `x` um `0` gibt `x` in einen 32-Bit-Integer konvertiert zurück. Verwenden Sie nicht `<< 0`, um Zahlen zu Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwenden der linken Verschiebung

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
- [Linker Zuweisungsoperator (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
