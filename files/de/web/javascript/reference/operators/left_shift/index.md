---
title: Left shift (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

Der **Linksschiebeoperator (`<<`)** gibt eine Zahl oder BigInt zurück, deren binäre Darstellung der ersten Operand um die angegebene Anzahl von Bits nach links verschoben ist. Überzählige Bits, die nach links verschoben werden, werden verworfen, und null Bits werden von rechts hereingeschoben.

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html", "shorter")}}

## Syntax

```js-nolint
x << y
```

## Beschreibung

Der `<<` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Für Zahlen liefert der Operator einen 32-Bit-Integer. Für BigInts gibt der Operator ein BigInt zurück. Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Linksschiebung durch, wenn beide Operanden zu BigInts geworden sind; ansonsten werden beide Operanden in [32-Bit-Integer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) umgewandelt und eine Zahl-Linksschiebung durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere eine Zahl bleibt.

Der Operator arbeitet an der Bitdarstellung des linken Operanden im [Zweierkomplement](https://en.wikipedia.org/wiki/Two's_complement). Zum Beispiel ergibt `9 << 2` den Wert 36:

```plain
     9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

Eine bitweise Verschiebung eines 32-Bit-Integer `x` nach links um `y` Bits ergibt `x * 2 ** y`. Zum Beispiel ist `9 << 3` gleichbedeutend mit `9 * (2 ** 3) = 9 * (8) = 72`.

Wenn der linke Operand eine Zahl mit mehr als 32 Bits ist, werden die höchstwertigen Bits verworfen. Zum Beispiel wird der folgende Integer mit mehr als 32 Bits in einen 32-Bit Integer konvertiert:

```plain
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Der rechte Operand wird in einen vorzeichenlosen 32-Bit-Integer umgewandelt und dann modulo 32 genommen, sodass der tatsächliche Verschiebebereich immer eine positive ganze Zahl zwischen 0 und 31 sein wird. Zum Beispiel ist `100 << 32` dasselbe wie `100 << 0` (und ergibt `100`), da 32 modulo 32 gleich 0 ist.

Für BigInts erfolgt keine Trunkierung. Konzeptuell sind positive BigInts als eine unendliche Anzahl von führenden `0` Bits zu verstehen, und negative BigInts als eine unendliche Anzahl von führenden `1` Bits.

Das Verschieben einer beliebigen Zahl `x` um `0` nach links gibt `x` als 32-Bit Integer zurück. Verwenden Sie nicht `<< 0`, um Zahlen auf Ganzzahlen zu kürzen; verwenden Sie stattdessen [`Math.trunc()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#using_bitwise_no-ops_to_truncate_numbers).

## Beispiele

### Verwendung des Linksschiebens

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
- [Left shift assignment (`<<=`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
