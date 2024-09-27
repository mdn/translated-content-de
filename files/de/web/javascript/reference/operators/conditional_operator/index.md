---
title: Bedingter (ternärer) Operator
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Operators")}}

Der **bedingte (ternäre) Operator** ist der einzige JavaScript-Operator, der drei Operanden nimmt:
eine Bedingung, gefolgt von einem Fragezeichen (`?`), dann ein Ausdruck, der ausgeführt wird, wenn die Bedingung [wahrheitsgemäß](/de/docs/Glossary/truthy) ist, gefolgt von einem Doppelpunkt (`:`), und schließlich der Ausdruck, der ausgeführt wird, wenn die Bedingung [falsch](/de/docs/Glossary/falsy) ist.
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
  - : Ein Ausdruck, der ausgeführt wird, wenn die `condition` zu einem [wahrheitsgemäßen](/de/docs/Glossary/truthy) Wert ausgewertet wird (einer, der gleich `true` ist oder in `true` umgewandelt werden kann).
- `exprIfFalse`
  - : Ein Ausdruck, der ausgeführt wird, wenn die `condition` [falsch](/de/docs/Glossary/falsy) ist (d.h. einen Wert hat, der in `false` umgewandelt werden kann).

## Beschreibung

Neben `false` sind mögliche falsche Ausdrücke: `null`, `NaN`, `0`, der leere String (`""`) und `undefined`.
Wenn `condition` einer davon ist, wird das Ergebnis des bedingten Ausdrucks das Ergebnis der Ausführung des Ausdrucks `exprIfFalse` sein.

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
- [Entscheidungen in Ihrem Code treffen — Bedingungsanweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden
