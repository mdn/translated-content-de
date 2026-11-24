---
title: Multiplikationszuweisung (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für die **Multiplikationszuweisung (`*=`)** führt eine [Multiplikation](/de/docs/Web/JavaScript/Reference/Operators/Multiplication) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Multiplication assignment (*=) operator")}}

```js interactive-example
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x *= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Sein Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Die Zahl oder der BigInt-Wert, die bzw. der durch [`x * y`](/de/docs/Web/JavaScript/Reference/Operators/Multiplication) unter Verwendung des ursprünglichen Werts von `x` entsteht.

## Beschreibung

`x *= y` ist gleichbedeutend mit `x = x * y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Multiplikationszuweisung mit Zahlen

```js
let bar = 5;
bar *= 2; // 10
```

Andere Werte, die keine BigInt-Werte sind, werden in Zahlen umgewandelt:

```js
let bar = 5;
bar *= "foo"; // NaN
```

### Multiplikationszuweisung mit BigInt-Werten

```js
let foo = 3n;
foo *= 2n; // 6n
foo *= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
