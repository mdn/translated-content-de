---
title: Rechtsschiebung (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Rechtsschiebungsoperator (`>>`)** gibt eine Zahl oder einen BigInt zurück, deren binäre Darstellung der ersten Operand um die angegebene Anzahl von Bits nach rechts verschoben ist. Überzählige Bits, die nach rechts verschoben werden, werden verworfen, und Kopien des linkesten Bits werden von links hereingeschoben. Diese Operation wird auch als "vorzeichenverbreitende Rechtsschiebung" oder "arithmetische Rechtsschiebung" bezeichnet, da das Vorzeichen der resultierenden Zahl das gleiche ist wie das Vorzeichen des ersten Operanden.

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

Der `>>`-Operator ist überladen für zwei Typen von Operanden: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Integer zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst [zwingt er beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Rechtsschiebung durch, wenn beide Operanden BigInts werden; andernfalls konvertiert er beide Operanden zu [32-Bit-Integers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt eine Zahl-Rechtsschiebung durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Da das neue linkeste Bit denselben Wert wie das vorherige linkeste Bit hat, ändert sich das Vorzeichenbit (das linkeste Bit) nicht. Daher der Name "vorzeichenverbreitend".

Der Operator arbeitet an der Bit-Darstellung des linken Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Betrachten Sie die 32-Bit-Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
    -9 (base 10): 11111111111111111111111111110111 (base 2)
```

Die Binärdarstellung im Zweierkomplement der negativen Dezimalzahl (Basis 10) `-9` wird gebildet, indem alle Bits ihrer Gegenzahl invertiert werden, also `9` und `00000000000000000000000000001001` in binär, und dann `1` hinzugefügt wird.

In beiden Fällen wird das Vorzeichen der Binärzahl durch ihr linkestes Bit angegeben: Für die positive Dezimalzahl `9` ist das linkeste Bit der Binärdarstellung `0`, und für die negative Dezimalzahl `-9` ist das linkeste Bit der Binärdarstellung `1`.

Angesichts dieser Binärdarstellungen der Dezimalzahlen (Basis 10) `9` und `-9`:

`9 >> 2` ergibt 2:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

Beachten Sie, wie zwei rechtese Bits, `01`, abgeschoben wurden, und zwei Kopien des linkesten Bits, `0`, von links hereingeschoben wurden.

`-9 >> 2` ergibt `-3`:

```plain
     -9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

Beachten Sie, wie zwei rechtese Bits, `11`, abgeschoben wurden. Aber was die linkesten Bits betrifft: In diesem Fall ist das linkeste Bit `1`. Somit wurden zwei Kopien dieses linkesten `1`-Bits von links hereingeschoben — was das negative Vorzeichen beibehält.

Die Binärdarstellung `11111111111111111111111111111101` entspricht der negativen Dezimalzahl (Basis 10) `-3`, weil alle negativen Ganzzahlen als [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement) gespeichert werden, und diese kann berechnet werden, indem alle Bits der Binärdarstellung der positiven Dezimalzahl (Basis 10) `3` invertiert werden, welche `00000000000000000000000000000011` ist, und dann eins hinzugefügt wird.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in ein unsigniertes 32-Bit-Integer umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungsversatz immer eine positive Ganzzahl zwischen 0 und 31, einschließlich ist. Zum Beispiel ist `100 >> 32` dasselbe wie `100 >> 0` (und ergibt `100`), weil 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Trunkierung. Konzeptuell werden positive BigInts als unendliche Anzahl von führenden `0`-Bits betrachtet, und negative BigInts haben eine unendliche Anzahl von führenden `1`-Bits.

Eine Rechtsschiebung einer beliebigen Zahl `x` um `0` ergibt `x` umgewandelt in eine 32-Bit-Integer. Verwenden Sie nicht `>> 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

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
- [Right shift assignment (`>>=`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
