---
title: Bitweises ODER (|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **bitweise ODER-Operator (`|`)** gibt eine Zahl oder einen BigInt zurück, deren beziehungsweise dessen Binärdarstellung an jeder Bitposition eine `1` enthält, an der das entsprechende Bit eines oder beider Operanden `1` ist.

{{InteractiveExample("JavaScript Demo: Bitwise OR (|) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// Expected output: 7
```

## Syntax

```js-nolint
x | y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 5 (bitweises ODER) oder höher. Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 6 (bitweises XOR) oder höher. Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.

### Rückgabewert

Eine vorzeichenbehaftete 32-Bit-Ganzzahl oder ein BigInt mit einer `1` an jeder Bitposition, an der mindestens ein Operand eine `1` hat, und einer `0` an allen anderen Positionen.

## Beschreibung

Der Operator `|` ist für zwei Operandentypen überladen: Zahlen und [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück, bei BigInts einen BigInt. Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er ein bitweises ODER für BigInts aus. Andernfalls wandelt er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt ein bitweises ODER für Zahlen aus. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird.

Der Operator arbeitet mit den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit des ersten Operanden wird dem entsprechenden Bit des zweiten Operanden zugeordnet: das _erste Bit_ dem _ersten Bit_, das _zweite Bit_ dem _zweiten Bit_ und so weiter. Der Operator wird auf jedes Bitpaar angewendet, und das Ergebnis wird Bit für Bit zusammengesetzt.

Die Wahrheitstabelle für die ODER-Operation lautet:

| x   | y   | x ODER y |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

Bei Zahlen mit mehr als 32 Bit werden die höchstwertigen Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Möglicherweise sehen Sie, dass `| 0` verwendet wird, um Zahlen auf Ganzzahlen zu kürzen. Das bitweise ODER einer beliebigen Zahl `x` mit `0` gibt `x` als 32-Bit-Ganzzahl zurück. Bei Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 werden dabei zusätzlich führende Bits entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInts findet keine Kürzung statt. Stellen Sie sich positive BigInts als Werte mit unendlich vielen führenden `0`-Bits und negative BigInts als Werte mit unendlich vielen führenden `1`-Bits vor.

## Beispiele

### Bitweises ODER verwenden

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)

14n | 9n; // 15n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Zuweisung mit bitweisem ODER (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
