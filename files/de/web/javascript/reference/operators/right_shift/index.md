---
title: Rechtsverschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **Rechtsverschiebungsoperator (`>>`)** gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung der ersten Operanden um die angegebene Anzahl von Bits nach rechts verschoben wird. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen, und Kopien des äußersten linken Bits werden von links hereingeschoben. Diese Operation wird auch als "zeichenbewahrende Rechtsverschiebung" oder "arithmetische Rechtsverschiebung" bezeichnet, da das Vorzeichen der resultierenden Zahl gleich dem Vorzeichen des ersten Operanden ist.

{{EmbedInteractiveExample("pages/js/expressions-right-shift.html")}}

## Syntax

```js-nolint
x >> y
```

## Beschreibung

Der `>>`-Operator ist für zwei Typen von Operanden überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [konvertiert zuerst beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Rechtsverschiebung durch, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert und eine Zahlen-Rechtsverschiebung wird durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere zu einer Zahl.

Da das neue äußerste linke Bit denselben Wert wie das vorherige äußerste linke Bit hat, ändert sich das Vorzeichenbit (das äußerste linke Bit) nicht. Daher der Name "zeichenbewahrend".

Der Operator arbeitet mit der Bit-Darstellung des linken Operanden in der [Zweierkomplementdarstellung](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (Basis 10): 00000000000000000000000000001001 (Basis 2)
    -9 (Basis 10): 11111111111111111111111111110111 (Basis 2)
```

Die binäre Darstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihrer Gegenzahl, die `9` und `00000000000000000000000000001001` im Binärformat ist, invertiert und `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr äußerstes linkes Bit angegeben: Bei der positiven Dezimalzahl `9` ist das äußerste linke Bit der binären Darstellung `0`, und bei der negativen Dezimalzahl `-9` ist das äußerste linke Bit der binären Darstellung `1`.

Angesichts dieser binären Darstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (Basis 10): 00000000000000000000000000001001 (Basis 2)
                  --------------------------------
9 >> 2 (Basis 10): 00000000000000000000000000000010 (Basis 2) = 2 (Basis 10)
```

Beachten Sie, wie zwei äußerste rechte Bits, `01`, verschoben wurden und zwei Kopien des äußersten linken Bits, `0`, von links hereingeschoben wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (Basis 10): 11111111111111111111111111110111 (Basis 2)
                   --------------------------------
-9 >> 2 (Basis 10): 11111111111111111111111111111101 (Basis 2) = -3 (Basis 10)
```

Beachten Sie, wie zwei äußerste rechte Bits, `11`, verschoben wurden. Aber was die äußersten linken Bits betrifft: In diesem Fall ist das äußerste linke Bit `1`. Daher wurden zwei Kopien dieses äußersten `1`-Bits von links hereingeschoben — was das negative Vorzeichen beibehält.

Die binäre Darstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, da alle negativen ganzen Zahlen als [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement) gespeichert werden, und diese kann berechnet werden, indem alle Bits der binären Darstellung der positiven Dezimalzahl (Basis 10) `3`, welche `00000000000000000000000000000011` ist, invertiert und dann eins hinzugefügt wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl konvertiert:

```plain
Vorher: 11100110111110100000000000000110000000000001
Nachher:              10100000000000000110000000000001
```

Der rechte Operand wird in eine nicht signierte 32-Bit-Ganzzahl konvertiert und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsoffset immer eine positive Ganzzahl zwischen 0 und 31 ist, einschließlich. Zum Beispiel ist `100 >> 32` dasselbe wie `100 >> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Trunkierung. Konzeptionell sollten positive BigInts als unendliche Anzahl führender `0`-Bits und negative BigInts als unendliche Anzahl führender `1`-Bits verstanden werden.

Das Rechtsverschieben einer beliebigen Zahl `x` um `0` ergibt `x` konvertiert in eine 32-Bit-Ganzzahl. Verwenden Sie nicht `>> 0`, um Zahlen in Ganzzahlen zu trunkieren; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung der Rechtsverschiebung

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
- [Zuweisung mit Rechtsverschiebung (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Rechtsverschiebung ohne Vorzeichen (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
