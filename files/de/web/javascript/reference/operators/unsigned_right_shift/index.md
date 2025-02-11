---
title: Unsigned Right Shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Unsigned Right Shift (`>>>`)**-Operator gibt eine Zahl zurück, deren binäre Darstellung durch Verschieben des ersten Operanden um die angegebene Anzahl von Bits nach rechts entsteht. Überzählige Bits, die nach rechts verschoben wurden, werden verworfen, und von der linken Seite werden Nullen eingefügt. Dieser Vorgang wird auch als "Zero-Filling Right Shift" bezeichnet, da das Vorzeichen-Bit zu `0` wird, wodurch das Ergebnis immer positiv ist. Der Unsigned Right Shift akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

{{InteractiveExample("JavaScript Demo: Expressions - Unsigned right shift operator")}}

```js interactive-example
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; //  11111111111111111111111111111011

console.log(a >>> b); //  00000000000000000000000000000001
// Expected output: 1

console.log(c >>> b); //  00111111111111111111111111111110
// Expected output: 1073741822
```

## Syntax

```js-nolint
x >>> y
```

## Beschreibung

Im Gegensatz zu anderen arithmetischen und bitweisen Operatoren akzeptiert der Unsigned Right Shift-Operator keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Das liegt daran, dass er die linkesten Bits mit Nullen auffüllt, aber konzeptionell haben BigInts eine unendliche Anzahl führender Vorzeichenbits, sodass es kein "linkestes Bit" gibt, das mit Nullen gefüllt werden könnte.

Der Operator arbeitet auf der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung der negativen Dezimalzahl (Basis 10) `-9` im Zweierkomplement wird gebildet, indem alle Bits der gegenteiligen Zahl, nämlich `9` (`00000000000000000000000000001001` im Binärsystem), invertiert und `1` hinzugefügt werden.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linkestes Bit angegeben: Bei der positiven Dezimalzahl `9` ist das linkeste Bit der Binärdarstellung `0`, und bei der negativen Dezimalzahl `-9` ist das linkeste Bit der Binärdarstellung `1`.

Angesichts dieser Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

Für die Zahl `9` (positiv) ergibt "Zero-Fill Right Shift" und der [sign-propagating Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) dasselbe Ergebnis: `9 >>> 2` ergibt `2`, genau wie `9 >> 2`:

```plain
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechte Bits, `01`, verschoben wurden und zwei Nullen von links eingefügt wurden.

Beachten Sie jedoch, was mit `-9` passiert: `-9 >> 2` ([sign-propagating Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, während `-9 >>> 2` (Zero-Fill Right Shift) 1073741821 ergibt:

```plain
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Beachten Sie, wie zwei rechte Bits, `11`, verschoben wurden. Bei `-9 >> 2` ([sign-propagating Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) wurden zwei Kopien des linken `1`-Bits von links eingefügt, wodurch das negative Vorzeichen erhalten bleibt. Beim `-9 >>> 2` (Zero-Fill Right Shift) wurden stattdessen Nullen von links eingefügt, sodass das negative Vorzeichen der Zahl nicht erhalten bleibt und das Ergebnis stattdessen eine (große) positive Zahl ist.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchstwertigen Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebe-Offset immer eine positive Ganzzahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel ist `100 >>> 32` dasselbe wie `100 >>> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

## Beispiele

### Verwendung des Unsigned Right Shift

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

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Unsigned Right Shift Assignment (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
