---
title: "SyntaxError: doppeltes formales Argument x"
slug: Web/JavaScript/Reference/Errors/Duplicate_parameter
l10n:
  sourceCommit: 38bd4d88564b9a1539fb4d1b4ba6fa04b0a10063
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "duplicate formal argument x" oder "duplicate argument names not allowed in this context" tritt auf, wenn eine Funktion zwei oder mehr Parameter[bindings](/de/docs/Glossary/binding) mit demselben Namen erstellt und die Funktion keine [non-strict](/de/docs/Web/JavaScript/Reference/Strict_mode) Funktion mit nur einfachen Parametern ist.

## Meldung

```plain
SyntaxError: Duplicate parameter name not allowed in this context (V8-based)
SyntaxError: duplicate formal argument x (Firefox)
SyntaxError: duplicate argument names not allowed in this context (Firefox)
SyntaxError: Cannot declare a parameter named 'x' in strict mode as it has already been declared. (Safari)
SyntaxError: Duplicate parameter 'x' not allowed in function with default parameter values. (Safari)
SyntaxError: Duplicate parameter 'x' not allowed in function with a rest parameter. (Safari)
SyntaxError: Duplicate parameter 'x' not allowed in function with destructuring parameters. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Zwei formale Parameter mit demselben Namen zu haben, ist wahrscheinlich ein Fehler - das zweite Vorkommen würde das erste Vorkommen über den Parameternamen unzugänglich machen. In älterem JavaScript war dies erlaubt. Um bestehenden Code nicht zu brechen, ist dies nur ein Fehler, wenn der Code garantiert nicht alt ist - entweder weil er sich im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet oder moderne Parametersyntax verwendet ([rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter).

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
"use strict";

function add(x, x) {
  // How can you access both "x" parameters?
  // SyntaxError: duplicate formal argument x
}
```

```js-nolint example-bad
function doSomething(name, { name }) {
  // How can you access both "name" parameters?
  // SyntaxError: duplicate argument names not allowed in this context
}
```

### Gültige Fälle

```js example-good
function doSomething(operationName, { name: userName }) {
  // You can access both "operationName" and "userName" parameters.
}

function doSomething(name, user) {
  // You can access both "name" and "user.name" parameters.
}
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
