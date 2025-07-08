---
title: Bedingungsoperator (ternärer Operator)
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **bedingte (ternäre) Operator** ist der einzige JavaScript-Operator, der drei Operanden benötigt:
eine Bedingung gefolgt von einem Fragezeichen (`?`), dann ein Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("truthy", "wahrheitsgemäß (truthy)")}} ist, gefolgt von einem Doppelpunkt (`:`), und schließlich der Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("falsy", "falsch (falsy)")}} ist.
Dieser Operator wird häufig als Alternative zu einem [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Statement verwendet.

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
  - : Ein Ausdruck, dessen Wert als Bedingung genutzt wird.
- `exprIfTrue`
  - : Ein Ausdruck, der ausgeführt wird, wenn die `condition` einen {{Glossary("truthy", "wahrheitsgemäßen (truthy)")}} Wert ergibt (einen, der `true` entspricht oder in `true` umgewandelt werden kann).
- `exprIfFalse`
  - : Ein Ausdruck, der ausgeführt wird, wenn die `condition` {{Glossary("falsy", "falsch (falsy)")}} ist (das heißt, einen Wert hat, der in `false` umgewandelt werden kann).

## Beschreibung

Neben `false` sind mögliche falsy Ausdrücke: `null`, `NaN`, `0`, der leere String (`""`) und `undefined`.
Ist `condition` einer dieser Werte, wird das Ergebnis des bedingten Ausdrucks das Ergebnis der Ausführung des Ausdrucks `exprIfFalse` sein.

## Beispiele

### Ein einfaches Beispiel

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Umgang mit null-Werten

Ein häufiges Anwendungsbeispiel ist der Umgang mit einem Wert, der `null` sein kann:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### Bedingte Verkettungen

Der ternäre Operator ist rechts-assoziativ, was bedeutet, dass er in folgender Weise "verkettet" werden kann, ähnlich einer `if … else if … else if … else`-Kette:

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
- [Koaleszenz-Operator für Nullwerte (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Lernen: Entscheidungen im Code treffen — Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden
