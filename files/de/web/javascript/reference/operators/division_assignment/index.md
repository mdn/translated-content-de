---
title: Division-Zuweisung (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Division-Zuweisungsoperator (`/=`)** führt [Division](/de/docs/Web/JavaScript/Reference/Operators/Division) mit den beiden Operanden durch und weist das Ergebnis dem linken Operand zu.

{{InteractiveExample("JavaScript Demo: Expressions - Division assignment operator")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## Syntax

```js-nolint
x /= y
```

## Beschreibung

`x /= y` ist äquivalent zu `x = x / y`, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Division-Zuweisung mit Zahlen

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

Andere Werte, die keine `BigInt`-Werte sind, werden in Zahlen umgewandelt:

```js
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### Division-Zuweisung mit BigInts

```js
let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n

foo /= 0n; // RangeError: BigInt division by zero
foo /= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
