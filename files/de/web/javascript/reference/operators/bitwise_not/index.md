---
title: Bitweises NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: cd45b5f9ac2d4badfb27970fe55b11d491eb2591
---

{{jsSidebar("Operators")}}

Der **bitweise NICHT-Operator (`~`)** gibt eine Zahl oder einen BigInt zurück, dessen binäre Darstellung an jeder Bitposition, für die das entsprechende Bit des Operanden `0` ist, ein `1` hat, und sonst `0`.

{{InteractiveExample("JavaScript Demo: Bitwise NOT (~) operator")}}

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

Der `~`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator einen BigInt zurück. Zuerst [wandelt er den Operanden in einen numerischen Wert um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft dessen Typ. Er führt eine BigInt-NICHT-Operation durch, wenn der Operand zu einem BigInt wird; andernfalls wandelt er den Operanden in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) um und führt eine bitweise NICHT-Operation auf Zahlen aus.

Der Operator arbeitet auf den Bits der Operanden in [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise aufgebaut.

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

Ein bitweises NICHT einer beliebigen 32-Bit-Ganzzahl `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` den Wert `4`.

Zahlen mit mehr als 32 Bits verlieren ihre höchstwertigen Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

> [!WARNING]
> Sie werden möglicherweise sehen, dass `~~` verwendet wird, um Zahlen auf Ganzzahlen zu kürzen. Ein doppeltes bitweises NICHT einer beliebigen Zahl `x` ergibt `x` als 32-Bit-Ganzzahl, was zusätzlich führende Bits für Zahlen außerhalb des Bereichs von -2147483648 bis 2147483647 entfernt. Verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

Für BigInts gibt es keine Kürzung. Konzeptionell können Sie positive BigInts als mit einer unendlichen Anzahl führender `0`-Bits verstehen, und negative BigInts mit einer unendlichen Anzahl führender `1`-Bits.

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
