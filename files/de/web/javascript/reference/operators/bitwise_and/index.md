---
title: Bitwise AND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **bitweise UND (`&`)** Operator gibt eine Zahl oder ein BigInt zurück, dessen Binärdarstellung eine `1` an jeder Stellenposition hat, für die die entsprechenden Bits beider Operanden `1` sind.

{{InteractiveExample("JavaScript Demo: Bitwise AND (&) operator", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x & y
```

## Beschreibung

Der `&` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen gibt der Operator einen 32-Bit-Integer zurück. Für BigInts gibt der Operator ein BigInt zurück. Zuerst [erzwingt er die Umwandlung beider Operanden in numerische Werte](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft ihre Typen. Er führt BigInt UND aus, wenn beide Operanden BigInts werden; ansonsten konvertiert er beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) und führt bitweises UND mit Zahlen durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, der andere jedoch eine Zahl.

Der Operator arbeitet auf den Bit-Darstellungen der Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Jedes Bit im ersten Operanden wird mit dem entsprechenden Bit im zweiten Operanden gepaart: _erstes Bit_ zu _erstes Bit_, _zweites Bit_ zu _zweites Bit_ und so weiter. Der Operator wird auf jedes Paar von Bits angewendet, und das Ergebnis wird bitweise konstruiert.

Die Wahrheitstabelle für die UND-Operation ist:

| x   | y   | x UND y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```plain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

Zahlen mit mehr als 32 Bits verlieren ihre höchstwertigen Bits. Zum Beispiel wird die folgende Zahl mit mehr als 32 Bits in eine 32-Bit-Zahl umgewandelt:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Für BigInts gibt es keine Kürzung. Konzeptionell verstehen Sie positive BigInts als eine unendliche Anzahl von führenden `0` Bits und negative BigInts als eine unendliche Anzahl von führenden `1` Bits.

Ein Bitweises UND irgendeiner Zahl `x` mit `-1` gibt `x` in einen 32-Bit-Integer konvertiert zurück. Verwenden Sie nicht `& -1`, um Zahlen auf ganze Zahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Bitweises UND verwenden

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 & 9;
// 8  (00000000000000000000000000001000)

14n & 9n; // 8n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bitweise Operatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)
- [Bitweises UND-Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
