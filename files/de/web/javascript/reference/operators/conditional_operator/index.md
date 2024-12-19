---
title: Bedingungsoperator (Ternärer Operator)
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("Operators")}}

Der **Bedingungsoperator (ternäre Operator)** ist der einzige JavaScript-Operator, der drei Operanden annimmt:
eine Bedingung, gefolgt von einem Fragezeichen (`?`), dann ein Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("truthy", "truthy")}} ist, gefolgt von einem Doppelpunkt (`:`), und schließlich der Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("falsy", "falsy")}} ist.
Dieser Operator wird häufig als Alternative zu einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung verwendet.

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## Syntax

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### Parameter

- `condition`
  - : Ein Ausdruck, dessen Wert als Bedingung verwendet wird.
- `exprIfTrue`
  - : Ein Ausdruck, der ausgeführt wird, wenn die `condition` zu einem {{Glossary("truthy", "truthy")}}-Wert ausgewertet wird (einem, der `true` entspricht oder in `true` konvertiert werden kann).
- `exprIfFalse`
  - : Ein Ausdruck, der ausgeführt wird, wenn die `condition` {{Glossary("falsy", "falsy")}} ist (das heißt, einen Wert hat, der in `false` konvertiert werden kann).

## Beschreibung

Neben `false` sind mögliche falsy-Ausdrücke: `null`, `NaN`, `0`, der leere String (`""`) und `undefined`.
Wenn `condition` einer dieser ist, wird das Ergebnis des bedingten Ausdrucks das Ergebnis der Ausführung des Ausdrucks `exprIfFalse` sein.

## Beispiele

### Ein einfaches Beispiel

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Umgang mit null-Werten

Eine häufige Verwendung ist der Umgang mit einem Wert, der `null` sein kann:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### Bedingte Ketten

Der ternäre Operator ist rechtsassoziativ, was bedeutet, dass er in folgender Weise "verkettet" werden kann, ähnlich wie ein `if … else if … else if … else`-Kette:

```js-nolint
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}
```

Dies entspricht der folgenden [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Kette.

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optional Chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Lernen: Entscheidungen in Ihrem Code treffen — Bedingungsanweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden
