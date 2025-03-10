---
title: Nullish-Zusammenführungszuweisung (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Operators")}}

Der **Nullish-Zusammenführungszuweisungsoperator (`??=`)**, auch bekannt als **logischer Nullish-Zuweisungsoperator**, wertet nur den rechten Operanden aus und weist dem linken Operanden zu, wenn der linke Operand {{Glossary("nullish", "nullish")}} (`null` oder `undefined`) ist.

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

Die Nullish-Zusammenführungszuweisung [_short-circuitiert_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ??= y` gleichbedeutend ist mit `x ?? (x = y)`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es erfolgt keine Zuweisung, wenn die linke Seite nicht nullish ist, aufgrund des Short-Circuitings des [Nullish-Zusammenführungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing). Zum Beispiel wirft das Folgende keinen Fehler, obwohl `x` `const` ist:

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

Tatsächlich wird `y` überhaupt nicht ausgewertet, wenn `x` nicht nullish ist.

```js
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Verwendung der Nullish-Zusammenführungszuweisung

Sie können den Nullish-Zusammenführungszuweisungsoperator verwenden, um Standardwerte auf Objekt-Eigenschaften anzuwenden. Im Vergleich zur Verwendung von Destructuring und [Standardwerte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value) wird bei `??=` auch der Standardwert angewendet, wenn die Eigenschaft den Wert `null` hat.

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
