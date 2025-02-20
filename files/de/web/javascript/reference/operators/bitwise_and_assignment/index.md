---
title: Bitweises UND-Zuweisungsoperator (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **bitweise UND-Zuweisungsoperator (`&=`)** führt ein [bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) für die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise AND assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```js-nolint
x &= y
```

## Beschreibung

`x &= y` ist gleichbedeutend mit `x = x & y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung des bitweisen UND-Zuweisungsoperators

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitweises UND (`&`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
