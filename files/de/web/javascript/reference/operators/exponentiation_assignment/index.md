---
title: Exponentialer Zuweisungsoperator (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **exponentielle Zuweisungsoperator (`**=`)\*\* führt die [Exponenzierung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) auf den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Exponentialer Zuweisungsoperator (**=)")}}

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

`x **= y` ist äquivalent zu `x = x ** y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Exponentielle Zuweisung mit Zahlen

```js
let bar = 5;
bar **= 2; // 25
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
let baz = 5;
baz **= "foo"; // NaN
```

### Exponentielle Zuweisung mit BigInts

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
- [Exponenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
