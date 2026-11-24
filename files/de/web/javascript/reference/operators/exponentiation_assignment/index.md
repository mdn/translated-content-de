---
title: Potenzierungszuweisung (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Potenzierungszuweisungsoperator (`**=`)** führt eine [Potenzierung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Exponentiation assignment (**=) operator")}}

```js interactive-example
let a = 3;

console.log((a **= 2));
// Expected output: 9

console.log((a **= 0));
// Expected output: 1

console.log((a **= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x **= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Sein Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Die Zahl oder der BigInt-Wert, die bzw. der durch [`x ** y`](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) unter Verwendung des ursprünglichen Werts von `x` entsteht.

## Beschreibung

`x **= y` entspricht `x = x ** y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Potenzierungszuweisung mit Zahlen

```js
let bar = 5;
bar **= 2; // 25
```

Andere Werte, die keine BigInt-Werte sind, werden in Zahlen umgewandelt:

```js
let baz = 5;
baz **= "foo"; // NaN
```

### Potenzierungszuweisung mit BigInt-Werten

```js
let foo = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
