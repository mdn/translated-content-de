---
title: Bitweise UND-Zuweisung (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **operator für bitweise UND-Zuweisung (`&=`)** führt ein [bitweises UND](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html", "shorter")}}

## Syntax

```js-nolint
x &= y
```

## Beschreibung

`x &= y` ist äquivalent zu `x = x & y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung von bitweiser UND-Zuweisung

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
- [Bitweise UND (`&`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
