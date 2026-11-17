---
title: Zuweisung mit vorzeichenloser Rechtsverschiebung (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **Zuweisungsoperator mit vorzeichenloser Rechtsverschiebung (`>>>=`)** führt eine [vorzeichenlose Rechtsverschiebung](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) mit den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Unsigned right shift assignment (>>>=) operator")}}

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

`x >>>= y` entspricht `x = x >>> y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Zuweisung mit vorzeichenloser Rechtsverschiebung verwenden

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)

let c = 5n;
c >>>= 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Vorzeichenlose Rechtsverschiebung (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
