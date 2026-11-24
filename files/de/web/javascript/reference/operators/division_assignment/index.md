---
title: Divisionszuweisung (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Divisionszuweisungsoperator (`/=`)** führt eine [Division](/de/docs/Web/JavaScript/Reference/Operators/Division) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Division assignment (/=) operator")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## Syntax

```js-nolint
x /= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher. Sein Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Die Zahl oder der BigInt-Wert, die beziehungsweise der sich aus [`x / y`](/de/docs/Web/JavaScript/Reference/Operators/Division) unter Verwendung des ursprünglichen Werts von `x` ergibt.

## Beschreibung

`x /= y` ist gleichbedeutend mit `x = x / y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Divisionszuweisung mit Zahlen

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

Andere Werte, die keine BigInt-Werte sind, werden in Zahlen umgewandelt:

```js
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### Divisionszuweisung mit BigInt-Werten

```js
let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n

foo /= 0n; // RangeError: BigInt division by zero
foo /= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
