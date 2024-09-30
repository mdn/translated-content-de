---
title: Unsigned right shift assignment (`>>>=`)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Unsigned right shift assignment (`>>>=`)** Operator führt einen [unsigned right shift](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## Syntax

```js-nolint
x >>>= y
```

## Beschreibung

`x >>>= y` ist äquivalent zu `x = x >>> y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung des unsigned right shift assignment

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)

let c = 5n;
c >>>= 2n; // 1n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
