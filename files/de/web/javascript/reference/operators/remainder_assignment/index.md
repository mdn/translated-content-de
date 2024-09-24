---
title: Restzuweisung (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Restzuweisungsoperator (`%=`)** führt die [Restoperation](/de/docs/Web/JavaScript/Reference/Operators/Remainder) für die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}

## Syntax

```js-nolint
x %= y
```

## Beschreibung

`x %= y` ist gleichbedeutend mit `x = x % y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der Restzuweisung

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
