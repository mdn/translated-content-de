---
title: Nullish coalescing assignment (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Nullish Coalescing Assignment (`??=`)** Operator, auch bekannt als **Logical Nullish Assignment** Operator, wertet nur den rechten Operanden aus und weist diesem dem linken Operanden zu, wenn der linke Operand [nullish](/de/docs/Glossary/nullish) (`null` oder `undefined`) ist.

{{EmbedInteractiveExample("pages/js/expressions-nullish-coalescing-assignment.html")}}

## Syntax

```js-nolint
x ??= y
```

## Beschreibung

Nullish Coalescing Assignment [_Short-Circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ??= y` gleichwertig ist zu `x ?? (x = y)`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

Keine Zuweisung wird durchgeführt, wenn die linke Seite nicht nullish ist, aufgrund des Short-Circuiting des [Nullish Coalescing](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) Operators. Beispielsweise führt das Folgende nicht zu einem Fehler, obwohl `x` eine `const` ist:

```js
const x = 1;
x ??= 2;
```

Auch das Folgende würde den Setter nicht auslösen:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value ??= 2;
```

Tatsächlich wird `y` nicht ausgewertet, wenn `x` nicht nullish ist.

```js
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Verwendung des Nullish Coalescing Assignment

Sie können den Nullish Coalescing Assignment Operator verwenden, um Standardwerte auf Objekteigenschaften anzuwenden. Im Vergleich zur Verwendung von Destructuring und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value) wendet `??=` den Standardwert auch an, wenn die Eigenschaft den Wert `null` hat.

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Nullish](/de/docs/Glossary/Nullish)
- [Truthy](/de/docs/Glossary/Truthy)
- [Falsy](/de/docs/Glossary/Falsy)
