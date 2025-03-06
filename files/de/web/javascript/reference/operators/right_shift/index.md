---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Rechtsschiebungs-Operator (`>>`)** gibt eine Zahl oder ein BigInt zurück, dessen Binärdarstellung sich aus dem ersten Operanden ergibt, der um die angegebene Anzahl von Bits nach rechts verschoben wird. Überzählige Bits, die nach rechts verschoben werden, werden verworfen, und Kopien des am weitesten links stehenden Bits werden von links eingefügt. Diese Operation wird auch "Vorzeichen-erhaltende Rechtsschiebung" oder "arithmetische Rechtsschiebung" genannt, da das Vorzeichen der resultierenden Zahl das gleiche ist wie das des ersten Operanden.

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

Der `>>` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Zunächst werden [beide Operanden zu numerischen Werten gewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und ihre Typen getestet. Es wird eine BigInt-Rechtsschiebung durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden zu [32-Bit Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und eine Zahl-Rechtsschiebung durchgeführt. Ein {{jsxref("TypeError")}} wird geworfen, wenn ein Operand zu einem BigInt, der andere jedoch zu einer Zahl wird.

Da das neue am weitesten links stehende Bit denselben Wert wie das vorherige am weitesten links stehende Bit hat, ändert sich das Vorzeichenbit (das am weitesten links stehende Bit) nicht. Daher der Name "Vorzeichen-erhaltend".

Der Operator arbeitet auf der Bitdarstellung des linken Operanden in [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits der gegenüberliegenden Zahl, welche `9` ist und `00000000000000000000000000001001` in Binär, invertiert und `1` hinzugefügt werden.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr am weitesten links stehendes Bit angezeigt: Für die positive Dezimalzahl `9` ist das am weitesten links stehende Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das am weitesten links stehende Bit der Binärdarstellung `1`.

Gegeben diese Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie die beiden am weitesten rechts stehenden Bits, `01`, abgeschoben wurden, und zwei Kopien des am weitesten links stehenden Bits, `0`, von links eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie die beiden am weitesten rechts stehenden Bits, `11`, abgeschoben wurden. Aber hinsichtlich der am weitesten links stehenden Bits: In diesem Fall ist das am weitesten links stehende Bit `1`. So wurden zwei Kopien dieses am weitesten links stehenden `1` Bits von links eingefügt — was das negative Vorzeichen bewahrt.

Die Binärdarstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, weil alle negativen Ganzzahlen als [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement) gespeichert werden, und diese kann berechnet werden, indem alle Bits der Binärdarstellung der positiven Dezimalzahl (Basis 10) `3`, welche `00000000000000000000000000000011` ist, invertiert und dann eins hinzugefügt wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine unsignierte 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, so dass der tatsächliche Verschiebeversatz immer eine positive Ganzzahl zwischen 0 und 31, einschließlich beider, sein wird. Zum Beispiel ist `100 >> 32` das gleiche wie `100 >> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Abschneidung. Konzeptuell können positive BigInts als mit einer unendlichen Anzahl führender `0` Bits und negative BigInts als mit einer unendlichen Anzahl führender `1` Bits verstanden werden.

Ein Rechtsverschieben einer beliebigen Nummer `x` um `0` ergibt `x` konvertiert in eine 32-Bit Ganzzahl. Verwenden Sie nicht `>> 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers) stattdessen.

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
- [Unsignierte Rechtsschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
