---
title: Nullish-Zuweisung (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Nullish-Zuweisungsoperator (`??=`)**, auch bekannt als **logischer Nullish-Zuweisungsoperator**, wertet nur den rechten Operand aus und weist den linken Operand nur dann zu, wenn der linke Operand {{Glossary("nullish", "nullish")}} (`null` oder `undefined`) ist.

{{InteractiveExample("JavaScript Demo: Nullish coalescing assignment (??=) operator")}}

```js interactive-example
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
```

## Syntax

```js-nolint
x ??= y
```

## Beschreibung

Die Nullish-Zuweisung führt [_Short-Circuiting_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) durch, was bedeutet, dass `x ??= y` äquivalent zu `x ?? (x = y)` ist, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung durchgeführt, wenn die linke Seite nicht nullish ist, aufgrund des Short-Circuiting des [Nullish-Zusammenführungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing). Zum Beispiel wirft das folgende Beispiel keinen Fehler, obwohl `x` `const` ist:

```js
const x = 1;
x ??= 2;
```

Ebenso würde das Folgende den Setter nicht auslösen:

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

### Verwendung der Nullish-Zuweisung

Sie können den Nullish-Zuweisungsoperator verwenden, um Standardwerte für Objekteigenschaften anzuwenden. Im Vergleich zur Verwendung von Destrukturierung und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value) wendet `??=` auch den Standardwert an, wenn die Eigenschaft den Wert `null` hat.

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

- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish", "Nullish")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
