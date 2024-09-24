---
title: Divisionszuweisung (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Divisionszuweisungsoperator (`/=`)** führt eine [Division](/de/docs/Web/JavaScript/Reference/Operators/Division) der beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## Syntax

```js-nolint
x /= y
```

## Beschreibung

`x /= y` ist gleichbedeutend mit `x = x / y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Divisionszuweisung mit Zahlen

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### Divisionszuweisung mit BigInts

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
