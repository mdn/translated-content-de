---
title: Left shift assignment (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Left Shift Assignment (`<<=`)**-Operator führt eine [Left Shift](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html", "shorter")}}

## Syntax

```js-nolint
x <<= y
```

## Beschreibung

`x <<= y` ist gleichwertig mit `x = x << y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung des Left Shift Assignment

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
- [Left Shift (`<<`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)
