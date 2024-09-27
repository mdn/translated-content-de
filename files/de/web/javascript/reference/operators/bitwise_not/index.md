---
title: Bitweises NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Bitweises NICHT (`~`)** Operator gibt eine Zahl oder einen `BigInt` zurück, dessen binäre Darstellung in jeder Bitposition, für die das entsprechende Bit des Operanden `0` ist, eine `1` hat und andernfalls eine `0`.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## Syntax

```js-nolint
~x
```

## Beschreibung

Der `~` Operator ist überladen für zwei Arten von Operanden: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für `BigInts` gibt der Operator einen `BigInt` zurück. Er [zwingt den Operanden zu einem numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet dessen Typ. Es wird `BigInt` NOT durchgeführt, wenn der Operand ein `BigInt` wird; andernfalls wird der Operand in einen [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und es wird eine bitweise NICHT-Operation auf Zahlen ausgeführt.

Der Operator arbeitet auf den Bitdarstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise konstruiert.

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

Zahlen mit mehr als 32 Bits verlieren ihre bedeutendsten Bits. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit-Integer umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für `BigInts` gibt es keine Abschneidung. Konzeptionell kann man sich positive `BigInts` mit einer unendlichen Anzahl führender `0` Bits vorstellen und negative `BigInts` mit einer unendlichen Anzahl führender `1` Bits.

Das bitweise NICHT eines beliebigen 32-Bit-Integers `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` `4`.

Das bitweise NICHT eines beliebigen Zahl `x` zweimal ergibt `x`, umgewandelt in einen 32-Bit-Integer. Verwenden Sie nicht `~~x`, um Zahlen auf Integer zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers). Aufgrund der Verwendung der 32-Bit-Darstellung für Zahlen ergeben sowohl `~-1` als auch `~4294967295` (2<sup>32</sup> - 1) `0`.

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
