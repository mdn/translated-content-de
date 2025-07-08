---
title: Logisches UND Zuweisung (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **logische UND Zuweisungsoperator (`&&=`)** wertet nur den rechten Operanden aus und weist ihn dem linken zu, wenn der linke Operand {{Glossary("truthy", "truthy")}} ist.

{{InteractiveExample("JavaScript Demo: Logical AND assignment (&&=) operator")}}

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

Die logische UND Zuweisung [_abgekürzt_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), bedeutet, dass `x &&= y` gleichwertig ist mit `x && (x = y)`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung durchgeführt, wenn die linke Seite nicht truthy ist, aufgrund der Abkürzungslogik des [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) Operators. Zum Beispiel wirft das Folgende keinen Fehler, obwohl `x` eine `const` ist:

```js
const x = 0;
x &&= 2;
```

Auch würde das Folgende den Setter nicht auslösen:

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

Tatsächlich, wenn `x` nicht truthy ist, wird `y` überhaupt nicht ausgewertet.

```js
const x = 0;
x &&= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Verwendung der logischen UND Zuweisung

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
- [Bitweise UND Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
