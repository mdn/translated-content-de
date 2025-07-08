---
title: Bitweises NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **bitweise NICHT-Operator (`~`)** gibt eine Zahl oder ein BigInt zurück, deren binäre Darstellung in jeder Bitposition, für die das entsprechende Bit des Operanden `0` ist, eine `1` und ansonsten eine `0` hat.

{{InteractiveExample("JavaScript Demo: Bitweise NICHT (~) Operator")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

console.log(~b); // 00000000000000000000000000000010
// Expected output: 2
```

## Syntax

```js-nolint
~x
```

## Beschreibung

Der `~` Operator ist überladen für zwei Typen von Operanden: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt den Operanden zuerst zu einem numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft dessen Typ. Er führt BigInt NICHT aus, wenn der Operand zu einem BigInt wird; andernfalls wird der Operand in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und das bitweise NICHT für Zahlen durchgeführt.

Der Operator arbeitet mit den Bitdarstellungen der Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für den NICHT-Operator lautet:

| x   | NICHT x |
| --- | ------- |
| 0   | 1       |
| 1   | 0       |

```plain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Das bitweise NICHT einer beliebigen 32-Bit-Ganzzahl `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` `4`.

Zahlen mit mehr als 32 Bits verlieren ihre höchstwertigen Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Sie werden möglicherweise Personen sehen, die `~~` verwenden, um Zahlen auf Ganzzahlen zu kürzen. Ein zweimaliges Anwenden des bitweisen NICHT-Operators auf eine beliebige Zahl `x` gibt `x` als 32-Bit-Ganzzahl zurück, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptuell können Sie positive BigInts als eine unendliche Anzahl führender `0`-Bits verstehen und negative BigInts als eine unendliche Anzahl führender `1`-Bits.

## Beispiele

### Verwendung von bitweisem NICHT

```js
~0; // -1
~-1; // 0
~1; // -2

~0n; // -1n
~4294967295n; // -4294967296n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
