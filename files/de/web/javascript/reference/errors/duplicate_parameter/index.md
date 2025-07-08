---
title: "SyntaxError: doppeltes formales Argument x"
slug: Web/JavaScript/Reference/Errors/Duplicate_parameter
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "doppeltes formales Argument x" oder "doppelte Argumentnamen sind in diesem Kontext nicht erlaubt" tritt auf, wenn eine Funktion zwei oder mehr Parameter-{{Glossary("binding", "Bindings")}} mit demselben Namen erstellt und die Funktion keine [nicht-strikte](/de/docs/Web/JavaScript/Reference/Strict_mode) Funktion mit nur einfachen Parametern ist.

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

## Was ist schiefgegangen?

Zwei formale Parameter mit demselben Namen zu haben, ist wahrscheinlich ein Fehler – das zweite Auftreten würde dazu führen, dass das erste Auftreten über den Parameternamen nicht zugänglich ist. In älterem JavaScript war dies erlaubt. Um bestehenden Code nicht zu brechen, ist dies nur dann ein Fehler, wenn der Code garantiert nicht veraltet ist – entweder weil er im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist oder weil er moderne Parametersyntax verwendet ([Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter).

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
