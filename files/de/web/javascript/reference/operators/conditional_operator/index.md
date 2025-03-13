---
title: Bedingungsoperator (ternärer Operator)
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Bedingungsoperator (ternärer Operator)** ist der einzige JavaScript-Operator, der drei Operanden verwendet: eine Bedingung, gefolgt von einem Fragezeichen (`?`), dann ein Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("truthy", "truthy")}} ist, gefolgt von einem Doppelpunkt (`:`), und schließlich der Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("falsy", "falsy")}} ist. Dieser Operator wird häufig als Alternative zu einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung verwendet.

{{InteractiveExample("JavaScript Demo: Conditional operator")}}

```js interactive-example
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"
```

## Syntax

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### Parameter

- `condition`
  - : Ein Ausdruck, dessen Wert als Bedingung verwendet wird.
- `exprIfTrue`
  - : Ein Ausdruck, der ausgeführt wird, wenn `condition` zu einem {{Glossary("truthy", "truthy")}} Wert ausgewertet wird (einer, der `true` entspricht oder in `true` umgewandelt werden kann).
- `exprIfFalse`
  - : Ein Ausdruck, der ausgeführt wird, wenn `condition` {{Glossary("falsy", "falsy")}} ist (d.h. einen Wert hat, der in `false` umgewandelt werden kann).

## Beschreibung

Neben `false` sind mögliche falsy-Ausdrücke: `null`, `NaN`, `0`, der leere String (`""`) und `undefined`. Wenn `condition` einer dieser Werte ist, ist das Ergebnis des Bedingungsausdrucks das Ergebnis der Ausführung des Ausdrucks `exprIfFalse`.

## Beispiele

### Ein einfaches Beispiel

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Umgang mit null-Werten

Ein häufiger Anwendungsfall ist der Umgang mit einem Wert, der `null` sein kann:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### Bedingungsketten

Der ternäre Operator ist rechtsassoziativ, was bedeutet, dass er auf folgende Weise "verkettet" werden kann, ähnlich einer `if … else if … else if … else`-Kette:

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
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optional chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Erlernen: Entscheidungen in Ihrem Code treffen — Bedingungsanweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden
