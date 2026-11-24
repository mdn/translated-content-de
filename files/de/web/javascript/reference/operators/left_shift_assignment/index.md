---
title: Linksverschiebungszuweisung (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Linksverschiebungszuweisungsoperator (`<<=`)** führt eine [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Left shift assignment (<<=) operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntax

```js-nolint
x <<= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, etwa ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Sein Wert wird in eine [vorzeichenlose 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt. Bei Zahlen bestimmen die fünf niederwertigsten Bits die Anzahl der Verschiebungen. Bei BigInts kehrt eine negative Anzahl die Verschiebungsrichtung um.

### Rückgabewert

Die Zahl oder der BigInt-Wert, die bzw. der sich aus [`x << y`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) unter Verwendung des ursprünglichen Werts von `x` ergibt.

## Beschreibung

`x <<= y` entspricht `x = x << y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Linksverschiebungszuweisung verwenden

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Linksverschiebung (`<<`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)
