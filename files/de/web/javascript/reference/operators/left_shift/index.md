---
title: Left shift (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: cd45b5f9ac2d4badfb27970fe55b11d491eb2591
---

{{jsSidebar("Operators")}}

Der **Linksschiebeoperator (`<<`)** gibt eine Zahl oder einen BigInt zurück, dessen binäre Darstellung das erste Operand ist, verschoben um die angegebene Anzahl von Bits nach links. Überzählige nach links verschobene Bits werden verworfen, und Nullbits werden von rechts eingeschoben.

{{InteractiveExample("JavaScript Demo: Linksschiebeoperator (<<)", "shorter")}}

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

Der `<<` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet deren Typen. Er führt eine BigInt-Linksschiebung aus, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt eine Zahl-Linksschiebung aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Der Operator arbeitet mit der Bit-Repräsentation des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitweise Verschiebung eines 32-Bit-Integer `x` nach links um `y` Bits ergibt `x * 2 ** y`. Beispielsweise ist `9 << 3` äquivalent zu `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen unsignierten 32-Bit-Integer konvertiert und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsversatz immer eine positive Ganzzahl zwischen 0 und 31 (einschließlich) ist. Beispielsweise ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), weil 32 modulo 32 null ist.

> [!WARNING]
> Sie könnten sehen, wie Leute `<< 0` verwenden, um Zahlen zu Ganzzahlen zu verkürzen. Das Linksschieben einer beliebigen Zahl `x` um `0` gibt `x` in einen 32-Bit-Integer konvertiert zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInts gibt es keine Verkürzung. Konzeptuell kann man sich positive BigInts als eine unendliche Anzahl führender `0`-Bits vorstellen und negative BigInts als eine unendliche Anzahl führender `1`-Bits.

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
- [Linksschiebezuweisung (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
