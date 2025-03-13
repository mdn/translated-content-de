---
title: Nullish-Zuweisungsoperator (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Nullish-Zuweisungsoperator (`??=`)**, auch bekannt als **logischer Nullish-Zuweisungsoperator**, wertet nur den rechten Operand aus und weist diesen dem linken Operand zu, wenn der linke Operand {{Glossary("nullish", "nullish")}} (`null` oder `undefined`) ist.

{{InteractiveExample("JavaScript Demo: Nullish-Zuweisungsoperator (??=)")}}

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

Die Nullish-Zuweisung _short-circuited_, was bedeutet, dass `x ??= y` gleichbedeutend ist mit `x ?? (x = y)`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung durchgeführt, wenn die linke Seite nicht nullish ist, aufgrund des Short-Circuitings des [Nullish-Zusammenführungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing). Zum Beispiel wirft das folgende Beispiel keinen Fehler, obwohl `x` eine `const` ist:

```js
const x = 1;
x ??= 2;
```

Auch das folgende Beispiel würde den Setter nicht auslösen:

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

### Verwendung des Nullish-Zuweisungsoperators

Sie können den Nullish-Zuweisungsoperator verwenden, um Standardwerte auf Objekteigenschaften anzuwenden. Im Vergleich zur Verwendung von Destrukturierung und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value) wird durch `??=` der Standardwert auch angewendet, wenn die Eigenschaft den Wert `null` hat.

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

- [Nullish-Zusammenführungsoperator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish", "Nullish")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
