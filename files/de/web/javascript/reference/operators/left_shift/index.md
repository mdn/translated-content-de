---
title: Linksverschiebung (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **Linksverschiebung (`<<`)** gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung dem um die angegebene Anzahl von Bits nach links verschobenen ersten Operanden entspricht. Überzählige Bits, die links herausgeschoben werden, werden verworfen; von rechts werden Nullbits eingefügt.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 10 (bitweise Verschiebung). Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 11 (Addition). Sein Wert wird in eine [vorzeichenlose 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt. Bei Zahlen bestimmen die fünf niederwertigsten Bits die Anzahl der Verschiebungen. Bei BigInts kehrt eine negative Anzahl die Verschiebungsrichtung um.

### Rückgabewert

Eine vorzeichenbehaftete 32-Bit-Ganzzahl oder ein BigInt, die bzw. der `x` nach links verschoben um die angegebene Anzahl von Bits darstellt.

## Beschreibung

Der Operator `<<` ist für zwei Operandentypen überladen: Zahlen und [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück, bei BigInts einen BigInt. Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Linksverschiebung durch. Andernfalls wandelt er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt eine Linksverschiebung für Zahlen durch. Wird ein Operand zu einem BigInt und der andere zu einer Zahl, wird ein {{jsxref("TypeError")}} ausgelöst.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Beispielsweise ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Wird eine 32-Bit-Ganzzahl `x` bitweise um `y` Bits nach links verschoben, ergibt sich `x * 2 ** y`. Beispielsweise entspricht `9 << 3` dem Ausdruck `9 * (2 ** 3) = 9 * (8) = 72`.

Hat der linke Operand als Zahl mehr als 32 Bits, werden seine höchstwertigen Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl umgewandelt. Anschließend wird der Rest bei Division durch 32 verwendet, sodass der tatsächliche Verschiebungswert immer eine nichtnegative Ganzzahl zwischen 0 und 31 einschließlich ist. Beispielsweise ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), weil der Rest bei Division von 32 durch 32 gleich 0 ist.

> [!WARNING]
> Möglicherweise sehen Sie, dass `<< 0` verwendet wird, um Nachkommastellen von Zahlen abzuschneiden. Wird eine beliebige Zahl `x` um `0` Bits nach links verschoben, wird `x` als 32-Bit-Ganzzahl zurückgegeben. Bei Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 werden dabei zusätzlich führende Bits entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInts werden keine Bits abgeschnitten. Zur Veranschaulichung können Sie sich positive BigInts mit unendlich vielen führenden `0`-Bits und negative BigInts mit unendlich vielen führenden `1`-Bits vorstellen.

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
