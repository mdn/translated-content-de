---
title: Bitweise NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **bitweise NICHT (`~`)** Operator gibt eine Zahl oder BigInt zurück, deren binäre Darstellung an jeder Bitposition eine `1` hat, für die das entsprechende Bit des Operanden `0` ist, und `0` ansonsten.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## Syntax

```js-nolint
~x
```

## Beschreibung

Der Operator `~` ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [zwingt den Operanden zuerst in einen numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet dessen Typ. Er führt BigInt-NOT aus, wenn der Operand ein BigInt wird; andernfalls wird der Operand in eine [32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und eine Zahl bitweise NICHT durchgeführt.

Der Operator arbeitet an den Bit-Darstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die NICHT-Operation ist:

| x   | NICHT x |
| --- | ------- |
| 0   | 1       |
| 1   | 0       |

```plain
 9 (dezimal) = 00000000000000000000000000001001 (binär)
               --------------------------------
~9 (dezimal) = 11111111111111111111111111110110 (binär) = -10 (dezimal)
```

Zahlen mit mehr als 32 Bit verlieren ihre höchstwertigen Bits. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bit in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Vorher: 11100110111110100000000000000110000000000001
Nachher:              10100000000000000110000000000001
```

Für BigInts gibt es keine Trunkierung. Konzeptionell versteht man positive BigInts als hätte sie eine unendliche Anzahl führender `0` Bits und negative BigInts als hätte sie eine unendliche Anzahl führender `1` Bits.

Ein beliebiges 32-Bit-Integer `x` bitweise NICHT zu nehmen ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` `4`.

Ein beliebiges Zahlenwert `x` zweimal bitweise NICHT zu nehmen ergibt `x` konvertiert in eine 32-Bit-Ganzzahl. Verwenden Sie `~~x` nicht, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers). Aufgrund der Verwendung der 32-Bit-Darstellung für Zahlen ergeben sowohl `~-1` als auch `~4294967295` (2<sup>32</sup> - 1) `0`.

## Beispiele

### Verwendung von bitweise NICHT

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
