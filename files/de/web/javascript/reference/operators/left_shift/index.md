---
title: Linksshift (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Linksshift (`<<`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung der ersten Operanden um die angegebene Anzahl von Bits nach links verschoben ist. Überschüssige, nach links verschobene Bits werden verworfen, und von rechts werden Nullen eingefügt.

{{InteractiveExample("JavaScript Demo: Expressions - Left shift operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100
// Expected output: 20
```

## Syntax

```js-nolint
x << y
```

## Beschreibung

Der `<<` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Zuerst [werden beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und ihre Typen geprüft. Er führt einen Linksshift bei BigInt durch, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt einen Linksshift für Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet auf der Bitdarstellung des linken Operanden in [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Ein 32-Bit-Ganzzahl `x`, die um `y` Bits nach links verschoben wird, ergibt `x * 2 ** y`. Zum Beispiel ist `9 << 3` äquivalent zu `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höherwertigen Bits verworfen. Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl konvertiert und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsversatz immer eine positive Ganzzahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel ist `100 << 32` das gleiche wie `100 << 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Abschneidung. Konzeptuell können positive BigInts als unendlich viele führende Nullbits und negative BigInts als unendlich viele führende Eins-Bits betrachtet werden.

Das Verschieben einer beliebigen Zahl `x` um `0` nach links gibt `x` als 32-Bit-Ganzzahl zurück. Verwenden Sie nicht `<< 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung von Linksshift

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
- [Linksschiebiszuweisung (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
