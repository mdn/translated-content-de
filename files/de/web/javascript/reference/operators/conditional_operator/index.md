---
title: Conditional (ternary) operator
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Operators")}}

Der **bedingte (ternäre) Operator** ist der einzige JavaScript-Operator, der drei Operanden benötigt: eine Bedingung, gefolgt von einem Fragezeichen (`?`), dann einem Ausdruck, der ausgeführt wird, wenn die Bedingung [wahrhaftig](/de/docs/Glossary/truthy) ist, gefolgt von einem Doppelpunkt (`:`), und schließlich der Ausdruck, der ausgeführt wird, wenn die Bedingung [falsch](/de/docs/Glossary/falsy) ist. Dieser Operator wird häufig als Alternative zu einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung verwendet.

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## Syntax

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### Parameter

- `condition`
  - : Ein Ausdruck, dessen Wert als Bedingung verwendet wird.
- `exprIfTrue`
  - : Ein Ausdruck, der ausgeführt wird, wenn `condition` zu einem [wahrhaftigen](/de/docs/Glossary/truthy) Wert evaluiert (einem, der gleich `true` ist oder zu `true` konvertiert werden kann).
- `exprIfFalse`
  - : Ein Ausdruck, der ausgeführt wird, wenn `condition` [falsch](/de/docs/Glossary/falsy) ist (das heißt, einen Wert hat, der zu `false` konvertiert werden kann).

## Beschreibung

Neben `false` sind mögliche falsche Ausdrücke: `null`, `NaN`, `0`, der leere String (`""`) und `undefined`. Wenn `condition` einer dieser Werte ist, wird das Ergebnis des bedingten Ausdrucks das Ergebnis der Ausführung des Ausdrucks `exprIfFalse` sein.

## Beispiele

### Ein einfaches Beispiel

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Umgang mit null-Werten

Eine häufige Anwendung ist der Umgang mit einem Wert, der möglicherweise `null` ist:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### Bedingte Verkettungen

Der ternäre Operator ist rechtsassoziativ, was bedeutet, dass er in der folgenden Weise "verkettet" werden kann, ähnlich einer `if … else if … else if … else`-Kette:

```js-nolint
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}
```

Dies ist äquivalent zur folgenden [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Kette.

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
- [Entscheidungen in Ihrem Code treffen — Bedingungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden
