---
title: Bedingter (ternärer) Operator
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **bedingte (ternäre) Operator** ist der einzige JavaScript-Operator mit drei Operanden: einer Bedingung, gefolgt von einem Fragezeichen (`?`), einem Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("truthy", "truthy")}} ist, einem Doppelpunkt (`:`) und schließlich einem Ausdruck, der ausgeführt wird, wenn die Bedingung {{Glossary("falsy", "falsy")}} ist.
Dieser Operator wird häufig als Alternative zu einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung verwendet.

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
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 3 (logisches OR oder Nullish Coalescing) oder höher, dessen Wert als Bedingung verwendet wird. Neben `false` sind folgende Werte falsy: `null`, `NaN`, `0`, `0n`, die leere Zeichenfolge (`""`) und `undefined`.
- `exprIfTrue`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher, der nur ausgewertet wird, wenn `condition` {{Glossary("truthy", "truthy")}} ist.
- `exprIfFalse`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher, der nur ausgewertet wird, wenn `condition` {{Glossary("falsy", "falsy")}} ist.

### Rückgabewert

Der Wert von `exprIfTrue`, wenn `condition` truthy ist, andernfalls der Wert von `exprIfFalse`.

## Beispiele

### Ein einfaches Beispiel

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### Umgang mit Nullwerten

Eine häufige Anwendung ist der Umgang mit einem Wert, der `null` sein kann:

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### Verkettete Bedingungen

Der ternäre Operator ist rechtsassoziativ. Das bedeutet, dass er wie eine `if … else if … else if … else`-Kette folgendermaßen „verkettet“ werden kann:

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
- [Nullish-Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Lernen: Entscheidungen im Code treffen – bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
- Leitfaden zu [Ausdrücken und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)
