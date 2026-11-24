---
title: Bitweise UND-Zuweisung (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Operator für bitweise UND-Zuweisung (`&=`)** führt ein [bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) mit den beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Bitwise AND assignment (&=) operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x &= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Sein Wert wird in eine [vorzeichenbehaftete 32-Bit-Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion) oder einen [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion) umgewandelt.

### Rückgabewert

Die Zahl oder der BigInt-Wert, die bzw. der sich aus [`x & y`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) unter Verwendung des ursprünglichen Werts von `x` ergibt.

## Beschreibung

`x &= y` entspricht `x = x & y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Bitweise UND-Zuweisung verwenden

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitweises UND (`&`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
