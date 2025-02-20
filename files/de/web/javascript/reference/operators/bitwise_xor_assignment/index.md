---
title: Bitweises XOR-Zuweisungsoperator (^=)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **bitweise XOR-Zuweisungsoperator (`^=`)** führt eine [bitweise XOR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)-Operation auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise XOR assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// Expected output: 6
```

## Syntax

```js-nolint
x ^= y
```

## Beschreibung

`x ^= y` ist gleichbedeutend mit `x = x ^ y`, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung des bitweisen XOR-Zuweisungsoperators

```js
let a = 5; // (00000000000000000000000000000101)
a ^= 3; // (00000000000000000000000000000011)

console.log(a); // 6 (00000000000000000000000000000110)

let b = 5; // (00000000000000000000000000000101)
b ^= 0; // (00000000000000000000000000000000)

console.log(b); // 5 (00000000000000000000000000000101)

let c = 5n;
c ^= 3n;
console.log(c); // 6n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitwise XOR (`^`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
