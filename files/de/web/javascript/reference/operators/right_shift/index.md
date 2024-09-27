---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **Rechtsschiebungsoperator (`>>`)** gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung der ersten Operand ist, der um die angegebene Anzahl von Bits nach rechts verschoben wurde. Überflüssige Bits, die nach rechts verschoben werden, werden verworfen, und Kopien des linken Bits werden von links eingefügt. Dieser Vorgang wird auch als „sign-propagating right shift“ oder „arithmetic right shift“ bezeichnet, da das Vorzeichen der resultierenden Zahl das gleiche ist wie das Vorzeichen des ersten Operanden.

{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}

## Syntax

```js-nolint
x >> y
```

## Beschreibung

Der Operator `>>` ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Er zwingt zunächst [beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft deren Typen. Er führt eine BigInt-Rechtsschiebung durch, wenn beide Operanden BigInts werden; andernfalls wandelt er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt eine Zahlen-Rechtsschiebung durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Da das neue linkeste Bit denselben Wert hat wie das vorherige linkeste Bit, ändert sich das Vorzeichenbit (das linkeste Bit) nicht. Daher der Name „sign-propagating“.

Der Operator wirkt auf die Bitdarstellung des linken Operanden in [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die binäre Darstellung der negativen Dezimalzahl `-9` im Zweierkomplement entsteht, indem alle Bits der entgegengesetzten Zahl invertiert werden, was `9` ist und `00000000000000000000000000001001` in Binär ist, und eins hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linkestes Bit angegeben: Für die positive Dezimalzahl `9` ist das linkeste Bit der binären Darstellung `0`, und für die negative Dezimalzahl `-9` ist das linkeste Bit der binären Darstellung `1`.

Angenommen, diese binären Darstellungen der Dezimalzahlen `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechteste Bits, `01`, verschoben wurden, und zwei Kopien des linkesten Bits, `0`, von links eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie zwei rechteste Bits, `11`, verschoben wurden. Aber was die linksesten Bits betrifft: in diesem Fall ist das linkeste Bit `1`. So wurden zwei Kopien dieses linkesten `1`-Bits von links eingefügt — was das negative Vorzeichen bewahrt.

Die binäre Darstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl `-3`, da alle negativen Ganzzahlen als [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement) gespeichert werden, und diese kann berechnet werden, indem alle Bits der binären Darstellung der positiven Dezimalzahl `3` invertiert werden, welche `00000000000000000000000000000011` ist, und dann eins hinzugefügt wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die signifikantesten Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen vorzeichenlosen 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Schiebeversatz immer eine positive Ganzzahl zwischen 0 und 31 ist, einschließlich. Zum Beispiel ist `100 >> 32` dasselbe wie `100 >> 0` (und ergibt `100`), weil 32 modulo 32 Null ist.

Für BigInts gibt es keine Abschneidung. Konzeptuell können positive BigInts als eine unendliche Anzahl führender `0`-Bits verstanden werden und negative BigInts als eine unendliche Anzahl führender `1`-Bits.

Das Rechtsschieben einer beliebigen Zahl `x` um `0` ergibt `x`, umgewandelt in eine 32-Bit-Ganzzahl. Verwenden Sie nicht `>> 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
- [Rechtsschiebungs-Zuweisung (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Vorzeichenlose Rechtsschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
