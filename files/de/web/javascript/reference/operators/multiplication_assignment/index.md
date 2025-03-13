---
title: Multiplikationszuweisung (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Multiplikationszuweisungsoperator (`*=`)** führt eine [Multiplikation](/de/docs/Web/JavaScript/Reference/Operators/Multiplication) auf den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Multiplikationszuweisungsoperator (*=)")}}

```js interactive-example
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x *= y
```

## Beschreibung

`x *= y` ist äquivalent zu `x = x * y`, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Multiplikationszuweisung mit Zahlen

```js
let bar = 5;
bar *= 2; // 10
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
let bar = 5;
bar *= "foo"; // NaN
```

### Multiplikationszuweisung mit BigInts

```js
let foo = 3n;
foo *= 2n; // 6n
foo *= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
