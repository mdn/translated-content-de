---
title: "SyntaxError: missing name after . operator"
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing name after . operator" tritt auf, wenn es ein Problem mit der Verwendung des Punktoperators (`.`) für den [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gibt.

## Nachricht

```plain
SyntaxError: missing name after . operator (Firefox)
SyntaxError: Unexpected token '['. Expected a property name after '.'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Punktoperator (`.`) wird für den [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet. Sie müssen den Namen der Eigenschaft angeben, auf die Sie zugreifen möchten. Für berechneten Eigenschaftszugriff müssen Sie möglicherweise Ihren Zugriff von der Verwendung eines Punktes zu eckigen Klammern ändern. Diese ermöglichen es Ihnen, einen Ausdruck zu berechnen. Vielleicht beabsichtigten Sie stattdessen eine Verkettung? In diesem Fall wird ein Plus-Operator (`+`) benötigt. Bitte sehen Sie sich die nachstehenden Beispiele an.

## Beispiele

### Eigenschaftszugriff

[Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) in JavaScript verwenden entweder den Punkt (`.`) oder eckige Klammern (`[]`), jedoch nicht beides. Eckige Klammern ermöglichen den berechneten Eigenschaftszugriff.

```js-nolint example-bad
const obj = { foo: { bar: "baz", bar2: "baz2" } };
const i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
```

Um diesen Code zu korrigieren, müssen Sie auf das Objekt wie folgt zugreifen:

```js example-good
obj.foo.bar; // "baz"
// or alternatively
obj["foo"]["bar"]; // "baz"

// computed properties require square brackets
obj.foo["bar" + i]; // "baz2"
// or as template literal
obj.foo[`bar${i}`]; // "baz2"
```

### Eigenschaftszugriff vs. Verkettung

Wenn Sie von einer anderen Programmiersprache (wie {{Glossary("PHP", "PHP")}}) kommen, ist es auch leicht, den Punktoperator (`.`) und den Verkettungsoperator (`+`) zu verwechseln.

```js-nolint example-bad
console.log("Hello" . "world");

// SyntaxError: missing name after . operator
```

Stattdessen müssen Sie ein Pluszeichen für die Verkettung verwenden:

```js example-good
console.log("Hello" + "World");
```

## Siehe auch

- [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
