---
title: Linksverschiebung (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Linksverschiebungs-Operator (`<<`)** gibt eine Zahl oder ein BigInt zurück, deren binäre Darstellung die erste Operanden um die angegebene Anzahl von Bits nach links verschoben hat. Überschüssige Bits, die nach links verschoben werden, werden verworfen, und null Bits werden von rechts eingefügt.

{{InteractiveExample("JavaScript-Demo: Ausdrücke - Linksverschiebungsoperator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100
// Expected output: 20
```

## Syntax

```js-nolint
x << y
```

## Beschreibung

Der `<<`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator eine 32-Bit-Ganzzahl zurück. Für BigInts gibt der Operator ein BigInt zurück. Zunächst [werden beide Operanden in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion), und der Typ wird überprüft. Es wird eine BigInt-Linksverschiebung durchgeführt, wenn beide Operanden zu BigInts werden; andernfalls werden beide Operanden in [32-Bit-Ganzzahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt, und es wird eine Linksverschiebung für Zahlen durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl bleibt.

Der Operator arbeitet mit der Bitdarstellung des linken Operanden in [Zweierkomplement](https://de.wikipedia.org/wiki/Zweierkomplement). Zum Beispiel ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Das Bitweise Verschieben einer 32-Bit-Ganzzahl `x` um `y` Bits nach links entspricht `x * 2 ** y`. Zum Beispiel ist `9 << 3` äquivalent zu `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die bedeutendsten Bits verworfen. Zum Beispiel wird die folgende Ganzzahl mit mehr als 32 Bits in eine 32-Bit-Ganzzahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in eine nicht signierte 32-Bit-Ganzzahl umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebungswert immer eine positive Ganzzahl zwischen 0 und 31 (einschließlich) ist. Zum Beispiel ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für BigInts gibt es keine Beschneidung. Konzeptionell können positive BigInts als eine unendliche Anzahl von führenden `0`-Bits und negative BigInts als eine unendliche Anzahl von führenden `1`-Bits betrachtet werden.

Das Linksverschieben einer beliebigen Zahl `x` um `0` Bits gibt `x` zurück, umgewandelt in eine 32-Bit-Ganzzahl. Verwenden Sie nicht `<< 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung der Linksverschiebung

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72

9n << 3n; // 72n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Linksverschiebungszuweisung (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
