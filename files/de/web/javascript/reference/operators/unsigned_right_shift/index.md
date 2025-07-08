---
title: Unsigned Right Shift (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **unsigned right shift (`>>>`)**-Operator gibt eine Zahl zurück, deren binaere Darstellung das Bitmuster des ersten Operanden um die angegebene Anzahl von Bits nach rechts verschoben ist. Überschüssige Bits, die nach rechts verschoben werden, gehen verloren, und null Bits werden von links eingefügt. Diese Operation wird auch "Zero-Filling Right Shift" genannt, weil das Vorzeichenbit `0` wird, sodass die resultierende Zahl immer positiv ist. Der Unsigned Right Shift akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

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

Im Gegensatz zu anderen arithmetischen und bitweisen Operatoren akzeptiert der Unsigned Right Shift-Operator keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Dies liegt daran, dass er die am weitesten links stehenden Bits mit Nullen füllt, aber BigInts konzeptionell eine unendliche Anzahl von führenden Vorzeichenbits haben, sodass es kein "am weitesten links stehendes Bit" gibt, das mit Nullen gefüllt werden könnte.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden in [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihrer gegenteiligen Zahl invertiert werden, was `9` und `00000000000000000000000000001001` im Binärsystem entspricht, und `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch das am weitesten links stehende Bit angegeben: Für die positive Dezimalzahl `9` ist das am weitesten links stehende Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das am weitesten links stehende Bit der Binärdarstellung `1`.

Angesichts dieser Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

Für die positive Zahl `9` ergeben Zero-Fill Right Shift und [Sign-Propagation Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) dasselbe Ergebnis: `9 >>> 2` ergibt `2`, dasselbe wie `9 >> 2`:

```plain
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechtstehende Bits, `01`, abgeschnitten wurden und zwei Nullen von links eingefügt wurden.

Beachten Sie jedoch, was bei `-9` passiert: `-9 >> 2` ([Sign-Propagation Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, aber `-9 >>> 2` (Zero-Fill Right Shift) ergibt 1073741821:

```plain
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Beachten Sie, wie zwei rechtstehende Bits, `11`, abgeschnitten wurden. Bei `-9 >> 2` ([Sign-Propagation Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) wurden zwei Kopien des am weitesten links stehenden Bits `1` von links eingefügt, was das negative Vorzeichen erhält. Auf der anderen Seite wurden bei `-9 >>> 2` (Zero-Fill Right Shift) stattdessen Nullen von links eingefügt, sodass das negative Vorzeichen der Zahl nicht erhalten bleibt, und das Ergebnis eine (große) positive Zahl ist.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine unsigned 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsversatz immer eine positive Ganzzahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel ist `100 >>> 32` dasselbe wie `100 >>> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

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
- [Unsigned Right Shift-Zuweisung (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
