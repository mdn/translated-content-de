---
title: Bitweises XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **bitweise XOR (`^`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung an jeder Bit-Position eine `1` hat, an der die entsprechenden Bits entweder aber nicht beide Operanden `1` sind.

{{InteractiveExample("JavaScript Demo: Bitwise XOR (^) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// Expected output: 6
```

## Syntax

```js-nolint
x ^ y
```

## Beschreibung

Der `^` Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Zuerst [zwingt er beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Er führt ein BigInt-XOR durch, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt ein number-bitweises XOR aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Der Operator arbeitet auf den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstes Bit_, _zweites Bit_ zu _zweites Bit_ usw. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise konstruiert.

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

Zahlen mit mehr als 32 Bits werden am höchstwertigen Ende abgeschnitten. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Bei BigInts erfolgt keine Abschneidung. Konzeptuell können positive BigInts als unendlich viele führende `0` Bits verstanden werden, und negative BigInts als unendlich viele führende `1` Bits.

Ein bitweises XOR irgendeiner Zahl `x` mit `0` gibt `x` konvertiert in eine 32-Bit-Ganzzahl zurück. Verwenden Sie nicht `^ 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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

- [Bitweise Operatoren im JS Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Bitweises XOR-Zuweisung (`^=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
