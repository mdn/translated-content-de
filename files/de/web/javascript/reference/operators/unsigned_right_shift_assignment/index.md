---
title: Unsigned Right Shift-Zuweisung (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Unsigned Right Shift-Zuweisungsoperator (`>>>=`)** führt einen [Unsigned Right Shift](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Expressions - Unsigned right shift assignment operator")}}

```js interactive-example
let a = 5; //  00000000000000000000000000000101

a >>>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
console.log(b);
// Expected output: 1073741822
```

## Syntax

```js-nolint
x >>>= y
```

## Beschreibung

`x >>>= y` ist gleichbedeutend mit `x = x >>> y`, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Unsigned Right Shift-Zuweisung verwenden

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
