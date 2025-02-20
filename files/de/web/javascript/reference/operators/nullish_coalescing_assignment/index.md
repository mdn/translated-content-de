---
title: Nullish coalescing-Zuweisung (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Nullish coalescing-Zuweisungsoperator (`??=`)**, auch bekannt als **logischer Nullish-Zuweisungsoperator**, wertet nur den rechten Operanden aus und weist ihn dem linken Operanden zu, wenn dieser {{Glossary("nullish", "nullish")}} ist (`null` oder `undefined`).

{{InteractiveExample("JavaScript Demo: Expressions - Nullish coalescing assignment")}}

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

Die Nullish coalescing-Zuweisung [_short-circuited_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ??= y` äquivalent zu `x ?? (x = y)` ist, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung vorgenommen, wenn die linke Seite nicht nullish ist, aufgrund des Short-Circuiting des [Nullish coalescing](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)-Operators. Zum Beispiel wird der folgende Code keinen Fehler auslösen, obwohl `x` als `const` deklariert ist:

```js
const x = 1;
x ??= 2;
```

Ebenso würde im folgenden Beispiel der Setter nicht ausgelöst:

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

### Verwendung der Nullish coalescing-Zuweisung

Sie können den Nullish coalescing-Zuweisungsoperator verwenden, um Standardwerte für Objekteigenschaften anzuwenden. Im Vergleich zur Verwendung von Destructuring und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value) wendet `??=` den Standardwert auch an, wenn die Eigenschaft den Wert `null` hat.

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

- [Nullish coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish", "Nullish")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
