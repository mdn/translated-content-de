---
title: Additionszuweisung (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für die **Additionszuweisung (`+=`)** führt eine [Addition](/de/docs/Web/JavaScript/Reference/Operators/Addition) (entweder eine numerische Addition oder eine Zeichenfolgenverkettung) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Addition assignment (+=) operator")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Syntax

```js-nolint
x += y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in eine Zeichenfolge, einen BigInt oder eine Zahl umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher. Sein Wert wird in eine Zeichenfolge, einen BigInt oder eine Zahl umgewandelt.

### Rückgabewert

Die Zeichenfolge, der BigInt oder die Zahl, die durch [`x + y`](/de/docs/Web/JavaScript/Reference/Operators/Addition) unter Verwendung des ursprünglichen Werts von `x` entsteht.

## Beschreibung

`x += y` entspricht `x = x + y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Additionszuweisung mit Zahlen

```js
let bar = 5;
bar += 2; // 7
```

Andere Werte, die weder Zeichenfolgen noch BigInts sind, werden in Zahlen umgewandelt:

```js
let baz = true;
baz += 1; // 2
baz += false; // 2
```

### Additionszuweisung mit BigInts

```js
let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

### Additionszuweisung mit Zeichenfolgen

```js
let foo = "foo";
foo += false; // "foofalse"
foo += "bar"; // "foofalsebar"

let bar = 5;
bar += "foo"; // "5foo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
