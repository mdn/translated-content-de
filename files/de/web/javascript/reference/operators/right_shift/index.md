---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: cd45b5f9ac2d4badfb27970fe55b11d491eb2591
---

{{jsSidebar("Operators")}}

Der **Rechtsschiebeoperator (`>>`)** gibt eine Zahl oder BigInt zurück, deren binäre Darstellung der ersten Operanden um die angegebene Anzahl von Bits nach rechts verschoben ist. Überflüssige Bits, die nach rechts verschoben werden, werden verworfen, und Kopien des linken Bits werden von links eingefügt. Diese Operation wird auch als "vorzeichengetreue Rechtsschiebung" oder "arithmetische Rechtsschiebung" bezeichnet, da das Vorzeichen der resultierenden Zahl das gleiche ist wie das Vorzeichen des ersten Operanden.

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

## Beschreibung

Der `>>` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt zuerst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft dann deren Typen. Er führt eine BigInt-Rechtsschiebung durch, wenn beide Operanden zu BigInts werden; andernfalls konvertiert er beide Operanden zu [32-Bit-Integern](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt eine Zahl-Rechtsschiebung durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl wird.

Da das neue linke Bit den gleichen Wert wie das vorherige linke Bit hat, ändert sich das Vorzeichenbit (das linke Bit) nicht. Daher der Name "vorzeichengetreu".

Der Operator arbeitet auf der Bit-Darstellung des linken Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-binären Darstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die binäre Darstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihrer Gegenstückzahl, nämlich `9`, invertiert und 1 hinzugefügt wird. `9` entspricht in Binär `00000000000000000000000000001001`.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linkes Bit angezeigt: Bei der positiven Dezimalzahl `9` ist das linke Bit der binären Darstellung `0`, und bei der negativen Dezimalzahl `-9` ist das linke Bit der binären Darstellung `1`.

Gegeben sind diese binären Darstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechteste Bits, `01`, abgeschoben wurden und zwei Kopien des linksten Bits, `0`, von links eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie zwei rechteste Bits, `11`, abgeschoben wurden. Was jedoch die linksten Bits betrifft: In diesem Fall ist das linkste Bit `1`. Also wurden zwei Kopien dieses linksten `1`-Bits von links eingefügt — was das negative Vorzeichen bewahrt.

Die binäre Darstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, da alle negativen Ganzzahlen als [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement) gespeichert werden, und diese kann berechnet werden, indem alle Bits der binären Darstellung der positiven Dezimalzahl (Basis 10) `3` invertiert werden, welches `00000000000000000000000000000011` ist, und dann 1 addiert wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchsten Bits verworfen. Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in einen 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen ohne Vorzeichen versehenen 32-Bit-Integer konvertiert und dann modulo 32 genommen, sodass der tatsächliche Schiebeversatz immer eine positive Ganzzahl zwischen 0 und 31, einschließlich, ist. Zum Beispiel entspricht `100 >> 32` `100 >> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

> [!WARNING]
> Es kann vorkommen, dass `>> 0` verwendet wird, um Zahlen zu Integern zu kürzen. Das Rechtsschieben einer beliebigen Zahl `x` um `0` gibt `x` konvertiert in einen 32-Bit-Integer zurück, was zusätzlich die führenden Bits für Zahlen außerhalb des Bereichs -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptuell haben positive BigInts eine unendliche Anzahl führender `0`-Bits, und negative BigInts haben eine unendliche Anzahl führender `1`-Bits.

## Beispiele

### Verwendung der Rechtsschiebung

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
- [Rechtsschiebungszuweisung (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Ohne Vorzeichen Rechtsschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
