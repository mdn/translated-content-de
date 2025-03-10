---
title: "SyntaxError: doppeltes formales Argument x"
slug: Web/JavaScript/Reference/Errors/Duplicate_parameter
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "duplicate formal argument x" oder "duplicate argument names not allowed in this context" tritt auf, wenn eine Funktion zwei oder mehr Parameterbindungen mit demselben Namen erstellt und die Funktion keine [nicht-strikte](/de/docs/Web/JavaScript/Reference/Strict_mode) Funktion mit einfachen Parametern ist.

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

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Zwei formale Parameter mit demselben Namen zu haben, ist wahrscheinlich ein Fehler – das zweite Vorkommen würde dazu führen, dass das erste Vorkommen über den Parameternamen nicht zugänglich ist. In älteren JavaScript-Versionen war dies erlaubt. Um vorhandenen Code nicht zu beeinträchtigen, ist dies daher nur ein Fehler, wenn der Code garantiert nicht älter ist – entweder weil er im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist oder moderne Parametersyntax (wie [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter) verwendet.

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

- [Functions](/de/docs/Web/JavaScript/Reference/Functions)
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
