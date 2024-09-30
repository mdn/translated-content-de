---
title: Bitweises OR-Zuweisung (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **bitweise OR-Zuweisungsoperator (`|=`)** führt ein [bitweises OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html", "shorter")}}

## Syntax

```js-nolint
x |= y
```

## Beschreibung

`x |= y` ist gleichbedeutend mit `x = x | y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der bitweisen OR-Zuweisung

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
- [Logisches OR-Zuweisung (`||=`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
