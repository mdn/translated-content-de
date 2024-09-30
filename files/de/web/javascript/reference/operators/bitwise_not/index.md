---
title: Bitweise NOT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **bitweise NOT (`~`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen binäre Darstellung in jeder Bitposition, in der das entsprechende Bit des Operanden `0` ist, eine `1` enthält und sonst eine `0`.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## Syntax

```js-nolint
~x
```

## Beschreibung

Der `~` Operator ist für zwei Typen von Operanden überladen: `number` und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Er [erzwingt zuerst die Umwandlung des Operanden in einen numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft den Typ davon. Er führt BigInt NOT durch, wenn der Operand zu einem BigInt wird; andernfalls konvertiert er den Operanden in einen [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt das bitweise NOT für Zahlen durch.

Der Operator arbeitet mit den Bitdarstellungen der Operanden in [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die NOT-Operation ist:

| x   | NOT x |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```plain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Zahlen mit mehr als 32 Bit lassen ihre bedeutendsten Bits fallen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bit in einen 32-Bit-Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts erfolgt keine Kürzung. Konzeptionell sollten positive BigInts als eine unendliche Anzahl führender `0`-Bits betrachtet werden, und negative BigInts als eine unendliche Anzahl führender `1`-Bits.

Das bitweise NOT von jedem 32-Bit-Integer `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` den Wert `4`.

Das bitweise NOT eines beliebigen Zahl `x` zweimal ergibt `x` konvertiert in einen 32-Bit-Integer. Verwenden Sie nicht `~~x`, um Zahlen auf Integer zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers). Aufgrund der Verwendung der 32-Bit-Darstellung für Zahlen führen sowohl `~-1` als auch `~4294967295` (2<sup>32</sup> - 1) zu `0`.

## Beispiele

### Verwendung von bitweise NOT

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
