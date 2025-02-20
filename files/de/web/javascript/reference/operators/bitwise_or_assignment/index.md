---
title: Bitweises OR-Zuweisungsoperator (`|=`)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **bitweise OR-Zuweisungsoperator (`|=`)** führt eine [bitweise OR-Operation](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) auf den beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise OR assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a |= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111
// Expected output: 7
```

## Syntax

```js-nolint
x |= y
```

## Beschreibung

`x |= y` ist gleichbedeutend mit `x = x | y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung des bitweisen OR-Zuweisungsoperators

```js
let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111

let b = 5n;
b |= 2n; // 7n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitweises OR (`|`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [Logisches OR-Zuweisungsoperator (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
