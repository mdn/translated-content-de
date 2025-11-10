---
title: Linksverschiebung (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Linksverschiebungsoperator (`<<`)** gibt eine Zahl oder einen BigInt zurück, deren Binärdarstellung der ersten Operanden um die angegebene Anzahl von Bits nach links verschoben ist. Überzählige Bits, die nach links verschoben werden, werden verworfen, und null Bits werden von rechts eingeführt.

{{InteractiveExample("JavaScript Demo: Linksverschiebungsoperator (<<)", "kurzer")}}

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

Der `<<`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Er [setzt zuerst beide Operanden auf numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft dann die Typen der Operanden. Führt BigInt-Linksverschiebung aus, wenn beide Operanden BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und die Zahl wird links verschoben. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere zu einer Zahl.

Der Operator arbeitet auf der Bitdarstellung des linken Operanden in [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitweises Verschieben eines 32-Bit-Integer `x` nach links um `y` Bits ergibt `x * 2 ** y`. Beispielsweise ist `9 << 3` äquivalent zu `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchstwertigen Bits verworfen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen unsignierten 32-Bit-Integer umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungswert immer eine positive Ganzzahl zwischen 0 und 31, einschließlich, ist. Zum Beispiel ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

> [!WARNING]
> Sie könnten Leute sehen, die `<< 0` verwenden, um Zahlen auf Ganzzahlen zu kürzen. Das Linksverschieben einer beliebigen Zahl `x` um `0` gibt `x` zurück, umgewandelt in einen 32-Bit-Integer, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptuell verstehen Sie positive BigInts als unendlich viele führende `0`-Bits und negative BigInts als unendlich viele führende `1`-Bits.

## Beispiele

### Verwendung der Linksverschiebung

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
- [Linksverschiebungszuweisung (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
