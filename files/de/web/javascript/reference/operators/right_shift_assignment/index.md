---
title: Right shift assignment (>>=)
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Rechtsverschiebungszuweisungsoperator (`>>=`)** führt eine [Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Right_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Right shift assignment (>>=) operator")}}

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; //  11111111111111111111111111111011

b >>= 2; //  11111111111111111111111111111110
console.log(b);
// Expected output: -2
```

## Syntax

```js-nolint
x >>= y
```

## Beschreibung

`x >>= y` ist gleichbedeutend mit `x = x >> y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

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
