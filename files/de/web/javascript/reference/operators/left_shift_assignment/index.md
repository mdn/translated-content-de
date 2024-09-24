---
title: Linksverschiebungszuweisung (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Linksverschiebungszuweisungsoperator (`<<=`)** führt eine [Linksverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html", "shorter")}}

## Syntax

```js-nolint
x <<= y
```

## Beschreibung

`x <<= y` entspricht `x = x << y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der Linksverschiebungszuweisung

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

- [Zuweisungsoperatoren im JS-Handbuch](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Linksverschiebung (`<<`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)
