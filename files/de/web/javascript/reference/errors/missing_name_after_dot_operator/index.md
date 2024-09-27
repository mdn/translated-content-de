---
title: "SyntaxError: missing name after . operator"
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing name after . operator" tritt auf, wenn ein Problem mit der Verwendung des Punktoperators (`.`) für den [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) besteht.

## Meldung

```plain
SyntaxError: missing name after . operator (Firefox)
SyntaxError: Unexpected token '['. Expected a property name after '.'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Der Punktoperator (`.`) wird für den [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet. Sie müssen den Namen der Eigenschaft angeben, auf die Sie zugreifen möchten. Für den berechneten Eigenschaftszugriff müssen Sie möglicherweise Ihren Zugriff von der Punktnotation auf die Verwendung von eckigen Klammern ändern. Diese erlauben es Ihnen, einen Ausdruck zu berechnen. Möglicherweise wollten Sie stattdessen eine Verkettung vornehmen? In diesem Fall wird ein Plus-Operator (`+`) benötigt. Bitte sehen Sie sich die Beispiele unten an.

## Beispiele

### Eigenschaftszugriff

[Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
in JavaScript verwenden entweder den Punkt (.) oder eckige Klammern (`[]`), aber nicht beides.
Eckige Klammern ermöglichen den berechneten Eigenschaftszugriff.

```js-nolint example-bad
const obj = { foo: { bar: "baz", bar2: "baz2" } };
const i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
```

Um diesen Code zu korrigieren, müssen Sie auf das Objekt folgendermaßen zugreifen:

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

Wenn Sie von einer anderen Programmiersprache kommen (wie [PHP](/de/docs/Glossary/PHP)), ist es auch leicht, den Punktoperator (`.`) und den Verkettungsoperator (`+`) zu verwechseln.

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
