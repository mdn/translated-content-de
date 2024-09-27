---
title: Rechtsverschiebungszuweisung (>>=)
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Rechtsverschiebungszuweisungsoperator (`>>=`)** führt eine [Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) auf den beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-right-shift-assignment.html")}}

## Syntax

```js-nolint
x >>= y
```

## Beschreibung

`x >>= y` ist äquivalent zu `x = x >> y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der Rechtsverschiebungszuweisung

```js
let a = 5; //   (00000000000000000000000000000101)
a >>= 2; //   1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2; //  -2 (-00000000000000000000000000000010)

let c = 5n;
c >>= 2n; // 1n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Rechtsverschiebung (`>>`)](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
