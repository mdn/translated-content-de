---
title: "SyntaxError: fehlender Name nach . Operator"
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlender Name nach . Operator" tritt auf, wenn es ein Problem mit der Verwendung des Punktoperators (`.`) für [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt.

## Meldung

```plain
SyntaxError: missing name after . operator (Firefox)
SyntaxError: Unexpected token '['. Expected a property name after '.'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Punktoperator (`.`) wird für [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet. Sie müssen den Namen der Eigenschaft angeben, auf die Sie zugreifen möchten. Für berechneten Eigenschaftszugriff müssen Sie möglicherweise den Zugriff von der Verwendung eines Punktes zur Verwendung von eckigen Klammern ändern. Diese ermöglichen es Ihnen, einen Ausdruck zu berechnen. Vielleicht beabsichtigten Sie eine Verkettung stattdessen? In diesem Fall ist ein Plus-Operator (`+`) erforderlich. Bitte sehen Sie sich die folgenden Beispiele an.

## Beispiele

### Eigenschaftszugriff

[Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) in JavaScript verwenden entweder den Punkt (`.`) oder eckige Klammern (`[]`), aber nicht beides. Eckige Klammern erlauben einen berechneten Eigenschaftszugriff.

```js-nolint example-bad
const obj = { foo: { bar: "baz", bar2: "baz2" } };
const i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
```

Um diesen Code zu beheben, müssen Sie das Objekt auf folgende Weise zugreifen:

```js example-good
obj.foo.bar; // "baz"
// oder alternativ
obj["foo"]["bar"]; // "baz"

// berechnete Eigenschaften erfordern eckige Klammern
obj.foo["bar" + i]; // "baz2"
// oder als Template Literal
obj.foo[`bar${i}`]; // "baz2"
```

### Eigenschaftszugriff vs. Verkettung

Wenn Sie aus einer anderen Programmiersprache (wie [PHP](/de/docs/Glossary/PHP)) kommen, ist es auch einfach, den Punktoperator (`.`) und den Verkettungsoperator (`+`) zu verwechseln.

```js-nolint example-bad
console.log("Hello" . "world");

// SyntaxError: missing name after . operator
```

Stattdessen müssen Sie ein Pluszeichen zur Verkettung verwenden:

```js example-good
console.log("Hello" + "World");
```

## Siehe auch

- [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
