---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **Rechtsschiebe-Operator (`>>`)** gibt eine Zahl oder ein BigInt zurück, dessen Binärdarstellung der erste Operand ist, verschoben um die angegebene Anzahl von Bits nach rechts. Überzählige nach rechts verschobene Bits werden verworfen, und Kopien des ganz linken Bits werden von links eingefügt. Diese Operation wird auch "zeichenhaft propagierende Rechtsschiebeoperation" oder "arithmetische Rechtsschiebeoperation" genannt, da das Vorzeichen der resultierenden Zahl mit dem Vorzeichen des ersten Operanden übereinstimmt.

{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}

## Syntax

```js-nolint
x >> y
```

## Beschreibung

Der `>>` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt zunächst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft deren Typen. Er führt eine BigInt-Rechtsschiebeoperation durch, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und eine numerische Rechtsschiebeoperation durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Da das neue ganz linke Bit den gleichen Wert wie das vorherige ganz linke Bit hat, ändert sich das Vorzeichenbit (das ganz linke Bit) nicht. Daher der Name "zeichenhaft propagierend".

Der Operator arbeitet an der Bitdarstellung des linken Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits der Binärdarstellung ihres Gegenübers, also `9`, invertiert werden. Diese Darstellung ist `00000000000000000000000000001001` in Binär und es wird `1` hinzugefügt.

In beiden Fällen wird das Vorzeichen der Binärzahl durch das ganz linke Bit angegeben: Für die positive Dezimalzahl `9` ist das ganz linke Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das ganz linke Bit der Binärdarstellung `1`.

Unter Berücksichtigung dieser Binärdarstellungen der Dezimalzahlen `9` und `-9`:

`9 >> 2` ergibt `2`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei ganz rechte Bits, `01`, verschoben wurden und zwei Kopien des ganz linken Bits, `0`, von links eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie zwei ganz rechte Bits, `11`, verschoben wurden. Aber sofern es die ganz linken Bits betrifft: In diesem Fall ist das ganz linke Bit `1`. Also wurden zwei Kopien dieses ganz linken `1`-Bits von links eingefügt — was das negative Vorzeichen bewahrt.

Die Binärdarstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, da alle negativen Ganzzahlen als [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement) gespeichert werden, und dies wird berechnet, indem alle Bits der Binärdarstellung der positiven Dezimalzahl (Basis 10) `3`, die `00000000000000000000000000000011` ist, invertiert werden und dann eins hinzugefügt wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine nicht signierte 32-Bit-Ganzzahl konvertiert und dann modulo 32 genommen, so dass der tatsächliche Verschiebungsabstand immer eine positive Ganzzahl zwischen 0 und 31, einschließlich, ist. Zum Beispiel ist `100 >> 32` dasselbe wie `100 >> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Trunkierung. Konzeptionell verstehen Sie positive BigInts als eine unendliche Anzahl an führenden `0`-Bits und negative BigInts als eine unendliche Anzahl an führenden `1`-Bits.

Das Rechtsschieben einer beliebigen Zahl `x` um `0` gibt `x` als 32-Bit-Ganzzahl zurück. Verwenden Sie nicht `>> 0`, um Zahlen zu Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
- [Rechtsschiebezuweisung (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Unspezifische Rechtsschiebeoperation (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
