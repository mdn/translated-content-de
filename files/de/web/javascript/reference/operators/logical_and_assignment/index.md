---
title: Logical AND assignment (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Logical AND Assignment (`&&=`)** Operator wertet nur den rechten Operanden aus und weist dem linken Operanden zu, wenn der linke Operand [truthy](/de/docs/Glossary/truthy) ist.

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## Syntax

```js-nolint
x &&= y
```

## Beschreibung

Logical AND Assignment [_reduziert die Auswertung_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x &&= y` äquivalent zu `x && (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung vorgenommen, wenn die linke Seite nicht truthy ist, aufgrund der Reduzierung der Auswertung des [Logical AND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) Operators. Zum Beispiel wirft das Folgende keinen Fehler, obwohl `x` eine `const` ist:

```js
const x = 0;
x &&= 2;
```

Auch das Folgende würde den Setter nicht auslösen:

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

Tatsächlich wird `y` gar nicht ausgewertet, wenn `x` nicht truthy ist.

```js
const x = 0;
x &&= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Verwendung von Logical AND Assignment

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

- [Logical AND (`&&`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitwise AND assignment (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- [Truthy](/de/docs/Glossary/Truthy)
- [Falsy](/de/docs/Glossary/Falsy)
