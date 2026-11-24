---
title: Restzuweisung (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **Restzuweisung (`%=`)** berechnet den [Rest](/de/docs/Web/JavaScript/Reference/Operators/Remainder) der beiden Operanden und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Remainder assignment (%=) operator")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x %= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Sein Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Die Zahl oder der BigInt-Wert, die bzw. der sich aus [`x % y`](/de/docs/Web/JavaScript/Reference/Operators/Remainder) unter Verwendung des ursprünglichen Werts von `x` ergibt.

## Beschreibung

`x %= y` ist gleichbedeutend mit `x = x % y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Restzuweisung verwenden

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
