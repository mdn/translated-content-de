---
title: Linksverschiebung (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Linksverschiebungsoperator (`<<`)** gibt eine Zahl oder BigInt zurück, deren binäre Darstellung der ersten Operanden um die angegebene Anzahl von Bits nach links verschoben ist. Überzählige Bits, die nach links verschoben werden, werden verworfen, und von rechts werden Null-Bits eingefügt.

{{InteractiveExample("JavaScript Demo: Left shift (<<) operator", "shorter")}}

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

Der `<<` Operator ist für zwei Typen von Operanden überlastet: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Er erzwingt zuerst [beide Operanden in numerische Werte zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft die Typen von ihnen. Er führt eine BigInt-Linksverschiebung durch, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert und eine Zahl-Linksverschiebung durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere zu einer Zahl.

Der Operator arbeitet auf der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Bitweises Verschieben eines 32-Bit-Integer `x` nach links um `y` Bits ergibt `x * 2 ** y`. Zum Beispiel ist `9 << 3` gleichbedeutend mit `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen vorzeichenlosen 32-Bit-Integer umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsversatz immer eine positive ganze Zahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel entspricht `100 << 32` dem gleichen wie `100 << 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Verkürzung. Konzeptuell sollten positive BigInts als unendlich viele führende `0`-Bits verstanden werden und negative BigInts als unendlich viele führende `1`-Bits.

Das Linksverschieben einer beliebigen Zahl `x` um `0` ergibt `x`, konvertiert in einen 32-Bit-Integer. Verwenden Sie nicht `<< 0`, um Zahlen auf ganzzahlige Werte zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
