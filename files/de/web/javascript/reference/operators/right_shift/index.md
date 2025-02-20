---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Rechtsschiebungsoperator (`>>`)** gibt eine Zahl oder einen `BigInt` zurück, deren binäre Darstellung der des ersten Operanden entspricht, verschoben um die angegebene Anzahl von Bits nach rechts. Überschüssige Bits, die nach rechts verschoben werden, werden verworfen, und Kopien des äußersten linken Bits werden von links eingefügt. Dieser Vorgang wird auch "vorzeichenbewahrende Rechtsschiebung" oder "arithmetische Rechtsschiebung" genannt, da das Vorzeichen der resultierenden Zahl das gleiche wie das Vorzeichen des ersten Operanden ist.

{{InteractiveExample("JavaScript Demo: Expressions - Right shift operator")}}

```js interactive-example
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; //  11111111111111111111111111111011

console.log(a >> b); //  00000000000000000000000000000001
// Expected output: 1

console.log(c >> b); //  11111111111111111111111111111110
// Expected output: -2
```

## Syntax

```js-nolint
x >> y
```

## Beschreibung

Der Operator `>>` ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für `BigInts` gibt der Operator einen `BigInt` zurück. Zunächst werden beide Operanden [in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und ihre Typen überprüft. Die Rechte-Schiebung für `BigInt` wird durchgeführt, wenn beide Operanden zu `BigInt` werden; andernfalls werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt, und die Rechtsschiebung für Zahlen wird durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem `BigInt` wird, der andere jedoch zu einer Zahl.

Da das neue äußerste linke Bit den gleichen Wert wie das vorherige äußerste linke Bit hat, ändert sich das Vorzeichenbit (das äußerste linke Bit) nicht. Daher der Name "vorzeichenbewahrend".

Der Operator arbeitet auf der Bit-Darstellung des linken Operanden in [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Betrachten Sie die 32-Bit-binären Darstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl `-9` wird gebildet, indem alle Bits der Zahl mit entgegengesetztem Vorzeichen, die `9` ist (`00000000000000000000000000001001` in Binär), invertiert und dann `1` addiert werden.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr äußerstes linkes Bit gegeben: Für die positive Dezimalzahl `9` ist das äußerste linke Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das äußerste linke Bit der Binärdarstellung `1`.

Angesichts dieser Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei äußerste rechte Bits, `01`, verschoben wurden, und zwei Kopien des äußersten linken Bits, `0`, von links eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie zwei äußerste rechte Bits, `11`, verschoben wurden. Was jedoch die äußersten linken Bits betrifft: In diesem Fall ist das äußerste linke Bit `1`. Es wurden also zwei Kopien dieses äußersten `1`-Bits von links eingefügt – was das negative Vorzeichen beibehält.

Die Binärdarstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, da alle negativen Ganzzahlen im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement) gespeichert werden. Diese kann berechnet werden, indem alle Bits der Binärdarstellung der positiven Dezimalzahl (Basis 10) `3` (`00000000000000000000000000000011`) invertiert und dann eins addiert werden.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen vorzeichenlosen 32-Bit-Integer umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungswert immer eine positive ganze Zahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel ist `100 >> 32` dasselbe wie `100 >> 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für `BigInts` gibt es keine Trunkierung. Konzeptuell können Sie positive `BigInts` als eine unendliche Anzahl führender `0`-Bits und negative `BigInts` als eine unendliche Anzahl führender `1`-Bits verstehen.

Das Rechtsschieben einer beliebigen Zahl `x` um `0` ergibt `x`, umgewandelt in einen 32-Bit-Integer. Vermeiden Sie es, `>> 0` zu verwenden, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
- [Vorzeichenlose Rechtsschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
