---
title: Linksverschiebung (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der Operator **Linksverschiebung (`<<`)** gibt eine Zahl oder einen BigInt-Wert zurück, deren beziehungsweise dessen Binärdarstellung dem um die angegebene Anzahl von Bits nach links verschobenen ersten Operanden entspricht. Überzählige Bits, die links herausgeschoben werden, werden verworfen; von rechts werden Nullbits eingefügt.

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

Der Operator `<<` ist für zwei Operandentypen überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück, bei BigInt-Werten einen BigInt-Wert. Zunächst [konvertiert er beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInt-Werten werden, führt er eine Linksverschiebung für BigInt-Werte durch. Andernfalls konvertiert er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt eine Linksverschiebung für Zahlen durch. Wenn ein Operand zu einem BigInt-Wert und der andere zu einer Zahl wird, wird ein {{jsxref("TypeError")}} ausgelöst.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Beispielsweise ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Wird eine 32-Bit-Ganzzahl `x` bitweise um `y` Bits nach links verschoben, ergibt sich `x * 2 ** y`. Beispielsweise entspricht `9 << 3` dem Ausdruck `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchstwertigen Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl konvertiert und anschließend modulo 32 genommen. Der tatsächliche Verschiebungswert ist daher immer eine Ganzzahl zwischen 0 und 31 einschließlich. Beispielsweise ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

> [!WARNING]
> Möglicherweise begegnet Ihnen die Verwendung von `<< 0`, um Zahlen zu Ganzzahlen zu kürzen. Wenn eine beliebige Zahl `x` um `0` Bits nach links verschoben wird, wird `x` in eine 32-Bit-Ganzzahl konvertiert. Dabei werden bei Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 zusätzlich führende Bits entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInt-Werten findet keine Kürzung statt. Anschaulich können Sie sich positive BigInt-Werte als Werte mit unendlich vielen führenden `0`-Bits und negative BigInt-Werte als Werte mit unendlich vielen führenden `1`-Bits vorstellen.

## Beispiele

### Linksverschiebung verwenden

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
