---
title: Left shift assignment (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Left Shift Assignment (`<<=`)** Operator führt eine [Linksschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) auf die beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Left shift assignment (<<=) operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntax

```js-nolint
x <<= y
```

## Beschreibung

`x <<= y` ist äquivalent zu `x = x << y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der Left Shift Assignment

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Left shift (`<<`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)
