---
title: Rechtsverschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Rechtsverschiebungsoperator (`>>`)** gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung der des ersten Operanden entspricht, um die angegebene Anzahl von Bits nach rechts verschoben. Bits, die dabei rechts herausgeschoben werden, gehen verloren; von links werden Kopien des am weitesten links stehenden Bits eingefügt. Diese Operation wird auch „vorzeichenerhaltende Rechtsverschiebung“ oder „arithmetische Rechtsverschiebung“ genannt, da das Vorzeichen des Ergebnisses dem des ersten Operanden entspricht.

{{InteractiveExample("JavaScript Demo: Right shift (>>) operator")}}

```js interactive-example
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; //  11111111111111111111111111111011

console.log(a >> b); //  00000000000000000000000000000001
// Expected output: 1

console.log(c >> b); //  11111111111111111111111111111110
// Expected output: -2
```

## Syntax

```js-nolint
x >> y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 10 (bitweise Verschiebung). Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 11 (Addition). Sein Wert wird in eine [vorzeichenlose 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt. Bei Zahlen bestimmen die fünf niederwertigsten Bits die Anzahl der Stellen, um die verschoben wird. Bei BigInts kehrt ein negativer Wert die Verschiebungsrichtung um.

### Rückgabewert

Eine vorzeichenbehaftete 32-Bit-Ganzzahl oder ein BigInt, die bzw. der `x` nach der Rechtsverschiebung um die angegebene Anzahl von Stellen darstellt.

## Beschreibung

Der Operator `>>` ist für zwei Operandentypen überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Bei Zahlen gibt er eine 32-Bit-Ganzzahl zurück, bei BigInts einen BigInt. Zunächst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Wenn beide Operanden zu BigInts werden, führt er eine BigInt-Rechtsverschiebung aus. Andernfalls wandelt er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt eine Rechtsverschiebung für Zahlen aus. Wenn ein Operand zu einem BigInt und der andere zu einer Zahl wird, wird ein {{jsxref("TypeError")}} ausgelöst.

Da das neue Bit ganz links denselben Wert wie das bisherige Bit ganz links hat, ändert sich das Vorzeichenbit (das Bit ganz links) nicht. Daher die Bezeichnung „vorzeichenerhaltend“.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung der negativen Dezimalzahl (Basis 10) `-9` im Zweierkomplement entsteht, indem alle Bits ihrer Gegenzahl `9`, binär `00000000000000000000000000001001`, invertiert werden und anschließend `1` addiert wird.

In beiden Fällen gibt das Bit ganz links das Vorzeichen der Binärzahl an: Bei der positiven Dezimalzahl `9` ist es `0`, bei der negativen Dezimalzahl `-9` ist es `1`.

Ausgehend von diesen Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9` gilt:

`9 >> 2` ergibt `2`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, dass die beiden Bits ganz rechts, `01`, herausgeschoben und von links zwei Kopien des Bits ganz links, `0`, eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, dass die beiden Bits ganz rechts, `11`, herausgeschoben wurden. Das Bit ganz links ist in diesem Fall jedoch `1`. Daher wurden von links zwei Kopien dieses Bits `1` eingefügt – das negative Vorzeichen bleibt erhalten.

Die Binärdarstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, da alle negativen Ganzzahlen als [Zweierkomplement](<(https://en.wikipedia.org/wiki/Two's_complement)>) gespeichert werden. Sie lässt sich berechnen, indem alle Bits der Binärdarstellung der positiven Dezimalzahl (Basis 10) `3`, also `00000000000000000000000000000011`, invertiert werden und anschließend eins addiert wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchstwertigen Bits verworfen. Die folgende Ganzzahl mit mehr als 32 Bits wird beispielsweise in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl umgewandelt und anschließend modulo 32 genommen. Die tatsächliche Anzahl der Stellen, um die verschoben wird, ist daher immer eine Ganzzahl zwischen 0 und 31 einschließlich. Beispielsweise ist `100 >> 32` gleich `100 >> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

> [!WARNING]
> Möglicherweise sehen Sie Code, in dem `>> 0` verwendet wird, um Zahlen auf Ganzzahlen zu kürzen. Wenn eine beliebige Zahl `x` um `0` Stellen nach rechts verschoben wird, wird `x` in eine 32-Bit-Ganzzahl umgewandelt. Bei Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 werden dabei zusätzlich führende Bits entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Bei BigInts erfolgt keine solche Kürzung. Stellen Sie sich positive BigInts konzeptionell so vor, als hätten sie unendlich viele führende `0`-Bits, und negative BigInts so, als hätten sie unendlich viele führende `1`-Bits.

## Beispiele

### Rechtsverschiebung verwenden

```js
9 >> 2; // 2
-9 >> 2; // -3

9n >> 2n; // 2n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Rechtsverschiebung mit Zuweisung (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Vorzeichenlose Rechtsverschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
