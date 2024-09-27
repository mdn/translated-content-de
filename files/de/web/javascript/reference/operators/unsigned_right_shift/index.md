---
title: Unsigned right shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Operators")}}

Der **unsigned right shift (`>>>`)** Operator gibt eine Zahl zurück, deren Binärdarstellung das Ergebnis des ersten Operanden ist, der um die angegebene Anzahl von Bits nach rechts verschoben wurde. Überflüssige Bits, die nach rechts verschoben werden, werden verworfen, und null Bits werden von links eingefügt. Diese Operation wird auch "Zero-Fill-Right-Shift" genannt, da das Vorzeichenbit zu `0` wird, sodass die resultierende Zahl immer positiv ist. Der Unsigned Right Shift akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## Syntax

```js-nolint
x >>> y
```

## Beschreibung

Im Gegensatz zu anderen arithmetischen und bitweisen Operatoren akzeptiert der Unsigned Right Shift Operator keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Dies liegt daran, dass er die linksseitigen Bits mit Nullen auffüllt, aber konzeptionell haben BigInts eine unendliche Anzahl von führenden Vorzeichenbits, sodass es kein "linksseitiges Bit" gibt, das mit Nullen gefüllt werden könnte.

Der Operator arbeitet mit der Bit-Darstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihrer Gegenzahl invertiert werden, was `9` ist und `00000000000000000000000000001001` binär entspricht, und `1` addiert wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linksseitiges Bit angegeben: Für die positive Dezimalzahl `9` ist das linksseitige Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das linksseitige Bit der Binärdarstellung `1`.

Gegeben diese Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

Für die positive Zahl `9` ergeben Zero-Fill-Right-Shift und [zeichenpropagierender Rechtsshift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) dasselbe Ergebnis: `9 >>> 2` ergibt `2`, dasselbe wie `9 >> 2`:

```plain
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechte Bits, `01`, verschoben wurden und zwei Nullen von links eingefügt wurden.

Beachten Sie jedoch, was bei `-9` passiert: `-9 >> 2` ([zeichenpropagierender Rechtsshift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, aber `-9 >>> 2` (Zero-Fill-Right-Shift) ergibt 1073741821:

```plain
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Beachten Sie, wie zwei rechte Bits, `11`, verschoben wurden. Bei `-9 >> 2` ([zeichenpropagierender Rechtsshift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) wurden zwei Kopien des linksseitigen `1`-Bits von links eingefügt, was das negative Vorzeichen beibehält. Andererseits, bei `-9 >>> 2` (Zero-Fill-Right-Shift) wurden stattdessen Nullen von links eingefügt, sodass das negative Vorzeichen der Zahl nicht erhalten bleibt und das Ergebnis stattdessen eine (große) positive Zahl ist.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine unsignierte 32-Bit-Ganzzahl konvertiert und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsoffset immer eine positive Ganzzahl zwischen 0 und 31, inklusive, ist. Zum Beispiel ist `100 >>> 32` dasselbe wie `100 >>> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

## Beispiele

### Verwendung von Unsigned Right Shift

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

Unsigned Right Shift funktioniert nicht mit BigInts.

```js
9n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Unsigned Right Shift Zuweisung (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
