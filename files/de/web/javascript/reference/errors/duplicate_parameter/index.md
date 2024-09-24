---
title: "SyntaxError: doppeltes formales Argument x"
slug: Web/JavaScript/Reference/Errors/Duplicate_parameter
l10n:
  sourceCommit: 38bd4d88564b9a1539fb4d1b4ba6fa04b0a10063
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "doppeltes formales Argument x" oder "doppelte Argumentnamen sind in diesem Kontext nicht erlaubt" tritt auf, wenn eine Funktion zwei oder mehr Parameter {{Glossary("binding", "Bindungen")}} mit demselben Namen erstellt, und die Funktion ist keine [nicht-strikte](/de/docs/Web/JavaScript/Reference/Strict_mode) Funktion mit nur einfachen Parametern.

## Nachricht

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

Zwei formale Parameter mit demselben Namen zu haben, ist wahrscheinlich ein Fehler — das zweite Vorkommen würde dazu führen, dass das erste Vorkommen über den Parameternamen nicht erreichbar ist. In altem JavaScript war dies erlaubt. Daher ist dies nur dann ein Fehler, wenn der Code garantiert nicht älteren Ursprungs ist — entweder weil er im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist oder moderne Parametersyntax verwendet ([rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter).

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
"use strict";

function add(x, x) {
  // Wie können Sie auf beide "x"-Parameter zugreifen?
  // SyntaxError: duplicate formal argument x
}
```

```js-nolint example-bad
function doSomething(name, { name }) {
  // Wie können Sie auf beide "name"-Parameter zugreifen?
  // SyntaxError: duplicate argument names not allowed in this context
}
```

### Gültige Fälle

```js example-good
function doSomething(operationName, { name: userName }) {
  // Sie können sowohl auf "operationName" als auch auf "userName"-Parameter zugreifen.
}

function doSomething(name, user) {
  // Sie können sowohl auf "name" als auch auf "user.name"-Parameter zugreifen.
}
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
