---
title: Nullish coalescing assignment (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **Nullish Coalescing Assignment (`??=`)**-Operator, auch bekannt als **Logical Nullish Assignment**-Operator, wertet nur den rechten Operanden aus und weist dem linken Operanden zu, wenn der linke Operand {{Glossary("nullish", "nullish")}} (`null` oder `undefined`) ist.

{{EmbedInteractiveExample("pages/js/expressions-nullish-coalescing-assignment.html")}}

## Syntax

```js-nolint
x ??= y
```

## Beschreibung

Der Nullish Coalescing Assignment-Operator verwendet [_Short-Circuiting_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ??= y` gleichbedeutend mit `x ?? (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung vorgenommen, wenn die linke Seite nicht nullish ist, aufgrund des Short-Circuiting des [Nullish Coalescing](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)-Operators. Zum Beispiel wirft das folgende keinen Fehler, obwohl `x` eine `const` ist:

```js
const x = 1;
x ??= 2;
```

Auch würde das Folgende den Setter nicht auslösen:

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

Tatsächlich wird `y` überhaupt nicht ausgewertet, wenn `x` nicht nullish ist.

```js
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Verwendung von Nullish Coalescing Assignment

Sie können den Nullish Coalescing Assignment-Operator verwenden, um Standardwerte auf Objekteigenschaften anzuwenden. Im Vergleich zur Verwendung von Destructuring und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value) gilt `??=` auch, wenn die Eigenschaft den Wert `null` hat.

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

- [Nullish Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish", "Nullish")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
