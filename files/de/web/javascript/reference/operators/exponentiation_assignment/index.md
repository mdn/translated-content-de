---
title: Exponentialzuweisungsoperator (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Exponentialzuweisungsoperator (`**=`)\*\* führt eine [Exponentiation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) auf den beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation assignment operator")}}

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

## Beschreibung

`x **= y` ist gleichbedeutend mit `x = x ** y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Exponentialzuweisung mit Zahlen

```js
let bar = 5;
bar **= 2; // 25
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
let baz = 5;
baz **= "foo"; // NaN
```

### Exponentialzuweisung mit BigInts

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
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
