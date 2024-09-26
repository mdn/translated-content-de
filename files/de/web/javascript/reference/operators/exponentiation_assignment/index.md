---
title: Exponentialzuweisungsoperator (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Exponentialzuweisungsoperator (`**=`)** führt eine [Exponentiation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation-assignment.html")}}

## Syntax

```js-nolint
x **= y
```

## Beschreibung

`x **= y` entspricht `x = x ** y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Exponentialzuweisung mit Zahlen

```js
let bar = 5;
bar **= 2; // 25
```

Andere nicht BigInt-Werte werden in Zahlen umgewandelt:

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)