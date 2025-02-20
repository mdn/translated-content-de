---
title: Bitweises NICHT (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **bitweise NICHT-Operator (`~`)** gibt eine Zahl oder ein `BigInt` zurück, deren binäre Darstellung in jeder Bitposition eine `1` hat, für die das entsprechende Bit des Operanden `0` ist, und andernfalls `0`.

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

Der `~`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Zuerst [erzwingt er die Umwandlung des Operanden in einen numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft den Typ davon. Wenn der Operand zu einem BigInt wird, führt er ein BigInt-NICHT aus; andernfalls wird der Operand in einen [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) konvertiert und führt ein numerisches bitweises NICHT aus.

Der Operator arbeitet auf der Bitdarstellung der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Der Operator wird auf jedes Bit angewendet, und das Ergebnis wird bitweise zusammengesetzt.

Die Wahrheitstabelle für die NICHT-Operation ist:

| x   | NOT x |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```plain
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Zahlen mit mehr als 32 Bits haben ihre höchstwertigen Bits verworfen. Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in eine 32-Bit-Zahl konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Verkürzung. Konzeptionell sind positive BigInts als mit einer unendlichen Anzahl von führenden `0`-Bits zu verstehen, und negative BigInts als mit einer unendlichen Anzahl von führenden `1`-Bits.

Das bitweise NICHT für jeden 32-Bit-Integer `x` ergibt `-(x + 1)`. Zum Beispiel ergibt `~-5` den Wert `4`.

Das zweifache Anwenden des bitweisen NICHT auf jede Zahl `x` gibt `x` als 32-Bit-Integer zurück. Verwenden Sie nicht `~~x`, um Zahlen auf Integer zu verkürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers). Aufgrund der Verwendung der 32-Bit-Darstellung für Zahlen ergeben sowohl `~-1` als auch `~4294967295` (2<sup>32</sup> - 1) den Wert `0`.

## Beispiele

### Verwendung von bitweises NICHT

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
