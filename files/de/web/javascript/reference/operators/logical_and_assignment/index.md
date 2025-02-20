---
title: Logisches UND-Zuweisung (`&&=`)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **logische UND-Zuweisungsoperator (`&&=`)** wertet nur den rechten Operanden aus und weist ihn dem linken zu, wenn der linke Operand {{Glossary("truthy", "truthy")}} ist.

{{InteractiveExample("JavaScript Demo: Expressions - Logical AND assignment")}}

```js interactive-example
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
```

## Syntax

```js-nolint
x &&= y
```

## Beschreibung

Die logische UND-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x &&= y` gleichwertig ist mit `x && (x = y)`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es erfolgt keine Zuweisung, wenn die linke Seite nicht "truthy" ist, aufgrund des Short-Circuitings des [logischen UND-Operators](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND). Zum Beispiel führt der folgende Fall nicht zu einem Fehler, obwohl `x` als `const` deklariert ist:

```js
const x = 0;
x &&= 2;
```

Ebenso würde der folgende Fall keinen Setter auslösen:

```js
const x = {
  get value() {
    return 0;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value &&= 2;
```

Tatsächlich wird `y` überhaupt nicht ausgewertet, wenn `x` nicht "truthy" ist.

```js
const x = 0;
x &&= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Verwendung von logischer UND-Zuweisung

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches UND (`&&`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweises UND-Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
