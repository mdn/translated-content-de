---
title: Bitweises AND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **bitweise AND-Operator (`&`)** gibt eine Zahl oder einen BigInt zurück, deren Binärdarstellung an jeder Bitposition eine `1` enthält, an der die entsprechenden Bits beider Operanden `1` sind.

{{InteractiveExample("JavaScript Demo: Bitwise AND (&) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x & y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 7 (bitweises AND) oder höher. Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 8 (Gleichheit) oder höher. Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.

### Rückgabewert

Eine vorzeichenbehaftete 32-Bit-Ganzzahl oder ein BigInt mit einer `1` an jeder Bitposition, an der beide Operanden eine `1` haben, und einer `0` an allen anderen Positionen.

## Beschreibung

Der Operator `&` ist für zwei Operandentypen überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Bei BigInts gibt er einen BigInt zurück. Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er ein bitweises AND für BigInts aus. Andernfalls wandelt er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt ein bitweises AND für Zahlen aus. Wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird, wird ein {{jsxref("TypeError")}} ausgelöst.

Der Operator verarbeitet die Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit des ersten Operanden wird dem entsprechenden Bit des zweiten Operanden zugeordnet: das _erste Bit_ dem _ersten Bit_, das _zweite Bit_ dem _zweiten Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird bitweise zusammengesetzt.

Die Wahrheitstabelle für die AND-Operation lautet:

| x   | y   | x AND y |
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

Bei Zahlen mit mehr als 32 Bit werden die höchstwertigen Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Möglicherweise sehen Sie, dass `& -1` verwendet wird, um Zahlen auf Ganzzahlen zu kürzen. Wird eine beliebige Zahl `x` bitweise mit `-1` AND-verknüpft, wird `x` in eine 32-Bit-Ganzzahl umgewandelt. Dabei werden bei Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 zusätzlich die führenden Bits entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInts findet keine Kürzung statt. Sie können sich positive BigInts so vorstellen, als hätten sie unendlich viele führende `0`-Bits, und negative BigInts so, als hätten sie unendlich viele führende `1`-Bits.

## Beispiele

### Bitweises AND verwenden

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
- [Bitweise AND-Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
