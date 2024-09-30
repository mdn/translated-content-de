---
title: Unsigned right shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Operators")}}

Der **unsigned right shift (`>>>`)**-Operator gibt eine Zahl zurück, deren Binärdarstellung um die angegebene Anzahl von Bits nach rechts verschoben wird. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen, und Nullen werden von links eingefügt. Diese Operation wird auch als "Nullfüllung-Rechtsverschiebung" bezeichnet, da das Vorzeichenbit `0` wird, sodass die resultierende Zahl immer positiv ist. Der unsigned right shift akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## Syntax

```js-nolint
x >>> y
```

## Beschreibung

Im Gegensatz zu anderen arithmetischen und bitweisen Operatoren akzeptiert der unsigned right shift-Operator keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Dies liegt daran, dass er die linken Bits mit Nullen füllt, aber konzeptionell haben BigInts eine unendliche Anzahl führender Vorzeichenbits, sodass es kein "linkes Bit" gibt, das mit Nullen gefüllt werden kann.

Der Operator arbeitet auf der Bitdarstellung des linken Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl `-9` wird gebildet, indem alle Bits der entgegengesetzten Zahl umgekehrt werden, was `9` und `00000000000000000000000000001001` im Binärsystem entspricht, und `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linkes Bit angegeben: Für die positive Dezimalzahl `9` ist das linke Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das linke Bit der Binärdarstellung `1`.

Gegeben sind diese Binärdarstellungen der Dezimalzahlen `9` und `-9`:

Für die positive Zahl `9` ergibt die Nullfüllung-Rechtsverschiebung und die [Vorzeichen-erhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) das gleiche Ergebnis: `9 >>> 2` ergibt `2`, dasselbe wie `9 >> 2`:

```plain
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechts liegende Bits, `01`, verschoben wurden und zwei Nullen von links eingefüllt wurden.

Beachten Sie jedoch, was bei `-9` passiert: `-9 >> 2` ([Vorzeichen-erhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, aber `-9 >>> 2` (Nullfüllung-Rechtsverschiebung) ergibt 1073741821:

```plain
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Beachten Sie, wie zwei rechts liegende Bits, `11`, verschoben wurden. Für `-9 >> 2` ([Vorzeichen-erhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) wurden zwei Kopien des linken `1`-Bits von links eingefügt, wodurch das negative Vorzeichen beibehalten wird. Andererseits wurden bei `-9 >>> 2` (Nullfüllung-Rechtsverschiebung) stattdessen Nullen von links eingefüllt, sodass das negative Vorzeichen der Zahl nicht erhalten bleibt und das Ergebnis stattdessen eine (große) positive Zahl ist.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die signifikantesten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine unvorzeichenbehaftete 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsversatz immer eine positive Ganzzahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel ist `100 >>> 32` dasselbe wie `100 >>> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

## Beispiele

### Verwendung von unsigned right shift

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

Unsigned right shift funktioniert nicht mit BigInts.

```js
9n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Unsigned right shift assignment (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
