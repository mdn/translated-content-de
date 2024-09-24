---
title: Logische UND-Zuweisung (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **logische UND-Zuweisungsoperator (`&&=`)** bewertet nur den rechten Operanden und weist dem linken zu, wenn der linke Operand {{Glossary("truthy")}} ist.

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## Syntax

```js-nolint
x &&= y
```

## Beschreibung

Die logische UND-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x &&= y` gleichbedeutend mit `x && (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung vorgenommen, wenn die linke Seite nicht truthy ist, aufgrund des Short-Circuiting des [logischen UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND)-Operators. Zum Beispiel führt das Folgende nicht zu einem Fehler, obwohl `x` ein `const` ist:

```js
const x = 0;
x &&= 2;
```

Ebenso würde das Folgende den Setter nicht auslösen:

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

Tatsächlich wird `y` überhaupt nicht bewertet, wenn `x` nicht truthy ist.

```js
const x = 0;
x &&= console.log("y evaluated");
// Es wird nichts geloggt
```

## Beispiele

### Verwendung der logischen UND-Zuweisung

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
- [Bitweise UND-Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
