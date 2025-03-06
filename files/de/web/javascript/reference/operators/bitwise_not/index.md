---
title: Bitweises NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **bitweise NICHT-Operator (`~`)** liefert eine Zahl oder ein BigInt, deren binäre Darstellung an jeder Bitposition, bei der das entsprechende Bit des Operanden `0` ist, eine `1` aufweist, und sonst eine `0`.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise NOT")}}

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

Der `~`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [erzwungen den Operanden zu einem numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft den Typ davon. Er führt ein BigInt-NICHT aus, wenn der Operand zu einem BigInt wird; andernfalls konvertiert er den Operanden in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt ein bitweises NICHT für Zahlen aus.

Der Operator arbeitet auf den Bitdarstellungen der Operanden im [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Der Operator wird auf jedes Bit angewandt, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die NICHT-Operation ist:

| x   | NICHT x |
| --- | ------- |
| 0   | 1       |
| 1   | 0       |

```plain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Zahlen mit mehr als 32 Bits haben ihre bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Bei BigInts gibt es keine Trunkierung. Konzeptionell kann man sich positive BigInts als unendlich viele führende `0`-Bits und negative BigInts als unendlich viele führende `1`-Bits vorstellen.

Das bitweise NICHT von jeder 32-Bit-Ganzzahl `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` den Wert `4`.

Das bitweise NICHT von jeder Zahl `x` zweimal angewandt, gibt `x`, konvertiert in eine 32-Bit-Ganzzahl, zurück. Verwenden Sie nicht `~~x`, um Zahlen auf Ganzzahlen zu beschränken; nutzen Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers). Aufgrund der Nutzung von 32-Bit-Darstellungen für Zahlen führen sowohl `~-1` als auch `~4294967295` (2<sup>32</sup> - 1) zu `0`.

## Beispiele

### Verwendung des bitweisen NICHT

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
