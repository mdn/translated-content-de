---
title: Vorzeichenlose Rechtsschiebung (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Operators")}}

Der **vorzeichenlose Rechtsschiebungsoperator (`>>>`)** gibt eine Zahl zurück, deren binäre Darstellung dem ersten Operanden entspricht, der um die angegebene Anzahl von Bits nach rechts verschoben wird. Überzählige Bits, die nach rechts verschoben werden, werden verworfen, und von links werden Nullen eingeschoben. Diese Operation wird auch "zero-filling right shift" genannt, weil das Vorzeichenbit zu `0` wird, so dass das Ergebnis immer positiv ist. Vorzeichenlose Rechtsschiebung akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift.html")}}

## Syntax

```js-nolint
x >>> y
```

## Beschreibung

Im Unterschied zu anderen arithmetischen und bitweisen Operatoren akzeptiert der vorzeichenlose Rechtsschiebungsoperator keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Dies liegt daran, dass er die linkesten Bits mit Nullen auffüllt, aber konzeptionell haben BigInts eine unendliche Anzahl führender Vorzeichenbits, so dass es kein "linkestes Bit" gibt, das mit Nullen aufgefüllt werden könnte.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden in [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (Basis 10): 00000000000000000000000000001001 (Basis 2)
    -9 (Basis 10): 11111111111111111111111111110111 (Basis 2)
```

Die binäre Darstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihres Gegenteils invertiert werden, das `9` und `00000000000000000000000000001001` in Binär ist, und `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der binären Zahl durch ihr linkestes Bit angegeben: Für die positive Dezimalzahl `9` ist das linkeste Bit der binären Darstellung `0`, und für die negative Dezimalzahl `-9` ist das linkeste Bit der binären Darstellung `1`.

Für die positiven Zahlen `9`, ergeben sowohl das Zero-Fill-Right-Shift als auch das [vorzeichenbehaftete Rechtsschieben](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) dasselbe Ergebnis: `9 >>> 2` ergibt `2`, gleich wie `9 >> 2`:

```plain
      9 (Basis 10): 00000000000000000000000000001001 (Basis 2)
                   --------------------------------
9 >>  2 (Basis 10): 00000000000000000000000000000010 (Basis 2) = 2 (Basis 10)
9 >>> 2 (Basis 10): 00000000000000000000000000000010 (Basis 2) = 2 (Basis 10)
```

Beachten Sie, wie zwei rechteste Bits, `01`, verschoben wurden, und zwei Nullen von links eingeshiftet wurden.

Beachten Sie jedoch, was mit `-9` passiert: `-9 >> 2` ([vorzeichenbehaftetes Rechtsschieben](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, aber `-9 >>> 2` (zero-fill right shift) ergibt 1073741821:

```plain
      -9 (Basis 10): 11111111111111111111111111110111 (Basis 2)
                    --------------------------------
-9 >>  2 (Basis 10): 11111111111111111111111111111101 (Basis 2) = -3 (Basis 10)
-9 >>> 2 (Basis 10): 00111111111111111111111111111101 (Basis 2) = 1073741821 (Basis 10)
```

Beachten Sie, wie zwei rechteste Bits, `11`, verschoben wurden. Bei `-9 >> 2` ([vorzeichenbehaftetes Rechtsschieben](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)), wurden zwei Kopien des linkesten `1` Bits von links eingeshiftet, was das negative Vorzeichen bewahrt. Andererseits, bei `-9 >>> 2` (zero-fill right shift), wurden stattdessen Nullen von links eingeshiftet, so dass das negative Vorzeichen der Zahl nicht bewahrt wird, und das Ergebnis stattdessen eine (große) positive Zahl ist.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Vorher: 11100110111110100000000000000110000000000001
Nachher:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, so dass das tatsächliche Verschiebeoffset immer eine positive Ganzzahl zwischen 0 und 31, einschließlich, sein wird. Zum Beispiel, `100 >>> 32` ist dasselbe wie `100 >>> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

## Beispiele

### Verwendung der vorzeichenlosen Rechtsschiebeoperation

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

Die vorzeichenlose Rechtsschiebeoperation funktioniert nicht mit BigInts.

```js
9n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Vorzeichenlose Rechtsschiebezuweisung (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
