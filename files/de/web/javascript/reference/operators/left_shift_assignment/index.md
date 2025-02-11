---
title: Linkszuweisung mit Verschiebung (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **linke Verschiebungszuweisungsoperator (`<<=`)** führt eine [linke Verschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript-Demo: Ausdrücke - Linke Verschiebungszuweisung", "shorter")}}

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

`x <<= y` ist gleichbedeutend mit `x = x << y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der linken Verschiebungszuweisung

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
- [Linke Verschiebung (`<<`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)
