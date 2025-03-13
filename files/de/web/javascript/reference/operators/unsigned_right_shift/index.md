---
title: Unsigned Right Shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **unsigned right shift (`>>>`)** Operator gibt eine Zahl zurück, deren binäre Darstellung um die angegebene Anzahl von Bits nach rechts verschoben wird. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen, und Null-Bits werden von links eingefügt. Diese Operation wird auch "Nullauffüllung-Rechtsschiebung" genannt, da das Vorzeichenbit `0` wird, sodass die resultierende Zahl immer positiv ist. Der Unsigned Right Shift akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

{{InteractiveExample("JavaScript Demo: Unsigned right shift (>>>) operator")}}

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

Im Gegensatz zu anderen arithmetischen und bitweisen Operatoren akzeptiert der Unsigned Right Shift Operator keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Dies liegt daran, dass er die linksseitigsten Bits mit Nullen auffüllt, aber konzeptionell haben BigInts eine unendliche Anzahl führender Vorzeichenbits, sodass es kein "linksseitiges Bit" gibt, das mit Nullen aufgefüllt werden könnte.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der dezimalen (Basis 10) Zahlen `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die binäre Darstellung im Zweierkomplement der negativen dezimalen (Basis 10) Zahl `-9` wird gebildet, indem alle Bits der Gegenzahl invertiert werden, die `9` ist und `00000000000000000000000000001001` in binärer Form ist, und `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linksseitigstes Bit angegeben: Für die positive dezimale Zahl `9` ist das linksseitigste Bit der Binärdarstellung `0`, und für die negative dezimale Zahl `-9` ist das linksseitigste Bit der Binärdarstellung `1`.

Angesichts dieser binären Darstellungen der dezimalen (Basis 10) Zahlen `9` und `-9`:

Für die positive Zahl `9` ergeben die Nullauffüllung-Rechtsschiebung und die [zeichenerhaltende Rechtsschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) das gleiche Ergebnis: `9 >>> 2` ergibt `2`, dasselbe wie `9 >> 2`:

```plain
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechteste Bits, `01`, verschoben wurden und zwei Nullen von links eingefügt wurden.

Beachten Sie jedoch, was bei `-9` passiert: `-9 >> 2` ([zeichenerhaltende Rechtsschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, aber `-9 >>> 2` (Nullauffüllung-Rechtsschiebung) ergibt 1073741821:

```plain
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Beachten Sie, wie zwei rechteste Bits, `11`, verschoben wurden. Für `-9 >> 2` ([zeichenerhaltende Rechtsschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) wurden zwei Kopien des linksseitigsten `1`-Bits von links eingefügt, was das negative Vorzeichen bewahrt. Andererseits wurden für `-9 >>> 2` (Nullauffüllung-Rechtsschiebung) stattdessen Nullen von links eingefügt, sodass das negative Vorzeichen der Zahl nicht bewahrt wird, und das Ergebnis ist stattdessen eine (große) positive Zahl.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine nicht negative 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Schiebeversatz immer eine positive Ganzzahl zwischen 0 und 31 ist, einschließlich. Zum Beispiel ist `100 >>> 32` dasselbe wie `100 >>> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

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

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Unsigned Right Shift Zuweisung (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
