---
title: Subtraktionszuweisung (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Subtraktionszuweisungsoperator (`-=`)** führt eine [Subtraktion](/de/docs/Web/JavaScript/Reference/Operators/Subtraction) auf den beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-subtraction-assignment.html")}}

## Syntax

```js-nolint
x -= y
```

## Beschreibung

`x -= y` ist gleichbedeutend mit `x = x - y`, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Subtraktionszuweisung mit Zahlen

```js
let bar = 5;

bar -= 2; // 3
```

Andere nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
bar -= "foo"; // NaN
```

### Subtraktionszuweisung mit BigInts

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
