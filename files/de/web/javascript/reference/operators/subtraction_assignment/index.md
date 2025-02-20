---
title: Subtraktionszuweisung (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Subtraktionszuweisungsoperator (`-=`)** führt eine [Subtraktion](/de/docs/Web/JavaScript/Reference/Operators/Subtraction) auf den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction assignment operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x -= y
```

## Beschreibung

`x -= y` ist äquivalent zu `x = x - y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Subtraktionszuweisung unter Verwendung von Zahlen

```js
let bar = 5;

bar -= 2; // 3
```

Andere nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
bar -= "foo"; // NaN
```

### Subtraktionszuweisung unter Verwendung von BigInts

```js
let foo = 3n;
foo -= 2n; // 1n
foo -= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
