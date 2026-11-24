---
title: Vorzeichenlose Rechtsverschiebung (>>>)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für die **vorzeichenlose Rechtsverschiebung (`>>>`)** gibt eine Zahl zurück, deren Binärdarstellung der des ersten Operanden entspricht, um die angegebene Anzahl von Bits nach rechts verschoben. Bits, die dabei rechts herausgeschoben werden, gehen verloren; von links werden Nullen nachgeschoben. Diese Operation wird auch als „Rechtsverschiebung mit Nullauffüllung“ bezeichnet. Da das Vorzeichenbit dadurch `0` wird, ist das Ergebnis immer positiv. Die vorzeichenlose Rechtsverschiebung akzeptiert keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 10 (bitweise Verschiebung). Sein Wert wird in eine [vorzeichenlose 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 11 (Addition). Sein Wert wird in eine [vorzeichenlose 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt. Die fünf niederwertigsten Bits bestimmen die Anzahl der Stellen, um die verschoben wird.

### Rückgabewert

Eine vorzeichenlose 32-Bit-Ganzzahl, die `x` um die angegebene Anzahl von Stellen nach rechts verschoben darstellt, wobei von links Nullen nachgeschoben werden.

## Beschreibung

Anders als andere arithmetische und bitweise Operatoren akzeptiert der Operator für die vorzeichenlose Rechtsverschiebung keine [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte. Der Grund ist, dass er die Bits ganz links mit Nullen auffüllt. Konzeptionell haben BigInts jedoch unendlich viele führende Vorzeichenbits; es gibt daher kein „Bit ganz links“, das mit Nullen aufgefüllt werden könnte.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung der negativen Dezimalzahl (Basis 10) `-9` im Zweierkomplement entsteht, indem alle Bits der entsprechenden positiven Zahl `9`, binär `00000000000000000000000000001001`, invertiert werden und anschließend `1` addiert wird.

In beiden Fällen gibt das Bit ganz links das Vorzeichen der Binärzahl an: Bei der positiven Dezimalzahl `9` ist es `0`, bei der negativen Dezimalzahl `-9` ist es `1`.

Ausgehend von diesen Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9` gilt:

Bei der positiven Zahl `9` liefern die Rechtsverschiebung mit Nullauffüllung und die [vorzeichenerhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) dasselbe Ergebnis: `9 >>> 2` ergibt `2`, genau wie `9 >> 2`:

```plain
      9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>  2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, dass die beiden Bits ganz rechts, `01`, herausgeschoben und von links zwei Nullen nachgeschoben wurden.

Bei `-9` ist das Ergebnis dagegen unterschiedlich: `-9 >> 2` ([vorzeichenerhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) ergibt `-3`, während `-9 >>> 2` (Rechtsverschiebung mit Nullauffüllung) 1073741821 ergibt:

```plain
      -9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>  2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

Beachten Sie, dass die beiden Bits ganz rechts, `11`, herausgeschoben wurden. Bei `-9 >> 2` ([vorzeichenerhaltende Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)) wurden von links zwei Kopien des ganz links stehenden Bits `1` nachgeschoben. Dadurch bleibt das negative Vorzeichen erhalten. Bei `-9 >>> 2` (Rechtsverschiebung mit Nullauffüllung) wurden stattdessen von links Nullen nachgeschoben. Das negative Vorzeichen der Zahl bleibt daher nicht erhalten; das Ergebnis ist eine (große) positive Zahl.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchstwertigen Bits verworfen. Beispielsweise wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine vorzeichenlose 32-Bit-Ganzzahl umgewandelt; anschließend wird sein Wert modulo 32 genommen. Die tatsächliche Anzahl der Stellen, um die verschoben wird, ist daher immer eine Ganzzahl zwischen 0 und 31 einschließlich. Beispielsweise ist `100 >>> 32` gleich `100 >>> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

## Beispiele

### Vorzeichenlose Rechtsverschiebung verwenden

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

Die vorzeichenlose Rechtsverschiebung funktioniert nicht mit BigInts.

```js
9n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Zuweisung mit vorzeichenloser Rechtsverschiebung (`>>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
