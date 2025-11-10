---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Rechtsschiebeoperator (`>>`)** gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung um die angegebene Anzahl von Bits nach rechts verschoben ist. Überzählige nach rechts verschobene Bits werden verworfen, und Kopien des am weitesten links stehenden Bits werden von links eingefügt. Diese Operation wird auch als "zeichenbehaftete Rechtsschiebung" oder "arithmetische Rechtsschiebung" bezeichnet, da das Vorzeichen der resultierenden Zahl dasselbe wie das Vorzeichen des ersten Operanden ist.

{{InteractiveExample("JavaScript Demo: Right shift (>>) operator")}}

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

Der `>>`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator einen BigInt zurück. Zunächst [zwingt er beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Rechtsschiebung durch, wenn beide Operanden BigInts werden; andernfalls konvertiert er beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt eine Zahl-Rechtsschiebung durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Da das neue am weitesten links stehende Bit denselben Wert wie das vorherige am weitesten links stehende Bit hat, ändert sich das Vorzeichenbit (das am weitesten links stehende Bit) nicht. Daher der Name "zeichenbehaftet".

Der Operator arbeitet an der Bitdarstellung des linken Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-binären Darstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die binäre Darstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihrer Gegennummer invertiert werden, was `9` und `00000000000000000000000000001001` in Binärform ist, und `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr am weitesten links stehendes Bit angegeben: Für die positive Dezimalzahl `9` ist das am weitesten links stehende Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das am weitesten links stehende Bit der Binärdarstellung `1`.

Angesichts dieser binären Darstellungen der dezimalen (Basis 10) Zahlen `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei am weitesten rechts stehende Bits, `01`, verschoben wurden, und zwei Kopien des am weitesten links stehenden Bits, `0`, von links eingefügt wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie zwei am weitesten rechts stehende Bits, `11`, verschoben wurden. Aber hinsichtlich der am weitesten links stehenden Bits: In diesem Fall ist das am weitesten links stehende Bit `1`. Daher wurden zwei Kopien dieses am weitesten links stehenden `1`-Bits von links eingefügt — was das negative Vorzeichen erhält.

Die binäre Darstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, da alle negativen Ganzzahlen als [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement) gespeichert werden, und diese kann berechnet werden, indem alle Bits der binären Darstellung der positiven Dezimalzahl (Basis 10) `3`, was `00000000000000000000000000000011` ist, invertiert und dann eins hinzugefügt wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine nicht signierte 32-Bit-Ganzzahl konvertiert und dann Modulo 32 genommen, sodass die tatsächliche Verschiebung immer eine positive Ganzzahl zwischen 0 und 31, einschließlich, sein wird. Zum Beispiel ist `100 >> 32` dasselbe wie `100 >> 0` (und ergibt `100`), da 32 Modulo 32 gleich 0 ist.

> [!WARNING]
> Möglicherweise sehen Sie, dass Leute `>> 0` verwenden, um Zahlen auf Ganzzahlen zu kürzen. Das Rechtsschieben einer beliebigen Zahl `x` um `0` gibt `x` als 32-Bit-Ganzzahl zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptionell sollten positive BigInts als unendliche Anzahl von führenden `0`-Bits und negative BigInts als unendliche Anzahl von führenden `1`-Bits verstanden werden.

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
- [Rechtsschiebungszuweisung (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Nicht signierte Rechtsschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
