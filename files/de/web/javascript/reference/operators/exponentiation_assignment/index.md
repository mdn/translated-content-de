---
title: Exponential-Zuweisung (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Exponential-Zuweisungsoperator (`**=`)\*\* führt eine [Exponentialrechnung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Exponential-Zuweisung (**=) Operator")}}

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

`x **= y` ist äquivalent zu `x = x ** y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Exponential-Zuweisung mit Zahlen

```js
let bar = 5;
bar **= 2; // 25
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
let baz = 5;
baz **= "foo"; // NaN
```

### Exponential-Zuweisung mit BigInts

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
- [Exponentialoperator (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
